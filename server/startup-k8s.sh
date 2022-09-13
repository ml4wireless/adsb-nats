#!/bin/bash

if [[ -z $TOKEN ]]; then
    echo "You must set the TOKEN environment variable for configuration" >&2
    exit 1
fi

echo "Installing helm chart..."
sudo -E helm install plane-nats nats/nats -f config/k8s-values.yml --set auth.token=$TOKEN

echo "Waiting for background startup tasks..."
sleep 30

echo "Exposing server node as service..."
sudo kubectl expose pods plane-nats-0 --type=NodePort --port=4222 --target-port=8080

services=$(sudo kubectl get services plane-nats-0)
echo "Service:"
echo $services
echo
port=$(echo $services | sed -n 2p | awk '{print $5}' | cut -d':' -f2 | cut -d'/' -f1)
nats_host=$(sudo kubectl describe nodes | grep hostname | sed -n 1p | cut -d= -f2)
echo "Client Connection URL"
echo "\tnats://\$TOKEN@$nats_host:$port"
echo

