from datetime import datetime
from elasticsearch import Elasticsearch
import ssl
from ssl import create_default_context

# create SSL context
ssl_context = ssl.SSLContext(
    cafile="http_ca.crt"
)
# create Elasticsearch client
es = Elasticsearch(
    ["https://localhost:9200"],
    http_auth=('elastic', 'KxgZSoHk7RkcADwBnU+K'),
    ssl_context=ssl_context,
    verify_certs = False,
    request_timeout=30, 
    max_retries=10
)
# doc = {'reporter': '00000000-0000-0000-0000-acde48001122', 'time': '2023-02-28 18:14:45.657219', 'ICAO': 'aa7734', 'ident': 'SWA1584', 'icao': 'AA7734', 'manufacturer': 'BOEING', 'aircraft': '737-7BD', 'n-number': 'N7735A', 'registered': 'SOUTHWEST AIRLINES CO', 'annotator': '00000000-0000-0000-0000-0e4f8c97f703'}
# resp = es.index(index="2023", document=doc)
# print(resp['result'])

# resp = es.get(index="test-index", id=1)
# print(resp['_source'])

# es.indices.refresh(index="test-index")
query = {

    "query": {
        # "match_all":{}
        "range": {
            "time": {
            # "time_zone": "+01:00",        
                "gte": "2023-02-28T10:13:00", 
                "lte": "2023-02-29T22:24:00"                
            }
        }
    }
}

resp = es.search(index="2023-02-*", body=query)
print(resp)
# print("Got %d Hits:" % resp['hits']['total']['value'])
# for hit in resp['hits']['hits']:
#     print("%(timestamp)s %(author)s: %(text)s" % hit["_source"])

# mapping = es.indices.get_mapping(index="2023-02-29")

# Print mapping
# print(mapping)