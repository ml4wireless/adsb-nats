FROM python:3.8-slim-buster
# set working directory
WORKDIR /app/
# copy all content from local folder to working directory of image
# install required dependencies
COPY ./requirements.txt .
RUN pip3 install -r requirements.txt
COPY ./webserver.py .
CMD python3 ./webserver.py