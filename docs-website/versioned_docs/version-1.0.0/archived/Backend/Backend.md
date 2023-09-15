# Backend Overview

## Overview

Our backend system consists of two parts. 

One part is the webserver which extracts annotated data from nats and store them in the MariaDB database.

Another one is the flask server which runs on port 5000 and provides API for frontend to access.

## Webserver

### Dockerfile

We containerize the Webserver using Docker. 

[adsb-nats/Dockerfile_webserver at webserver · ml4wireless/adsb-nats](https://github.com/ml4wireless/adsb-nats/blob/webserver/webserver/Dockerfile_webserver)

## Flask Server

### Deploy

We containerize the Flask server using Docker. 

[adsb-nats/Dockerfile_backendserver at webserver · ml4wireless/adsb-nats](https://github.com/ml4wireless/adsb-nats/blob/webserver/webserver/backend/Dockerfile_backendserver)

### Endpoint

[http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000](http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getJsonStream)

### API Reference

- **getStream**
    - Name : getStream
    - Parameter : `start_date` ,`end_date`
    - Example : [http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getStream?start_date=2020-11-07 11:11:11&&end_date=2023-11-06 11:11:11](http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getStream?start_date=2020-11-07%2011:11:11&&end_date=2023-11-06%2011:11:11)
- **getJsonStream**
    - Name : getJsonStream
    - Parameter : `start_date` ,`end_date`
    - Example : [http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getJsonStream?start_date=2020-11-07 11:11:11&&end_date=2023-11-06 11:11:11](http://ec2-35-80-21-70.us-west-2.compute.amazonaws.com:5000/getStream?start_date=2020-11-07%2011:11:11&&end_date=2023-11-06%2011:11:11)

We containerize the Flask server using Docker.