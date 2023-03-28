FROM python:3.8-slim-buster

WORKDIR /aircraft-annotator/

COPY ./requirements.txt .

# install required dependencies
RUN pip3 install -r requirements.txt
RUN pip3 install awscli

# Copy script files last to reduce pip layer builds
COPY . .

CMD aws s3 cp s3://aircraft-annotator-data/ReleasableAircraft . --recursive; python3 annotator.py . 

