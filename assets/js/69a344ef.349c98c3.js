"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:31},a="Dump1090",o={unversionedId:"client/dump1090",id:"client/dump1090",title:"Dump1090",description:"First time (installation, etc.)",source:"@site/docs/client/dump1090.md",sourceDirName:"client",slug:"/client/dump1090",permalink:"/adsb-nats/client/dump1090",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"defaultSidebar",previous:{title:"Client [OLD]",permalink:"/adsb-nats/category/client-old"},next:{title:"Client",permalink:"/adsb-nats/client/client_py"}},p={},u=[{value:"First time (installation, etc.)",id:"first-time-installation-etc",level:2},{value:"Note for linux (ubuntu 18.04)",id:"note-for-linux-ubuntu-1804",level:3},{value:"Run the program",id:"run-the-program",level:2}],m={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dump1090"},"Dump1090"),(0,l.kt)("h2",{id:"first-time-installation-etc"},"First time (installation, etc.)"),(0,l.kt)("p",null,"steps to install dump1090:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download from dump1090 from\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/antirez/dump1090"},"https://github.com/antirez/dump1090")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"brew install pkg-config")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"brew install librtlsdr")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"brew install"),"  "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"make")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"make LIBRARY_PATH=/usr/local/lib")," (if make doesn\u2019t work)",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"if those don\u2019t work and you get a lusb error try the below: (may need to point to library location of lusb/libusb)"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cc -g -o dump1090 dump1090.o anet.o -L/opt/homebrew/Cellar/librtlsdr/0.6.0/lib")," -L/opt/homebrew/Cellar/libusb/1.0.26/lib ",(0,l.kt)("inlineCode",{parentName:"p"},"-lrtlsdr -lusb-1.0 -lpthread -lm"))))),(0,l.kt)("li",{parentName:"ol"},"Copy it to ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," (",(0,l.kt)("inlineCode",{parentName:"li"},"sudo cp dump1090 /usr/local/bin"),")"),(0,l.kt)("li",{parentName:"ol"},"to check: run ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/dump1090")," & make sure it returns data")),(0,l.kt)("h3",{id:"note-for-linux-ubuntu-1804"},"Note for linux (ubuntu 18.04)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download from dump1090 from\xa0",(0,l.kt)("a",{parentName:"li",href:"https://github.com/antirez/dump1090"},"https://github.com/antirez/dump1090")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt-get install pkg-config")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt-get install librtlsdr-dev")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"make"))),(0,l.kt)("h2",{id:"run-the-program"},"Run the program"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Plug in your RTLSDR device")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/dump1090")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you see output from the terminal, then you finish the setup successfully!"),(0,l.kt)("li",{parentName:"ul"},"You can pipe to an output file and run ",(0,l.kt)("a",{parentName:"li",href:"http://client.py"},"client.py")," with that, ex:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/dump1090")," > live_dump1090.txt"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"python client -f live_dump1090.txt"))))))))}c.isMDXComponent=!0}}]);