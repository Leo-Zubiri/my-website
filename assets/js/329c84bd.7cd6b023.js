"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4712],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2402:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={},l="Helpers",c={unversionedId:"laravel/laravel-react/Notes/helpers",id:"laravel/laravel-react/Notes/helpers",title:"Helpers",description:"Se crea el directorio helpers dentro de src",source:"@site/docs/laravel/3-laravel-react/Notes/6-helpers.md",sourceDirName:"laravel/3-laravel-react/Notes",slug:"/laravel/laravel-react/Notes/helpers",permalink:"/docs/laravel/laravel-react/Notes/helpers",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/3-laravel-react/Notes/6-helpers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Componentes",permalink:"/docs/laravel/laravel-react/Notes/components"},next:{title:"Context API",permalink:"/docs/laravel/laravel-react/Notes/context"}},i={},p=[],s={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"helpers"},"Helpers"),(0,a.kt)("p",null,"Se crea el directorio ",(0,a.kt)("inlineCode",{parentName:"p"},"helpers")," dentro de ",(0,a.kt)("inlineCode",{parentName:"p"},"src")),(0,a.kt)("p",null,"Dentro se pueden colocar archivos js con funciones de ayuda, ejemplo para formatear a moneda un n\xfamero:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export const formatearDinero = cantidad => {\n    return cantidad.toLocaleString('en-US',{\n        style: 'currency',\n        currency: 'USD'\n    })\n}\n")),(0,a.kt)("p",null,"Ya desde un componente se puede importar la funci\xf3n y utilizarla desde este:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { formatearDinero } from "../helpers";\n\nexport default function Producto({producto}) {\n    const {nombre,imagen,precio} = producto;\n\n  return (\n    <p> {formatearDinero(precio)} </p>\n  )\n}\n\n')))}d.isMDXComponent=!0}}]);