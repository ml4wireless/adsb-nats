# Plane-NATS
#### ADS-B Flight Tracking w/ NATS
------------
## Running the Server
### Standalone
Modify `server/cluster-config.json` to match your environment
- Adjust `cluster.routes` IP addresses
- Set the password for `cluster.authorization.password`
- Set desired client port under `listen`
- Adjust `jetstream` values as desired

On each server node (perhaps in Tmux)
- `export TOKEN=<your token>`
- `./start-server.sh`

### Using Kubernetes Locally
In a terminal with `kubectl` and `helm` setup to connect to your k8s controller
- `export TOKEN=<your token>`
- `./startup-k8s.sh`

Note the client connection URL printed at the end, the port and host may vary
(but the port SHOULD be 30303)

## Running the Client
Ensure you have the jetstream-supporting NATS python library installed
```
pip install -U nats-py
```

Set the token and connection environment variables
- `export TOKEN=<your token>`
- `export NATS_HOST="nats://$TOKEN@<host>:<port>"`

Run the client
```
python client.py
```

