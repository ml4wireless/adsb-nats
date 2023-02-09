FROM ubuntu:22.04 as builder

RUN  mkdir /app

USER root

RUN  DEBIAN_FRONTEND=noninteractive apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
                                    git ca-certificates build-essential rtl-sdr librtlsdr-dev pkgconf

RUN  cd /app && \
     git clone https://github.com/antirez/dump1090.git && \
     cd dump1090 && \
     make && \
     cp dump1090 /usr/local/bin


FROM ubuntu:22.04 as final

COPY --from=builder /usr/local/bin/dump1090 /usr/local/bin/dump1090

RUN  DEBIAN_FRONTEND=noninteractive apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
                                    git ca-certificates rtl-sdr python3 python3-pip

RUN  pip3 install nats-py pytz geocoder

WORKDIR /app
COPY ./client.py /app/client.py
COPY ./playback-dump1090.py /app/playback-dump1090.py
# COPY ./dump1090_recording.txt /app/dump1090_recording.txt

CMD python3 /app/client.py 
# -f dump1090_recording.txt
# CMD nats sub -s nats://sahai@a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222 "plane.>"
# CMD dump1090