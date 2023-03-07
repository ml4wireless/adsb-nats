#!/usr/bin/env python3
import asyncio
import os, sys

import nats
from nats.errors import TimeoutError

##
## An example of subcribing to a consumer to retrieve older data
##

durable = True if os.getenv("DURABLE") else False
ordered = True if os.getenv("ORDERED") else False

async def main():
    token = os.getenv("NATS_TOKEN")
    if not token:
        print("You need to define NATS_TOKEN")
        sys.exit(1)
    nc = await nats.connect(f"nats://{token}@198.59.70.45:8080")

    # Create JetStream context incase it's not defined
    js = nc.jetstream()
    await js.add_stream(name="planes", subjects=["plane.*"])

    topic = "*"
    print("\n+++++")
    print(f"Topic: plane-{topic}")
    while True:
        sub = await nc.subscribe(f"plane.{topic}")
        while True:
            try:
                msg = await sub.next_msg()
                print("message is ", msg)
            except TimeoutError:
                break
    await nc.close()

if __name__ == '__main__':
    asyncio.run(main())

