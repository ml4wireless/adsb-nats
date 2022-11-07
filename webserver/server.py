from flask import Flask, render_template, request
import json
import os 

from os.path import isfile,join
app = Flask(__name__)


@app.route('/')
@app.route('/hello')
@app.route('/hello/<user>')
def hello_world(user=None):
    return "Please access /getStream"


@app.route('/getStream')
def get_stream():
    mypath = "annotated_data"
    file_list = [join(mypath,f) for f in os.listdir(mypath) if isfile(join(mypath, f))]
    dics = []
    for file_name in file_list:
        with open(file_name) as f:
            dic=json.load(f)        
            dics.append(dic)
    return render_template('index.html', messages=dics)

@app.route('/getJsonStream')
def get_json_stream():
    mypath = "annotated_data"
    file_list = [join(mypath,f) for f in os.listdir(mypath) if isfile(join(mypath, f))]
    dics = []
    for file_name in file_list:
        with open(file_name) as f:
            dic=json.load(f)        
            dics.append(dic)
    return dics