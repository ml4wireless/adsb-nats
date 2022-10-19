#!/bin/sh
## Define 
NATS_HOST=${NATS_HOST}
TOKEN=${TOKEN}
docker run -d --privileged \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       --network "host" \
       aircraft-webserver:latest

       # -p 0.0.0.0:30303:30303 \
# docker run -d --privileged -v /dev/bus/usb/dev/bus/usb \
#        -e NATS_HOST=${NATS_HOST} \
#        -e NATS_TOKEN=${NATS_TOKEN} \
#        nats-annotator:latest
# docker run -e NATS_HOST=${NATS_HOST} -e TOKEN=${TOKEN} nats-annotator:latest