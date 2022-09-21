#!/bin/bash

if [[ -z $TOKEN ]]; then
    echo "You must set the TOKEN environment variable for configuration" >&2
    exit 1
fi

echo "Installing helm chart..."
sudo -E helm install plane-nats nats/nats -f config/k8s-values.yml --set auth.token=$TOKEN

stime=90
echo "Waiting ${stime}s for background startup tasks..."
sleep $stime 

echo "Exposing server node as service..."
sudo kubectl apply -f config/nats-service.yml
sleep 3

./get-connect-url.sh

