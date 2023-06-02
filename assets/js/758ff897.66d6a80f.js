"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1464],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),d=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return r.createElement(i.Provider,{value:a},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(t),m=n,c=h["".concat(i,".").concat(m)]||h[m]||u[m]||s;return t?r.createElement(c,o(o({ref:a},p),{},{components:t})):r.createElement(c,o({ref:a},p))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7035:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(7462),n=(t(7294),t(3905));const s={sidebar_position:7},o="Dashboards",l={unversionedId:"replicate/dashboard",id:"replicate/dashboard",title:"Dashboards",description:"1. Check Out Our Dashboard for the Airplane Tracker Example",source:"@site/docs/replicate/dashboard.md",sourceDirName:"replicate",slug:"/replicate/dashboard",permalink:"/adsb-nats/next/replicate/dashboard",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Frontend",permalink:"/adsb-nats/next/replicate/frontend"},next:{title:"Stress Test",permalink:"/adsb-nats/next/replicate/stress_test"}},i={},d=[{value:"1. Check Out Our Dashboard for the Airplane Tracker Example",id:"1-check-out-our-dashboard-for-the-airplane-tracker-example",level:2},{value:"2. Overview",id:"2-overview",level:2},{value:"3. Build the Dashboard",id:"3-build-the-dashboard",level:2},{value:"1) Install Prometheus and Grafana Helm chart",id:"1-install-prometheus-and-grafana-helm-chart",level:3},{value:"2) Start Prometheus &amp; Grafana",id:"2-start-prometheus--grafana",level:3},{value:"3) Adding NATS exporter",id:"3-adding-nats-exporter",level:3},{value:"4) Adding Grafana Dashboard Template",id:"4-adding-grafana-dashboard-template",level:3},{value:"5) Adding other sources of data",id:"5-adding-other-sources-of-data",level:3}],p={toc:d},h="wrapper";function u(e){let{components:a,...s}=e;return(0,n.kt)(h,(0,r.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dashboards"},"Dashboards"),(0,n.kt)("h2",{id:"1-check-out-our-dashboard-for-the-airplane-tracker-example"},"1. Check Out Our Dashboard for the Airplane Tracker Example"),(0,n.kt)("p",null,"\u2b50\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"Grafana Endpoint (Dashboards):")," ",(0,n.kt)("a",{parentName:"p",href:"http://a524500a80d314a64953fb349920eceb-1736286925.us-west-2.elb.amazonaws.com/"},"http://a524500a80d314a64953fb349920eceb-1736286925.us-west-2.elb.amazonaws.com")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Prometheus Endpoint which lets you query the data","  \u2b50\ufe0f ",(0,n.kt)("strong",{parentName:"li"},"Prometheus Endpoint:")," ",(0,n.kt)("a",{parentName:"li",href:"http://a1e737e99fe0c48bd8f88445fe7650f0-1254458216.us-west-2.elb.amazonaws.com/"},"http://a1e737e99fe0c48bd8f88445fe7650f0-1254458216.us-west-2.elb.amazonaws.com/"))),(0,n.kt)("h2",{id:"2-overview"},"2. Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prometheus")," is a monitoring system and time-based database. We use Prometheus to monitor and gather our system\u2019s status, storing it in its database. The data will then be exported to Grafana for graphical analysis. The goal of using Prometheus and Grafana is to create a ",(0,n.kt)("strong",{parentName:"p"},"dashboard")," for system administrators to check the system status."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:t(3837).Z,width:"3434",height:"1766"})),(0,n.kt)("h2",{id:"3-build-the-dashboard"},"3. Build the Dashboard"),(0,n.kt)("h3",{id:"1-install-prometheus-and-grafana-helm-chart"},"1) Install Prometheus and Grafana Helm chart"),(0,n.kt)("p",null,"We use the Prometheus Helm chart to install the app into the Kubernetes cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Prometheus Helm chart, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"values.yaml"),"from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ml4wireless/adsb-nats/blob/master/dashboard/prometheus.yaml"},"adsb-nats/dashboard at master \xb7 ml4wireless/adsb-nats (github.com)")," (download the ",(0,n.kt)("inlineCode",{parentName:"li"},"values.yaml")," and using ",(0,n.kt)("inlineCode",{parentName:"li"},"helm install -f values.yaml")," when installing the helm chart\uff09")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/prometheus-community/prometheus"},"prometheus 19.7.2 \xb7 prometheus/prometheus-community")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Grafana Helm chart , using the ",(0,n.kt)("inlineCode",{parentName:"li"},"values.yaml")," from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ml4wireless/adsb-nats/blob/master/dashboard/grafana.yaml"},"adsb-nats/grafana.yaml at master \xb7 ml4wireless/adsb-nats (github.com)"),". ")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/grafana/grafana"},"grafana 6.52.3 \xb7 grafana/grafana")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get the Grafana password ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl get secret\u200a\u2014\u200anamespace default grafana -o jsonpath=\u201d{.data.admin-password}\u201d | base64\u200a\u2014\u200adecode ; echo"),"] (you can save it for future use)",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The username is default to ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")))),(0,n.kt)("li",{parentName:"ol"},"Get the Grafana service IP by ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl get svc -A"),"  and see the external IP field of Grafana service. It\u2019s worth notice that in step 2, our ",(0,n.kt)("inlineCode",{parentName:"li"},"values.yaml")," indicates to the helm chart to expose Grafana service as ",(0,n.kt)("inlineCode",{parentName:"li"},"Loadbalancer")," type, so that the cloud provider will automatically provision an external load balancer here as the entrance of service.")),(0,n.kt)("p",null,"After all these steps, you should be able to view a grafana-style frontend page from the service IP using the username and password from step 3). "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:t(6279).Z,width:"1994",height:"760"})),(0,n.kt)("h3",{id:"2-start-prometheus--grafana"},"2) Start Prometheus & Grafana"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prometheus"),(0,n.kt)("p",{parentName:"li"},"Prometheus will use the configuration file located in this directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"prometheus\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Grafana"),(0,n.kt)("p",{parentName:"li"},"Start your Grafana server. Your settings may differ. Try starting with the server config included in the Grafana tarball."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n")))),(0,n.kt)("h3",{id:"3-adding-nats-exporter"},"3) Adding NATS exporter"),(0,n.kt)("p",null,"A NATS exporter is a service that scrapes the metrics from NATS, exposing these metrics to an endpoint, and then Prometheus will gather those metrics to the backend from that endpoint.  "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"Dashboards%208f16e63ce3a64a6882ecda8785c61268/Nats%20Exporter%20Guide%20f44d168561d94907a702254e14a2a300.md"},"Nats Exporter Guide")),(0,n.kt)("p",null,"After adding the NATS exporter, you should be able to see NATS related metrics in the Grafana frontend like the screenshot below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:t(6037).Z,width:"2144",height:"998"})),(0,n.kt)("h3",{id:"4-adding-grafana-dashboard-template"},"4) Adding Grafana Dashboard Template"),(0,n.kt)("p",null,"The next step is to adding different dashboard template to your Grafana frontend so that you can view different system metrics in a user-friendly GUI."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For NATS, there exists a pretty decent template that we can directly use. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nats-io/prometheus-nats-exporter/blob/main/walkthrough/grafana-jetstream-dash-helm.json"},"Jetstream Dash Helm")," is one of templates that we used in our application.","  ",(0,n.kt)("img",{alt:"Untitled",src:t(7688).Z,width:"3282",height:"2310"}))),(0,n.kt)("p",null,"The following page also provides a great walkthrough."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nats-io/prometheus-nats-exporter/tree/main/walkthrough"},"prometheus-nats-exporter/walkthrough at main \xb7 nats-io/prometheus-nats-exporter")),(0,n.kt)("h3",{id:"5-adding-other-sources-of-data"},"5) Adding other sources of data"),(0,n.kt)("p",null,"In addition to the existing template and data sources, we can also add different sources of data to our system health dashboard. For example, in our airplane application, we used some data from our elastic search to visual the location of each reporter. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Untitled",src:t(2356).Z,width:"1404",height:"486"})),(0,n.kt)("p",null,"In order to build something like this, you need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add ",(0,n.kt)("strong",{parentName:"p"},"data sources")," to grafana"),(0,n.kt)("p",{parentName:"li"},"You can add it by using its frontend GUI and insert any authentication you have for your elastic search")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify and ",(0,n.kt)("strong",{parentName:"p"},"write your own queries")),(0,n.kt)("p",{parentName:"li"},"Here is an example of Lucene Query we wrote. You might need to learn more about the language and write your own query."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Untitled",src:t(6445).Z,width:"2192",height:"692"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Adjust Grafana settings for ",(0,n.kt)("strong",{parentName:"p"},"GUI")),(0,n.kt)("p",{parentName:"li"},"We choose geomap for our visualization since we are focusing on the location data. It is also pretty common for spectrum related application. You can also change it using Grafana frontend and adjust corresponding settings (e.g. geo marker center, scale). "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Untitled",src:t(904).Z,width:"806",height:"1822"})))),(0,n.kt)("p",null,"With these steps, you should be able to create any visualization for your application and even combine with any previous template to build a customized, pretty system health dashboard!"))}u.isMDXComponent=!0},3837:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_1-ecdd46c51ea04c8205b4fa2c7c799d54.png"},6279:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_2-e1936e8f417417b954e9a7d1cb754016.png"},6037:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_3-6e510de1298be850149d2d57a92b8578.png"},7688:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_4-f2ebf73d9c6ddd9f03e0a87d6a453aef.png"},2356:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_5-caae136c0393b349f666dbd15e4a73f7.png"},6445:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_6-08138bf15936b10a6cf2a3845398c3a4.png"},904:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/dashboard_7-be372597678742d023582110f0dc290f.png"}}]);