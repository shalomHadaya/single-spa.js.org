"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3935],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3821:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(3117),i=a(102),o=(a(7294),a(3905)),r=["components"],l={id:"separating-applications",title:"Splitting up applications",sidebar_label:"Splitting applications"},p=void 0,s={unversionedId:"separating-applications",id:"version-5.x/separating-applications",title:"Splitting up applications",description:"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn't necessarily clear, so some options are listed below.",source:"@site/versioned_docs/version-5.x/separating-applications.md",sourceDirName:".",slug:"/separating-applications",permalink:"/docs/separating-applications",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/separating-applications.md",tags:[],version:"5.x",frontMatter:{id:"separating-applications",title:"Splitting up applications",sidebar_label:"Splitting applications"},sidebar:"version-5.x/docs",previous:{title:"single-spa applications",permalink:"/docs/building-applications"},next:{title:"Migrating existing code",permalink:"/docs/migrating-existing-spas"}},c=[{value:"Option 1: One code repo, one build",id:"option-1-one-code-repo-one-build",children:[],level:4},{value:"Option 2: NPM packages",id:"option-2-npm-packages",children:[],level:4},{value:"Option 3: Monorepos",id:"option-3-monorepos",children:[],level:4},{value:"Option 4: Dynamic Module Loading",id:"option-4-dynamic-module-loading",children:[],level:4},{value:"Comparison",id:"comparison",children:[],level:4}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a large, microserviced system, your root single-spa configuration and each of the applications should probably have its own git repository. How to do that in a JavaScript project isn't necessarily clear, so some options are listed below."),(0,o.kt)("p",null,"Since single-spa is a framework that helps with organizational scaling, it is important to figure out how to split out and separate applications from each other so that developers and teams can work on the applications without interfering one another."),(0,o.kt)("p",null,"Most interpretations of microservice architecture encourage separate code repositories, builds, and deployments. Although ",(0,o.kt)("strong",{parentName:"p"},"single-spa does not solve how code is hosted, built, or deployed"),", these are relevant to many users of single-spa, so some strategies for doing so are discussed here."),(0,o.kt)("h4",{id:"option-1-one-code-repo-one-build"},"Option 1: One code repo, one build"),(0,o.kt)("p",null,"The simplest approach for using single-spa is to have one code repository with everything in it. Typically, you would have a single package.json with a single webpack config that produces a bundle that can be included in an HTML file with a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplest to set up"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://danluu.com/monorepo/"},"monolithic version control has some advantages"))),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One master Webpack config and package.json means less flexibility and freedom for each individual project"),(0,o.kt)("li",{parentName:"ul"},"Slow build times once your project gets large"),(0,o.kt)("li",{parentName:"ul"},"Builds and deployments are all tied together, which can necessitate fixed release schedules instead of ad hoc releases.")),(0,o.kt)("h4",{id:"option-2-npm-packages"},"Option 2: NPM packages"),(0,o.kt)("p",null,"Create a root application that npm installs each of the single-spa applications. Each child application is in a separate code repository and is responsible for publishing a new version everytime that it updates. The root application should reinstall, rebuild, and redeploy whenever a single-spa application changes."),(0,o.kt)("p",null,"Typically, the single-spa applications compile themselves separately with babel and/or webpack."),(0,o.kt)("p",null,"Advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"npm install is familiar and easy to set up"),(0,o.kt)("li",{parentName:"ul"},"Separate npm packages means each application can build itself separately before publishing to npm")),(0,o.kt)("p",null,"Disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The root application must reinstall the child applications in order to rebuild/redeploy"),(0,o.kt)("li",{parentName:"ul"},"Medium difficulty to set up")),(0,o.kt)("h4",{id:"option-3-monorepos"},"Option 3: Monorepos"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/netscape/the-case-for-monorepos-907c1361708a"},"monorepo")," with multiple SPAs in a single (mono) repo.\nThis allows for separate builds and deployment without having separate code repositories."),(0,o.kt)("h4",{id:"option-4-dynamic-module-loading"},"Option 4: Dynamic Module Loading"),(0,o.kt)("p",null,'Create a root application which can allow single-spa applications to deploy themselves separately. To do so,\ncreate a manifest file that the single-spa applications update during their deployment process, which controls\nwhich versions of the single-spa applications are "live". Then change which JavaScript file is loaded based on the manifest.'),(0,o.kt)("p",null,"Changing which JavaScript file is loaded for each child application can be done in many ways."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Web server: have your webserver create a dynamic script tag for the "live" version of each single-spa application.'),(0,o.kt)("li",{parentName:"ol"},"Use a ",(0,o.kt)("a",{parentName:"li",href:"https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"},"module loader")," such as ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/systemjs/systemjs"},"SystemJS")," that can download and execute JavaScript code in the browser from dynamic urls.")),(0,o.kt)("h4",{id:"comparison"},"Comparison"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Separate code repositories possible"),(0,o.kt)("th",{parentName:"tr",align:null},"Independent CI builds"),(0,o.kt)("th",{parentName:"tr",align:null},"Separate deployments"),(0,o.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NPM Packages"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/jualoppaz/single-spa-login-example-with-npm-packages"},"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Monorepo"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,o.kt)("a",{parentName:"td",href:"https://medium.com/labs42/monorepo-with-circleci-conditional-workflows-69e65d3f1bd0"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705 ",(0,o.kt)("a",{parentName:"td",href:"https://medium.com/labs42/monorepo-with-circleci-conditional-workflows-69e65d3f1bd0"},"1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/petermikitsh/learn-single-spa"},"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Module loading"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/react-microfrontends/"},"1")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/vue-microfrontends/"},"2")," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/polyglot-microfrontends/"},"3"))))))}u.isMDXComponent=!0}}]);