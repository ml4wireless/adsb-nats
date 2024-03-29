#!/usr/bin/env python3
import os
import asyncio
import nats
from nats.js.errors import APIError

import sys
import re
import getopt
import json
import os.path

import pytz
import datetime
import time

import geocoder
import uuid

from datetime import datetime
from utils import *


cDump1090 = "/usr/local/bin/dump1090 --mlat"
# Device choice
use_airspy = os.environ.get("USE_AIRSPY", False)
try:
    use_airspy = int(use_airspy)
except ValueError:
    use_airspy = use_airspy == "yes" or use_airspy=="y" or use_airspy == "true"
cDump1090Device = " --device-type airspy" if use_airspy else ""

# File playback
playback1090 = "python3 playback-dump1090.py -r 0.1 -f {}"
use_recorded_data = os.environ.get("USE_RECORDED_DATA", False)
try:
    use_recorded_data = int(use_recorded_data)
except ValueError:
    use_recorded_data = use_recorded_data == "yes" or use_recorded_data=="y" or use_recorded_data == "true"
playback_file = "dump1090_recording.txt" if use_recorded_data else ""

# NATS connection
nats_host = os.getenv("NATS_HOST", "localhost:30303")

# Client status heartbeat interval
reporter_interval = os.getenv("REPORTER_INTERVAL", 5)

print("Connecting to NATS @", nats_host)

################################################################################
# Setup
vDebugMode = 0
vSnapMode = 0

async def consumer(q):

    while True:
        sub = None
        nc = None
        reporter_id = str(uuid.uuid4()) # str(uuid.UUID(int=uuid.getnode()))
        reporter_uid = str(os.environ.get("REPORTER_UID", "default-user"))
        logmsg(f"reporter is {reporter_id}")
        logmsg(f"reporter user-specified id is {reporter_uid}")
        try:
            logmsg("Connect to NATS")
            token = os.getenv("NATS_TOKEN")
            if not token:
                logmsg(
                    "You need to set the NATS_TOKEN environment variable to your NATS token")
                sys.exit(1)

            logmsg(f"connect to nats://{token}@{nats_host}")
            sys.stdout.flush()
            nc = await nats.connect(f"nats://{token}@{nats_host}")
            logmsg("Create jetstream")
            js = nc.jetstream()

            # Create stream if needed
            streams = await js.streams_info()
            stream_names = []
            for si in streams:
                stream_names.append(si.config.name)
            logmsg(f"Existing streams: {stream_names}")
            try:
                logmsg("Create stream")
                await js.add_stream(name="planes", subjects=["plane.>"], max_msgs=10000000)
            except APIError as e:
                logmsg("add_stream('planes') failed with error:")
                logmsg(e)

            # Get reporter location
            mygeo = geocoder.ip('me')
            mylat, mylong = mygeo.latlng
            logmsg(f"got {mylat}, {mylong}")

            jdata = json.dumps({
                'reporter': reporter_id,
                'reporter_uid': reporter_uid,
                'time': timestamp(),
                'lat': mylat,
                'long': mylong
            })
            logmsg(f"Introduce reporter location as {jdata}")
            await nc.publish("plane.reporter", jdata.encode())
            reporter_loc_last = time.time()

            while True:
                logmsg("consumer waiting at queue")
                data = await q.get()
                logmsg(f"data is {data}")

                if len(data) == 4:
                    jdata = json.dumps({
                        'reporter': reporter_id,
                        'reporter_uid': reporter_uid,
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
                        'reporter_uid': reporter_uid,
                        'time': timestamp(),
                        "ICAO": data[0],
                        "ident": data[1]})
                    logmsg(f"publish ident {jdata}")
                    await nc.publish("plane.ident", jdata.encode())
                
                reporter_loc_cur = time.time()
                if reporter_loc_cur - reporter_loc_last >= reporter_interval:
                    jdata = json.dumps({
                        'reporter': reporter_id,
                        'reporter_uid': reporter_uid,
                        'time': timestamp(),
                        'lat': mylat,
                        'long': mylong
                    })
                    logmsg(f"publish reporter location as {jdata}")
                    await nc.publish("plane.reporter", jdata.encode())
                    reporter_loc_last = reporter_loc_cur

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
        sproc = await asyncio.create_subprocess_shell(cDump1090 + cDump1090Device,
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
                logmsg("Error openning RTLSDR:\n" + textblock)
                return

            if "airspy_open failed" in textblock:
                logmsg("Error opening Airspy:\n" + textblock)
                return

            if len(line) == 1:
                # End(?) of block of info
                searchICAO = re.search(
                    r'(ICAO Address   :\s+|ICAO Address:\s+)([\w\d]+)( \(Mode S / ADS-B\))?$', textblock, re.M | re.I)
                searchFeet = re.search(
                    r'(Altitude :\s+|Baro altitude:\s+)([\d.]+)( feet| ft)(.*$)', textblock, re.M | re.I)
                searchLatitude = re.search(
                    r'(Latitude :\s+|CPR latitude:\s+)([\d.-]+)( \(\d+\))?$', textblock, re.M | re.I)
                searchLongitude = re.search(
                    r'(Longitude:\s+|CPR longitude:\s+)([\d.-]+)( \(\d+\))?$', textblock, re.M | re.I)
                searchIdent = re.search(
                    r'(Identification :\s+|Ident:\s+)(.*$)', textblock, re.M | re.I)
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
        logmsg(f"Killing {cDump1090}{cDump1090Device}/{playback1090} process: {sproc.pid}")
        sproc.kill()


################################################################################
# Setup
textblock = ''
vDebugMode = 0
vSnapMode = 0

try:
    opts, args = getopt.getopt(sys.argv[1:], "vd:af:", ["verbose", "debug=", "airspy", "playback-file="])
except getopt.GetoptError:
    logmsg('plane-kafka.py [-v|--verbose] [-d XX|--debug=] [-f|--playback-file=] [-a|--airspy]')
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
    elif opt in ('-a', '--airspy'):
        cDump1090Device = " --device-type airspy"
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
