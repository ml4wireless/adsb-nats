FROM python:3.8-slim-buster
# set working directory
WORKDIR /app/
# copy all content from local folder to working directory of image
# install required dependencies
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt
RUN apt-get update && apt-get install cron -y
COPY ./server.py .
CMD python3 -m flask --app=server.py run --host=0.0.0.0 --port=80