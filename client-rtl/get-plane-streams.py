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
    token = os.getenv("TOKEN")
    if not token:
        print("You need to define TOKEN")
        sys.exit(1)
    nc = await nats.connect(f"nats://{token}@198.59.70.45:8080")

    # Create JetStream context incase it's not defined
    js = nc.jetstream()
    await js.add_stream(name="planes", subjects=["plane.*"])

    for topic in [ "reporter", "ident", "loc" ]:
        print("\n+++++")
        print(f"Topic: plane-{topic}")
        if durable:
            sub = await js.subscribe(f"plane.{topic}", durable=f"durable-{topic}", ordered_consumer=ordered)
        else:
            sub = await js.subscribe(f"plane.{topic}", ordered_consumer=ordered)
        while True:
            try:
                msg = await sub.next_msg()
                print("message is ", msg)
            except TimeoutError:
                break
    await nc.close()

if __name__ == '__main__':
    asyncio.run(main())

