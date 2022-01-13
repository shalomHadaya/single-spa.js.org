"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3810],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},389:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=a(3117),r=a(102),n=(a(7294),a(3905)),i=["components"],s={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},l=void 0,p={unversionedId:"faq",id:"version-5.x/faq",title:"Frequently Asked Questions",description:"What does single-spa do?",source:"@site/versioned_docs/version-5.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/faq.md",tags:[],version:"5.x",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"}},c=[{value:"What does single-spa do?",id:"what-does-single-spa-do",children:[],level:2},{value:"Is there a recommended setup?",id:"is-there-a-recommended-setup",children:[],level:2},{value:"Should I have a parent/root app and children apps?",id:"should-i-have-a-parentroot-app-and-children-apps",children:[],level:2},{value:"What is the impact to performance?",id:"what-is-the-impact-to-performance",children:[],level:2},{value:"Can I have only one version of (React, Vue, Angular, etc.) loaded?",id:"can-i-have-only-one-version-of-react-vue-angular-etc-loaded",children:[],level:2},{value:"What are import maps?",id:"what-are-import-maps",children:[],level:2},{value:"How can I share application state between applications?",id:"how-can-i-share-application-state-between-applications",children:[],level:2},{value:"Should I use frontend microservices?",id:"should-i-use-frontend-microservices",children:[],level:2},{value:"Can I use more than one framework?",id:"can-i-use-more-than-one-framework",children:[],level:2},{value:"What is the developer experience (DX) like?",id:"what-is-the-developer-experience-dx-like",children:[],level:2},{value:"Can each single-spa application have its own git repo?",id:"can-each-single-spa-application-have-its-own-git-repo",children:[],level:2},{value:"Can single-spa applications be deployed independently?",id:"can-single-spa-applications-be-deployed-independently",children:[],level:2},{value:"What does the CI/CD process look like?",id:"what-does-the-cicd-process-look-like",children:[],level:2},{value:"Create React App",id:"create-react-app",children:[],level:2},{value:"Code splits",id:"code-splits",children:[],level:2},{value:"Does single-spa require additional security considerations?",id:"does-single-spa-require-additional-security-considerations",children:[],level:2},{value:"How do I write tests for single-spa?",id:"how-do-i-write-tests-for-single-spa",children:[],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-does-single-spa-do"},"What does single-spa do?"),(0,n.kt)("p",null,"single-spa is a top level router. When a route is active, it downloads and executes the code for that route."),(0,n.kt)("p",null,'The code for a route is called an "application", and each can (optionally) be in its own git repository, have its own CI process, and be separately deployed.\nThe applications can all be written in the same framework, or they can be implemented in different frameworks.'),(0,n.kt)("h2",{id:"is-there-a-recommended-setup"},"Is there a recommended setup?"),(0,n.kt)("p",null,"Yes, here is ",(0,n.kt)("a",{parentName:"p",href:"/docs/recommended-setup/"},"the documentation for our recommended setup"),"."),(0,n.kt)("h2",{id:"should-i-have-a-parentroot-app-and-children-apps"},"Should I have a parent/root app and children apps?"),(0,n.kt)("p",null,"No. We strongly encourage that your single-spa-config or root application does not use any JavaScript UI frameworks (React, Angular, Angularjs, Vue, etc). In our experience a plain JavaScript module is best for the single-spa-config and only the registered applications actually use UI frameworks (Angular, React, Vue, etc)."),(0,n.kt)("p",null,"Why? You end up creating a structure that has all the disadvantages of microservices without any of the advantages: your apps are now coupled together and you have to change multiple apps at the same time in order to make updates. Good microservices are completely ",(0,n.kt)("strong",{parentName:"p"},"independent"),", and this pattern breaks that."),(0,n.kt)("h2",{id:"what-is-the-impact-to-performance"},"What is the impact to performance?"),(0,n.kt)("p",null,"When setup in the ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"recommended way"),", your code performance and bundle size will be nearly identical to a single application that has been code-split. The major differences will be the addition of the single-spa library (and SystemJS if you chose to use it). Other differences mainly come down to the difference between one (webpack / rollup / etc.) code bundle and in-browser ES modules."),(0,n.kt)("h2",{id:"can-i-have-only-one-version-of-react-vue-angular-etc-loaded"},"Can I have only one version of (React, Vue, Angular, etc.) loaded?"),(0,n.kt)("p",null,"Yes, and it's highly recommended you do so! Using ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"the recommended setup"),", you configure your ",(0,n.kt)("a",{parentName:"p",href:"#what-are-import-maps"},"import map")," so that your library is defined only once. Then, tell each application to ",(0,n.kt)("em",{parentName:"p"},"not")," bundle that library; instead, the library will given to you at runtime in the browser. See ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"webpack\u2019s externals")," (and other bundlers have similar options) for how to do this."),(0,n.kt)("p",null,"You do have the option of ",(0,n.kt)("em",{parentName:"p"},"not")," excluding those libraries (for example if you want to experiment with a newer version or a different library) but be aware of the effect that will have on user's bundle sizes and application speed."),(0,n.kt)("h2",{id:"what-are-import-maps"},"What are import maps?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"Import maps")," improve the developer experience of in-browser ES modules by allowing you to write something like ",(0,n.kt)("inlineCode",{parentName:"p"},'import React from "react"')," instead of needing to use an absolute or relative URL for your import statement. The same is also true of importing from other single-spa applications, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},'import {MyButton} from "styleguide"'),". The import-map spec is currently in the process of being accepted as a web standard and at the time of writing has been ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2019/03/kv-storage#import_maps"},"implemented in Chrome"),", and a polyfill for browsers >= IE11 has been implemented by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/systemjs/systemjs"},"SystemJS >= 3.0"),". Also see ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"the recommended setup")),(0,n.kt)("h2",{id:"how-can-i-share-application-state-between-applications"},"How can I share application state between applications?"),(0,n.kt)("p",null,"The primary means of communicating between applications is ",(0,n.kt)("a",{parentName:"p",href:"/docs/recommended-setup#cross-microfrontend-imports"},"cross microfrontend imports"),". This allows you define a public interface for a microfrontend that others can use. You may expose functions, data, components, stores, or anything else from any microfrontend to be available in any other."),(0,n.kt)("p",null,"We recommend that each application manage as much of its own state as possible so that your applications remain independently deployable without the risk of breaking each other. Generally, it\u2019s better to make an API request for the data that each app needs, even if parts of it have been requested by other apps. If you've split your applications well, there will end up being very little application state that is truly shared \u2014 for example, your friends list has different data requirements than your social feed."),(0,n.kt)("p",null,"The list below shows some common practices:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a shared API ",(0,n.kt)("a",{parentName:"li",href:"/docs/recommended-setup#utility-modules-styleguide-api-etc"},"utility microfrontend")," that caches fetch/XHR requests and their responses. All microfrontends call into the API microfrontend when making a request, so that the microfrontend can control whether to refetch the data or not."),(0,n.kt)("li",{parentName:"ol"},"Create a shared Auth ",(0,n.kt)("a",{parentName:"li",href:"/docs/recommended-setup#utility-modules-styleguide-api-etc"},"utility microfrontend")," that exposes a ",(0,n.kt)("inlineCode",{parentName:"li"},"userCanAccess")," function for other microfrontends to use when checking permissions. The auth module may also include other exports such as the logged in user object, auth tokens, etc."),(0,n.kt)("li",{parentName:"ol"},"Export shared state from the public interface of your microfrontend so that libraries can import it. For values that change over time, Observables (",(0,n.kt)("a",{parentName:"li",href:"https://rxjs-dev.firebaseapp.com/"},"RxJS docs"),") can be useful. Create a ",(0,n.kt)("a",{parentName:"li",href:"https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject"},"ReplaySubject")," so that you can push new values out to all subscribers at any time."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#Creating_custom_events"},"custom browser events")," to communicate. Fire them on the window in one microfrontend, and listen to the event in a different microfrontend."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies"),", ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"local/session storage"),", or other similar methods for storing and reading that state. These methods work best with things that don't change often, e.g. logged-in user info.")),(0,n.kt)("h2",{id:"should-i-use-frontend-microservices"},"Should I use frontend microservices?"),(0,n.kt)("p",null,"If you\u2019ve ran into some of the headaches a monolithic repo has, then you should really consider it."),(0,n.kt)("p",null,"In addition, if your organization is setup in a Spotify-type model (e.g. where there are autonomous squads that own full-stack features) then microservices on the frontend will fit very well into your setup."),(0,n.kt)("p",null,"However, if you\u2019re just starting off and have a small project or a small team, we would recommend you stick with a monolith (i.e. not microservices) until you get to the point that scaling (e.g. organizational scaling, feature scaling, etc.) is getting hard. Don\u2019t worry, we\u2019ll be here to help you migrate when you get there."),(0,n.kt)("h2",{id:"can-i-use-more-than-one-framework"},"Can I use more than one framework?"),(0,n.kt)("p",null,"Yes. However, it\u2019s something you\u2019ll want to consider hard because it splits your front-end organization into specialities that aren\u2019t compatible (e.g. a React specialist may have problems working in an Angular app), and also causes more code to be shipped to your users."),(0,n.kt)("p",null,"However, it is great for migrations ",(0,n.kt)("em",{parentName:"p"},"away")," from an older or unwanted library, which allows you to slowly rip out the code in the old application and replace it with new code in the new library (see Google results for ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=the+strangler+pattern&oq=the+strangler+pattern"},"the strangler pattern"),")."),(0,n.kt)("p",null,"It also is a way to allow large organizations to experiment on different libraries without a strong commitment to them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Just be conscious of the effect it has on your users and their experience using your app.")),(0,n.kt)("h2",{id:"what-is-the-developer-experience-dx-like"},"What is the developer experience (DX) like?"),(0,n.kt)("p",null,"If you're using the ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"recommended setup")," for single-spa, you'll simply be able to go to your development website, add an import map that points to your locally-running code, and refresh the page."),(0,n.kt)("p",null,"There's a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/import-map-overrides"},"library")," that you can use, or you can even just do it yourself - you'll note that the source code is pretty simple. The main takeaway is that you can have multiple ",(0,n.kt)("a",{parentName:"p",href:"#what-are-import-maps"},"import maps")," and the latest one wins - you add an import map that overrides the default URL for an application to point to your localhost."),(0,n.kt)("p",null,"We're also looking at providing this functionality as part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-inspector"},"Chrome/Firefox browser extension"),"."),(0,n.kt)("p",null,"Finally, this setup also enables you to do overrides ",(0,n.kt)("em",{parentName:"p"},"in your production environment"),". It obviously should be used with caution, but it does enable a powerful way of debugging problems and validating solutions."),(0,n.kt)("p",null,"As a point of reference, nearly all developers we've worked with ",(0,n.kt)("strong",{parentName:"p"},"prefer the developer experience of microservices + single-spa")," over a monolithic setup."),(0,n.kt)("h2",{id:"can-each-single-spa-application-have-its-own-git-repo"},"Can each single-spa application have its own git repo?"),(0,n.kt)("p",null,"Yes! You can even give them their own package.json, webpack config, and CI/CD process, using SystemJS to bring them all together in the browser."),(0,n.kt)("h2",{id:"can-single-spa-applications-be-deployed-independently"},"Can single-spa applications be deployed independently?"),(0,n.kt)("p",null,"Yes! See next section about CI/CD."),(0,n.kt)("h2",{id:"what-does-the-cicd-process-look-like"},"What does the CI/CD process look like?"),(0,n.kt)("p",null,"In other words, how do I build and deploy a single-spa application?"),(0,n.kt)("p",null,"With the ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"recommended setup"),", the process generally flows like this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Bundle your code and upload it to a CDN."),(0,n.kt)("li",{parentName:"ol"},"Update your dev environment's import map to point to the new URL. In other words, your import map used to say ",(0,n.kt)("inlineCode",{parentName:"li"},'"styleguide": "cdn.com/styleguide/v1.js"')," and now it should say ",(0,n.kt)("inlineCode",{parentName:"li"},'"styleguide": "cdn.com/styleguide/v2.js"'))),(0,n.kt)("p",null,"Some options on ",(0,n.kt)("em",{parentName:"p"},"how")," to update your import map include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server render your ",(0,n.kt)("inlineCode",{parentName:"li"},"index.html")," with the import map inlined. This does not mean that your DOM elements need to all be server rendered, but just the ",(0,n.kt)("inlineCode",{parentName:"li"},'<script type="systemjs-importmap">')," element. Provide an API that either updates a database table or a file local to the server."),(0,n.kt)("li",{parentName:"ul"},"Have your import map itself on a CDN, and use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/single-spa/import-map-deployer"},"import-map-deployer")," or similar to update the import map during your CI process. This method has a small impact on performance, but is generally easier to setup if you don't have a server-rendered setup already. (You can also ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content"},"preload")," the import map file to help provide a small speed boost). See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/openmrs/openmrs-esm-root-config/blob/master/.travis.yml"},"example travis.yml"),". Other CI tools work, too.")),(0,n.kt)("h2",{id:"create-react-app"},"Create React App"),(0,n.kt)("p",null,"Tutorial video: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=W8oaySHuj3Y&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=10"},"Youtube")," / ",(0,n.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV16Z4y1j72X/"},"Bilibili")),(0,n.kt)("p",null,"If you are starting from scratch, it is preferred to use ",(0,n.kt)("a",{parentName:"p",href:"/docs/create-single-spa/"},"create-single-spa")," instead of create-react-app."),(0,n.kt)("p",null,"Create React App (CRA) projects must be altered before use with single-spa. The reason is that CRA presumes that each project has its own HTML file, whereas in single-spa all microfrontends must share an HTML file."),(0,n.kt)("p",null,"Here are your options:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Remove ",(0,n.kt)("inlineCode",{parentName:"li"},"react-scripts")," and then run ",(0,n.kt)("a",{parentName:"li",href:"/docs/create-single-spa/"},(0,n.kt)("inlineCode",{parentName:"a"},"create-single-spa"))," on your project. This will merge create-single-spa's package.json with yours, and provide you with a default webpack config. Run ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn start")," and fix webpack configuration errors until it's working."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/hasanayan/craco-plugin-single-spa-application"},"craco-plugin-single-spa-application")," to modify the webpack config without ejecting. See the project's README for basic configuration."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/timarney/react-app-rewired/blob/master/README.md"},"react-app-rewired")," to modify the webpack config. See ",(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/joeldenning/79f2592086ad132fae8ee5aae054c0b6"},"this Gist")," that shows a basic config you can start with. The example config may not work in every case or solve every problem."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject"},"Eject")," your CRA project's webpack config so you can modify it.")),(0,n.kt)("p",null,"If you don't use create-single-spa's default webpack config, here are the changes you need to make:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Remove Webpack optimizations block, because they add multiple webpack chunks that don't load each other"),(0,n.kt)("li",{parentName:"ol"},"Remove html-webpack plugin"),(0,n.kt)("li",{parentName:"ol"},"Change ",(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/output/#outputlibrarytarget"},(0,n.kt)("inlineCode",{parentName:"a"},"output.libraryTarget"))," to ",(0,n.kt)("inlineCode",{parentName:"li"},"System"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"UMD"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"AMD"),".")),(0,n.kt)("p",null,"CRA does not allow you to change those items without ejecting or using another tool."),(0,n.kt)("h2",{id:"code-splits"},"Code splits"),(0,n.kt)("p",null,"Single spa supports code splits. There are so many ways to code split we won't be able to cover them all, but if you're using the ",(0,n.kt)("a",{parentName:"p",href:"#is-there-a-recommended-setup"},"recommended setup")," with webpack you'll need to do at least two things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/#on-the-fly"},(0,n.kt)("inlineCode",{parentName:"a"},"__webpack_public_path__"))," dynamically so webpack knows where to fetch your code splits (webpack assumes they are located at the root of the server and that isn't always true in a single-spa application). Both solutions below should be the very first import of your application in order to work."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For SystemJS >= 6, use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/joeldenning/systemjs-webpack-interop"},"systemjs-webpack-interop"),":")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { setPublicPath } from 'systemjs-webpack-interop';\n\nsetPublicPath('name-of-module-in-import-map');\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For SystemJS 2-5: Find a code example ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com/TheMcMurder/single-spa-portal-example/blob/master/people/src/set-public-path.js#L3"},"here")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set either ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#outputjsonpfunction"},(0,n.kt)("inlineCode",{parentName:"a"},"output.jsonpFunction"))," or ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#outputlibrary"},(0,n.kt)("inlineCode",{parentName:"a"},"output.library"))," to ensure that each app's webpack doesn't collide with other apps' webpack. ",(0,n.kt)("inlineCode",{parentName:"p"},"jsonpFunction")," is preferred."))),(0,n.kt)("p",null,"For more information about webpack configuration and single-spa, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/recommended-setup#build-tools-webpack--rollup"},"the recommended setup"),"."),(0,n.kt)("h2",{id:"does-single-spa-require-additional-security-considerations"},"Does single-spa require additional security considerations?"),(0,n.kt)("p",null,"No. single-spa does not add, deviate, or attempt to bypass any browser JavaScript security measures. The security needs of your applications are the same as if you did not use single-spa."),(0,n.kt)("p",null,"Outside of that, web applications may use the following resources that have their own security considerations that you may need to become familiar with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"ES6 module dynamic imports"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Webpack-based applications use ",(0,n.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Webpack's implementation of dynamic imports")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing (CORS)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Threats"},"Content Security Policy (CSP)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"module imports specifically relate to ",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"},"CSP ",(0,n.kt)("inlineCode",{parentName:"a"},"script-src"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#How_Subresource_Integrity_helps"},"Subresource Integrity (SRI)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See also ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/WICG/import-maps/issues/174"},"import-maps script \u201cintegrity\u201d attribute")))),(0,n.kt)("li",{parentName:"ul"},"Import-maps are also governed by CSP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See also ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/WICG/import-maps/blob/master/README.md#supplying-out-of-band-metadata-for-each-module"},'"Supplying out-of-band metadata for each module"'))))),(0,n.kt)("h2",{id:"how-do-i-write-tests-for-single-spa"},"How do I write tests for single-spa?"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/docs/testing/units/"},"the documentation for unit")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/testing/e2e"},"E2E")," tests."))}u.isMDXComponent=!0}}]);