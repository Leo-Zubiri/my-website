"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5244],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6103:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),s=(t(7294),t(3905));const a={},o="Session() Message",i={unversionedId:"laravel/devjobs/Notes/SessionMessage",id:"laravel/devjobs/Notes/SessionMessage",title:"Session() Message",description:"Al crear un mensaje de sesi\xf3n se puede acceder a este mientras se pase a otra ruta y despu\xe9s de eso desaparece.",source:"@site/docs/laravel/2-devjobs/Notes/8-SessionMessage.md",sourceDirName:"laravel/2-devjobs/Notes",slug:"/laravel/devjobs/Notes/SessionMessage",permalink:"/docs/laravel/devjobs/Notes/SessionMessage",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/2-devjobs/Notes/8-SessionMessage.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Problemas con las migraciones",permalink:"/docs/laravel/devjobs/Notes/MigrationIssues"},next:{title:"Directiva FORELSE",permalink:"/docs/laravel/devjobs/Notes/forelse"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,s.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"session-message"},"Session() Message"),(0,s.kt)("p",null,"Al crear un mensaje de sesi\xf3n se puede acceder a este mientras se pase a otra ruta y despu\xe9s de eso desaparece."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"// Crear Mensaje\nsession()->flash('mensaje','La vacante se public\xf3 correctamente');\n\n//Redireccionar al usuario\nreturn redirect()->route('vacantes.index');\n")),(0,s.kt)("p",null,"Desde la vista en la siguiente ruta:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"@if (session()->has('mensaje'))\n    <div class=\"uppercase border border-green-600 bg-green-100 text-green-600 font-bold p-2 my-3 text-sm\">\n        {{session('mensaje')}}\n    </div>\n@endif\n")))}d.isMDXComponent=!0}}]);