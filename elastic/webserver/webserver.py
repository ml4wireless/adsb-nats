
import asyncio
import json
import nats
from nats.errors import TimeoutError
from json import JSONDecodeError
import os
import sys
import uuid
from elasticsearch import Elasticsearch
import ssl 

async def output_stream(quit_event, sub, topic, es):
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg()
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            print(f'{msg.subject}: get annotated data at {jdata.get("time")}')
            jdata["time"] = jdata.get("time")[:-6]
            resp = es.index(index=jdata["time"][:10], document=jdata)
            await msg.ack()
        except TimeoutError:
            pass
        except (JSONDecodeError,AttributeError):
            print("An unexcepted JSON Format")
            print("Error data is:", data)
    
async def output_reporter(quit_event, sub, es):
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg()
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            print(f'get reporter at {jdata.get("reporter")}')
            jdata["time"] = jdata.get("time")[:19]
            resp = es.index(index="client-status", document=jdata)
            await msg.ack()
        except TimeoutError:
            pass
        except (JSONDecodeError,AttributeError,TypeError):
            print("An unexcepted JSON Format")
            print("Error data is:", data)


async def get_annotated_stream(js, quit_event, es):
    subs = []
    extra_sub = await js.subscribe(f"plane.reporter", durable=f"durable-reporter-getter", ordered_consumer=False)
    topics = ["ident", "loc"]    
    for topic in topics:
        # Use durable consumer to begin stream consumption from previous location in event of disconnection
        # return a subscribtion
        sub = await js.subscribe(f"plane.{topic}.annotated", durable=f"durable-annotated-{topic}-getter", ordered_consumer=False)
        subs.append(sub)
    try:
        await asyncio.gather(output_stream(quit_event, subs[0], topics[0], es),
                             output_stream(quit_event, subs[1], topics[1], es),
                             output_reporter(quit_event, extra_sub, es))
    finally:
        for sub in subs:
            await sub.unsubscribe()


async def main():
    quit_event = asyncio.Event()
    token = os.getenv("TOKEN", None)
    nats_host = os.getenv("NATS_HOST", None)
    elastic_host = os.getenv("ELASTIC_HOST", None)
    elastic_username = os.getenv("ELASTIC_USERNAME", None)
    elastic_password = os.getenv("ELASTIC_PASSWORD", None)
    elastic_cert = os.getenv("ELASTIC_CERT", None)
 
    if not token or not nats_host or not elastic_host or not elastic_username or not elastic_password or not elastic_cert :
        print("One of the following environmental variable is missing")
        print("TOKEN | NATS_HOST | ELASTIC_HOST | ELASTIC_USERNAME | ELASTIC_PASSWORD | ELASTIC_CERT")
        sys.exit(1)

    print("Connecting to NATS...", flush=True)
    nc = await nats.connect(f"nats://{token}@{nats_host}")
    print("NATS is connceted successfully", flush=True)

    print("Creating JetStream if not exists...", flush=True)
    js = nc.jetstream()
    print("JetStream is connected successfully...", flush=True)

    print("Connecting to Elasticsearch...", flush=True)
    ssl_context = ssl.SSLContext(
        cafile=elastic_cert
    )
    es = Elasticsearch(
        [f"https://{elastic_host}:9200"],
        http_auth=(elastic_username, elastic_password),
        ssl_context=ssl_context,
        request_timeout=30, 
        max_retries=10,
        verify_certs = False
    )
    print("Elasticsearch is connected successfully", flush=True)

    # Adding a stream is an idempotent function
    await js.add_stream(name="planes", subjects=["plane.>"], max_msgs=10000000)
    try:
        # Optionally increase parallelization by adding copies of the functions to the gather
        await get_annotated_stream(js, quit_event, es)
    finally:
        print("Draining NATS connection", flush=True)
        quit_event.set()
        await asyncio.sleep(0.25)
        await nc.close()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        sys.exit(0)