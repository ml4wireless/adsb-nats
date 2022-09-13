#!/bin/bash

sudo kubectl delete services plane-nats-ext
sleep 1
sudo -E helm uninstall plane-nats
echo "Waiting for teardown..."
sleep 15
echo "Done"

