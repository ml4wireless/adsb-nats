
import asyncio
import json
import nats
from nats.errors import TimeoutError
import os
import sys
import uuid

nats_host = os.getenv("NATS_HOST", "localhost:30303")

async def output_stream(quit_event, sub, topic):
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg()
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            print(f'{msg.subject}: get annotated data ICAO {jdata["ICAO"]} ')
            path = "annotated_data"
            if not os.path.exists(path):
                os.makedirs(path)
            out_file = open(f'annotated_data/annotated_{jdata["ICAO"]}.json', "w")
            json.dump(jdata, out_file, indent = 4)
            out_file.close()
        except TimeoutError:
            print(f"Receive timeout on {topic}")
    

async def get_annotated_stream(js, quit_event):
    subs = []
    topics = ["ident", "loc"]    
    for topic in topics:
        # Use durable consumer to begin stream consumption from previous location
        # in event of disconnection
        # return a subscribtion
        sub = await js.subscribe(f"plane.{topic}.annotated", durable=f"durable-annotated-{topic}-getter", ordered_consumer=False)
        subs.append(sub)
    try:
        await asyncio.gather(output_stream(quit_event, subs[0], topics[0]),
                             output_stream(quit_event, subs[1], topics[1]))
    finally:
        for sub in subs:
            await sub.unsubscribe()


async def main():
    quit_event = asyncio.Event()
    token = os.getenv("TOKEN")
    if not token:
        print("You need to define TOKEN")
        sys.exit(1)
    print("Connect to NATS")
    nc = await nats.connect(f"nats://{token}@{nats_host}")
    print("Create JetStream if not exists")
    js = nc.jetstream()
    await js.add_stream(name="planes", subjects=["plane.>"])
    try:
        # Optionally increase parallelization by adding copies of the functions to the gather
        await get_annotated_stream(js, quit_event)
    finally:
        print("Draining NATS connection")
        quit_event.set()
        await asyncio.sleep(0.25)
        await nc.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        sys.exit(0)