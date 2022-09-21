#!/bin/bash

if [[ -z $TOKEN ]]; then
    echo "You must set the TOKEN environment variable for configuration" >&2
    exit 1
fi

echo "Installing helm chart..."
helm install plane-nats nats/nats -f config/k8s-minikube-values.yml --set auth.token=$TOKEN

stime=90
echo "Waiting ${stime}s for background startup tasks..."
sleep $stime 

echo "Exposing server node as service..."
kubectl apply -f config/nats-service.yml
sleep 3

./get-connect-url.sh

echo "Exposing minikube internal service to host machine. Leave this command running."
minikube service plane-nats-ext --url

