#!/usr/bin/env python3
import os
import asyncio
import nats

import sys
import time
import os.path
import argparse
import json
from nats.js.errors import APIError
import ssl
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

def utf8len(s):
    return len(s.encode('utf-8'))

def get_utc_time(time = None):
    # Get the current local time
    if not time:
        time = datetime.now()

    # Convert the local time to UTC time
    utc_time = time.astimezone(pytz.utc)

    # Format the UTC time string as "YYYY-MM-DDTHH:MM:SS"
    time_str = utc_time.strftime("%Y-%m-%dT%H:%M:%S")
    return time_str


nats_host = os.getenv("NATS_HOST", "localhost:30303")

elastic_host = os.getenv("ELASTIC_HOST", None)
elastic_username = os.getenv("ELASTIC_USERNAME", None)
elastic_password = os.getenv("ELASTIC_PASSWORD", None)
elastic_cert = os.getenv("ELASTIC_CERT", None)

if not elastic_host or not elastic_username or not elastic_password or not elastic_cert :
    print("One of the following environmental variable is missing")
    print("ELASTIC_HOST | ELASTIC_USERNAME | ELASTIC_PASSWORD | ELASTIC_CERT")
    sys.exit(1)

ssl_context = ssl.SSLContext(
    cafile=elastic_cert
)

start = datetime.now()
start_time = time.time()

es = Elasticsearch(
    [f"https://{elastic_host}:9200"],
    # SSL 
    http_auth=(elastic_username, elastic_password),
    ssl_context=ssl_context,
    verify_certs = False,
    ssl_show_warn=False,
    # Request    
    request_timeout=30, 
    max_retries=10,
    retry_on_timeout=True,
    # Periodic Sniffing
    sniff_on_connection_fail=True,
    sniffer_timeout = 60,
    sniff_timeout=30
)

if es.ping():
    print("Connected to Elasticsearch", flush=True)
else:
    print("Could not connect to Elasticsearch", flush=True)

def get_stream():
    start_date = get_utc_time(start)
    end_date = '9999-12-31T23:59:59'
    if start_date[10]==' ':
        start_date[10]='T'
    if end_date[10]==' ':
        end_date[10]='T'
    query = {
        "query": {
            "bool": {
                "must": [   
                    {
                        "match": {
                            "ICAO": "TEST-shanghai"
                        }
                    },
                    {
                        "range": {
                            "time": {
                            # "time_zone": "+01:00",        
                                "gte": start_date, 
                                "lte": end_date                
                            }
                        }
                    }
                ]
            }
        }
    }
    try:
        resp = es.search(index="2023-*-*", body=query, size=2000000)
    except Exception as error:
        print(error)
        print("Connection lost, reconnecting...")
        connect(es)
        resp = es.search(index="2023-*-*", body=query, size=2000000)
    return resp['hits']['hits']

async def consumer(q, num_messages):
    printStuff("begin")
    sub = None
    nc = None
    count = 0
    reporter_id = "test-" + str(uuid.UUID(int=uuid.getnode()))
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
        
        # Create stream if needed
        streams = await js.streams_info()
        stream_names = []
        for si in streams:
            stream_names.append(si.config.name)
        logmsg(f"Existing streams: {stream_names}")
        try:
            logmsg("Create stream")
            await js.add_stream(name="planes", subjects=["plane.>"], max_msgs=1000000, max_bytes=1024*1024*1024)
        except APIError as e:
            logmsg("add_stream('planes') failed with error:")
            logmsg(e)

        speeds = []

        while count < num_messages:
            count = await q.get()
            test_msg = json.dumps({
                    'reporter': reporter_id,
                    'time': timestamp(),
                    "ICAO": "TEST-shanghai",
                    "feet": count,
                    "lat": 31.224361 + random.random() - 0.5,
                    "lon": 121.469170+ random.random() - 0.5})
            if count % 100 == 0 and count != 0:
                cur_time = time.time()
                speed = count / (cur_time - start_time)
                print(f"Count: {count} Speed: {speed:.2f} it / s")
                speeds.append(speed)
            msg = test_msg
            await nc.publish("plane.loc", msg.encode())
            sys.stdout.flush()
            q.task_done()
    finally:
        # print(speeds)
        mean_speeds, std_speeds = statistics.mean(speeds), statistics.stdev(speeds)
        
        for i in range(1, 7):
            sleep(10)
            resp = get_stream()
            delivered = len(resp)
            rate = (delivered / num_messages) * 100
            print(f"{delivered} / {num_messages} ({rate:.2f}%) delivered in {i}0 seconds...")
            if int(rate) == 100:
                break
        print(f"{delivered} / {num_messages} ({rate:.2f}%) delivered in total.")
        resp = get_stream()
        latency = []
        for data in resp:
            sent, recv = data["_source"]['time'], data["_source"]['index_timestamp']
            # print(f"sent: {sent}")
            # print(f"recv: {recv}")
            sent = datetime.strptime(sent, "%Y-%m-%dT%H:%M:%S.%f").timestamp()
            recv = datetime.strptime(recv[:-4], "%Y-%m-%dT%H:%M:%S.%f").timestamp()
            # print(recv - sent)
            latency.append(recv - sent)
        # print(latency)
        mean_latency, std_latency = statistics.mean(latency), statistics.stdev(latency)
        print(f"Speeds: mean: {mean_speeds} Standard Deviation: {std_speeds}")
        print(f"Latency: mean: {mean_latency} Standard Deviation: {std_latency}")
        
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

async def main(num_messages, num_messages_per_second):
    q = asyncio.Queue()
    producer_coroutine = asyncio.create_task(getdump(q, num_messages, num_messages_per_second))
    consumer_coroutine = asyncio.create_task(consumer(q, num_messages))
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

    asyncio.run(main(num_messages, num_messages_per_second))

    print("done")