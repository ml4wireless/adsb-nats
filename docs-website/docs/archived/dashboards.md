---
sidebar_position: 104
---
# Dashboards - Prometheus & Grafana [OLD]

[Dashboards](https://www.notion.so/Dashboards-200c259edbda441bb8b9a80d56f28849)

---

⭐️ **Grafana Endpoint (Dashboards):** [http://a524500a80d314a64953fb349920eceb-1736286925.us-west-2.elb.amazonaws.com](http://a524500a80d314a64953fb349920eceb-1736286925.us-west-2.elb.amazonaws.com/)

⭐️ **Prometheus Endpoint:** [http://a1e737e99fe0c48bd8f88445fe7650f0-1254458216.us-west-2.elb.amazonaws.com/](http://a1e737e99fe0c48bd8f88445fe7650f0-1254458216.us-west-2.elb.amazonaws.com/)

---

## Overview

- traffic per topic basis - see if someone is messing up

**Prometheus** is a monitoring system and time-based database. We use Prometheus to monitor and gather our system’s status, storing it in its database. The data will then be exported to Grafana for graphical analysis. 

The goal of using Prometheus and Grafana is to create a **dashboard** for system administrators to check the system status.

## Prometheus

### Installation

We use Prometheus Helm chart to install the app into the Kubernetes cluster, the `values.yaml` file is version controlled on [https://github.com/ml4wireless/adsb-nats/tree/dashboard/dashboard](https://github.com/ml4wireless/adsb-nats/tree/dashboard/dashboard)

And the detailed installation step can be seen in this blog:

[https://sumayyakhatoon26.medium.com/deploying-prometheus-and-grafana-with-helm-c1c20e86a234](https://sumayyakhatoon26.medium.com/deploying-prometheus-and-grafana-with-helm-c1c20e86a234)

**One thing important to modify is that for Kubernetes service to be exported, we should set its type as `LoadBalancer` rather than `NodePort` , so that the AWS EKS will automatically create an external URL for that service to be accessed from outside.**

### Adding new exporter

The Prometheus Helm Chart provides a few built-in exporters like `node-exporter` . To add customized exported like `nats-exporter` , we need to modify the `values.yaml` file accordingly.

## Grafana

### Installation:

We also use Helm chart to install Grafana, see the installation part of Prometheus

### Login

Currently, everyone use administer account 

**Username:** admin

**Password:** run the command line below to get the password

```
kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

### Dashboard Template

Grafana dashboard is the main displaying page for exporting time-based data in a graphical way. There are many ready-made dashboard template to use. E.G. To display Nats data, we use template

[https://grafana.com/grafana/dashboards/2279-nats-servers/](https://grafana.com/grafana/dashboards/2279-nats-servers/)