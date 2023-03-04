#!/bin/sh
## Define 
NATS_HOST=${NATS_HOST}
TOKEN=${TOKEN}
docker run -d --privileged \
       -e NATS_HOST=${NATS_HOST} \
       -e TOKEN=${TOKEN} \
       -e ELASTIC_HOST=ec2-44-234-36-159.us-west-2.compute.amazonaws.com\
       -e ELASTIC_USERNAME=elastic\
       -e ELASTIC_PASSWORD=KxgZSoHk7RkcADwBnU+K\
       -e ELASTIC_CERT="/app/webserver/http_ca.crt"\
       -v $(pwd):/app/webserver \
       --network "host" \
       --name "webserver" \
       webserver:latest