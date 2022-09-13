#!/bin/bash

sudo kubectl delete services plane-nats-0
sudo -E helm uninstall plane-nats

