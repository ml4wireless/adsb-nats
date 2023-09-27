
import asyncio
import json
from nats.errors import TimeoutError
from json import JSONDecodeError
import os
import sys
import uuid
from elasticsearch import Elasticsearch
import ssl
import nats
from nats.js.api import ConsumerConfig, AckPolicy, DeliverPolicy
import urllib3

urllib3.disable_warnings()


async def output_stream(quit_event, sub, topic, es):
    while not quit_event.is_set():
        try:
            msgs = await sub.fetch(batch=30, timeout=10)
            print(
                f"recieved {len(msgs)} messages from topic {topic}", flush=True)
            for msg in msgs:
                try:
                    data = msg.data.decode("utf-8")
                    jdata = json.loads(data)
                    jdata["time"] = jdata.get("time")[:-6]
                    es.index(index=jdata["time"][:10], document=jdata)
                except (JSONDecodeError, AttributeError):
                    print("An unexcepted JSON Format")
                    print("Error data is:", data)
                    await msg.ack()
            if len(msgs) > 0:
                await msgs[-1].ack()
        except TimeoutError:
            pass


async def output_reporter(quit_event, sub, es):
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg(timeout=10)
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            print(f'get reporter at {jdata.get("reporter")}')
            jdata["time"] = jdata.get("time")[:19]
            resp = es.index(index="client-status", document=jdata)
            await msg.ack()
        except TimeoutError:
            pass
        except (JSONDecodeError, AttributeError, TypeError):
            print("An unexcepted JSON Format")
            print("Error data is:", data)


async def deduplicate():
    pass


async def get_annotated_stream(js, quit_event, es):
    consumer_config = ConsumerConfig(
        deliver_policy=DeliverPolicy.ALL,
        ack_policy=AckPolicy.EXPLICIT,
        max_ack_pending=-1
    )
    extra_sub = await js.subscribe(f"plane.reporter", durable=f"durable-reporter-getter", config=consumer_config)
    # Use durable consumer to begin stream consumption from previous location in event of disconnection
    # return a subscription
    sub_ident = await js.pull_subscribe(f"plane.ident.annotated", durable=f"durable-annotated-plane-ident", config=consumer_config)
    sub_loc = await js.pull_subscribe(f"plane.loc.annotated", durable=f"durable-annotated-plane-loc", config=consumer_config)
    try:
        await asyncio.gather(output_stream(quit_event, sub_ident, "plane.ident.annotated", es),
                             output_stream(
                                 quit_event, sub_loc, "plane.loc.annotated", es),
                             output_reporter(quit_event, extra_sub, es))
    finally:
        await sub_ident.unsubscribe()
        await sub_loc.unsubscribe()


async def main():
    quit_event = asyncio.Event()
    token = os.getenv("TOKEN", None)
    nats_host = os.getenv("NATS_HOST", None)
    elastic_host = os.getenv("ELASTIC_HOST", None)

    if not token or not nats_host or not elastic_host:
        print("One of the following environmental variable is missing")
        print("TOKEN | NATS_HOST | ELASTIC_HOST")
        sys.exit(1)

    print("Connecting to NATS...", flush=True)
    nc = await nats.connect(f"nats://{token}@{nats_host}")
    print("NATS is connceted successfully", flush=True)

    print("Creating JetStream if not exists...", flush=True)
    js = nc.jetstream()
    print("JetStream is connected successfully...", flush=True)

    print("Connecting to Elasticsearch...", flush=True)
    es = Elasticsearch(
        [f"http://{elastic_host}:9200"],
        request_timeout=30,
        max_retries=10
    )
    print("Elasticsearch is connected successfully", flush=True)

    # Adding a stream is an idempotent function
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
