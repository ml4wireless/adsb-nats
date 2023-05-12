"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2055],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:4},r="Elasticsearch & Kibana",s={unversionedId:"replicate/elastic",id:"version-1.0.0/replicate/elastic",title:"Elasticsearch & Kibana",description:"ElasticSearch (ES) is a distributed search and analytics engine that provides database-like functionality to store, search, and/or analyze real-time data. This is a core component in our pipeline that comes sequentially after the Annotator. It consumes all the annotated data from the pipeline and serves multiple purposes\u2013including monitoring the Client status, storing the data, and finally serving as a persistent database to the backend flask server.",source:"@site/versioned_docs/version-1.0.0/replicate/elastic.md",sourceDirName:"replicate",slug:"/replicate/elastic",permalink:"/adsb-nats/replicate/elastic",draft:!1,tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Instructions to Run the Containerized Client",permalink:"/adsb-nats/replicate/client"},next:{title:"Webserver & Backend",permalink:"/adsb-nats/replicate/backend"}},o={},c=[{value:"Install ElasticSearch",id:"install-elasticsearch",level:2},{value:"Configure ElasticSearch Cluster",id:"configure-elasticsearch-cluster",level:2},{value:"Install Kibana",id:"install-kibana",level:2},{value:"Configure Index",id:"configure-index",level:2},{value:"Send data to Elasticsearch",id:"send-data-to-elasticsearch",level:2},{value:"Data analysis - Future Work Ideas",id:"data-analysis---future-work-ideas",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch--kibana"},"Elasticsearch & Kibana"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ElasticSearch (ES) is a distributed search and analytics engine that provides database-like functionality to store, search, and/or analyze real-time data. This is a core component in our pipeline that comes sequentially after the Annotator. It consumes all the annotated data from the pipeline and serves multiple purposes\u2013including monitoring the Client status, storing the data, and finally serving as a persistent database to the backend flask server.")),(0,i.kt)("h2",{id:"install-elasticsearch"},"Install ElasticSearch"),(0,i.kt)("p",null,"We now showing how to install standalone Elasticsearch on EC2 instances. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For large-scale production use case, it is better to install distributed cluster. We don\u2019t cover that settings for now.")),(0,i.kt)("p",null,"Before installing the ES, we should make sure that the system ",(0,i.kt)("strong",{parentName:"p"},"satisfies the requirements.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The EC2 instance has at least 8GiB of memory, and allocate more than 4G to ES container"),(0,i.kt)("li",{parentName:"ol"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"vm_map_count")," according to:")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc"},"Elasticsearch: Max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]")),(0,i.kt)("p",null,"Then install the ES according to the:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html"},"Install Elasticsearch with Docker | Elasticsearch Guide [8.6] | Elastic")),(0,i.kt)("p",null,"After installation, make sure we get the elasticsearch user password, certificate(",(0,i.kt)("inlineCode",{parentName:"p"},"http_ca.crt"),"), and enrollment token."),(0,i.kt)("p",null,"If not, we can log into the container and use tools below to get the credentials again:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/bin/elasticsearch-create-enrollment-token")," : generate new enrollment token\n",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/elasticsearch-reset-password"),": reset the password "),(0,i.kt)("h2",{id:"configure-elasticsearch-cluster"},"Configure ElasticSearch Cluster"),(0,i.kt)("p",null,"Elasticsearch can be configured by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"elasticsearch.yml"),", which has been mounted from host machine to the container. In practice, not changing any default config is enough for tutorial use, but when it comes to production, there are multiple settings that need to be considered carefully."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html"},"Configuring Elasticsearch | Elasticsearch Guide [8.6] | Elastic")),(0,i.kt)("p",null,"We can also use API to configure a running Elasticsearch instance  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-update-settings.html"},"Cluster update settings API | Elasticsearch Guide [8.6] | Elastic")),(0,i.kt)("h2",{id:"install-kibana"},"Install Kibana"),(0,i.kt)("p",null,"Kibana is the visualization tool for Elasticsearch."),(0,i.kt)("p",null,"Also, we install Kibana with Docker container."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/8.6/docker.html"},"Install Kibana with Docker | Kibana Guide [8.6] | Elastic")),(0,i.kt)("p",null,"Start from ",(0,i.kt)("strong",{parentName:"p"},"Run Kibana on Docker for development")," session, step 3. After installation, we use the previous user credentials and enrollment token to use the kibana."),(0,i.kt)("h2",{id:"configure-index"},"Configure Index"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"index")," is an ES-specific name, just like a table in a Relational database or a collection in a SQL database."),(0,i.kt)("p",null,"Before sending data to the Elasticsearch cluster, we may want to configure the upcoming index property. (i.e. the index created by the new data), in minimum settings, we care about two things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data searchability"),(0,i.kt)("li",{parentName:"ol"},"Data Retention")),(0,i.kt)("p",null,"First we create a index lifecycle policy:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kibana \u2192 Stack Management \u2192 Index Lifecycle Policies")," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:a(7209).Z,width:"2288",height:"879"})),(0,i.kt)("p",null,"Set the retention policy as we like, name it ",(0,i.kt)("inlineCode",{parentName:"p"},"default-retention-policy")," then go to "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kibana \u2192 Stack Management \u2192 Index Management \u2192 Index Templates")),(0,i.kt)("p",null,"We create an index template, choose a name, set index patterns to be ",(0,i.kt)("inlineCode",{parentName:"p"},"2023-*-*")," ,",(0,i.kt)("inlineCode",{parentName:"p"},"client status")),(0,i.kt)("p",null,"Later on if create any index that matches the pattern, the ES will provision the index according to our index template. "),(0,i.kt)("p",null,"On index settings page, paste the json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "index": {\n    "lifecycle": {\n      "name": "default-retention-policy"\n    },\n    "max_result_window": "2000000"\n  }\n}\n')),(0,i.kt)("p",null,"On Mappings page, paste the json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "properties": {\n    "time": {\n      "type": "date"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Other settings remain default or blank, finish creation."),(0,i.kt)("h2",{id:"send-data-to-elasticsearch"},"Send data to Elasticsearch"),(0,i.kt)("p",null,"After installation and configuration of all the components, we can set up the client and start sending data to Elasticsearch."),(0,i.kt)("p",null,"In practice, we use Python Elasticsearch Client to manage the connection with ES."),(0,i.kt)("p",null,"The example can be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"./elastic/elasticsearch/elastic-client.py")),(0,i.kt)("p",null,"Also the backend is built on ES Client, in ",(0,i.kt)("inlineCode",{parentName:"p"},"./elastic/backend/server.py")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"data-analysis---future-work-ideas"},"Data analysis - Future Work Ideas"),(0,i.kt)("p",null,"Elasticsearch provides many useful tools for analyzing the data on the host and enables us to build ML applications from our pipeline."),(0,i.kt)("p",null,"For ML application:"),(0,i.kt)("p",null,"Use Cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"AI Ops and Threat Hunting"),(0,i.kt)("li",{parentName:"ol"},"Prediction"),(0,i.kt)("li",{parentName:"ol"},"Search unstructured data")),(0,i.kt)("p",null,"Potential ML applications:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Anomaly Detection",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Deploy an ML model to detect anomaly events in the incoming data"),(0,i.kt)("li",{parentName:"ol"},"The model automatically learns patterns from the incoming data "),(0,i.kt)("li",{parentName:"ol"},"We can create a dashboard that shows anomaly scores in specific time intervals"),(0,i.kt)("li",{parentName:"ol"},"Useful in filtering out the data, especially detecting the bot traffic that might mess up the pipeline"),(0,i.kt)("li",{parentName:"ol"},"Easy to apply and help make the pipeline robust with automation"))),(0,i.kt)("li",{parentName:"ol"},"ML application specifically for airplane locations",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Based on airplane markers, predict which stage of the airplane is currently in ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Just take off"),(0,i.kt)("li",{parentName:"ol"},"Arriving"),(0,i.kt)("li",{parentName:"ol"},"Still flying"),(0,i.kt)("li",{parentName:"ol"},"\u2026  ")))))),(0,i.kt)("p",null,"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Anomaly Detection: Health maintenance for the whole data pipeline",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Support different spectrum application"),(0,i.kt)("li",{parentName:"ol"},"Not super priority"),(0,i.kt)("li",{parentName:"ol"},"Testing"))),(0,i.kt)("li",{parentName:"ol"},"Specific to airplane data")))}u.isMDXComponent=!0},7209:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/elastic_1-b773e97f1327c9bc584364881171860d.png"}}]);