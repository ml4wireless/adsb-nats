#!/usr/bin/env python3
import os
import asyncio
import nats

import sys
import time
import os.path

import uuid

from utils import *

nats_host = os.getenv("NATS_HOST", "localhost:30303")

async def consumer(q):
    printStuff("begin")
    while True:
        sub = None
        nc = None
        reporter_id = str(uuid.UUID(int=uuid.getnode()))
        print(f"reporter is {reporter_id}")
        try:
            print("Connect to NATS")
            token = os.getenv("TOKEN")
            if not token:
                print(
                    "You need to set the TOKEN environment variable to your NATS token")
                sys.exit(1)

            nc = await nats.connect(f"nats://{token}@{nats_host}")
            print("Create jetstream")
            js = nc.jetstream()
            print("Create stream")
            start = time.time()
            # await js.add_stream(name="stress_test", subjects=["test.>"])
            with open("input.txt") as f:
                test_msg = f.read()

            while True:
                count = await q.get()
                if count % 10000 == 0:
                    cur_time = time.time()
                    speed = count / (cur_time - start)
                    print(f"{speed:.2f} it / s")
                msg = str(count) + "\n" + test_msg
                await nc.publish("test_counter", msg.encode())
                sys.stdout.flush()
                q.task_done()
        finally:
            if sub:
                await sub.unsubscribe()
            if nc:
                await nc.drain()

async def getdump(q):
    # Read and parse ADS-B message reports
    counter = 0
    try:
        while True:
            # printStuff("producer")
            await q.put((counter))
            counter += 1
            if counter >= 100000:
                return
    finally:
        pass

async def main():
    q = asyncio.Queue()
    producer = asyncio.create_task(getdump(q))
    await asyncio.gather(producer)
    consumer_coroutine = asyncio.create_task(consumer(q))
    # await asyncio.gather(consumer_coroutine)
    await q.join()


if __name__ == '__main__':
    print("time stamp is ", timestamp())
    asyncio.run(main())