"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},i="AWS Setup",l={unversionedId:"replicate/aws",id:"version-1.0.0/replicate/aws",title:"AWS Setup",description:"\ud83d\udca1 In the AWS Setup Section, you will be guided through creating a new EKS Cluster, connecting to it, starting a NATS Server, connecting to it, and finally creating a Network Load Balancer.",source:"@site/versioned_docs/version-1.0.0/replicate/aws.md",sourceDirName:"replicate",slug:"/replicate/aws",permalink:"/adsb-nats/replicate/aws",draft:!1,tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/adsb-nats/replicate/overview"},next:{title:"Annotator",permalink:"/adsb-nats/replicate/annotator"}},o={},p=[{value:"1. Creating a new EKS Cluster",id:"1-creating-a-new-eks-cluster",level:2},{value:"1) Prerequisites to Download",id:"1-prerequisites-to-download",level:3},{value:"2) Get Key",id:"2-get-key",level:3},{value:"3) Assume Role",id:"3-assume-role",level:3},{value:"4) Create the cluster in command line",id:"4-create-the-cluster-in-command-line",level:3},{value:"2. Connecting to the new EKS Cluster",id:"2-connecting-to-the-new-eks-cluster",level:2},{value:"3. Starting the NATS Server",id:"3-starting-the-nats-server",level:2},{value:"4. Creating a Network Load Balancer",id:"4-creating-a-network-load-balancer",level:2},{value:"5. Test Sending &amp; Receiving Messages",id:"5-test-sending--receiving-messages",level:2}],c={toc:p};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-setup"},"AWS Setup"),(0,r.kt)("aside",null,"\ud83d\udca1 In the AWS Setup Section, you will be guided through creating a new EKS Cluster, connecting to it, starting a [NATS](http://NATS.io) Server, connecting to it, and finally creating a Network Load Balancer."),(0,r.kt)("h2",{id:"1-creating-a-new-eks-cluster"},"1. Creating a new EKS Cluster"),(0,r.kt)("p",null,"\ud83d\udca1 Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html"},"(source)")),(0,r.kt)("h3",{id:"1-prerequisites-to-download"},"1) Prerequisites to Download"),(0,r.kt)("aside",null,"\ud83d\udca1 Some of the following information was taken from: [https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html](https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eksctl","  ",(0,r.kt)("img",{alt:"Untitled",src:a(7507).Z,width:"660",height:"96"}),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html")))),(0,r.kt)("li",{parentName:"ul"},"kubectl","  ",(0,r.kt)("img",{alt:"Untitled",src:a(175).Z,width:"646",height:"98"})),(0,r.kt)("li",{parentName:"ul"},"AWS CLI",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aws cli installation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'curl "[https://awscli.amazonaws.com/AWSCLIV2.pkg](https://awscli.amazonaws.com/AWSCLIV2.pkg)" -o "AWSCLIV2.pkg"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo installer -pkg AWSCLIV2.pkg -target /"))))))),(0,r.kt)("h3",{id:"2-get-key"},"2) Get Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get Key",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the AWS Console:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click your account name in the top right corner \u2192 select \u201cSecurity Credentials\u201d from the drop down menu"),(0,r.kt)("li",{parentName:"ul"},"Create a key for CLI access and download it under ",(0,r.kt)("strong",{parentName:"li"},"Access keys"),"  (for CLI, SDK, & API access)")))))),(0,r.kt)("h3",{id:"3-assume-role"},"3) Assume Role"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your terminal, configure local AWS access key: ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure")," and enter in the prompted information")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untitled",src:a(7870).Z,width:"658",height:"268"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a text file called assume-eks-admin-role.txt with the following code",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export $(printf "AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s" \\\n$(aws sts assume-role \\\n--role-arn arn:aws:iam::563060118978:role/eks-admin \\\n--role-session-name $USER \\\n--query "Credentials.[AccessKeyId,SecretAccessKey,SessionToken]" \\\n--output text))\n')),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cat aws/assume-eks-admin-role.txt")," and copy/paste the command in the terminal",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Note: if you are having permission issues revisit the Required IAM permissions section above. We had to add our username to ",(0,r.kt)("strong",{parentName:"li"},"IAM \u2192 Roles \u2192 eks_admin")," as a Trusted Entity "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aws sts get-caller-identity")," ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"This should return \u201carn\u201d = \u201c\u2026:assumed-role/eks-admin\u201d")))))),(0,r.kt)("h3",{id:"4-create-the-cluster-in-command-line"},"4) Create the cluster in command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create 3 node Kubernetes cluster\nexport YOUR_EKS_NAME = <insert your eks cluster name here> # ours is data-pipeline-small-test\n\neksctl create cluster --name $YOUR_EKS_NAME \\\n  --nodes 3 \\\n  --node-type=t3.small \\\n  --region=us-west-2\n\n# Get the credentials for your cluster\neksctl utils write-kubeconfig --name $YOUR_EKS_NAME --region eu-west-1\n")),(0,r.kt)("h2",{id:"2-connecting-to-the-new-eks-cluster"},"2. Connecting to the new EKS Cluster"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cat aws/assume-eks-admin-role.txt")," and copy/paste the command in the terminal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"aws eks update-kubeconfig -\u2014region us-west-2 -\u2014name $YOUR_EKS_NAME")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"ex:",(0,r.kt)("inlineCode",{parentName:"li"},"aws eks update-kubeconfig --region us-west-2 --name data-pipeline-small-test")),(0,r.kt)("li",{parentName:"ol"},"This connects us to the kubernetes cluster we created"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," \u2014 see the nodes in our newly created cluster"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"example output:")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Untitled",src:a(8194).Z,width:"2258",height:"188"})))),(0,r.kt)("h2",{id:"3-starting-the-nats-server"},"3. Starting the NATS Server"),(0,r.kt)("aside",null,"\ud83d\udca1 NATS is an open-source, high-performance messaging system that provides publish-subscribe and request-reply messaging patterns. NATS can help you to build a distributed system that is scalable, flexible, resilient, and performant, making it a popular choice for cloud-native architectures and microservices-based applications (Chat GPT)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cat aws/assume-eks-admin-role.txt")," and copy/paste the command in the terminal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"helm install"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"define your TOKEN variable (you will continue to use this often)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo -E helm install plane-nats nats/nats -f config/k8s-values.yml --set auth.token=$TOKEN")),(0,r.kt)("li",{parentName:"ul"},"example output:","  ",(0,r.kt)("img",{alt:"Untitled",src:a(2299).Z,width:"1240",height:"778"})),(0,r.kt)("li",{parentName:"ul"},"Debugging Help",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If  you encounter issues, try ",(0,r.kt)("inlineCode",{parentName:"li"},"helm repo update")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"helm repo list")),(0,r.kt)("li",{parentName:"ul"},"The default config of nats can be seen in ",(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/nats/nats"},"https://artifacthub.io/packages/helm/nats/nats")),(0,r.kt)("li",{parentName:"ul"},"a possibly helpful reference: ",(0,r.kt)("a",{parentName:"li",href:"https://dev.to/karanpratapsingh/nats-with-kubernetes-3bmc"},"https://dev.to/karanpratapsingh/nats-with-kubernetes-3bmc")))),(0,r.kt)("li",{parentName:"ul"},"Deleting Nats Server (only if you need to delete/restart it at some point)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get services")),(0,r.kt)("li",{parentName:"ul"},"if removing any: use the script ",(0,r.kt)("inlineCode",{parentName:"li"},"cleanup-k8s.sh")," from the repo","  ",(0,r.kt)("img",{alt:"Untitled",src:a(4225).Z,width:"536",height:"254"})))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f ./server/config/nats-service.yml")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"should see service ",(0,r.kt)("inlineCode",{parentName:"li"},"plant-nats"),"created when you do ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get svc"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Untitled",src:a(2665).Z,width:"2054",height:"370"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no ",(0,r.kt)("inlineCode",{parentName:"strong"},"sudo")," in this command!"))))),(0,r.kt)("aside",null,"\ud83d\udca1 After starting the NATS Server we now have the backbone of our messaging system. We will be connecting messages through different components into the NATS messaging system."),(0,r.kt)("h2",{id:"4-creating-a-network-load-balancer"},"4. Creating a Network Load Balancer"),(0,r.kt)("aside",null,"\ud83d\udca1 A Network Load Balancer (NLB) is a type of load balancer that operates at the network layer and is used to distribute incoming network traffic across multiple targets, such as EC2 instances, containers, or IP addresses, in order to improve availability, scalability, and performance of your applications or services."),(0,r.kt)("aside",null,"\ud83d\udca1 We need a network load balancer to balance the workload between our three nodes in EKS (Chat GPT)."),(0,r.kt)("p",null,"*Some of the following information was taken from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nats.io/running-a-nats-service/nats-kubernetes/nats-external-nlb"},"this link")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"One-line installer creates a secure cluster named 'nats\u2019"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the following: ",(0,r.kt)("inlineCode",{parentName:"li"},"curl -sSL [https://raw.githubusercontent.com/nats-io/k8s/master/setup.sh](https://raw.githubusercontent.com/nats-io/k8s/master/setup.sh) | sh")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create AWS Network Load Balancer service"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo '\napiVersion: v1\nkind: Service\nmetadata:\n  name: nats-nlb\n  namespace: default\n  labels:\n    app: nats\n  annotations:\n    service.beta.kubernetes.io/aws-load-balancer-type: \"nlb\"\nspec:\n  type: LoadBalancer\n  externalTrafficPolicy: Local\n  ports:\n  - name: nats\n    port: 4222\n    protocol: TCP\n    targetPort: 4222\n  selector:\n    app.kubernetes.io/name: nats\n' | kubectl apply -f -\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check that it worked "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the following: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get svc nats-nlb -o wide"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The output should look like:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"NAME       TYPE           CLUSTER-IP      EXTERNAL-IP                                                                     PORT(S)          AGE    SELECTOR\nnats-nlb   LoadBalancer   10.100.67.123   a18b60a948fc611eaa7840286c60df32-9e96a2af4b5675ec.elb.us-east-2.amazonaws.com   4222:30297/TCP   151m   app=nats\n"))))),(0,r.kt)("li",{parentName:"ul"},"test connection to the load balancer endpoint (check if port is open from our side) with: ",(0,r.kt)("inlineCode",{parentName:"li"},"netcat -zv [EXTERNAL-IP] 4222"))))),(0,r.kt)("aside",null,"\ud83d\udca1 Now that you have done some of the building blocks let\u2019s test and see if we can send and receive messages!"),(0,r.kt)("h2",{id:"5-test-sending--receiving-messages"},"5. Test Sending & Receiving Messages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a NATS context"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u201cThe\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nats"),"\xa0CLI supports multiple named configurations. We refer to these configurations as\xa0",(0,r.kt)("em",{parentName:"li"},"\u201ccontext\u201d"),". In these contexts, we can configure the server, credentials, certs, and much more.\u201d Check out ",(0,r.kt)("a",{parentName:"li",href:"https://dev.to/karanpratapsingh/introduction-to-nats-cli-33nk"},"this link")," for more information (Context section)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats context save **[CONTEXT-NAME]** --server=nats://**[TOKEN]@[EXTERNAL-IP]:4222**"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"nats context save my-context --server=nats://token@a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com:4222")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nats context select **[CONTEXT-NAME]**")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Test out publishing a test message and subscribing to receive that message"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"subscribe:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"command format: ",(0,r.kt)("inlineCode",{parentName:"li"},'nats sub -s **nats://[TOKEN]@[EXTERNAL-IP]:4222** ">"')," ****(we use token to do authentication so we need this format)"),(0,r.kt)("li",{parentName:"ul"},"ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"nats sub -s nats://token@[a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com](http://a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com/):4222 \u201c>\u201d")),(0,r.kt)("li",{parentName:"ul"},"or if you\u2019ve already set & selected your NATS context simply use the command: ",(0,r.kt)("inlineCode",{parentName:"li"},'nats sub ">"')),(0,r.kt)("li",{parentName:"ul"},"you should see something like the following as output: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"*"))))))))))))))),"(note: message will be received after also doing the pub step below)",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"*"))))))))))))))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'18:18:38 Subscribing on > \n[#1] Received on "test.foo"\n>bar\n'))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"pub:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex: ",(0,r.kt)("inlineCode",{parentName:"li"},'nats pub -s nats://token@[a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com](http://a82c025f6da29437cb87d53a7c616262-b7af42cbc4ec8f0a.elb.us-west-2.amazonaws.com/):4222 test.foo ">bar"')),(0,r.kt)("li",{parentName:"ul"},"or if you\u2019ve already set & selected your NATS context simply use the command: ",(0,r.kt)("inlineCode",{parentName:"li"},'nats pub ">"')),(0,r.kt)("li",{parentName:"ul"},"you should see something like the following as output:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'18:19:59 Published 4 bytes to "test.foo"\n')))))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\ud83d\udc1e\xa0Debugging Help: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nats.io/running-a-nats-service/configuration/clustering/jetstream_clustering/troubleshooting"},"https://docs.nats.io/running-a-nats-service/configuration/clustering/jetstream_clustering/troubleshooting")))}m.isMDXComponent=!0},175:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_1-1bb6002a53c7ed0686910f369df8f072.png"},7870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_2-a3136f27288c8cc4610c915fa3003048.png"},8194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_3-655b8d23294f301a4f5bc9892011e31b.png"},2299:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_4-2fac53ff0e2aacba611dd337e3c462d1.png"},4225:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_5-239a752e3471319bfd58c1e5f3de8808.png"},2665:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_6-7c88eb27f2a75d0629599dac73c85d99.png"},7507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws_7-da1544cc93a79d7cd407bf831a4a0a19.png"}}]);