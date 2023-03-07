#!/bin/bash

service_table=$(kubectl get services plane-nats-ext -o custom-columns='NAME:.metadata.name,APP_PORT:.spec.ports[].port,HOST_PORT:.spec.ports[].nodePort')

echo "$service_table"
echo

nats_port=$(sed -n 2p <<< "$service_table" | awk '{print $3}')
nats_host=$(kubectl describe nodes | grep hostname | sed -n 1p | cut -d= -f2)
echo "Client Connection URL"
echo -e "\tnats://$TOKEN@$nats_host:$nats_port"

