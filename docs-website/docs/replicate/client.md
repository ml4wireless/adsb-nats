---
sidebar_position: 3
---
# Instructions to Run the Containerized Client

## SDR Hardware Setup

[https://youtu.be/uM8NkB2nIis](https://youtu.be/uM8NkB2nIis)

## Installing Docker on Raspberry Pi

*synthesized from: [https://www.simplilearn.com/tutorials/docker-tutorial/raspberry-pi-docker](https://www.simplilearn.com/tutorials/docker-tutorial/raspberry-pi-docker)*

1. Upgrade and Update 
    1. `sudo apt-get update && sudo apt-get upgrade`
2. Download and Install Docker on Rasberry Pi Environment 
    1. Push this installation script: `curl -fsSL [https://get.docker.com](https://get.docker.com/) -o [get-docker.sh](http://get-docker.sh/)`
    2. Run the script: `sudo sh [get-docker.sh](http://get-docker.sh/)`
3. Add the Pi user to the Docker group
    1. `sudo usermod -aG docker Pi`
4. Check Docker version and System Wide Details 
    1. `docker version`
    2. `docker info`

## Running the Containerized Client

1. clone the repo: `gh repo clone ml4wireless/adsb-nats`
2. cd into the `client-rtl-docker` folder
3. Run `make` in command line to build the Docker image
4. Connect the SDR device
5. In the script `run-docker.sh` 
    1. for `NATS_TOKEN`, insert the token (”sahai”) 
    2. for `REPORTER_UID`, insert your name or desired reporting user id for your client 
        1. this will show up on the frontend to help identify which airplane data points your device has reported
6. Create a screen session to use to keep the program executing in the background with `screen -S <session_name>`
    
    Use the script `[run-docker.sh](http://run-docker.sh)` we created earlier to start the execution of the container:
    
    - ******Note:****** If it is your first time running the script, run `chmod +x [run-docker.sh](http://run-docker.sh)` to make it executable
        
        ```bash
        ./run-docker.sh
        ```
        
7. Detach the Screen session *(keeps the program running in the background even if you exit the terminal)*
    - press `ctrl + a + d` to detach it -> you are now done (you may have to try doing this multiple times for it to work)
    - *******Optional Check: To make sure the screen session was created and detached, use the command `screen -list`. You should see something like this, with your session name-*
        
        ![Untitled](/img/client_2.png)
        

- **Debugging Help 🐞**
    - We have added a environment variable USE_RECORDED_DATA in `run_docker.sh` for debugging purposes. Set it to `1` in order to use pre-recorded data instead of live data.
        
        ![Untitled](/img/client_1.png)
        

---

## Verify that it’s Working

### Method 1: Using the Frontend

## Using the Frontend Airplane Tracker Visualization

TODO - link to frontend

### Method 2: Using the System Health Dashboard

TODO - link to dashboard
