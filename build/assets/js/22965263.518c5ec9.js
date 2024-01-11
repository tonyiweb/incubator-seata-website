"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[31042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=o,g=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},a="New contributor guide",u={unversionedId:"developers/contributor-guide/new-contributor-guide_dev",id:"developers/contributor-guide/new-contributor-guide_dev",title:"New contributor guide",description:"This is a guide for new comers who wants to contribute to Seata.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/new-contributor-guide_dev",permalink:"/docs/next/developers/contributor-guide/new-contributor-guide_dev",draft:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md",tags:[],version:"current",frontMatter:{title:"New contributor guide",keywords:["Seata","contributor"],description:"This is a guide for new comers who wants to contribute to Seata."},sidebar:"developers",next:{title:"Test coverage guide",permalink:"/docs/next/developers/contributor-guide/test-coverage-guide_dev"}},s={},c=[{value:"Subscribe to the mailing list",id:"subscribe-to-the-mailing-list",level:3},{value:"Reporting issue",id:"reporting-issue",level:3},{value:"Sending pull request",id:"sending-pull-request",level:3},{value:"Code convention",id:"code-convention",level:3}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-contributor-guide"},"New contributor guide"),(0,o.kt)("p",null,"This is a guide for new comers who wants to contribute to Seata."),(0,o.kt)("h3",{id:"subscribe-to-the-mailing-list"},"Subscribe to the mailing list"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"subscribe: ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@seata.apache.org"},"dev-subscribe@seata.apache.org")),(0,o.kt)("li",{parentName:"ul"},"unsubscribe: ",(0,o.kt)("a",{parentName:"li",href:"mailto:dev-unsubscribe@seata.apache.org"},"dev-unsubscribe@seata.apache.org"))),(0,o.kt)("h3",{id:"reporting-issue"},"Reporting issue"),(0,o.kt)("p",null,"You can always reporting an issue to Seata via Github ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues"},"Issues"),"."),(0,o.kt)("p",null,"If you are reporting bugs, please refer to the issue report ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new?template=BUG_REPORT.md"},"template"),"."),(0,o.kt)("p",null,"If you are reporting feature, please refer to the issue report ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new?template=FEATURE_REQUEST.md"},"template"),"."),(0,o.kt)("p",null,"If you are reporting regular issues, like raise an question, you can open an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/issues/new"},"regular issue"),"."),(0,o.kt)("h3",{id:"sending-pull-request"},"Sending pull request"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow the checklist in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md"},"pull request template")),(0,o.kt)("li",{parentName:"ul"},"Before you sending out the pull request, please sync your forked repository with remote repository, this will make your pull request simple and clear. See guide below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:apache/incubator-seata.git\ngit fetch upstream\ngit rebase upstream/master\ngit checkout -b your_awesome_patch\n... add some work\ngit push origin your_awesome_patch\n")),(0,o.kt)("h3",{id:"code-convention"},"Code convention"),(0,o.kt)("p",null,"Please check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md"},"CONTRIBUTING.md")," for code convention."))}d.isMDXComponent=!0}}]);