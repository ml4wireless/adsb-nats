---
sidebar_position: 1
---

# Overview

### Table of Contents

# 1. Set up the AWS Environment

> *Learn how to set up the core backbone of the pipeline—a kubernetes cluster, NATS server, and load balancer, all within a distributed AWS cloud environment—and test sending/receiving your first messages!*
> 

[AWS Setup](./aws)

# 2. Set up the Client Component

> *Set up the Client program component in the pipeline, which is responsible for reading raw spectrum data packets from a radio device, and unpacking/processing them into a more human-readable format. The client program is highly customizable to your own application. In the case of our airplane tracker application, it specifically processes ADS-B packets using the dump1090 software which decodes the data into a more human-readable format, in this case a JSON file.*
> 

#### Containerize & Run the Client Program

 Note: The following instructions to run the containerized client can be utilized by anyone with their own Software Defined Radios to collect broadcasted data in their geographical location and input this data into your pipeline. For our example airplane tracker, we had an associate in Colorado follow these instructions and as a result are able to see the planes in Colorado as well as our own location on our final airplane tracker web application.* 

[Instructions to Run the Containerized Client](./client)

# 3. Set up the Annotator Component

> *The Annotator is a module within our data pipeline that is responsible for enriching the processed radio data with additional meaningful information. For our application, we downloaded data from the [FAA’s (Federal Aviation Administration) Releasable Aircraft Database](https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download) and used it to add additional information to each packet.*
> 

[Annotator](./annotator)

# 4. Set up Elasticsearch & Kibana

> *ElasticSearch (ES) is a distributed search and analytics engine that provides database-like functionality to store, search, and/or analyze real-time data. It consumes all the annotated data from the pipeline and serves multiple purposes–including monitoring the Client status, storing the data, and finally serving as a persistent database to the backend flask server.*
> 

[Elasticsearch & Kibana](./elastic)

# 5. Set up the Backend Web Server

> *The Backend Web Server’s purpose is to fetch data using a query of preference from ElasticSearch, and pass the resulting data to the frontend application. We chose to use the Python micro-web framework Flask for the Backend Web Server since Flask is simple and easily integrates with other features. The Flask web server also provides multiple API endpoints for the web application to access the data. By designing a lightweight and customizable web server, we provide a framework that users can easily modify or extend to serve different applications.*
> 

[Webserver & Backend](./backend)

# 6. Set up the Frontend Application

> *The Frontend component functions to display the completely processed data from the pipeline in a specific form or application which the user had in mind for visualizing/utilizing the radio spectrum data. When a visitor interacts with the frontend web application, the application sends an HTTP request to the Flask web server. As described above, the web server in turn queries ElasticSearch, and finally sends the relevant information back to the frontend, where the user interface is updated accordingly.*
> 

[Frontend](./frontend)

# 7. Set up the System Health Dashboard

> *To monitor our pipeline, we built a system health dashboard for users and system administrators to check the pipeline status. We decided to use a combination of two tools– Prometheus and Grafana–since they work well together and are easily integrable into the rest of the NATS framework. Prometheus is a monitoring system and time-based database, which is paired with Grafana for graphical analysis of the collected metrics.*
> 

[Dashboards](./dashboard)

# 8. Perform Stress Testing on the Pipeline

> Stress testing is a type of testing used to evaluate the stability and robustness of a system or application under high-stress conditions, such as heavy load or limited resources.
> 

[Stress Testing](./stress_test)

# 9. Great Job!

The final product proves that an end-to-end pipeline can be created in an affordable and accessible manner without the need for large-scale resources. The stress testing has proved that this pipeline is robust, lightweight, and portable, to allow users to efficiently process and analyze spectrum data. 

We hope that our pipeline has the potential to democratize access to spectrum data and enable a broader range of stakeholders to leverage this valuable resource for their own purposes.

---

# Potential Future Work

1. There are several Machine Learning (ML) algorithms that can be utilized to improve our pipeline. For example, ML can be utilized for an anomaly detection task to filter out potential malicious or inaccurate data. Elasticsearch provides us with ML APIs to enable this, allowing for the creation of custom layers on top of our current pipeline.
2. Furthermore, when processing high-throughput data at scale, there are limitations to what messaging systems like NATS can handle on their own. Alternative messaging frameworks like ZeroMQ or nanomsg can address the scaling needs as they offer advanced features like proxy servers that can help to alleviate the limitations of NATS. By doing so, the system can benefit from the scalability and performance of these messaging systems while still preserving the reliability and message delivery guarantees of NATS.
3. Additional Stress Testing can be performed to test the limits of the pipeline
