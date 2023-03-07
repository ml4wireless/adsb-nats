kubectl expose service prometheus-server --type=LoadBalancer --target-port=9090 --name=prometheus-svc

kubectl get secret --namespace default grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

admin / nHfRsZmnd9RvyEQYc12wUyryBsMFNEZsV5gomjnX