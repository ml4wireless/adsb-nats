#!/bin/sh
## Define 
NATS_HOST=${NATS_HOST}
TOKEN=${TOKEN}
docker run -d --privileged \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       --network "host" \
       aircraft-webserver:latest