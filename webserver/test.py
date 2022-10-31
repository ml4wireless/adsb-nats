from os import listdir
from os.path import isfile, join
import json

mypath = 'annotated_data'
onlyfiles = [join(mypath,f) for f in listdir(mypath) if isfile(join(mypath, f))]
dics = []
for file in onlyfiles:
    with open(file) as f:
        dic=json.load(f)
        dics.append(dic)

print(dics)
        