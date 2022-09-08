#!/bin/bash
#
# This assumes you have the nat CLI installed - https://github.com/nats-io/natscli/releases/tag/v0.0.33
#
nats -s nats://"$TOKEN"@198.59.70.45:8080 stream view plane
