---
sidebar_position: 4
---
# Elasticsearch & Kibana

*ElasticSearch (ES) is a distributed search and analytics engine that provides database-like functionality to store, search, and/or analyze real-time data. This is a core component in our pipeline that comes sequentially after the Annotator. It consumes all the annotated data from the pipeline and serves multiple purposes–including monitoring the Client status, storing the data, and finally serving as a persistent database to the backend flask server.*

## Install ElasticSearch

We now showing how to install standalone Elasticsearch on EC2 instances. 

> For large-scale production use case, it is better to install distributed cluster. We don’t cover that settings for now.
> 

Before installing the ES, we should make sure that the system **satisfies the requirements.**

1. The EC2 instance has at least 8GiB of memory, and allocate more than 4G to ES container
2. Modify the `vm_map_count` according to:

[Elasticsearch: Max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]](https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc)

Then install the ES according to the:

[Install Elasticsearch with Docker | Elasticsearch Guide [8.6] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html)

After installation, make sure we get the elasticsearch user password, certificate(`http_ca.crt`), and enrollment token.

If not, we can log into the container and use tools below to get the credentials again:

`/bin/elasticsearch-create-enrollment-token` : generate new enrollment token
`/bin/elasticsearch-reset-password`: reset the password 

## Configure ElasticSearch Cluster

Elasticsearch can be configured by setting `elasticsearch.yml`, which has been mounted from host machine to the container. In practice, not changing any default config is enough for tutorial use, but when it comes to production, there are multiple settings that need to be considered carefully.

[Configuring Elasticsearch | Elasticsearch Guide [8.6] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html)

We can also use API to configure a running Elasticsearch instance  

[Cluster update settings API | Elasticsearch Guide [8.6] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-update-settings.html)

## Install Kibana

Kibana is the visualization tool for Elasticsearch.

Also, we install Kibana with Docker container.

[Install Kibana with Docker | Kibana Guide [8.6] | Elastic](https://www.elastic.co/guide/en/kibana/8.6/docker.html)

Start from **Run Kibana on Docker for development** session, step 3. After installation, we use the previous user credentials and enrollment token to use the kibana.

## Configure Index

The **index** is an ES-specific name, just like a table in a Relational database or a collection in a SQL database. Because Elasticsearch store its data in local storage in this standalone settings, we must set up proper **retention policy** to automatically delete old data.  

Before sending data to the Elasticsearch cluster, we may want to configure the upcoming index property. (i.e. the index created by the new data), in minimum settings, we care about two things.

1. Data searchability
2. Data Retention

First we create a index lifecycle policy:

**Kibana → Stack Management → Index Lifecycle Policies** 

![Untitled](/img/elastic_1.png)

The choice of retention days should base on the actual storage capacity of the server that ES is in. A good practice is to observe the total size of index in a period of time.

Set the retention policy as we like, name it `default-retention-policy` then go to 

**Kibana → Stack Management → Index Management → Index Templates**

We create an index template, choose a name, set index patterns to be `2023-*-*` ,`client status`

Later on if create any index that matches the pattern, the ES will provision the index according to our index template. 

On index settings page, paste the json

```yaml
{
  "index": {
    "lifecycle": {
      "name": "default-retention-policy"
    },
    "max_result_window": "2000000"
  }
}
```

On Mappings page, paste the json

```yaml
{
  "properties": {
    "time": {
      "type": "date"
    }
  }
}
```

Other settings remain default or blank, finish creation.

## Send data to Elasticsearch

After installation and configuration of all the components, we can set up the client and start sending data to Elasticsearch.

In practice, we use Python Elasticsearch Client to manage the connection with ES.

The example can be found at `./elastic/elasticsearch/elastic-client.py`

Also the backend is built on ES Client, in `./elastic/backend/server.py`

---

## Data analysis - Future Work Ideas

Elasticsearch provides many useful tools for analyzing the data on the host and enables us to build ML applications from our pipeline.

For ML application:

Use Cases:

1. AI Ops and Threat Hunting
2. Prediction
3. Search unstructured data

Potential ML applications:

1. Anomaly Detection
    1. Deploy an ML model to detect anomaly events in the incoming data
    2. The model automatically learns patterns from the incoming data 
    3. We can create a dashboard that shows anomaly scores in specific time intervals
    4. Useful in filtering out the data, especially detecting the bot traffic that might mess up the pipeline
    5. Easy to apply and help make the pipeline robust with automation
2.  ML application specifically for airplane locations
    1. Based on airplane markers, predict which stage of the airplane is currently in 
        1. Just take off
        2. Arriving
        3. Still flying
        4. …  

Notes

1. Anomaly Detection: Health maintenance for the whole data pipeline
    1. Support different spectrum application
    2. Not super priority
    3. Testing
2. Specific to airplane data