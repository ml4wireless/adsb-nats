#!/usr/bin/env python3
import os
import asyncio
import nats
from nats.errors import ConnectionClosedError, TimeoutError, NoServersError

import sys
import subprocess
import re
import math
import time
import sqlite3 as lite
import getopt
import json
import os.path

import pytz
import datetime

import geocoder
import uuid

from pprint import pprint
from datetime import datetime, date
from subprocess import call

cDump1090 = "/usr/local/bin/dump1090"
playback1090 = "python3 playback-dump1090.py -r 0.1 -f {}"
playback_file = ""
nats_host = os.getenv("NATS_HOST", "localhost:30303")


def formNumber(pInputText):
    try:
        return float(pInputText.replace('\r', ''))
    except:
        return float(0)


def formText(pInputText):
    return pInputText.replace('\r', '')


def logmsg(pText):
    print("{:%Y%m%d %H:%M:%S} {}".format(datetime.now(), pText))
    sys.stdout.flush()


################################################################################
# Setup
vDebugMode = 0
vSnapMode = 0


def timestamp():
    now = datetime.now(pytz.timezone('UTC'))
    return now.isoformat()


async def consumer(q):

    while True:
        sub = None
        nc = None
        reporter_id = str(uuid.UUID(int=uuid.getnode()))
        logmsg(f"reporter is {reporter_id}")
        try:
            logmsg("Connect to NATS")
            token = os.getenv("NATS_TOKEN")
            if not token:
                logmsg(
                    "You need to set the TOKEN environment variable to your NATS token")
                sys.exit(1)

            logmsg(f"connect to nats://{token}@{nats_host}")
            sys.stdout.flush()
            nc = await nats.connect(f"nats://{token}@{nats_host}")
            logmsg("Create jetstream")
            js = nc.jetstream()
            logmsg("Create stream")

            await js.add_stream(name="planes", subjects=["plane.*"])

            mygeo = geocoder.ip('me')
            mylat, mylong = mygeo.latlng
            logmsg(f"got {mylat}, {mylong}")

            jdata = json.dumps({
                'reporter': reporter_id,
                'time': timestamp(),
                'lat': mylat,
                'long': mylong
            })
            logmsg(f"Introduce reporter location as {jdata}")
            await nc.publish("plane.reporter", jdata.encode())

            while True:
                logmsg("consumer waiting at queue")
                data = await q.get()
                logmsg(f"data is {data}")

                if len(data) == 4:
                    jdata = json.dumps({
                        'reporter': reporter_id,
                        'time': timestamp(),
                        "ICAO": data[0],
                        "feet": data[1],
                        "lat": data[2],
                        "lon": data[3]})
                    logmsg(f"publish location {jdata}")
                    await nc.publish("plane.loc", jdata.encode())

                elif len(data) == 2:
                    jdata = json.dumps({
                        'reporter': reporter_id,
                        'time': timestamp(),
                        "ICAO": data[0],
                        "ident": data[1]})
                    logmsg(f"publish ident {jdata}")
                    await nc.publish("plane.ident", jdata.encode())
                sys.stdout.flush()
                q.task_done()
        finally:
            if sub:
                await sub.unsubscribe()
            if nc:
                await nc.drain()


async def getdump(q):
    # Create ADS-B detection process
    logmsg("Kill old dump1090")
    os.system("killall dump1090")
    logmsg("create subprocess")
    if not playback_file:
        sproc = await asyncio.create_subprocess_shell(cDump1090,
                                                      stdout=asyncio.subprocess.PIPE,
                                                      stderr=asyncio.subprocess.STDOUT)
    else:
        sproc = await asyncio.create_subprocess_shell(playback1090.format(playback_file),
                                                      stdout=asyncio.subprocess.PIPE,
                                                      stderr=asyncio.subprocess.STDOUT)

    # Read and parse ADS-B message reports
    try:
        textblock = ''
        while True:
            line = await sproc.stdout.readline()
            line = line.decode("utf-8")
            textblock = textblock + line
#            logmsg(f"Read {line}")
            if "Error opening the RTLSDR device" in textblock:
                logmsg("Error openning RTLSDR:", textblock)
                return

            if len(line) == 1:
                # Start of block of info
                searchICAO = re.search(
                    r'(ICAO Address   : )(.*$)', textblock, re.M | re.I)
                searchFeet = re.search(
                    r'(Altitude : )(.*)(feet)(.*$)', textblock, re.M | re.I)
                searchLatitude = re.search(
                    r'(Latitude : )(.*$)', textblock, re.M | re.I)
                searchLongitude = re.search(
                    r'(Longitude: )(.*$)', textblock, re.M | re.I)
                searchIdent = re.search(
                    r'(Identification : )(.*$)', textblock, re.M | re.I)
                textblock = ''

                if searchICAO and searchIdent:
                    valICAO = formText(searchICAO.group(2))
                    valIdent = formText(searchIdent.group(2)).strip()
                    logmsg(f"valICAO:{valICAO} valIdent:{valIdent}")
                    await q.put((valICAO, valIdent))

                if searchFeet and searchICAO \
                        and searchLatitude and searchLongitude \
                        and not ('not decoded' in searchLatitude.group(2)) \
                        and not ('not decoded' in searchLongitude.group(2)):

                    # Found a valid combination
                    valICAO = formText(searchICAO.group(2))
                    valFeet = formNumber(searchFeet.group(2))
                    valLatitude = formNumber(searchLatitude.group(2))
                    valLongitude = formNumber(searchLongitude.group(2))
                    logmsg(
                        f"ICAO:{valICAO} Feet:{valFeet} Latitude:{valLatitude} Longitude:{valLongitude}")
                    await q.put((valICAO, valFeet, valLatitude, valLongitude))

    except KeyboardInterrupt:
        logmsg(f"Killing {cDump1090}/{playback1090} process: {sproc.pid}")
        sproc.kill()


################################################################################
# Setup
textblock = ''
vDebugMode = 0
vSnapMode = 0

try:
    opts, args = getopt.getopt(sys.argv[1:], "sda:b:f:", ["verbose", "debug=", "playback-file="])
except getopt.GetoptError:
    logmsg('plane-kafka.py [-v|--verbose] [-d XX|--debug=] [-f|--playback-file=]')
    sys.exit(2)
for opt, arg in opts:
    if opt in ('-d', '--debug'):
        vDebugMode = 1
        vDebugFile = arg
        if not os.path.isfile(vDebugFile):
            logmsg("File {} does not exist".format(vDebugFile))
            sys.exit(2)
    elif opt in ('-v', '--verbose'):
        vVerboseMode = 1
    elif opt in ('-f', '--playback-file'):
        playback_file = arg
        if not os.path.isfile(playback_file):
            logmsg("File {} does not exist".format(playback_file))
            sys.exit(2)


async def main():
    q = asyncio.Queue()
    producer = asyncio.create_task(getdump(q))
    consumer_coroutine = asyncio.create_task(consumer(q))
    await asyncio.gather(producer)
    await q.join()


if __name__ == '__main__':
    logmsg(f"time stamp is {timestamp()}")
    asyncio.run(main())
