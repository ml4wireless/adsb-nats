FROM python:3.8-slim-buster

WORKDIR /aircraft-annotator/

COPY . .

# install required dependencies
RUN pip3 install -r requirements.txt
RUN pip3 install awscli

CMD ./download_data.sh; python3 annotator.py ./annotator-data
