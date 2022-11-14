from flask import Flask, render_template, request
import json
import os 
import pymysql
from flask_cors import CORS

from os.path import isfile,join
app = Flask(__name__)
CORS(app)

connection = pymysql.connect(host='ec2-35-80-21-70.us-west-2.compute.amazonaws.com',
                             user='sahai',
                             password='sahai',
                             database='webserver',
                             cursorclass=pymysql.cursors.DictCursor)
connection.ping(reconnect=True)


@app.route('/')
@app.route('/hello')
@app.route('/hello/<user>')
def hello_world(user=None):
    return "Please access /getStream"

def get_stream():
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