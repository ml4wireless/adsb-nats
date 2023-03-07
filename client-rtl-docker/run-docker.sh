#!/bin/sh

##
## Define 
export NATS_HOST=${NATS_HOST:-"a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222"}
export NATS_TOKEN=${NATS_TOKEN:-"TOKEN_HERE"}

docker run -it --privileged -v /dev/bus/usb/dev/bus/usb \
       -e NATS_HOST=${NATS_HOST} \
       -e NATS_TOKEN=${NATS_TOKEN} \
       -e USE_AIRSPY=0 \
       -e USE_RECORDED_DATA=0 \
       --network=bridge \
       adsb-nats-client:latest 
