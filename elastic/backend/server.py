from flask import Flask, render_template, request
import os
from elasticsearch import Elasticsearch
import sys

from flask_cors import CORS
from flask_crontab import Crontab


app = Flask(__name__)
crontab = Crontab(app)
CORS(app)

elastic_host = os.getenv("ELASTIC_HOST", None)

if not elastic_host:
    print("environmental variable ELASTIC_HOST is missing")
    sys.exit(1)

print("Connecting to Elasticsearch...", flush=True)

es = Elasticsearch(
    [f"https://{elastic_host}:9200"],
    # Request
    request_timeout=30,
    max_retries=10,
    retry_on_timeout=True,
    # Periodic Sniffing
    sniff_on_connection_fail=True,
    sniffer_timeout=60,
    sniff_timeout=30
)

print("Elasticsearch is connected successfully", flush=True)


def connect():
    global es
    es = Elasticsearch(
        [f"http://{elastic_host}:9200"],
        # Request
        request_timeout=30,
        max_retries=10,
        retry_on_timeout=True,
        # Periodic Sniffing
        sniff_on_connection_fail=True,
        sniffer_timeout=60,
        sniff_timeout=30
    )


@app.route('/')
def hello_world(user=None):
    return "Please access /getJsonStream"


def get_stream():
    start_date = request.args.get('start_date', '0000-01-01T00:00:00')
    end_date = request.args.get('end_date', '9999-12-31T23:59:59')
    if start_date[10] == ' ':
        start_date[10] = 'T'
    if end_date[10] == ' ':
        end_date[10] = 'T'
    query = {
        "query": {
            # "match_all":{}
            "range": {
                "time": {
                    # "time_zone": "+01:00",
                    "gte": start_date,
                    "lte": end_date
                }
            }
        }
    }
    try:
        resp = es.search(index="2023-*-*", body=query, size=10000)
    except Exception as error:
        print(error)
        print("Connection lost, reconnecting...")
        connect()
        resp = es.search(index="2023-*-*", body=query, size=10000)
    return resp['hits']['hits']


@app.route('/getJsonStream')
def get_stream_json():
    return get_stream()
