"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5610],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(v,c(c({ref:r},p),{},{components:t})):n.createElement(v,c({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},992:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={},c="Directiva can",i={unversionedId:"laravel/devjobs/Notes/can",id:"laravel/devjobs/Notes/can",title:"Directiva can",description:"Desde la vista verifica a trav\xe9s de un Policy si un usuario cumple con ciertos criterios para mostrar/hacer algo.",source:"@site/docs/laravel/2-devjobs/Notes/15-can.md",sourceDirName:"laravel/2-devjobs/Notes",slug:"/laravel/devjobs/Notes/can",permalink:"/my-website/docs/laravel/devjobs/Notes/can",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/2-devjobs/Notes/15-can.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Control por roles",permalink:"/my-website/docs/laravel/devjobs/Notes/ControlRoles"},next:{title:"Notificaciones",permalink:"/my-website/docs/laravel/devjobs/Notes/Notificaciones"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directiva-can"},"Directiva ",(0,a.kt)("inlineCode",{parentName:"h1"},"can")),(0,a.kt)("p",null,"Desde la vista verifica a trav\xe9s de un Policy si un usuario cumple con ciertos criterios para mostrar/hacer algo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"@can('create',App\\Models\\Vacante::class)\n    <p> Es un reclutador </p>\n@else\n    <p> Es un desarrollador </p>\n@endcan\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"@cannot('create',App\\Models\\Vacante::class)\n    <p> Es un desarrollador </p>\n@else\n    <p> Es un reclutador </p>\n@endcannot\n")))}d.isMDXComponent=!0}}]);