"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:50,description:"Docs for Docs"},i="Documentation Website",l={unversionedId:"doc_tutorial",id:"version-1.0.0/doc_tutorial",title:"Documentation Website",description:"Docs for Docs",source:"@site/versioned_docs/version-1.0.0/doc_tutorial.md",sourceDirName:".",slug:"/doc_tutorial",permalink:"/adsb-nats/doc_tutorial",draft:!1,tags:[],version:"1.0.0",sidebarPosition:50,frontMatter:{sidebar_position:50,description:"Docs for Docs"},sidebar:"defaultSidebar",previous:{title:"Stress Testing",permalink:"/adsb-nats/replicate/stress_test"},next:{title:"Archived",permalink:"/adsb-nats/category/archived"}},s={},d=[{value:"Add a new page",id:"add-a-new-page",level:2},{value:"Add a new folder",id:"add-a-new-folder",level:2},{value:"Build &amp; Deploy",id:"build--deploy",level:2},{value:"Local",id:"local",level:3},{value:"Remote",id:"remote",level:3},{value:"Don&#39;t forget to push your changes to <code>docs</code> branch as well!",id:"dont-forget-to-push-your-changes-to-docs-branch-as-well",level:3},{value:"References",id:"references",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documentation-website"},"Documentation Website"),(0,o.kt)("h2",{id:"add-a-new-page"},"Add a new page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a new markdown file under ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs")," (names doesn't matter but you should name it wisely)."),(0,o.kt)("li",{parentName:"ol"},"Add the following text in the top of file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\nsidebar_position: 5\ndescription: Docs for Docs\n---\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Edit the markdown file. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," header will be the title and also visible in the sidebar."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"##")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"###")," will be rendered accordingly. ")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"sidebar_position")," will be used to determine order of pages in the sidebar.")),(0,o.kt)("h2",{id:"add-a-new-folder"},"Add a new folder"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a new directory under ",(0,o.kt)("inlineCode",{parentName:"li"},"/docs")),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"_category_.json")," under it and change the content accordingly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "label": "Software Defined Radio",\n  "position": 2,\n  "link": {\n    "type": "generated-index",\n    "description": "Documentation for setting up Software Defined Radio on your local device."\n  }\n}\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add some pages under it.")),(0,o.kt)("h2",{id:"build--deploy"},"Build & Deploy"),(0,o.kt)("h3",{id:"local"},"Local"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," to build the static file."),(0,o.kt)("li",{parentName:"ol"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run server")," to serve it locally. With step 1 and 2, you will be able to see the latest page at your localhost (e.g. http://localhost:3000/adsb-nats/).")),(0,o.kt)("h3",{id:"remote"},"Remote"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," to build the static file."),(0,o.kt)("li",{parentName:"ol"},"Depending you github settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are using SSH for your github, run ",(0,o.kt)("inlineCode",{parentName:"li"},"USE_SSH=true yarn deploy"),". This will deploy the change to ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch and the changes will be reflected at ",(0,o.kt)("a",{parentName:"li",href:"https://ml4wireless.github.io/adsb-nats/"},"ml4wireless.github.io/adsb-nats")," shortly. "),(0,o.kt)("li",{parentName:"ul"},"If you are using passwords for your github, run ",(0,o.kt)("inlineCode",{parentName:"li"},"GIT_USER=[YOURUSERNAME] yarn deploy")," and input your password when prompted. This will deploy the change to ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch and the changes will be reflected at ",(0,o.kt)("a",{parentName:"li",href:"https://ml4wireless.github.io/adsb-nats/"},"ml4wireless.github.io/adsb-nats")," shortly. ")),(0,o.kt)("h3",{id:"dont-forget-to-push-your-changes-to-docs-branch-as-well"},"Don't forget to push your changes to ",(0,o.kt)("inlineCode",{parentName:"h3"},"docs")," branch as well!"),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"For anything else, you can DM Victor on slack or try to find answers yourself at ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"Docusaurus Deployment"),"."))}p.isMDXComponent=!0}}]);