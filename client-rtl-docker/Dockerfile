FROM debian:buster-slim as builder

RUN  mkdir /app

USER root

RUN  DEBIAN_FRONTEND=noninteractive apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
                                    git ca-certificates build-essential libncurses-dev \
                                    libairspy-dev librtlsdr0 librtlsdr-dev pkgconf

COPY ./Makefile.patch /home/root/Makefile.patch
RUN  cd /app && \
     git clone https://github.com/gtjoseph/dump1090.git && \
     cd dump1090 && \
     git checkout v5.0.5-airspy && \
     git apply /home/root/Makefile.patch && \
     make BLADERF=no HACKRF=no LIMESDR=no && \
     cp dump1090 /usr/local/bin


FROM debian:buster-slim as final

COPY --from=builder /usr/local/bin/dump1090 /usr/local/bin/dump1090
COPY ./52-airspy.rules /etc/udev/rules.d/52-airspy.rules

RUN  DEBIAN_FRONTEND=noninteractive apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
                                    git ca-certificates rtl-sdr libairspy0 python3 python3-pip \
                                    python3-wheel python3-setuptools psmisc libncurses6

RUN  pip3 install nats-py pytz geocoder

WORKDIR /app
COPY ./client.py /app/client.py
COPY ./utils.py /app/utils.py
COPY ./playback-dump1090.py /app/playback-dump1090.py
COPY ./dump1090_recording.txt /app/dump1090_recording.txt

# CMD python3 /app/client.py -f dump1090_recording.txt
CMD python3 /app/client.py

