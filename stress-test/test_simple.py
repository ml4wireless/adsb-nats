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
import random
from elasticsearch import Elasticsearch
from elasticsearch.exceptions import ConnectionError
from datetime import datetime
import pytz
from time import sleep
import statistics
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning)

from utils import *

nats_host = os.getenv("NATS_HOST", "localhost:30303")

def utf8len(s):
    return len(s.encode('utf-8'))

def fixed_length_string(input_string, fixed_length):
    if len(input_string) >= fixed_length:
        return input_string[:fixed_length]
    else:
        repeat_times = (fixed_length // len(input_string)) + 1
        repeated_string = input_string * repeat_times
        return repeated_string[:fixed_length]
    
start_time = time.time()

async def consumer(q, size_of_each_message, num_messages):
    printStuff("begin")
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
            test_msg = fixed_length_string(f.read(), size_of_each_message)
            test_msg_size = utf8len(test_msg)

        print(f"message size: {test_msg_size:.2f} bytes")
        speeds = []
        count = 0
        while count < num_messages:
            count = await q.get()
            if count % 100 == 0 and count != 0:
                cur_time = time.time()
                speed = count / (cur_time - start_time)
                print(f"Count: {count} Speed: {speed:.2f} it / s")
                speeds.append(speed)
            msg = str(count) + "\n" + test_msg
            await nc.publish("test_counter", msg.encode())
            sys.stdout.flush()
            q.task_done()
    finally:
        mean_speeds, std_speeds = statistics.mean(speeds), statistics.stdev(speeds)
        print(f"Speeds: mean: {mean_speeds} Standard Deviation: {std_speeds}")
        if sub:
            await sub.unsubscribe()
        if nc:
            pass # await nc.drain()

async def getdump(q, num_messages, num_messages_per_second):
    # Read and parse ADS-B message reports
    counter = 0
    try:
        while True:
            # printStuff("producer")
            while True:
                await q.put((counter))
                counter += 1
                if counter % num_messages_per_second == 0:
                    break
            await asyncio.sleep(1)
            if counter >= num_messages + 10:
                return
    finally:
        pass

async def main(num_messages, size_of_each_message, num_messages_per_second):
    q = asyncio.Queue()
    producer_coroutine = asyncio.create_task(getdump(q, num_messages, num_messages_per_second))
    consumer_coroutine = asyncio.create_task(consumer(q, size_of_each_message, num_messages))
    await consumer_coroutine
    await producer_coroutine
    # await asyncio.gather(consumer_coroutine)
    # await q.join()


if __name__ == '__main__':
    print("time stamp is ", timestamp())
    # Create a parser object
    parser = argparse.ArgumentParser()

    # Add an argument with a short option "-a" and a long option "--argument"
    parser.add_argument('-n', '--number', default=100000, type=int, help='number of messages')
    parser.add_argument('-s', '--size', default=10, type=int, help='size of each message')
    parser.add_argument('-p', '--speed', default=200, type=int, help='number of messages per second')

    # Parse the arguments
    args = parser.parse_args()
    num_messages, size_of_each_message, num_messages_per_second = args.number, args.size, args.speed

    asyncio.run(main(num_messages, size_of_each_message, num_messages_per_second))