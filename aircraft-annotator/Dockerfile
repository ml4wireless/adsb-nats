FROM python:3.8-slim-buster

WORKDIR /aircraft-annotator/

COPY ./requirements.txt .

# install required dependencies
RUN pip3 install -r requirements.txt

# Copy script files last to reduce pip layer builds
COPY . .
COPY ./annotator-data .

CMD python3 annotator.py /aircraft-annotator/

