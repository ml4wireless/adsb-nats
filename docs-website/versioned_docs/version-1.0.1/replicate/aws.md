---
sidebar_position: 2
---

# NATS Setup

<aside>
💡 In the NATS Setup Section, you will be guided through creating a new EKS Cluster, connecting to it, starting a [NATS](http://NATS.io) Server, connecting to it, and finally creating a Network Load Balancer.

</aside>

## 1. Creating a new EKS Cluster

💡 Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. [(source)](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)

### 1) Prerequisites to Download

<aside>
💡 Some of the following information was taken from: [https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)

</aside>

- Eksctl
    
    ![Untitled](/img/aws_7.png)
    
    - [https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)
- kubectl
    
    ![Untitled](/img/aws_1.png)
    
- AWS CLI
    - aws cli installation: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
        - `curl "[https://awscli.amazonaws.com/AWSCLIV2.pkg](https://awscli.amazonaws.com/AWSCLIV2.pkg)" -o "AWSCLIV2.pkg"`
        - `sudo installer -pkg AWSCLIV2.pkg -target /`

### 2) Get Key

- Get Key
    - In the AWS Console:
        - Click your account name in the top right corner → select “Security Credentials” from the drop down menu
        - Create a key for CLI access and download it under **Access keys**  (for CLI, SDK, & API access)

### 3) Assume Role

- In your terminal, configure local AWS access key: `aws configure` and enter in the prompted information

![Untitled](/img/aws_2.png)

- Create a text file called assume-eks-admin-role.txt with the following code
    
    ```bash
    export $(printf "AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s" \
    $(aws sts assume-role \
    --role-arn arn:aws:iam::563060118978:role/eks-admin \
    --role-session-name $USER \
    --query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" \
    --output text))
    ```
    
    1. `cat aws/assume-eks-admin-role.txt` and copy/paste the command in the terminal
        1. Note: if you are having permission issues revisit the Required IAM permissions section above. We had to add our username to **IAM → Roles → eks_admin** as a Trusted Entity 
    2. `aws sts get-caller-identity` 
        1. This should return “arn” = “…:assumed-role/eks-admin”

### 4) Create the cluster in command line

```bash
# Create 3 node Kubernetes cluster
export YOUR_EKS_NAME = <insert your eks cluster name here> # ours is data-pipeline-small-test

eksctl create cluster --name $YOUR_EKS_NAME \
  --nodes 3 \
  --node-type=t3.small \
  --region=us-west-2

# Get the credentials for your cluster
eksctl utils write-kubeconfig --name $YOUR_EKS_NAME --region eu-west-1
```

## 2. Connecting to the new EKS Cluster

1. `cat aws/assume-eks-admin-role.txt` and copy/paste the command in the terminal
2. `aws eks update-kubeconfig -—region us-west-2 -—name $YOUR_EKS_NAME`
    1. ex:`aws eks update-kubeconfig --region us-west-2 --name data-pipeline-small-test`
    2. This connects us to the kubernetes cluster we created
3. `kubectl get nodes` — see the nodes in our newly created cluster
    1. example output:
    
    ![Untitled](/img/aws_3.png)
    

## 3. Starting the NATS Server

<aside>
💡 NATS is an open-source, high-performance messaging system that provides publish-subscribe and request-reply messaging patterns. NATS can help you to build a distributed system that is scalable, flexible, resilient, and performant, making it a popular choice for cloud-native architectures and microservices-based applications (Chat GPT).

</aside>

1. `cat aws/assume-eks-admin-role.txt` and copy/paste the command in the terminal
2. helm install
    - define your TOKEN variable (you will continue to use this often)
    - `sudo -E helm install plane-nats nats/nats -f config/k8s-values.yml --set auth.token=$TOKEN`
    - example output:
        
        ![Untitled](/img/aws_4.png)
        
    - Debugging Help
        - If  you encounter issues, try `helm repo update` and `helm repo list`
        - The default config of nats can be seen in [https://artifacthub.io/packages/helm/nats/nats](https://artifacthub.io/packages/helm/nats/nats)
        - a possibly helpful reference: [https://dev.to/karanpratapsingh/nats-with-kubernetes-3bmc](https://dev.to/karanpratapsingh/nats-with-kubernetes-3bmc)
    - Deleting Nats Server (only if you need to delete/restart it at some point)
        - `kubectl get services`
        - if removing any: use the script `cleanup-k8s.sh` from the repo
            
            ![Untitled](/img/aws_5.png)
            
3. `kubectl apply -f ./server/config/nats-service.yml`
    - should see service `plant-nats`created when you do `kubectl get svc`
    
    ![Untitled](/img/aws_6.png)
    
    - **no `sudo` in this command!**

<aside>
💡 After starting the NATS Server we now have the backbone of our messaging system. We will be connecting messages through different components into the NATS messaging system.

</aside>

## 4. Creating a Network Load Balancer

<aside>
💡 A Network Load Balancer (NLB) is a type of load balancer that operates at the network layer and is used to distribute incoming network traffic across multiple targets, such as EC2 instances, containers, or IP addresses, in order to improve availability, scalability, and performance of your applications or services.

</aside>

<aside>
💡 We need a network load balancer to balance the workload between our three nodes in EKS (Chat GPT).

</aside>

*Some of the following information was taken from [this link](https://docs.nats.io/running-a-nats-service/nats-kubernetes/nats-external-nlb)

1. One-line installer creates a secure cluster named 'nats’
    - Run the following: `curl -sSL [https://raw.githubusercontent.com/nats-io/k8s/master/setup.sh](https://raw.githubusercontent.com/nats-io/k8s/master/setup.sh) | sh`
2. Create AWS Network Load Balancer service
    
    ```bash
    echo '
    apiVersion: v1
    kind: Service
    metadata:
      name: nats-nlb
      namespace: default
      labels:
        app: nats
      annotations:
        service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
    spec:
      type: LoadBalancer
      externalTrafficPolicy: Local
      ports:
      - name: nats
        port: 4222
        protocol: TCP
        targetPort: 4222
      selector:
        app.kubernetes.io/name: nats
    ' | kubectl apply -f -
    
    ```
    
3. Check that it worked 
    - Run the following: `kubectl get svc nats-nlb -o wide`
        - The output should look like:
            
            ```bash
            NAME       TYPE           CLUSTER-IP      EXTERNAL-IP                                                                     PORT(S)          AGE    SELECTOR
            nats-nlb   LoadBalancer   10.100.67.123   a18b60a948fc611eaa7840286c60df32-9e96a2af4b5675ec.elb.us-east-2.amazonaws.com   4222:30297/TCP   151m   app=nats
            ```
            
    - test connection to the load balancer endpoint (check if port is open from our side) with: `netcat -zv [EXTERNAL-IP] 4222`
    

<aside>
💡 Now that you have done some of the building blocks let’s test and see if we can send and receive messages!

</aside>

## 5. Test Sending & Receiving Messages

- Create a NATS context
    - “The `nats` CLI supports multiple named configurations. We refer to these configurations as *“context”*. In these contexts, we can configure the server, credentials, certs, and much more.” Check out [this link](https://dev.to/karanpratapsingh/introduction-to-nats-cli-33nk) for more information (Context section)
    - `nats context save **[CONTEXT-NAME]** --server=nats://**[TOKEN]@[EXTERNAL-IP]:4222**`
        - ex: `nats context save my-context --server=nats://token@a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com:4222`
    - `nats context select **[CONTEXT-NAME]**`

- Test out publishing a test message and subscribing to receive that message
    - subscribe:
        - command format: `nats sub -s **nats://[TOKEN]@[EXTERNAL-IP]:4222** ">"` ****(we use token to do authentication so we need this format)
        - ex: `nats sub -s nats://token@[a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com](http://a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com/):4222 “>”`
        - or if you’ve already set & selected your NATS context simply use the command: `nats sub ">"`
        - you should see something like the following as output: *************************************************************(note: message will be received after also doing the pub step below)*************************************************************
            
            ```bash
            18:18:38 Subscribing on > 
            [#1] Received on "test.foo"
            >bar
            ```
            
- pub:
    - ex: `nats pub -s nats://token@[a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com](http://a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com/):4222 test.foo ">bar"`
    - or if you’ve already set & selected your NATS context simply use the command: `nats pub ">"`
    - you should see something like the following as output:
        
        ```bash
        18:19:59 Published 4 bytes to "test.foo"
        ```
        

---

🐞 Debugging Help: [https://docs.nats.io/running-a-nats-service/configuration/clustering/jetstream_clustering/troubleshooting](https://docs.nats.io/running-a-nats-service/configuration/clustering/jetstream_clustering/troubleshooting)