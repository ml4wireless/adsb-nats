#!/bin/bash

kubectl delete services plane-nats-ext
sleep 1
helm uninstall plane-nats
echo "Waiting for teardown..."
sleep 15
echo "Done"

