#!/bin/sh
# script to build the nats-annotator image and optimize space on an AWS EC2 instance

docker system prune -a --volumes # prune old/unused images and volumes to optimize space

docker build -t nats-annotator .