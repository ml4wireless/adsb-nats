FROM python:3.8.5-slim-buster

COPY . aircraft_annotator 

WORKDIR aircraft_annotator

RUN pip3 install -r requirements.txt

CMD python3 annotator.py .
