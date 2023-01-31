FROM python:3.8-slim-buster

WORKDIR /aircraft-annotator/

COPY . .

# install required dependencies
RUN pip3 install -r requirements.txt
RUN pip3 install awscli

CMD aws s3 cp s3://aircraft-annotator-data/ReleasableAircraft . --recursive; python3 annotator.py .