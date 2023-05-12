"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8294],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:6},i="Frontend",l={unversionedId:"replicate/frontend",id:"version-1.0.0/replicate/frontend",title:"Frontend",description:"The application demoed here is an Airplane Tracker, which is similar to some other relevant applications, such as FlightAware and Flightradar24. However, we want to emphasize that the main focus of our work is not on the Airplane Tracker, but instead on the whole pipeline. When you set up the pipeline by following our tutorial, you can create a wide range of applications, not just the Airplane Tracker. The application here can also serve as one place for you to check if your pipeline is working or not.",source:"@site/versioned_docs/version-1.0.0/replicate/frontend.md",sourceDirName:"replicate",slug:"/replicate/frontend",permalink:"/adsb-nats/replicate/frontend",draft:!1,tags:[],version:"1.0.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Webserver & Backend",permalink:"/adsb-nats/replicate/backend"},next:{title:"Dashboards",permalink:"/adsb-nats/replicate/dashboard"}},s={},p=[{value:"Tech Stack of the Frontend Airplane Tracker",id:"tech-stack-of-the-frontend-airplane-tracker",level:2},{value:"Using the Frontend Airplane Tracker Visualization",id:"using-the-frontend-airplane-tracker-visualization",level:2},{value:"General Instructions:",id:"general-instructions",level:3},{value:"Feature 1: Airplane Marker Popup",id:"feature-1-airplane-marker-popup",level:3},{value:"Feature 2: Search Markers based on Time Intervals",id:"feature-2-search-markers-based-on-time-intervals",level:3},{value:"Feature 3: Filter Markers by Reporter",id:"feature-3-filter-markers-by-reporter",level:3},{value:"Feature 4: Search Markers based on Location",id:"feature-4-search-markers-based-on-location",level:3},{value:"Endnote",id:"endnote",level:2}],c={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frontend"},"Frontend"),(0,n.kt)("p",null,"The application demoed here is an Airplane Tracker, which is similar to some other relevant applications, such as ",(0,n.kt)("a",{parentName:"p",href:"https://flightaware.com/"},"FlightAware")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.flightradar24.com/"},"Flightradar24"),". However, we ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},"****")))))))),"want to emphasize",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},"****"))))))))," that the main focus of our work is not on the Airplane Tracker, but instead on the whole pipeline. When you set up the pipeline by following our tutorial, you can create a wide range of applications, not just the Airplane Tracker. The application here can also serve as one place for you to check if your pipeline is working or not. "),(0,n.kt)("h2",{id:"tech-stack-of-the-frontend-airplane-tracker"},"Tech Stack of the Frontend Airplane Tracker"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapbox.com/"},"Mapbox"),", ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/amplify/"},"AWS Amplify")),(0,n.kt)("p",null,"To use AWS Amplify to deploy the React application, please follow the link below:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.amplify.aws/start/q/integration/react/"},"https://docs.amplify.aws/start/q/integration/react/")," "),(0,n.kt)("h2",{id:"using-the-frontend-airplane-tracker-visualization"},"Using the Frontend Airplane Tracker Visualization"),(0,n.kt)("h3",{id:"general-instructions"},"General Instructions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visit the frontend page: ",(0,n.kt)("a",{parentName:"li",href:"https://tinyurl.com/specpipe"},(0,n.kt)("strong",{parentName:"a"},"https://tinyurl.com/specpipe"))),(0,n.kt)("li",{parentName:"ul"},"You can choose to allow your browser to see your location, ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},(0,n.kt)("strong",{parentName:"strong"},"**")))))),"and then the map should center around your location. Otherwise, the map will center around Berkeley, CA by default."),(0,n.kt)("li",{parentName:"ul"},"Every airplane dot/marker on the map represents a logged location at a certain time, with a trail of the same color markers representing a single plane."),(0,n.kt)("li",{parentName:"ul"},"The Airplane Tracker application updates the map in ",(0,n.kt)("strong",{parentName:"li"},"real time")," with new airplane data every 20 seconds. The application cleans parts of the data when the number of markers is over a certain limit."),(0,n.kt)("li",{parentName:"ul"},"To test:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wait and watch for current data points to show up")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Should look like the image below after some time has passed"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Screen Shot 2023-05-10 at 4.12.35 PM.png",src:a(7119).Z,width:"2864",height:"1304"})))))),(0,n.kt)("p",null,"The application also provides additional functionalities. "),(0,n.kt)("h3",{id:"feature-1-airplane-marker-popup"},"Feature 1: Airplane Marker Popup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As you click on any marker on the map in the Airplane Tracker application, a popup will display additional information such as the airplane\u2019s ICAO number, altitude, time of location broadcast, the aircraft type, etc., as can be seen in the image below.","  ",(0,n.kt)("img",{alt:"Screen Shot 2023-05-10 at 4.22.25 PM.png",src:a(896).Z,width:"524",height:"394"}))),(0,n.kt)("h3",{id:"feature-2-search-markers-based-on-time-intervals"},"Feature 2: Search Markers based on Time Intervals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is an option to select a desired interval and see the plane trajectories during that time range using the calendar tool in the top-left corner of the application."),(0,n.kt)("li",{parentName:"ul"},"In the image shown below, we specified the start time to be 10:00 am on May 8, 2023 and the end time to be 10:04 am on May 8, 2023."),(0,n.kt)("li",{parentName:"ul"},"Make sure to select a max time range of 4 minutes to prevent too many airplane markers","  ",(0,n.kt)("img",{alt:"Screen Shot 2023-05-10 at 10.07.27 PM.png",src:a(9939).Z,width:"2866",height:"1300"}))),(0,n.kt)("h3",{id:"feature-3-filter-markers-by-reporter"},"Feature 3: Filter Markers by Reporter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To distinguish between different reporters, the Airplane Tracker application has a \u201cfilter by reporter\u201d functionality using the \u201cSelect Reporter\u201d dropdown in the left corner of the application."),(0,n.kt)("li",{parentName:"ul"},"Select a specific reporter under the dropdown, and the application only shows the airplane markers with this reporter type.","  ",(0,n.kt)("img",{alt:"Screen Shot 2023-05-10 at 10.14.14 PM.png",src:a(457).Z,width:"1250",height:"752"}))),(0,n.kt)("h3",{id:"feature-4-search-markers-based-on-location"},"Feature 4: Search Markers based on Location"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using the search box in the top-right corner of the application, users can provide a specific location, and the map will center around the location, just like the image below.","  ",(0,n.kt)("img",{alt:"Screen Shot 2023-05-10 at 10.20.06 PM.png",src:a(2519).Z,width:"2866",height:"1296"}))),(0,n.kt)("h2",{id:"endnote"},"Endnote"),(0,n.kt)("p",null,"In the end, this Airplane Tracker application gives you a glimpse of what we could do with the pipeline and the wireless spectrum radio data. We hope that this could be a motivation for you to develop creative applications using wireless spectrum!"))}h.isMDXComponent=!0},7119:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend_1-39a77dfe0fb25fc58c512ba0432e20e9.png"},896:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend_2-390711748315c1aca2cda5b245b9bf21.png"},9939:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend_3-13f61577cc115acf95b9fb7631d2cf07.png"},457:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend_4-d01012699c143500a52698e9af1e9ee4.png"},2519:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend_5-c5d4a411202baebff33ee317ddeb00f6.png"}}]);