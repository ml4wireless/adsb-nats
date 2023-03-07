# Annotate ADS-B detections in NATS stream with additional information from FAA database

import asyncio
import json
import nats
from nats.errors import TimeoutError
import os
import pandas as pd
import sys
import uuid


nats_host = os.getenv("NATS_HOST", "localhost:30303")


def load_dbs(db_dir="./"):
    # Load master table
    master_df = pd.read_csv(os.path.join(db_dir, "MASTER.txt"), dtype={"TYPE AIRCRAFT": 'str'})
    master_df = master_df.set_index("MODE S CODE HEX")
    master_df.index = master_df.index.str.strip()
    # Remove extra whitespace
    for c in master_df.columns:
        if master_df[c].dtype == 'object':
            master_df[c] = master_df[c].str.strip()
    # Load aircraft type table
    aircraft_df = pd.read_csv(os.path.join(db_dir, "ACFTREF.txt"))
    aircraft_df = aircraft_df.set_index("CODE")
    # Remove extra whitespace
    for c in aircraft_df.columns:
        if aircraft_df[c].dtype == 'object':
            aircraft_df[c] = aircraft_df[c].str.strip()
    return master_df, aircraft_df


def lookup_icao(icao, master_df, aircraft_df):
    try:
        row = master_df.loc[icao.upper()]
        acft_info = aircraft_df.loc[row["MFR MDL CODE"]]
        return {
            "icao": icao.upper(),
            "manufacturer": acft_info["MFR"],
            "aircraft": acft_info["MODEL"],
            "n-number": "N" + row["N-NUMBER"],
            "registered": row["NAME"]
        }
    except KeyError:
        # ICAO couldn't be found
        return {
            "icao": icao.upper(),
            "manufacturer": "unknown",
            "aircraft": "unknown",
            "n-number": "unknown",
            "registered": "unknown"
        }


async def annotate(q, quit_event, dbs, sub, topic):
    master = dbs[0]
    aircraft = dbs[1]
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg()
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            # Ack msg before potentially lengthy db lookup, but after successful decode
            await msg.ack()
            # Lookup ICAO
            jdata.update(lookup_icao(jdata["ICAO"], master, aircraft))
            print(f'{msg.subject}: ICAO {jdata["ICAO"]} annotated')
            await q.put((msg.subject, jdata))
        except TimeoutError:
            print(f"Receive timeout on {topic}")
            # break


async def loc_ident_watcher(js, q, quit_event, dbs):
    subs = []
    topics = ["ident", "loc"]
    for topic in topics:
        # Use durable consumer to begin stream consumption from previous location
        # in event of disconnection
        sub = await js.subscribe(f"plane.{topic}", durable=f"durable-{topic}-annotator", ordered_consumer=False)
        subs.append(sub)
    try:
        await asyncio.gather(annotate(q, quit_event, dbs, subs[0], topics[0]),
                             annotate(q, quit_event, dbs, subs[1], topics[1]))
    finally:
        for sub in subs:
            await sub.unsubscribe()


async def publish_annotations(js, q, quit_event):
    annotator_id = str(uuid.UUID(int=uuid.getnode()))
    print(f"annotator is {annotator_id}")
    while not quit_event.is_set():
        try:
            subject, data = await q.get()
            data["annotator"] = annotator_id
            sdata = json.dumps(data)
            ack = await js.publish(subject + ".annotated", sdata.encode())
            print(f'Published annotation for ICAO {data["ICAO"]}, ack seq {ack.seq}')
            q.task_done()
        except Exception as e:
            print("Publish got exception:", e)
            quit_event.set()
            raise e


async def main(master, aircraft):
    q = asyncio.Queue()
    quit_event = asyncio.Event()
    token = os.getenv("TOKEN")
    if not token:
        print("You need to define TOKEN")
        sys.exit(1)
    print("Connect to NATS", f"nats://{token}@{nats_host}")
    nc = await nats.connect(f"nats://{token}@{nats_host}")

    # Create JetStream context in case it's not defined
    print("Create JetStream")
    js = nc.jetstream()
    await js.add_stream(name="planes", subjects=["plane.>"])

    try:
        # Optionally increase parallelization by adding copies of the functions to the gather
        await asyncio.gather(loc_ident_watcher(js, q, quit_event, (master, aircraft)),
                             publish_annotations(js, q, quit_event))
    finally:
        print("Draining NATS connection")
        quit_event.set()
        await asyncio.sleep(0.25)
        await nc.close()


if __name__ == "__main__":
    # master, aircraft = load_dbs()
    if len(sys.argv) == 1:
        master, aircraft = load_dbs("./aircraft-annotator")
    else:
        master, aircraft = load_dbs(sys.argv[1])
    try:
        asyncio.run(main(master, aircraft))
    except KeyboardInterrupt:
        sys.exit(0)
