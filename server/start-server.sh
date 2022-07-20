#!/bin/bash


if [ -z $TOKEN ];
then
    echo You need to define TOKEN
    exit 100
fi

export SERVER=$(hostname)

/usr/bin/nats-server -c config-cluster.json
