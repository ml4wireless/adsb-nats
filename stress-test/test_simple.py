#!/usr/bin/env python3
import os
import asyncio
import nats

import sys
import time
import os.path
import argparse

import uuid

from utils import *

nats_host = os.getenv("NATS_HOST", "localhost:30303")

def utf8len(s):
    return len(s.encode('utf-8'))

async def consumer(q, size_of_each_message):
    printStuff("begin")
    while True:
        sub = None
        nc = None
        reporter_id = str(uuid.UUID(int=uuid.getnode()))
        print(f"reporter is {reporter_id}")
        try:
            print("Connect to NATS")
            token = os.getenv("NATS_TOKEN")
            if not token:
                print(
                    "You need to set the TOKEN environment variable to your NATS token")
                sys.exit(1)

            nc = await nats.connect(f"nats://{token}@{nats_host}")
            print("Create jetstream")
            js = nc.jetstream()
            print("Create stream")
            start = time.time()
            
            await js.add_stream(name="stress_test", subjects=["test.>"])
            with open("input.txt") as f:
                test_msg = f.read()[:1024]
                test_msg = test_msg * size_of_each_message
                test_msg_size = utf8len(test_msg)

            print(f"message size: {test_msg_size:.2f} bytes")

            while True:
                count = await q.get()
                if count % 10000 == 1:
                    cur_time = time.time()
                    speed = count / (cur_time - start)
                    print(f"{speed:.2f} it / s")
                msg = str(count) + "\n" + test_msg
                await nc.publish("test_counter", msg.encode())
                sys.stdout.flush()
                q.task_done()
        finally:
            cur_time = time.time()
            speed = count / (cur_time - start)
            print(f"{speed:.2f} it / s")
            if sub:
                await sub.unsubscribe()
            if nc:
                pass # await nc.drain()

async def getdump(q, num_messages):
    # Read and parse ADS-B message reports
    counter = 0
    try:
        while True:
            # printStuff("producer")
            await q.put((counter))
            counter += 1
            if counter >= num_messages:
                return
    finally:
        pass

async def main(num_messages, size_of_each_message):
    q = asyncio.Queue()
    producer = asyncio.create_task(getdump(q, num_messages))
    await asyncio.gather(producer)
    consumer_coroutine = asyncio.create_task(consumer(q, size_of_each_message))
    # await asyncio.gather(consumer_coroutine)
    await q.join()


if __name__ == '__main__':
    print("time stamp is ", timestamp())
    # Create a parser object
    parser = argparse.ArgumentParser()

    # Add an argument with a short option "-a" and a long option "--argument"
    parser.add_argument('-n', '--number', default=100000, type=int, help='number of messages')
    parser.add_argument('-s', '--size', default=10, type=int, help='size of each message')

    # Parse the arguments
    args = parser.parse_args()
    num_messages, size_of_each_message = args.number, args.size

    asyncio.run(main(num_messages, size_of_each_message))