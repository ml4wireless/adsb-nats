"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(b,c(c({ref:t},u),{},{components:n})):a.createElement(b,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},c="Database",i={unversionedId:"archived/Backend/mariaDB",id:"version-1.0.0/archived/Backend/mariaDB",title:"Database",description:"Context",source:"@site/versioned_docs/version-1.0.0/archived/Backend/mariaDB.md",sourceDirName:"archived/Backend",slug:"/archived/Backend/mariaDB",permalink:"/adsb-nats/1.0.0/archived/Backend/mariaDB",draft:!1,tags:[],version:"1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Backend Overview",permalink:"/adsb-nats/1.0.0/archived/Backend/"}},l={},s=[{value:"Context",id:"context",level:2},{value:"Installation",id:"installation",level:2},{value:"Connect to MariaDB from Remote Host",id:"connect-to-mariadb-from-remote-host",level:2},{value:"Connect to MariaDB Using Python",id:"connect-to-mariadb-using-python",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"We\u2019re using Amazon Linux 2 AMI as our EC2 Image, which recommend MariaDB as a subsititution  for MySQL. Actually, MariaDB is a AWS-adopted MySQL-compatible database.  "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo yum update -y \n\nsudo yum install -y mariadb-server\n\nsudo systemctl enable mariadb\n\nsudo systemctl start mariadb\n\nsudo mysql_secure_installation\n")),(0,r.kt)("p",null,"if met some GPG issues\u2026"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022\n")),(0,r.kt)("h2",{id:"connect-to-mariadb-from-remote-host"},"Connect to MariaDB from Remote Host"),(0,r.kt)("p",null,"Sometimes we may want to connect to the remote database for checking or debugging purpose. In order to connect from a remote host: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"MariaDB must be properly configured, with ip not bound to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost"},"localhost")," and creating a privileged user.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/configuring-mariadb-for-remote-client-access/"},"https://mariadb.com/kb/en/configuring-mariadb-for-remote-client-access/")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Security group of the instance should be configured to accept inbound rule of port 3306.")),(0,r.kt)("h2",{id:"connect-to-mariadb-using-python"},"Connect to MariaDB Using Python"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install pymysql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install pymysql\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"connect to database")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"connection = pymysql.connect(host='ec2-35-80-21-70.us-west-2.compute.amazonaws.com',\n                             user='sahai',\n                             password='sahai',\n                             database='webserver',\n                             cursorclass=pymysql.cursors.DictCursor)\n\nconnection.ping(reconnect=True) # Otherwise the connection will be closed after some time\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute a non-param sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cursor = connection.cursor()\nsql = 'CREATE TABLE IF NOT EXISTS `dump1090` ( \\\n    `id` int(11) NOT NULL AUTO_INCREMENT, \\\n    `reporter` varchar(255) , \\\n    `time` varchar(255) , \\\n    `ICAO` varchar(255) , \\\n    `feet` double(32,6) , \\\n    `lat` double(32,6) , \\\n    `lon` double(32,6) , \\\n    `manufacturer` varchar(255) , \\\n    `aircraft` varchar(255) , \\\n    `n-number` varchar(255) , \\\n    `registered` varchar(255) , \\\n    `annotator` varchar(255) , \\\n    PRIMARY KEY (`id`) \\\n) DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;'\ncursor.execute(sql)\nconnection.commit()\n\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Execute a sql with python vars")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\ncursor = connection.cursor()\nsql = \' INSERT INTO `dump1090` (`reporter`,`time`, `ICAO`, \\\n            `feet`,`lat`, `lon`,`manufacturer`,`aircraft`,`n-number`,`registered`,\\\n             `annotator`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)\'\n            cursor.execute(sql, (jdata.get("reporter"), jdata.get("time"), jdata.get("ICAO"),\n            jdata.get("feet"), jdata.get("lat"),jdata.get("lon"),jdata.get("manufacturer"),\n            jdata.get("aircraft"),jdata.get("n-number"),jdata.get("registered"),jdata.get("annotator")))\nconnection.commit()\n')))}m.isMDXComponent=!0}}]);