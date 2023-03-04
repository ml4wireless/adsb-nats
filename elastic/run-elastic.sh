#!/bin/bash
# https://docs.docker.com/config/containers/resource_constraints/
# https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html
docker run -d --name es-standalone \
    --net elastic -p 9200:9200 \
    -it docker.elastic.co/elasticsearch/elasticsearch:8.6.2