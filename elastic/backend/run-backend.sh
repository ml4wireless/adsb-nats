#!/bin/sh
## Define 
docker run -d --privileged \
       -v $(pwd):/app/backend \
       -e ELASTIC_HOST=ec2-44-234-36-159.us-west-2.compute.amazonaws.com \
       -e ELASTIC_USERNAME=elastic \
       -e ELASTIC_PASSWORD=KxgZSoHk7RkcADwBnU+K \
       -e ELASTIC_CERT="/app/backend/http_ca.crt" \
       --network "host" \
       --name "backend_server" \
       backend:latest 

