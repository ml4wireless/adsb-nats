from flask import Flask, render_template, request
import json
import os 
import ssl
from elasticsearch import Elasticsearch
from elasticsearch.exceptions import ConnectionError
import sys

from flask_cors import CORS
from flask_crontab import Crontab
from datetime import datetime, timedelta, timezone
from os.path import isfile,join

app = Flask(__name__)
crontab = Crontab(app)
CORS(app)

elastic_host = os.getenv("ELASTIC_HOST", None)
elastic_username = os.getenv("ELASTIC_USERNAME", None)
elastic_password = os.getenv("ELASTIC_PASSWORD", None)
elastic_cert = os.getenv("ELASTIC_CERT", None)

if not elastic_host or not elastic_username or not elastic_password or not elastic_cert :
    print("One of the following environmental variable is missing")
    print("ELASTIC_HOST | ELASTIC_USERNAME | ELASTIC_PASSWORD | ELASTIC_CERT")
    sys.exit(1)

print("Connecting to Elasticsearch...", flush=True)
ssl_context = ssl.SSLContext(
    cafile=elastic_cert
)

es = Elasticsearch(
    [f"https://{elastic_host}:9200"],
    http_auth=(elastic_username, elastic_password),
    ssl_context=ssl_context,
    request_timeout=30, 
    max_retries=10,
    verify_certs = False
)

print("Elasticsearch is connected successfully", flush=True)

def connect(es):
    es = Elasticsearch(
        [f"https://{elastic_host}:9200"],
        http_auth=(elastic_username, elastic_password),
        ssl_context=ssl_context,
        request_timeout=30, 
        max_retries=10,
        verify_certs = False
    )

@app.route('/')
def hello_world(user=None):
    return "Please access /getStream"

def get_stream():
    start_date = request.args.get('start_date','0000-01-01T00:00:00')
    end_date = request.args.get('end_date','9999-12-31T23:59:59')
    if start_date[10]==' ':
        start_date[10]='T'
    if end_date[10]==' ':
        end_date[10]='T'
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
        resp = es.search(index="2023-*-*", body=query, size=2000000)
    except Exception as error:
        print(error)
        print("Connection lost, reconnecting...")
        connect(es)
        resp = es.search(index="2023-*-*", body=query, size=2000000)
    return resp['hits']['hits']

@app.route('/getStream')
def get_stream_page():
    dics = get_stream()
    return render_template('index.html', messages=dics)

@app.route('/getJsonStream')
def get_stream_json():
    return get_stream()

    