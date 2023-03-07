#!/bin/sh

# based on nhttps://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c82a303f39892fa0a7/client-rtl/run-docker.sh

export NATS_HOST="a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222"
export TOKEN="<insert token here>"

docker run --network "host" --privileged -v /dev/bus/usb/dev/bus/usb \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       nats-annotator:latest