"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5098],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8291:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={id:"devtools",title:"single-spa-inspector",sidebar_label:"Overview"},l=void 0,p={unversionedId:"devtools",id:"version-5.x/devtools",title:"single-spa-inspector",description:"The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with single-spa applications. Github project.",source:"@site/versioned_docs/version-5.x/devtools.md",sourceDirName:".",slug:"/devtools",permalink:"/docs/devtools",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/devtools.md",tags:[],version:"5.x",frontMatter:{id:"devtools",title:"single-spa-inspector",sidebar_label:"Overview"},sidebar:"version-5.x/docs",previous:{title:"Overview",permalink:"/docs/ssr-overview"},next:{title:"Overview",permalink:"/docs/contributing-overview"}},c=[{value:"Installation links",id:"installation-links",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Configuring app overlays",id:"configuring-app-overlays",children:[],level:2},{value:"import-map-overrides",id:"import-map-overrides",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with ",(0,a.kt)("a",{parentName:"p",href:"https://single-spa.js.org"},"single-spa")," applications. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-inspector"},"Github project"),"."),(0,a.kt)("p",null,"Requires >= ",(0,a.kt)("a",{parentName:"p",href:"mailto:single-spa@4.1"},"single-spa@4.1"),"."),(0,a.kt)("h2",{id:"installation-links"},"Installation links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/single-spa-inspector/"},"Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/single-spa-inspector/emldbibkihanfiaiaghebffnbahjcgcp"},"Chrome"))),(0,a.kt)("p",null,"Note: you can also build and run this locally. See ",(0,a.kt)("a",{parentName:"p",href:"#how-to-contribute"},"how to contribute"),"."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"List all registered applications (mounted at top)"),(0,a.kt)("li",{parentName:"ul"},"Show all application statuses (statii)"),(0,a.kt)("li",{parentName:"ul"},"Force mount and unmount an application"),(0,a.kt)("li",{parentName:"ul"},"Show app overlays (see ",(0,a.kt)("a",{parentName:"li",href:"#configuring-app-overlays"},"configuring app overlays")," to enable this feature)"),(0,a.kt)("li",{parentName:"ul"},"Provides an interface for adding ",(0,a.kt)("a",{parentName:"li",href:"#import-map-overrides"},"import-map overrides"))),(0,a.kt)("h2",{id:"configuring-app-overlays"},"Configuring app overlays"),(0,a.kt)("p",null,'App overlays allow you to hover over a mounted app\'s name and have an "inspect element" type experience which shows where the app is in the DOM. This is especially useful for when multiple apps are mounted at the same time (e.g. in some places Canopy has upwards of 4 apps mounted on a single page/URL!).'),(0,a.kt)("p",null,"To add app overlays, find the file where you export your lifecycle functions (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mount"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unmount"),") and add another exported object with the following shape:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// must be called \"devtools\"\nexport const devtools = {\n  overlays: {\n    // selectors is required for overlays to work\n    selectors: [\n      // an array of CSS selector strings, meant to be unique ways to identify the outermost container of your app\n      // you can have more than one, for cases like parcels or different containers for differet views\n      '#my-app',\n      '.some-container .app',\n    ],\n    // options is optional\n    options: {\n      // these options allow you some control over how the overlay div looks/behaves\n      // the listed values below are the defaults\n\n      width: '100%',\n      height: '100%',\n      zIndex: 40,\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      color: '#000', // the default for this is actually based on the app's name, so it's dynamic. can be a hex or a CSS color name\n      background: '#000', // the default for this is actually based on the app's name, so it's dynamic. can be a hex or a CSS color name\n      textBlocks: [\n        // allows you to add additional text to the overlay. for example, you can add the name of the team/squad that owns this app\n        // each string in this array will be in a new div\n        // 'blue squad', 'is awesome'\n        // turns into:\n        // <div>blue squad</div><div>is awesome</div>\n      ],\n    },\n  },\n};\n")),(0,a.kt)("h2",{id:"import-map-overrides"},"import-map-overrides"),(0,a.kt)("p",null,"If your environment uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WICG/import-maps"},"import-maps"),", single-spa Inspector provides an interface for adding import-map overrides when utilizing the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/import-map-overrides"},"import-map-overrides")," library. Once the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/joeldenning/import-map-overrides#installation"},"installation requirements")," for import-map-overrides are completed, you can add, remove, and refresh the page with your overrides."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of single-spa Inspector extension with import-maps overrides",src:n(2194).Z})))}d.isMDXComponent=!0},2194:function(e,t,n){t.Z=n.p+"assets/images/demo-with-importmapoverrides-f99dcb03696d1cc229ec0d53589a6c63.png"}}]);