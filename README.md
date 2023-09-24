# Plane-NATS
#### ADS-B Flight Tracking w/ NATS
------------
## Running the server
### Standalone
Modify `server/cluster-config.json` to match your environment
- Adjust `cluster.routes` IP addresses
- Set the password for `cluster.authorization.password`
- Set desired client port under `listen`
- Adjust `jetstream` values as desired

On each server node (perhaps in Tmux)
- `export TOKEN=<your token>`
- `./start-server.sh`

### Using Kubernetes 
In a terminal with `kubectl` and `helm` setup to connect to your k8s controller
- `cd` to the `server` directory
- `export TOKEN=<your token>`
- `./k8s[-minikube]-startup.sh`

Note the client connection URL printed at the end, the port and host may vary
(but the port SHOULD be 30303 unless running under minikube)

## Running the client
Ensure you have the required python libraries
```
pip install -r requirements.txt
```

Set the token and connection environment variables
- `export TOKEN=<your token>`
- `export NATS_HOST="nats://$TOKEN@<host>:<port>"`

Run the client in the `client-rtl` directory
```
python client.py [-f PLAYBACKFILE]
```

## Running the aircraft annotator
Follow the instructions in `aircraft-annotator/README.md`

## Viewing live data
```
nats -s nats://$TOKEN@$NATS_HOST sub ">"
```
## Spinning up all components locally with an all-in-one docker-compose
First, follow the instructions in `aircraft-annotator/README.md` to download the plane data to `aircraft-annotator/annotator-data/`. This is necessary to build the Docker image for `aircraft-annotator`.

Build containers locally:
```
docker-compose build
```

Spin up all components in the background:
```
export TOKEN=mysecrettoken
docker-compose up -d
```
View live data:
```
docker logs -f adsb-nats-nats-box-1
```
Check backend API healthiness:
```
./elastic/backend/heartbeat.sh
```
One could manage the Elasticsearch data with Kibana at `http://localhost:5601`.