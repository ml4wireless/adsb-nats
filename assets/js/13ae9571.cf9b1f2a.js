"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="Dump1090",o={unversionedId:"SDR/dump1090",id:"SDR/dump1090",title:"Dump1090",description:"first time (installation, etc.)",source:"@site/docs/SDR/dump1090.md",sourceDirName:"SDR",slug:"/SDR/dump1090",permalink:"/adsb-nats/docs/SDR/dump1090",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Software Defined Radio",permalink:"/adsb-nats/docs/category/software-defined-radio"},next:{title:"AWS",permalink:"/adsb-nats/docs/aws"}},p={},u=[{value:"first time (installation, etc.)",id:"first-time-installation-etc",level:2},{value:"for linux (ubuntu 18.04)",id:"for-linux-ubuntu-1804",level:3},{value:"run the program",id:"run-the-program",level:2}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dump1090"},"Dump1090"),(0,a.kt)("h2",{id:"first-time-installation-etc"},"first time (installation, etc.)"),(0,a.kt)("p",null,"steps to install dump1090:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download from dump1090 from\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/antirez/dump1090"},"https://github.com/antirez/dump1090")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"brew install pkg-config")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"brew install librtlsdr")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"brew install"),"  "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"make LIBRARY_PATH=/usr/local/lib")," (if make doesn\u2019t work)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"if those don\u2019t work and you get a lusb error try the below: (may need to point to library location of lusb/libusb)"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cc -g -o dump1090 dump1090.o anet.o -L/opt/homebrew/Cellar/librtlsdr/0.6.0/lib")," -L/opt/homebrew/Cellar/libusb/1.0.26/lib ",(0,a.kt)("inlineCode",{parentName:"p"},"-lrtlsdr -lusb-1.0 -lpthread -lm"))))),(0,a.kt)("li",{parentName:"ol"},"Copy it to ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," (",(0,a.kt)("inlineCode",{parentName:"li"},"sudo cp dump1090 /usr/local/bin"),")"),(0,a.kt)("li",{parentName:"ol"},"to check: run ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/dump1090")," & make sure it returns data")),(0,a.kt)("h3",{id:"for-linux-ubuntu-1804"},"for linux (ubuntu 18.04)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download from dump1090 from\xa0",(0,a.kt)("a",{parentName:"li",href:"https://github.com/antirez/dump1090"},"https://github.com/antirez/dump1090")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt-get install pkg-config")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt-get install librtlsdr-dev")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"make"))),(0,a.kt)("h2",{id:"run-the-program"},"run the program"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/dump1090")),(0,a.kt)("li",{parentName:"ul"},"can pipe to an output file and run ",(0,a.kt)("a",{parentName:"li",href:"http://client.py"},"client.py")," with that, ex:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/dump1090")," > live_dump1090.txt"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"python client -f live_dump1090.txt"))))),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);