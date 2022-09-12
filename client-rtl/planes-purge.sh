#!/bin/bash
#
# This assumes you have the nat CLI installed - https://github.com/nats-io/natscli/releases/tag/v0.0.33
#
if [[ -z "$NATS_HOST" ]]; then
    echo "Using NATS host $NATS_HOST"
else
    NATS_HOST="localhost:8088"
    echo "Using NATS host $NATS_HOST"
fi

nats -s nats://"$TOKEN"@"$NATS_HOST" stream purge plane
