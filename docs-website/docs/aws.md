---
sidebar_position: 103
---
# AWS [OLD]

## general notes

- [Link to AWS portal](https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#Home:)
- upper right - change location to upper west
- *message from josh—* you should all have the access required to run `eksctl`now. Please create an access key and setup the aws cli, then install eksctl and verify that you can see the `nats-k8s-cluster`cluster.

## aws cli & eksctl

- aws cli installation: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
    - curl "[https://awscli.amazonaws.com/AWSCLIV2.pkg](https://awscli.amazonaws.com/AWSCLIV2.pkg)" -o "AWSCLIV2.pkg"
    - sudo installer -pkg AWSCLIV2.pkg -target /
- eksctl installation: [https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html)

## Get access key for AWS

- top right → “Security Credentials”
- Download the key under **Access keys for CLI, SDK, & API access**
- Configure local AWS access key: `aws configure`

## Assume Role guide

1. `cat aws/assume-eks-admin-role.txt` and copy/paste the command in the terminal
2. `aws sts get-caller-identity` 
    1. This should return “arn” = “…:assumed-role/eks-admin”
3. `aws eks update-kubeconfig --region us-west-2 --name **data-pipeline-small**`
    1. This is used for updating kubeconfig locally
    2. find the cluster name in aws console > eks panel
4. `kubectl get nodes` etc. → to check