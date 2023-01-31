#!/bin/sh

########## AWS ##########
export NATS_HOST="a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222"
export TOKEN="sahai"

########## LOCAL ##########
# export NATS_HOST=${NATS_HOST:-"docker.for.mac.host.internal:51004"} 
# export TOKEN=${TOKEN:-"sivanitoken"}

######################################################################
docker run --network "host" --privileged -v /dev/bus/usb/dev/bus/usb \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       nats-annotator:latest