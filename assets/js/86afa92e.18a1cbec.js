"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:103},s="AWS [OLD]",i={unversionedId:"archived/aws",id:"version-1.0.0/archived/aws",title:"AWS [OLD]",description:"general notes",source:"@site/versioned_docs/version-1.0.0/archived/aws.md",sourceDirName:"archived",slug:"/archived/aws",permalink:"/adsb-nats/archived/aws",draft:!1,tags:[],version:"1.0.0",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"defaultSidebar",previous:{title:"Project Introduction [OLD]",permalink:"/adsb-nats/archived/old_intro"},next:{title:"Dashboards - Prometheus & Grafana [OLD]",permalink:"/adsb-nats/archived/dashboards"}},o={},c=[{value:"general notes",id:"general-notes",level:2},{value:"aws cli &amp; eksctl",id:"aws-cli--eksctl",level:2},{value:"Get access key for AWS",id:"get-access-key-for-aws",level:2},{value:"Assume Role guide",id:"assume-role-guide",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-old"},"AWS ","[OLD]"),(0,r.kt)("h2",{id:"general-notes"},"general notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#Home:"},"Link to AWS portal")),(0,r.kt)("li",{parentName:"ul"},"upper right - change location to upper west"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"message from josh\u2014")," you should all have the access required to run\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"eksctl"),"now. Please create an access key and setup the aws cli, then install eksctl and verify that you can see the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"nats-k8s-cluster"),"cluster.")),(0,r.kt)("h2",{id:"aws-cli--eksctl"},"aws cli & eksctl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aws cli installation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'curl "',(0,r.kt)("a",{parentName:"li",href:"https://awscli.amazonaws.com/AWSCLIV2.pkg"},"https://awscli.amazonaws.com/AWSCLIV2.pkg"),'" -o "AWSCLIV2.pkg"'),(0,r.kt)("li",{parentName:"ul"},"sudo installer -pkg AWSCLIV2.pkg -target /"))),(0,r.kt)("li",{parentName:"ul"},"eksctl installation: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"))),(0,r.kt)("h2",{id:"get-access-key-for-aws"},"Get access key for AWS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"top right \u2192 \u201cSecurity Credentials\u201d"),(0,r.kt)("li",{parentName:"ul"},"Download the key under ",(0,r.kt)("strong",{parentName:"li"},"Access keys for CLI, SDK, & API access")),(0,r.kt)("li",{parentName:"ul"},"Configure local AWS access key: ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure"))),(0,r.kt)("h2",{id:"assume-role-guide"},"Assume Role guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cat aws/assume-eks-admin-role.txt")," and copy/paste the command in the terminal"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aws sts get-caller-identity")," ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"This should return \u201carn\u201d = \u201c\u2026:assumed-role/eks-admin\u201d"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"aws eks update-kubeconfig --region us-west-2 --name **data-pipeline-small**"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"This is used for updating kubeconfig locally"),(0,r.kt)("li",{parentName:"ol"},"find the cluster name in aws console > eks panel"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," etc. \u2192 to check")))}p.isMDXComponent=!0}}]);