"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6756],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const c={},a="Funciones CSS \xfatiles",i={unversionedId:"css/function",id:"css/function",title:"Funciones CSS \xfatiles",description:"min()",source:"@site/docs/css/6.function.md",sourceDirName:"css",slug:"/css/function",permalink:"/my-website/docs/css/function",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/css/6.function.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Degradados - Gradient",permalink:"/my-website/docs/css/degradados"},next:{title:"Proyecto Festival M\xfasica",permalink:"/my-website/docs/css/festival"}},s={},l=[{value:"min()",id:"min",level:2},{value:"nth-child()",id:"nth-child",level:2},{value:"Scroll Snap (Scroll por secciones)",id:"scroll-snap-scroll-por-secciones",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"funciones-css-\xfatiles"},"Funciones CSS \xfatiles"),(0,o.kt)("h2",{id:"min"},"min()"),(0,o.kt)("p",null,"Utiliza el valor m\xe1s peque\xf1o de los elementos que se le asignan:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".formulario{\n    background-color: var(--gris);\n    width: min(60rem,100%);\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Lo anterior ahorr el uso de un mediaquery extra")),(0,o.kt)("h2",{id:"nth-child"},"nth-child()"),(0,o.kt)("p",null,"Selecciona determinado elemento dentro de un div seg\xfan su posici\xf3n comenzando desde el 1-n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="contenedor-campos">\n\n    <div class="campo">  \x3c!-- 1 --\x3e\n    </div>\n    \n    <div class="campo">  \x3c!-- 2 --\x3e\n    </div>\n    \n    <div class="campo"> \x3c!-- 3 --\x3e\n    </div>\n    \n    <div class="campo">  \x3c!-- 4 --\x3e\n    </div>\n    \n</div> \x3c!-- .campos --\x3e\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@media(min-width: 768px){\n    .contenedor-campos{\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: auto auto 20rem;\n        column-gap: 1rem;\n    }\n\n    .campo:nth-child(3),\n    .campo:nth-child(4){\n        grid-column: 1 / 3;\n    }\n}\n")),(0,o.kt)("h2",{id:"scroll-snap-scroll-por-secciones"},"Scroll Snap (Scroll por secciones)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"html {\n    scroll-snap-type: y mandatory ; /* mandatory / proximity */\n}\n\n/* Scroll Snap */\n.servicios,\n.navegacion-principal,\n.formulario{\n    scroll-snap-align: center;\n    scroll-snap-stop: always;\n}\n\n/* ---- */\n\n")),(0,o.kt)("p",null,"Cuando se hace scroll se centra hasta la siguiente secci\xf3n"))}d.isMDXComponent=!0}}]);