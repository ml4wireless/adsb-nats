from flask import Flask, render_template, request
import json
import os 
import pymysql
from flask_cors import CORS
from flask_crontab import Crontab
from datetime import datetime, timedelta, timezone


from os.path import isfile,join
app = Flask(__name__)
crontab = Crontab(app)
CORS(app)

connection = pymysql.connect(host='ec2-35-80-21-70.us-west-2.compute.amazonaws.com',
                             user='sahai',
                             password='sahai',
                             database='webserver',
                             connect_timeout=31536000,
                             cursorclass=pymysql.cursors.DictCursor)
connection.ping(reconnect=True)

@app.route('/')
def hello_world(user=None):
    return "Please access /getStream"

def get_stream():
    if not connection.open:
        connection.ping(reconnect=True)  # reconnecting mysql
    start_date = request.args.get('start_date','0000-00-00 00:00:00.000000')
    end_date = request.args.get('end_date','9999-12-31 23:59:59.000000')
    cursor = connection.cursor()
    sql = ' SELECT * FROM dump1090 as d \
            WHERE d.time >= (%s) && d.time <= (%s)'
    cursor.execute(sql,(start_date,end_date))
    dics = []
    result = cursor.fetchone()
    while result:
        dics.append(result)
        result = cursor.fetchone()
    connection.commit() # Make sure the query is re-executed every time
    return dics    

@app.route('/getStream')
def get_stream_page():
    dics = get_stream()
    return render_template('index.html', messages=dics)

@app.route('/getJsonStream')
def get_stream_json():
    return get_stream()


@crontab.job()
def retention():
    if not connection.open:
        connection.ping(reconnect=True)  # reconnecting mysql
    timezone_offset = -8.0  
    tzinfo = timezone(timedelta(hours=timezone_offset))
    now = datetime.now(tzinfo)
    retention_time =  (now -  timedelta(days=20)).strftime("%Y-%m-%d %H:%M:%S.000000")
    print(f"data in rentntion before {retention_time}")
    cursor = connection.cursor()
    sql = ' DELETE FROM dump1090 \
            WHERE time <= (%s)'
    cursor.execute(sql,(retention_time))
    connection.commit() # Make sure the query is re-executed every time
    
    