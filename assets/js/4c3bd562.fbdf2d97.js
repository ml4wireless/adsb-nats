"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3795:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Overview",s={unversionedId:"replicate/overview",id:"replicate/overview",title:"Overview",description:"Table of Contents",source:"@site/docs/replicate/overview.md",sourceDirName:"replicate",slug:"/replicate/overview",permalink:"/adsb-nats/next/replicate/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Replicate our Pipeline",permalink:"/adsb-nats/next/category/replicate-our-pipeline"},next:{title:"AWS Setup",permalink:"/adsb-nats/next/replicate/aws"}},l={},p=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Containerize &amp; Run the Client Program",id:"containerize--run-the-client-program",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("h1",{id:"1-set-up-the-aws-environment"},"1. Set up the AWS Environment"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Learn how to set up the core backbone of the pipeline\u2014a kubernetes cluster, NATS server, and load balancer, all within a distributed AWS cloud environment\u2014and test sending/receiving your first messages!"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./aws"},"AWS Setup")),(0,r.kt)("h1",{id:"2-set-up-the-client-component"},"2. Set up the Client Component"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Set up the Client program component in the pipeline, which is responsible for reading raw spectrum data packets from a radio device, and unpacking/processing them into a more human-readable format. The client program is highly customizable to your own application. In the case of our airplane tracker application, it specifically processes ADS-B packets using the dump1090 software which decodes the data into a more human-readable format, in this case a JSON file."))),(0,r.kt)("h4",{id:"containerize--run-the-client-program"},"Containerize & Run the Client Program"),(0,r.kt)("p",null," Note: The following instructions to run the containerized client can be utilized by anyone with their own Software Defined Radios to collect broadcasted data in their geographical location and input this data into your pipeline. For our example airplane tracker, we had an associate in Colorado follow these instructions and as a result are able to see the planes in Colorado as well as our own location on our final airplane tracker web application.* "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./client"},"Instructions to Run the Containerized Client")),(0,r.kt)("h1",{id:"3-set-up-the-annotator-component"},"3. Set up the Annotator Component"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The Annotator is a module within our data pipeline that is responsible for enriching the processed radio data with additional meaningful information. For our application, we downloaded data from the ",(0,r.kt)("a",{parentName:"em",href:"https://www.faa.gov/licenses_certificates/aircraft_certification/aircraft_registry/releasable_aircraft_download"},"FAA\u2019s (Federal Aviation Administration) Releasable Aircraft Database")," and used it to add additional information to each packet."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./annotator"},"Annotator")),(0,r.kt)("h1",{id:"4-set-up-elasticsearch--kibana"},"4. Set up Elasticsearch & Kibana"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"ElasticSearch (ES) is a distributed search and analytics engine that provides database-like functionality to store, search, and/or analyze real-time data. It consumes all the annotated data from the pipeline and serves multiple purposes\u2013including monitoring the Client status, storing the data, and finally serving as a persistent database to the backend flask server."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./elastic"},"Elasticsearch & Kibana")),(0,r.kt)("h1",{id:"5-set-up-the-backend-web-server"},"5. Set up the Backend Web Server"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The Backend Web Server\u2019s purpose is to fetch data using a query of preference from ElasticSearch, and pass the resulting data to the frontend application. We chose to use the Python micro-web framework Flask for the Backend Web Server since Flask is simple and easily integrates with other features. The Flask web server also provides multiple API endpoints for the web application to access the data. By designing a lightweight and customizable web server, we provide a framework that users can easily modify or extend to serve different applications."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./backend"},"Webserver & Backend")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Replicate%20Our%20Pipeline%20121c069d857b4564b2389694ea8bb42c/reporters%20&%20%E2%80%9Cseen%20by%E2%80%9D%203e4ec33060794f96ba89fd73f7541c8c.md"},"reporters & \u201cseen by\u201d")),(0,r.kt)("h1",{id:"6-set-up-the-frontend-application"},"6. Set up the Frontend Application"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"The Frontend component functions to display the completely processed data from the pipeline in a specific form or application which the user had in mind for visualizing/utilizing the radio spectrum data. When a visitor interacts with the frontend web application, the application sends an HTTP request to the Flask web server. As described above, the web server in turn queries ElasticSearch, and finally sends the relevant information back to the frontend, where the user interface is updated accordingly."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./frontend"},"Frontend")),(0,r.kt)("h1",{id:"7-set-up-the-system-health-dashboard"},"7. Set up the System Health Dashboard"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"To monitor our pipeline, we built a system health dashboard for users and system administrators to check the pipeline status. We decided to use a combination of two tools\u2013 Prometheus and Grafana\u2013since they work well together and are easily integrable into the rest of the NATS framework. Prometheus is a monitoring system and time-based database, which is paired with Grafana for graphical analysis of the collected metrics."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./dashboard"},"Dashboards")),(0,r.kt)("h1",{id:"8-perform-stress-testing-on-the-pipeline"},"8. Perform Stress Testing on the Pipeline"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stress testing is a type of testing used to evaluate the stability and robustness of a system or application under high-stress conditions, such as heavy load or limited resources.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./stress_test"},"Stress Testing")),(0,r.kt)("h1",{id:"9-great-job"},"9. Great Job!"),(0,r.kt)("p",null,"The final product proves that an end-to-end pipeline can be created in an affordable and accessible manner without the need for large-scale resources. The stress testing has proved that this pipeline is robust, lightweight, and portable, to allow users to efficiently process and analyze spectrum data. "),(0,r.kt)("p",null,"We hope that our pipeline has the potential to democratize access to spectrum data and enable a broader range of stakeholders to leverage this valuable resource for their own purposes."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"potential-future-work"},"Potential Future Work"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There are several Machine Learning (ML) algorithms that can be utilized to improve our pipeline. For example, ML can be utilized for an anomaly detection task to filter out potential malicious or inaccurate data. Elasticsearch provides us with ML APIs to enable this, allowing for the creation of custom layers on top of our current pipeline."),(0,r.kt)("li",{parentName:"ol"},"Furthermore, when processing high-throughput data at scale, there are limitations to what messaging systems like NATS can handle on their own. Alternative messaging frameworks like ZeroMQ or nanomsg can address the scaling needs as they offer advanced features like proxy servers that can help to alleviate the limitations of NATS. By doing so, the system can benefit from the scalability and performance of these messaging systems while still preserving the reliability and message delivery guarantees of NATS."),(0,r.kt)("li",{parentName:"ol"},"Additional Stress Testing can be performed to test the limits of the pipeline")))}d.isMDXComponent=!0}}]);