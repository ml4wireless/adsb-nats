#!/bin/sh

##
## Define 
export NATS_HOST=${NATS_HOST:-"198.59.70.45:8080"}
export NATS_TOKEN=${NATS_TOKEN:-"your-token"}

docker run -d --privileged -v /dev/bus/usb/dev/bus/usb \
       -e NATS_HOST=${NATS_HOST} \
       -e NATS_TOKEN=${NATS_TOKEN} \
       adsb-nats-client:latest 
