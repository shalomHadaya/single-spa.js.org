"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9414],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],l={id:"building-applications",title:"Building single-spa applications",sidebar_label:"single-spa applications"},p=void 0,s={unversionedId:"building-applications",id:"version-5.x/building-applications",title:"Building single-spa applications",description:"A single-spa registered application is everything that a normal SPA is, except that it doesn't have an HTML page. In a single-spa world, your SPA contains many registered applications, where each has its own framework. Registered applications have their own client-side routing and their own frameworks/libraries. They render their own HTML and have full freedom to do whatever they want, whenever they are mounted. The concept of being mounted refers to whether a registered application is putting content on the DOM or not. What determines if a registered application is mounted is its activity function. Whenever a registered application is not mounted, it should remain completely dormant until mounted.",source:"@site/versioned_docs/version-5.x/building-applications.md",sourceDirName:".",slug:"/building-applications",permalink:"/docs/building-applications",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/building-applications.md",tags:[],version:"5.x",frontMatter:{id:"building-applications",title:"Building single-spa applications",sidebar_label:"single-spa applications"},sidebar:"version-5.x/docs",previous:{title:"Configuring single-spa",permalink:"/docs/configuration"},next:{title:"Splitting applications",permalink:"/docs/separating-applications"}},c=[{value:"Creating a registered application",id:"creating-a-registered-application",children:[],level:2},{value:"Registered application lifecycle",id:"registered-application-lifecycle",children:[],level:2},{value:"Lifecyle props",id:"lifecyle-props",children:[{value:"Built-in props",id:"built-in-props",children:[],level:4},{value:"Custom props",id:"custom-props",children:[],level:4},{value:"Lifecycle helpers",id:"lifecycle-helpers",children:[],level:3},{value:"Load",id:"load",children:[],level:3},{value:"Bootstrap",id:"bootstrap",children:[],level:3},{value:"Mount",id:"mount",children:[],level:3},{value:"Unmount",id:"unmount",children:[],level:3},{value:"Unload",id:"unload",children:[],level:3}],level:2},{value:"Timeouts",id:"timeouts",children:[],level:2},{value:"Transitioning between applications",id:"transitioning-between-applications",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A single-spa registered application is everything that a normal SPA is, except that it doesn't have an HTML page. In a single-spa world, your SPA contains many registered applications, where each has its own framework. Registered applications have their own client-side routing and their own frameworks/libraries. They render their own HTML and have full freedom to do whatever they want, whenever they are ",(0,o.kt)("em",{parentName:"p"},"mounted"),". The concept of being ",(0,o.kt)("em",{parentName:"p"},"mounted")," refers to whether a registered application is putting content on the DOM or not. What determines if a registered application is mounted is its ",(0,o.kt)("a",{parentName:"p",href:"configuration#activity-function"},"activity function"),". Whenever a registered application is ",(0,o.kt)("em",{parentName:"p"},"not mounted"),", it should remain completely dormant until mounted."),(0,o.kt)("h2",{id:"creating-a-registered-application"},"Creating a registered application"),(0,o.kt)("p",null,"To create a registered application, first ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/#registering-applications"},"register the application with single-spa"),". Once registered, the registered application must correctly implement ",(0,o.kt)("strong",{parentName:"p"},"all")," of the following lifecycle functions inside of its main entry point."),(0,o.kt)("h2",{id:"registered-application-lifecycle"},"Registered application lifecycle"),(0,o.kt)("p",null,"During the course of a single-spa page, registered applications are loaded, bootstrapped (initialized), mounted, unmounted, and unloaded. single-spa provides hooks into each phase via ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycles"),"."),(0,o.kt)("p",null,"A lifecycle function is a function or array of functions that single-spa will call on a registered application. single-spa calls these by finding specific named exports from the registered application's main file."),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mount"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"unmount")," is required. But implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"unload")," is optional."),(0,o.kt)("li",{parentName:"ul"},"Each lifecycle function must either return a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," or be an ",(0,o.kt)("inlineCode",{parentName:"li"},"async function"),"."),(0,o.kt)("li",{parentName:"ul"},"If an array of functions is exported (instead of just one function), the functions will be called\none-after-the-other, waiting for the resolution of one function's promise before calling the next."),(0,o.kt)("li",{parentName:"ul"},"If single-spa is ",(0,o.kt)("a",{parentName:"li",href:"/docs/api#start"},"not started"),", applications will be loaded,\nbut will not be bootstrapped, mounted or unmounted.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Framework-specific helper libraries exist in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ecosystem"},"single-spa ecosystem")," to implement these required lifecycle methods. This documentation is helpful for understanding what those helpers are doing, or for implementing your own."))),(0,o.kt)("h2",{id:"lifecyle-props"},"Lifecyle props"),(0,o.kt)("p",null,"Lifecycle functions are called with a ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," argument, which is an object with some guaranteed information and additional custom information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function bootstrap(props) {\n  const {\n    name, // The name of the application\n    singleSpa, // The singleSpa instance\n    mountParcel, // Function for manually mounting\n    customProps, // Additional custom information\n  } = props; // Props are given to every lifecycle\n  return Promise.resolve();\n}\n")),(0,o.kt)("h4",{id:"built-in-props"},"Built-in props"),(0,o.kt)("p",null,"Each lifecycle function is guaranteed to be called with the following props:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The string name that was registered to single-spa."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"singleSpa"),": A reference to the singleSpa instance, itself. This is intended to allow applications and helper libraries to call singleSpa\nAPIs without having to import it. This is useful in situations where there are multiple webpack configs that are not set up to ensure\nthat only one instance of singleSpa is loaded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mountParcel"),": The ",(0,o.kt)("a",{parentName:"li",href:"/docs/parcels-api.html#mountparcel"},"mountParcel function"),".")),(0,o.kt)("h4",{id:"custom-props"},"Custom props"),(0,o.kt)("p",null,"In addition to the built-in props that are provided by single-spa, you may optionally specify custom props to be passed to an application. These ",(0,o.kt)("em",{parentName:"p"},"customProps")," will be passed into each lifecycle method. The custom props are an object, and you can provide either the object or a function that returns the object. Custom prop functions are called with the application name and current window.location as arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="root-config.js"',title:'"root-config.js"'},"singleSpa.registerApplication({\n  name: 'app1',\n  activeWhen,\n  app,\n  customProps: { authToken: 'd83jD63UdZ6RS6f70D0' },\n});\n\nsingleSpa.registerApplication({\n  name: 'app1',\n  activeWhen,\n  app,\n  customProps: (name, location) => {\n    return { authToken: 'd83jD63UdZ6RS6f70D0' };\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app1.js"',title:'"app1.js"'},"export function mount(props) {\n  // do something with the common authToken in app1\n  console.log(props.authToken);\n  return reactLifecycles.mount(props);\n}\n")),(0,o.kt)("p",null,"Some use cases could be to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"share a common access token with all child apps"),(0,o.kt)("li",{parentName:"ul"},"pass down some initialization information, like the rendering target"),(0,o.kt)("li",{parentName:"ul"},"pass a reference to a common event bus so each app may talk to each other")),(0,o.kt)("p",null,"Note that when no ",(0,o.kt)("em",{parentName:"p"},"customProps")," are provided during registration, ",(0,o.kt)("inlineCode",{parentName:"p"},"props.customProps")," defaults to an empty object."),(0,o.kt)("h3",{id:"lifecycle-helpers"},"Lifecycle helpers"),(0,o.kt)("p",null,"Some helper libraries that implement lifecycle functions for ease of use are available for many popular frameworks/libraries. Learn more on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/ecosystem"},"Ecosystem page"),"."),(0,o.kt)("h3",{id:"load"},"Load"),(0,o.kt)("p",null,"When registered applications are being lazily loaded, this refers to when the code for a registered application is fetched from the server and executed. This will happen once the registered application's ",(0,o.kt)("a",{parentName:"p",href:"configuration#activity-function"},"activity function")," returns a truthy value for the first time. It is best practice to do as little as possible / nothing at all during ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", but instead to wait until the bootstrap lifecycle function to do anything. If you need to do something during ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", simply put the code into a registered application's main entry point, but not inside of an exported function. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log("The registered application has been loaded!");\n\nexport async function bootstrap(props) {...}\nexport async function mount(props) {...}\nexport async function unmount(props) {...}\n')),(0,o.kt)("h3",{id:"bootstrap"},"Bootstrap"),(0,o.kt)("p",null,"This lifecycle function will be called once, right before the registered application is mounted for the first time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function bootstrap(props) {\n  return Promise.resolve().then(() => {\n    // One-time initialization code goes here\n    console.log('bootstrapped!');\n  });\n}\n")),(0,o.kt)("h3",{id:"mount"},"Mount"),(0,o.kt)("p",null,"This lifecycle function will be called whenever the registered application is not mounted, but its ",(0,o.kt)("a",{parentName:"p",href:"configuration#activity-function"},"activity function")," returns a truthy value. When called, this function should look at the URL to determine the active route and then create DOM elements, DOM event listeners, etc. to render content to the user. Any subsequent routing events (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"hashchange")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"popstate"),") will ",(0,o.kt)("strong",{parentName:"p"},"not")," trigger more calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"mount"),", but instead should be handled by the application itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function mount(props) {\n  return Promise.resolve().then(() => {\n    // Do framework UI rendering here\n    console.log('mounted!');\n  });\n}\n")),(0,o.kt)("h3",{id:"unmount"},"Unmount"),(0,o.kt)("p",null,"This lifecycle function will be called whenever the registered application is mounted, but its ",(0,o.kt)("a",{parentName:"p",href:"configuration#activity-function"},"activity function")," returns a falsy value. When called, this function should clean up all DOM elements, DOM event listeners, leaked memory, globals, observable subscriptions, etc. that were created at any point when the registered application was mounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function unmount(props) {\n  return Promise.resolve().then(() => {\n    // Do framework UI unrendering here\n    console.log('unmounted!');\n  });\n}\n")),(0,o.kt)("h3",{id:"unload"},"Unload"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"unload")," lifecycle is an optionally implemented lifecycle function. It will be called whenever an application should be ",(0,o.kt)("inlineCode",{parentName:"p"},"unloaded"),". This will not ever happen unless someone calls the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api#unloadapplication"},(0,o.kt)("inlineCode",{parentName:"a"},"unloadApplication"))," API. If a registered application does not implement the unload lifecycle, then it assumed that unloading the app is a no-op."),(0,o.kt)("p",null,"The purpose of the ",(0,o.kt)("inlineCode",{parentName:"p"},"unload")," lifecycle is to perform logic right before a single-spa application is unloaded. Once the application is unloaded, the application status will be NOT_LOADED and the application will be re-bootstrapped."),(0,o.kt)("p",null,"The motivation for ",(0,o.kt)("inlineCode",{parentName:"p"},"unload")," was to implement the hot-loading of entire registered applications, but it is useful in other scenarios as well when you want to re-bootstrap applications, but perform some logic before applications are re-bootstrapped."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function unload(props) {\n  return Promise.resolve().then(() => {\n    // Hot-reloading implementation goes here\n    console.log('unloaded!');\n  });\n}\n")),(0,o.kt)("h2",{id:"timeouts"},"Timeouts"),(0,o.kt)("p",null,"By default, registered applications obey the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api#setbootstrapmaxtime"},"global timeout configuration"),", but can override that behavior for their specific application. This is done by exporting a ",(0,o.kt)("inlineCode",{parentName:"p"},"timeouts")," object from the main entry point of the registered application. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app-1.js"',title:'"app-1.js"'},"export function bootstrap(props) {...}\nexport function mount(props) {...}\nexport function unmount(props) {...}\n\nexport const timeouts = {\n  bootstrap: {\n    millis: 5000,\n    dieOnTimeout: true,\n    warningMillis: 2500,\n  },\n  mount: {\n    millis: 5000,\n    dieOnTimeout: false,\n    warningMillis: 2500,\n  },\n  unmount: {\n    millis: 5000,\n    dieOnTimeout: true,\n    warningMillis: 2500,\n  },\n  unload: {\n    millis: 5000,\n    dieOnTimeout: true,\n    warningMillis: 2500,\n  },\n};\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"millis")," refers to the number of milliseconds for the final console warning, and ",(0,o.kt)("inlineCode",{parentName:"p"},"warningMillis")," refers to the number of milliseconds at which a warning will be printed to the console (on an interval) leading up to the final console warning."),(0,o.kt)("h2",{id:"transitioning-between-applications"},"Transitioning between applications"),(0,o.kt)("p",null,"If you find yourself wanting to add transitions as applications are mounted and unmounted, then you'll probably want to tie into the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mount"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"unmount")," lifecycle methods. This ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/frehner/singlespa-transitions"},"single-spa transitions")," repo is a small proof-of-concept of how you can tie into these lifecycle methods to add transitions as your apps mount and unmount."),(0,o.kt)("p",null,"Transitions for pages within a mounted application can be handled entirely by the application itself. For example, using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-transition-group"},"react-transition-group")," for React-based projects."))}d.isMDXComponent=!0}}]);