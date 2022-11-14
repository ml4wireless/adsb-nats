#!/bin/sh
## Define 
docker run -d --privileged \
       -v $(pwd):/app/backend \
       --network "host" \
       backend:latest