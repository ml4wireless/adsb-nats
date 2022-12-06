#!/bin/sh
## Define 
docker run -d --privileged \
       -v $(pwd):/app/backend \
       --network "host" \
       --name "backend_server" \
       backend:latest 

docker exec backend_server flask --app=server.py crontab add && flask --app=server.py crontab show
