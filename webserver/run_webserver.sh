#!/bin/sh
## Define 
NATS_HOST=${NATS_HOST}
TOKEN=${TOKEN}
docker run -d --privileged \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       -v $(pwd):/app/webserver \
       --network "host" \
       --name "webserver" \
       webserver:latest