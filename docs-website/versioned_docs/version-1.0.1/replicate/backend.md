---
sidebar_position: 5
---

# Backend

## Overview

Our backend system consists of two parts. 

One part is the webserver which extracts annotated data from nats and store them in the Elasticsearch database.

Another one is the flask server which runs on port 5000 and provides API for frontend to access.

**Before installing webserver and backend, we should’ve configured Elasticsearch suite and Nats** 

## Install Webserver

We containerize the Webserver using Docker.  The webserver extracts data from the NATS Jetstream and indexes it to Elasticsearch. 

To install the webserver:

1. Navigate to `./elastic/webserver/` folder, 
2. Build the image by running `bash build-webserver.sh`
3. Properly set the environment variables in `env.sh`
4. run `bash run-webserver.sh`

## Install Backend Server

We containerize the Backend Flask server using Docker. The flask server will listen to frontend connection and browser connection.

To install the backend server

1. Navigate to `./elastic/backend/` folder, 
2. Build the image by running `bash build-backend.sh`
3. Properly set the environment variables in `env.sh`
4. run `bash run-backend.sh`

**Endpoint:**

[https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com](https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00)

## Set up certificate

The backend server only provides HTTPS connections to the front end for security issues. We should obtain an authentic certificate for server.

The easiest way of getting a certificate signed by trust CA is using `certbot`, and step-by-step instructions are below, basically follow the [https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https](https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https):

1. Get the ip address of your backend
2. Prepare a valid domain name (FQDN) pointing to the ip. A good practice is creating a public 
3. Install certbot

```yaml
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot
```

1. Let certbot verify that you are in control of the domain, by default, flask’s static directory is just `./static` inside the directory, so:

`sudo certbot certonly --webroot -w /path/to/flask/static_directory -d FQDN`

1. certbot will access 

### API Reference

- **getStream**
    - Name : getStream
    - Parameter : `start_date` ,`end_date`
    - Example : [https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00](https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00)
- **getJsonStream**
    - Name : getJsonStream
    - Parameter : `start_date` ,`end_date`
    - Example : [https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00](https://ec2-44-234-36-159.us-west-2.compute.amazonaws.com/getJsonStream?start_date=2023-03-09T19:40:00&end_date=2023-03-09T19:45:00)

We containerize the Flask server using Docker.