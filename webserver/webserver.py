
import asyncio
import json
import nats
from nats.errors import TimeoutError
from json import JSONDecodeError
import os
import sys
import pymysql
import uuid

connection = pymysql.connect(host='ec2-35-80-21-70.us-west-2.compute.amazonaws.com',
                             user='sahai',
                             password='sahai',
                             database='webserver',
                             connect_timeout=31536000,
                             cursorclass=pymysql.cursors.DictCursor)

cursor = connection.cursor()
sql = 'CREATE TABLE IF NOT EXISTS `dump1090` ( \
    `id` int(11) NOT NULL AUTO_INCREMENT, \
    `reporter` varchar(255) , \
    `time` datetime , \
    `ICAO` varchar(255) , \
    `feet` double(32,6) , \
    `lat` double(32,6) , \
    `lon` double(32,6) , \
    `manufacturer` varchar(255) , \
    `aircraft` varchar(255) , \
    `n-number` varchar(255) , \
    `registered` varchar(255) , \
    `annotator` varchar(255) , \
    PRIMARY KEY (`id`) \
) DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;'
# Create a new record
cursor.execute(sql)

async def output_stream(quit_event, sub, topic):
    while not quit_event.is_set():
        try:
            msg = await sub.next_msg()
            data = msg.data.decode("utf-8")
            jdata = json.loads(data)
            print(f'{msg.subject}: get annotated data at {jdata.get("time")}')
            # file solution
            # path = "annotated_data"
            # if not os.path.exists(path):
            #     os.makedirs(path)
            # out_file = open(f'annotated_data/annotated_{jdata["ICAO"]}_{jdata["time"]}.json', "w")
            # json.dump(jdata, out_file, indent = 4)
            # out_file.close()

            # sql solution
            time = jdata.get("time").replace("T"," ")[:-6]
            sql = ' INSERT INTO `dump1090` (`reporter`,`time`, `ICAO`, \
            `feet`,`lat`, `lon`,`manufacturer`,`aircraft`,`n-number`,`registered`,\
             `annotator`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'
            cursor.execute(sql, (jdata.get("reporter"), time, jdata.get("ICAO"),
            jdata.get("feet"), jdata.get("lat"),jdata.get("lon"),jdata.get("manufacturer"),
            jdata.get("aircraft"),jdata.get("n-number"),jdata.get("registered"),jdata.get("annotator")))
            connection.commit()
            await msg.ack()
        except TimeoutError:
            pass
        except (JSONDecodeError,AttributeError):
            print("An unexcepted JSON Format")
            print("Error data is:", data)
    

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
    token = os.getenv("TOKEN", None)
    # token="sahai"
 
    if not token:
        print("You need to define TOKEN")
        sys.exit(1)
    
    nats_host = os.getenv("NATS_HOST", None)
    if not nats_host:
        print("You need to define NATS_HOST")
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