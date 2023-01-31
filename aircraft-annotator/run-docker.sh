#!/bin/sh

#copied from nhttps://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c82a303f39892fa0a7/client-rtl/run-docker.sh
#and then edited 

##
## Define 
export NATS_HOST=${NATS_HOST:-"docker.for.mac.host.internal:63791"}
export TOKEN=${TOKEN:-"shruti"}

docker run --network "host" --privileged \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       nats-annotator:latest
       