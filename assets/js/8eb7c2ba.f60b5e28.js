"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:4},o="Annotator",l={unversionedId:"replicate/annotator",id:"replicate/annotator",title:"Annotator",description:"The Annotator is a module within our data pipeline that is responsible for enriching the processed radio data with additional meaningful information. For our application, we downloaded data from the FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database and used it to add additional information to each packet.",source:"@site/docs/replicate/annotator.md",sourceDirName:"replicate",slug:"/replicate/annotator",permalink:"/adsb-nats/next/replicate/annotator",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Client",permalink:"/adsb-nats/next/replicate/client"},next:{title:"Storage & Search Engine",permalink:"/adsb-nats/next/replicate/elastic"}},s={},c=[{value:"1. Local: Containerizing &amp; Running the Annotator",id:"1-local-containerizing--running-the-annotator",level:2},{value:"1. Prep for Containerization",id:"1-prep-for-containerization",level:3},{value:"2. Containerization &amp; Running",id:"2-containerization--running",level:3},{value:"Extras",id:"extras",level:3},{value:"Additional Useful Commands",id:"additional-useful-commands",level:4},{value:"2. AWS: Containerizing &amp; Running the Annotator",id:"2-aws-containerizing--running-the-annotator",level:2},{value:"Containerization",id:"containerization",level:3},{value:"1. Create &amp; Set up an EC2 Instance for the Annotator",id:"1-create--set-up-an-ec2-instance-for-the-annotator",level:4},{value:"2. Collect the Annotator Data into an S3 Bucket",id:"2-collect-the-annotator-data-into-an-s3-bucket",level:4},{value:"Create and Store Data in S3 Bucket",id:"create-and-store-data-in-s3-bucket",level:5},{value:"Allowing the Annotator EC2 to access the S3 Bucket",id:"allowing-the-annotator-ec2-to-access-the-s3-bucket",level:5},{value:"3. Prepare for Containerization \u2014 On Local Machine",id:"3-prepare-for-containerization--on-local-machine",level:4},{value:"4. Transfer files from Local Machine to EC2 Instance",id:"4-transfer-files-from-local-machine-to-ec2-instance",level:4},{value:"Running",id:"running",level:3},{value:"5. Running the Containerized Annotator on AWS",id:"5-running-the-containerized-annotator-on-aws",level:4},{value:"Extras",id:"extras-1",level:3},{value:"Additional Useful Commands",id:"additional-useful-commands-1",level:4},{value:"Debugging Help",id:"debugging-help",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"annotator"},"Annotator"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Annotator is a module within our data pipeline that is responsible for enriching the processed radio data with additional meaningful information. For our application, we downloaded data from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database")," and used it to add additional information to each packet. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This documentation will take you through the process of containerizing the annotator and running it locally, and then migrating it to AWS. If you aren\u2019t sure what that means no worries there will explanations at each step. ")),(0,i.kt)("h2",{id:"1-local-containerizing--running-the-annotator"},"1. Local: Containerizing & Running the Annotator"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Terms:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Containerizing")," applications provides portability, allowing them to run consistently across different environments, and enables efficient resource utilization and scalability, making it easier to deploy, manage, and scale applications effectively. Containerizing applications using Docker provides additional advantages such as simplified packaging, distribution, and deployment. ",(0,i.kt)("strong",{parentName:"p"},"Docker")," allows for easy creation and management of containers, making it a popular choice for containerization due to its comprehensive tooling and ecosystem support.")),(0,i.kt)("p",null,"\ud83d\udca1 In this section will be containerizing and running the annotator program locally (on a personal computer and not in      AWS). This will essentially take the data packets from the client program and supplement them with additional information from another data source (For our airplane tracker application, we downloaded data from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database")," and used it to append additional information to each packet)."),(0,i.kt)("h3",{id:"1-prep-for-containerization"},"1. Prep for Containerization"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the annotator\u2019s directory (",(0,i.kt)("inlineCode",{parentName:"li"},"aircraft-annotator"),") within the cloned repo. This entire section of setup will be performed within this directory."),(0,i.kt)("li",{parentName:"ul"},"Download the latest \u201cYearly Aircraft Registration Database\u201d data from  ",(0,i.kt)("a",{parentName:"li",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database")," directly into the ",(0,i.kt)("inlineCode",{parentName:"li"},"aircraft-annotator")," directory. Unzip the downloaded files & run\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"cleanup-data.sh")," to clean the data.")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the following commands to install ",(0,i.kt)("inlineCode",{parentName:"p"},"pipreqs")," (if not already installed) and auto-generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install pipreqs\npipreqs \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the annotator\u2019s directory as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"FROM python:3.8-slim-buster\n\nWORKDIR /aircraft-annotator/\n\nCOPY . .\n\n# install required dependencies\nRUN pip3 install -r requirements.txt\n\nCMD python3 annotator.py .\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"build-docker.sh"),", a script for later use in building the docker image as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/sh\n# script to build the nats-annotator image\ndocker build -t nats-annotator .\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"run-docker.sh"),", a script for later use in running the docker image, as below. Be sure to update the contents of the NATS_HOST and TOKEN as appropriate."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'TODO: UPDATE\n#!/bin/sh\n\nexport NATS_HOST="<insert nats_host here>"\n    #in this format: nats://<TOKEN>@<AWS-NLB-External-IP>:4222\n        #ex:nats://TOKEN@a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222\n\nexport TOKEN="<insert token here>"\n\ndocker run --network "host" --privileged -v /dev/bus/usb/dev/bus/usb \\\n    -e NATS_HOST=${NATS_HOST} \\\n    -e TOKEN=${TOKEN} \\\n    nats-annotator:latest\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See another example here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c8"},"https://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c8")),(0,i.kt)("li",{parentName:"ul"},"Note: If using the minikube setup outlined in the Set Up phase of this documentation along with a Mac machine, you may need to define the NATS_HOST in the following alternative way: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export NATS_HOST=${NATS_HOST:-"docker.for.mac.host.internal:<port>"} \nexport TOKEN=${TOKEN:-"<token>"}\n')))))),(0,i.kt)("h3",{id:"2-containerization--running"},"2. Containerization & Running"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build a Docker image for the annotator (image name ",(0,i.kt)("inlineCode",{parentName:"li"},"nats-annotator"),") using the build script we created earlier: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Note:")," If it is your first time running the script, run ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x run-docker.sh")," to make it executable",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build-docker.sh\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Optional \u2014 Verify that the Docker build worked:")," use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker images")," to list all available images, and make sure that the new ",(0,i.kt)("inlineCode",{parentName:"li"},"nats-annotator")," image is listed"))),(0,i.kt)("li",{parentName:"ul"},"Use the script ",(0,i.kt)("inlineCode",{parentName:"li"},"run-docker.sh")," we created earlier to start the execution of the container:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Note:")," If it is your first time running the script, run ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x run-docker.sh")," to make it executable",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./run-docker.sh\n")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'\ud83d\udca1 You should next see continuous print statements/logs from the annotator program like "Published annotation ...". \n')),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\ud83d\udca1 Now lets test our local containerized annotator with messages from the NATS server:\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export NATS_HOST="<insert nats_host here>"\nexport TOKEN="<insert token here>"\n\n# try subscribing to the stream of annotated data and you should get messages from the annotator on your console\nnats sub -s\xa0$NATS_HOST "plane.loc.annotated"\n')),(0,i.kt)("p",null,"Example Output:\n",(0,i.kt)("img",{alt:"Example output",src:a(7350).Z,width:"1772",height:"714"})),(0,i.kt)("h3",{id:"extras"},"Extras"),(0,i.kt)("h4",{id:"additional-useful-commands"},"Additional Useful Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Additional Docker Commands",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# **NOTE #to stop running \ndocker stop <container_id>  #find container id -> docker ps\n")))),(0,i.kt)("h2",{id:"2-aws-containerizing--running-the-annotator"},"2. AWS: Containerizing & Running the Annotator"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Annotator is a module within our data pipeline that is responsible for enriching the processed radio data with additional meaningful information. For our application, we downloaded data from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database")," and used it to add additional information to each packet. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We will now be running the containerized Annotator on an AWS EC2 instance to integrate it with the rest of our NATS pipeline backbone. Running the Annotator in the cloud also ensures scalability to handle varying workloads and high availability by leveraging the cloud infrastructure, while running it locally limits scalability and may result in resource constraints.")),(0,i.kt)("h3",{id:"containerization"},"Containerization"),(0,i.kt)("h4",{id:"1-create--set-up-an-ec2-instance-for-the-annotator"},"1. Create & Set up an EC2 Instance for the Annotator"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"An ",(0,i.kt)("strong",{parentName:"p"},"EC2 instance")," is a virtual server in the cloud provided by Amazon Web Services (AWS) as part of their Elastic Compute Cloud (EC2) service. It offers scalable computing capacity with configurable resources such as CPU, memory, storage, and networking capabilities, allowing users to deploy and run applications on virtual machines in the AWS cloud.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sign in to your AWS console, navigate to the EC2 service and create a new EC2 instance called ",(0,i.kt)("inlineCode",{parentName:"p"},"annotator-server")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For the AMI & Instance type, we used ",(0,i.kt)("inlineCode",{parentName:"li"},"Amazon Linux")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"t3.small")," respectively, with configurations as below:\n",(0,i.kt)("img",{alt:"Config 1",src:a(4277).Z,width:"1060",height:"942"}),(0,i.kt)("img",{alt:"Config 2",src:a(807).Z,width:"1052",height:"336"})),(0,i.kt)("li",{parentName:"ul"},"You also will have to add a Key Pair, Security Group, and any other EC2 specifications. Reference our Security Group configurations below if needed-",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We created a new security group for the instance that allows port 22 (SSH) (and HTTP/HTTPS but not directly needed)"),(0,i.kt)("li",{parentName:"ul"},"Screenshots of the Inbound and Outbound rules for our Security Group are below:\n",(0,i.kt)("img",{alt:"Security Group Config 1",src:a(3643).Z,width:"2100",height:"508"}),(0,i.kt)("img",{alt:"Security Group Config 2",src:a(7150).Z,width:"2096",height:"388"})),(0,i.kt)("li",{parentName:"ul"},"Make sure to link this Security Group with the ",(0,i.kt)("inlineCode",{parentName:"li"},"annotator-server")," EC2 instance within its settings."))),(0,i.kt)("li",{parentName:"ul"},"Finally for the instance\u2019s storage allowance, we kept the default setting as below:\n",(0,i.kt)("img",{alt:"Storage Config 1",src:a(6961).Z,width:"1056",height:"434"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Proceed to install and set up docker on the EC2 instance:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# in EC2 terminal\n# based on: https://www.cyberciti.biz/faq/how-to-install-docker-on-amazon-linux-2/\n\nsudo yum update\nsudo yum install docker\nsudo usermod -a -G docker ec2-user\nid ec2-user\nnewgrp docker\nsudo systemctl enable docker.service\nsudo systemctl start docker.service\nsudo systemctl status docker.service\n")))),(0,i.kt)("h4",{id:"2-collect-the-annotator-data-into-an-s3-bucket"},"2. Collect the Annotator Data into an S3 Bucket"),(0,i.kt)("p",null,"\ud83d\udca1 ",(0,i.kt)("em",{parentName:"p"},"In this section, we will go over how to move the locally downloaded files of data that are needed by the annotator into an S3 bucket to Reduce Docker Image Size. This way we do not need to store this data in our AWS EC2 instance, and it can be downloaded upon the execution of the container.")),(0,i.kt)("h5",{id:"create-and-store-data-in-s3-bucket"},"Create and Store Data in S3 Bucket"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the S3 service within the AWS console and create a new S3 bucket ",(0,i.kt)("inlineCode",{parentName:"li"},"aircraft-annotator-data")),(0,i.kt)("li",{parentName:"ul"},"Download the latest \u201cYearly Aircraft Registration Database\u201d data from  ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database"))," into any other directory on your computer (NOT the  ",(0,i.kt)("inlineCode",{parentName:"li"},"aircraft-annotator")," directory since we want this directory to be lightwright)."),(0,i.kt)("li",{parentName:"ul"},"Unzip the downloaded files & run\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"cleanup-data.sh")," to clean the data. Upload the CLEANED data files into the S3 bucket we just created."),(0,i.kt)("li",{parentName:"ul"},"Follow the instructions in ",(0,i.kt)("a",{parentName:"li",href:"https://www.notion.so/Annotator-7a98b28d187841398f0f69e8c32261b1"},"this link")," to make the data public and accessible.")),(0,i.kt)("h5",{id:"allowing-the-annotator-ec2-to-access-the-s3-bucket"},"Allowing the Annotator EC2 to access the S3 Bucket"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create an IAM role"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Look at ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-access-s3-bucket/"},"this link")," to learn how to give EC2 access to S3"),(0,i.kt)("li",{parentName:"ul"},"Go to the EC2 instance page \u2192 Actions \u2192  Security \u2192 Modify IAM role and add the IAM role created"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create an IAM Policy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Look at ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/security/writing-iam-policies-how-to-grant-access-to-an-amazon-s3-bucket/"},"this link")," to write a policy for s3 access"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Verify"))," that the EC2 and s3 bucket are connected with the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls s3://aircraft-annotator-data \n\n# output should be something like:\n# PRE ReleasableAircraft/\n")))),(0,i.kt)("h4",{id:"3-prepare-for-containerization--on-local-machine"},"3. Prepare for Containerization \u2014 On Local Machine"),(0,i.kt)("p",null,"\ud83d\udca1 ",(0,i.kt)("em",{parentName:"p"},"Complete this section on your local machine!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate to the annotator\u2019s directory (",(0,i.kt)("inlineCode",{parentName:"p"},"aircraft-annotator"),"). This entire section of setup will be performed within this directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the following commands to install ",(0,i.kt)("inlineCode",{parentName:"p"},"pipreqs")," (if not already installed) and auto-generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pipreqs\npipreqs \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the annotator\u2019s directory as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"FROM python:3.8-slim-buster\n\nWORKDIR /aircraft-annotator/\n\nCOPY . .\n\n# install required dependencies\nRUN pip3 install -r requirements.txt\nRUN pip3 install awscli\n\n# download annotator data from s3 bucket and execute annotator program\nCMD aws s3 cp s3://aircraft-annotator-data/ReleasableAircraft . --recursive; python3 annotator.py .\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"build-docker.sh"),", a script for later use in building the docker image as below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n# script to build the nats-annotator image\ndocker build -t nats-annotator .\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"run-docker.sh"),", a script for later use in running the docker image, as below. Be sure to update the contents of the NATS_HOST and TOKEN as appropriate."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'TODO: UPDATE\n#!/bin/sh\n\nexport NATS_HOST="<insert nats_host here>"\n    #in this format: nats://<TOKEN>@<AWS-NLB-External-IP>:4222\n        #ex:nats://TOKEN@a15d11836d0644f6da0d09cbd81fae4f-949e37ea0352e6ad.elb.us-west-2.amazonaws.com:4222\n\nexport TOKEN="<insert token here>"\n\ndocker run --network "host" --privileged -v /dev/bus/usb/dev/bus/usb \\\n    -e NATS_HOST=${NATS_HOST} \\\n    -e TOKEN=${TOKEN} \\\n    nats-annotator:latest\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See another example here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c8"},"https://github.com/ml4wireless/adsb-nats/blob/1ec407770eaef76e089661c8")),(0,i.kt)("li",{parentName:"ul"},"Note: If using the minikube setup outlined in the Set Up phase of this documentation along with a Mac machine, you may need to define the NATS_HOST in the following alternative way: ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export NATS_HOST=${NATS_HOST:-"docker.for.mac.host.internal:<port>"} \nexport TOKEN=${TOKEN:-"<token>"}\n')))))),(0,i.kt)("h4",{id:"4-transfer-files-from-local-machine-to-ec2-instance"},"4. Transfer files from Local Machine to EC2 Instance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Delete any FAA data files from the local ",(0,i.kt)("inlineCode",{parentName:"p"},"aircraft-annotator")," directory, now that they are stored and retrievable from the ",(0,i.kt)("strong",{parentName:"p"},"S3 bucket"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find and record your ",(0,i.kt)("inlineCode",{parentName:"p"},"annotator-server")," EC2\u2019s hostname from the AWS Console"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Go to this instance\u2019s page in the AWS Console and click \u2018Connect\u2019. On the \u201cConnect to Instance\u201d page, navigate to the \u201cSSH Client\u201d tab and copy the EC2 hostname from command at the bottom, under \u201cExample\u201d")),(0,i.kt)("li",{parentName:"ul"},"for example:\n",(0,i.kt)("img",{alt:"hostname example",src:a(3127).Z,width:"1304",height:"122"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use SCP to copy the local ",(0,i.kt)("inlineCode",{parentName:"p"},"aircraft-annotator")," directory to the EC2 instance:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# in LOCAL terminal copy local files into EC2 using SCP - replace key filename, paths, ec2 hostname as needed \nscp -i <key_filename> -r <local_path_to_aircraft-annotator_directory> <ec2_hostname>:~/annotator-dir\n\n#---------- examples ---------------------------\n\n# scp -i annotator-new.pem -r /Users/johndoe/Documents/GitHub/adsb-nats/aircraft-annotator ec2-user@ec2-35-86-207-137.us-west-2.compute.amazonaws.com:~/annotator-dir\n")))),(0,i.kt)("h3",{id:"running"},"Running"),(0,i.kt)("h4",{id:"5-running-the-containerized-annotator-on-aws"},"5. Running the Containerized Annotator on AWS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to the ",(0,i.kt)("inlineCode",{parentName:"li"},"annotator-server")," EC2 instance via SSH",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"For instructions, go to this instance\u2019s page in the AWS Console and click \u2018Connect\u2019. On the \u201cConnect to Instance\u201d page, navigate to the \u201cSSH Client\u201d tab and copy the command at the bottom, under \u201cExample\u201d")))),(0,i.kt)("li",{parentName:"ul"},"Build a Docker image for the annotator (image name ",(0,i.kt)("inlineCode",{parentName:"li"},"nats-annotator"),") using the build script we created earlier:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Note:")," If it is your first time running the script, run ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x [run-docker.sh](http://run-docker.sh)")," to make it executable",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./build-docker-aws.sh\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Optional Check"),": use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker images")," to list all available images, and make sure that the new ",(0,i.kt)("inlineCode",{parentName:"li"},"nats-annotator")," image is listed"))),(0,i.kt)("li",{parentName:"ul"},"Create a screen session to use to keep the annotator program ",(0,i.kt)("strong",{parentName:"li"},"executing in the background"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"otherwise it will stop annotating the data the second you exit the program",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# in EC2 terminal\nscreen -S <session_name>\n"))))),(0,i.kt)("li",{parentName:"ul"},"Use the script ",(0,i.kt)("inlineCode",{parentName:"li"},"run-docker.sh")," we created earlier to start the execution of the container:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add in your token in the run-docker.sh by using vim commands in the EC2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Note:")," If it is your first time running the script, run chmod +x run-docker.sh to make it executable",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./run-docker.sh\n"))),(0,i.kt)("li",{parentName:"ul"},"You should first see confirmation of the annotator data being downloaded from the s3 bucket"),(0,i.kt)("li",{parentName:"ul"},'You should next see continuous print statements/logs from the annotator program like "Published annotation ..."'))),(0,i.kt)("li",{parentName:"ul"},"Detach the Screen session ",(0,i.kt)("em",{parentName:"li"},"(keeps the annotator program running in the background even if you exit the terminal)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"press ",(0,i.kt)("inlineCode",{parentName:"li"},"ctrl + a + d")," to detach it -> you are now done (you may have to try doing this multiple times for it to work)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Optional Check: To make sure the screen session was created and detached, use the command ",(0,i.kt)("inlineCode",{parentName:"em"},"screen -list"),". You should see something like this-"),(0,i.kt)("img",{alt:"screen example",src:a(5522).Z,width:"1056",height:"204"}))))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\ud83d\udca1 Now lets test our containerized annotator with messages from the NATS server. Run the following command on your local terminal to hopefully see the stream of annotated messages from the Annotator module working on cloud."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export NATS_HOST="<insert nats_host here>"\nexport TOKEN="<insert token here>"\n\n# try subscribing to the stream of annotated data and you should get messages from the annotator on your console\nnats sub -s\xa0$NATS_HOST "plane.loc.annotated"\n')),(0,i.kt)("p",null,"Example Output:\n",(0,i.kt)("img",{alt:"Example Output 2",src:a(133).Z,width:"1772",height:"714"})),(0,i.kt)("h3",{id:"extras-1"},"Extras"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marvelous-mailbox-230.notion.site/AWS-Debugging-Help-4d6aa9e3ca1243c8bdcd993bd125eb1f"},"AWS Debugging Help")),(0,i.kt)("h4",{id:"additional-useful-commands-1"},"Additional Useful Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Additional Docker Commands"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# **NOTE #to stop running \ndocker stop <container_id>  #find container id -> docker ps\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Additional Screen Commands "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#SCREEN DEBUGGING HELP: \n\nscreen -list # list sessions\n\n# re-attach to a detached session\nscreen -r session_name # run if needed\n\n#kill all sessions: \npkill screen\n\n# kill a session:\nscreen -r <session_name> # to first re-attach to the screen session\nThen press `ctrl + a` and then `k` and press `y` when it asks if you really want to kill the session\n")))),(0,i.kt)("h2",{id:"debugging-help"},"Debugging Help"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marvelous-mailbox-230.notion.site/Instructions-to-Restart-Annotator-on-AWS-489d3acb4a554be7ae0b5d8c56c87d0f"},"Instructions to Restart Annotator on AWS")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marvelous-mailbox-230.notion.site/AWS-Debugging-Help-4d6aa9e3ca1243c8bdcd993bd125eb1f"},"AWS Debugging Help")))}d.isMDXComponent=!0},7350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_1-5c91d227ef11511fb35330a9400d714d.png"},4277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_2-5c9b01b4d077470d1cda24c296a1bf39.png"},807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_3-9c8370f02888e2ebc35c3f317ea731a9.png"},3643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_4-179b17e5321ca88f9a0ae826eb607ef6.png"},7150:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_5-47ac75137fe2758596817268558b2ac5.png"},6961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_6-53302423bb85e3aeb3cc34fbe163ee21.png"},3127:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_7-84484b068b66808c359591673b033a83.png"},5522:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_8-cf55eee5520d86c97ffab75ff47b8be7.png"},133:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/annotator_9-5c91d227ef11511fb35330a9400d714d.png"}}]);