# Overview

## Table of Contents

![Untitled](/img/docusaurus.png)

## SDR Setup

[https://www.youtube.com/watch?v=uM8NkB2nIis](https://www.youtube.com/watch?v=uM8NkB2nIis)

hardware setup

[https://www.youtube.com/watch?v=bT2WZhKBkRk](https://www.youtube.com/watch?v=bT2WZhKBkRk)

software setup

- Software Setup video contains link to download CubicSDR software

## K8S Setup

### First Time

- install docker desktop
- `brew install minikube` (and/or enable kubernetes in docker desktop settings)
- `brew install helm`
- `helm repo add nats [https://nats-io.github.io/k8s/helm/charts/](https://nats-io.github.io/k8s/helm/charts/)`
    - `help repo list`

### Everytime

- Open Docker
- in action column for mykube press play

## NATS Setup

### First Time

*(from [https://docs.nats.io/nats-concepts/what-is-nats/walkthrough_setup](https://docs.nats.io/nats-concepts/what-is-nats/walkthrough_setup))*

- `brew tap nats-io/nats-tools`
- `brew install nats-io/nats-tools/nats`
- `brew install nats-server`

## Run the server program

- In adsb-nats-master, go to terminal and run the following:
- `minikube start --memory 8192 --cpus 3 --profile mykube`
    - note: may need to increase memory allocated in docker desktop to match above
- `minikube profile mykube`
    - set minikube (default?) profile to be the custom ‘mykube’ profile we just created
- `export TOKEN=<your token>`
- `cd server`
- `./k8s-minikube-startup.sh`
    
    ```python
    **### output ###**
    Installing helm chart...
    NAME: plane-nats
    LAST DEPLOYED: Mon Sep 26 19:34:37 2022
    NAMESPACE: default
    STATUS: deployed
    REVISION: 1
    NOTES:
    You can find more information about running NATS on Kubernetes
    in the NATS documentation website:
    
      https://docs.nats.io/nats-on-kubernetes/nats-kubernetes
    
    NATS Box has been deployed into your cluster, you can
    now use the NATS tools within the container as follows:
    
      kubectl exec -n default -it deployment/plane-nats-box -- /bin/sh -l
    
      nats-box:~# nats-sub test &
      nats-box:~# nats-pub test hi
      nats-box:~# nc plane-nats 4222
    
    Thanks for using NATS!
    Waiting 90s for background startup tasks...
    Exposing server node as service...
    service/plane-nats-ext created
    NAME             APP_PORT   HOST_PORT
    plane-nats-ext   4222       30303
    
    Client Connection URL
            nats://$TOKEN@docker-desktop:30303
    Exposing minikube internal service to host machine. Leave this command running.
    http://127.0.0.1:58973
    ❗  Because you are using a Docker driver on darwin, the terminal needs to be open to run it.
    ```
    
    (l*eave this terminal tab running ^ )*
    

## Dump1090

## first time (installation, etc.)

steps to install dump1090:

1. Download from dump1090 from [https://github.com/antirez/dump1090](https://github.com/antirez/dump1090)
2. `brew install pkg-config`
3. `brew install librtlsdr`
4. `brew install`  
5. `make` or `make LIBRARY_PATH=/usr/local/lib` (if make doesn’t work)
    1. if those don’t work and you get a lusb error try the below: (may need to point to library location of lusb/libusb)
        
        `cc -g -o dump1090 dump1090.o anet.o -L/opt/homebrew/Cellar/librtlsdr/0.6.0/lib` -L/opt/homebrew/Cellar/libusb/1.0.26/lib `-lrtlsdr -lusb-1.0 -lpthread -lm`
        
6. Copy it to `/usr/local/bin` (`sudo cp dump1090 /usr/local/bin`)
7. to check: run `/usr/local/bin/dump1090` & make sure it returns data

### for linux (ubuntu 18.04)

1. Download from dump1090 from [https://github.com/antirez/dump1090](https://github.com/antirez/dump1090)
2. `sudo apt-get install pkg-config`
3. `sudo apt-get install librtlsdr-dev`
4. `make`

## run the program

- `/usr/local/bin/dump1090`
- can pipe to an output file and run [client.py](http://client.py) with that, ex:
    - `/usr/local/bin/dump1090` > live_dump1090.txt
    - `python client -f live_dump1090.txt`

## Run the client program

*(in another terminal window)*

### First Time

- `pip install -r requirements.txt` - first time only

### Everytime

- `export TOKEN=<your token>`
- `export NATS_HOST="127.0.0.1:58973"`
    - 127.0.0.1:58973 comes from the output ^ after running `./k8s-minikube-startup.sh` in the previous step
- `python3 client.py [-f PLAYBACKFILE]`
    - if using pre-recorded: `python3 client.py -f client-rtl/dump1090_recording.txt`
    - `python3 client.py -f dump1090_recording.txt`

*(leave this running)*

## Run the annotator program

### First Time

- **download** plane data from [this link](https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download) and unzip the folder
- Put everything inside the downloaded ReleasableAircraft folder into the aircraft-annotator directory in adsb-nats-master. (Do not put the entire ReleasableAircraft folder in - just everything inside it)
- `cd aircraft-annotator`
- **run** `./cleanup-data.sh`

### Everytime

- *(In new terminal)*
    - instructions here are pretty similar to the readme in aircraft-annotator directory
    - `export TOKEN=<your token>`
    - `export NATS_HOST="127.0.0.1:58973"`
        - where 127.0.0.1:58973 comes from the output after running `./k8s-minikube-startup.sh` in the previous step
    - run program with `python3 aircraft-annotator/annotator.py` (from adsb-nats directory, or anywhere outside aircraft-annotator directory)
        - or `cd aircraft-annotator` and `python3 [annotator.p](http://annotator.py)y .`
- *(leave this running)*
- *(in another terminal)*
    - Verify annotations are correct with `nats -s nats://$TOKEN@$NATS_HOST sub "plane.>"`

## Extras & Cleanup

- see pods with `kubectl get pods -A`
- Clean Up
    - if necessary, switch k8s context (from aws back to minikube) — `kubectl config use-context mykube`  minikube or mykube
    - in `server` directory, do `./cleanup-k8s.sh`
    - stop docker
    - ~~in case you need to stop containers — `docker stop $(docker ps -a -q)` (stops ALL presently running containers)~~

## Misc Notes & Clarifications

- note: `config-cluster.json` is only for running not thru k8s
- messages passed to NATS is in JSON format with binary
- dump1090

---

## Environment Setup with Ubuntu 18.04

- install snap
    - `sudo apt-get install snapd`
- install helm
    - [https://helm.sh/docs/intro/install/](https://helm.sh/docs/intro/install/)
    - `sudo snap install helm --classic`
- install docker
    - latest version installation [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
    - manage docker as a non-root user [https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
- install minikube

