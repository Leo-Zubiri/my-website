"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8794],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(t),v=a,m=u["".concat(s,".").concat(v)]||u[v]||d[v]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2760:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={},l="Control por roles",c={unversionedId:"laravel/devjobs/Notes/ControlRoles",id:"laravel/devjobs/Notes/ControlRoles",title:"Control por roles",description:"Utilizando el controlador y las policies de vacante.",source:"@site/docs/laravel/2-devjobs/Notes/14-ControlRoles.md",sourceDirName:"laravel/2-devjobs/Notes",slug:"/laravel/devjobs/Notes/ControlRoles",permalink:"/docs/laravel/devjobs/Notes/ControlRoles",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/2-devjobs/Notes/14-ControlRoles.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sweet Alert",permalink:"/docs/laravel/devjobs/Notes/SweetAlert"},next:{title:"Directiva can",permalink:"/docs/laravel/devjobs/Notes/can"}},s={},i=[{value:"Para que no pueda ver vacantes creadas por el mismo usuario",id:"para-que-no-pueda-ver-vacantes-creadas-por-el-mismo-usuario",level:2},{value:"Para que no pueda crear vacantes",id:"para-que-no-pueda-crear-vacantes",level:2}],p={toc:i},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"control-por-roles"},"Control por roles"),(0,a.kt)("p",null,"Utilizando el controlador y las policies de vacante."),(0,a.kt)("p",null,"Un desarrollador no puede crear vacantes, entonces para bloquear el acceso a lo relacionado con el modelo:"),(0,a.kt)("h2",{id:"para-que-no-pueda-ver-vacantes-creadas-por-el-mismo-usuario"},"Para que no pueda ver vacantes creadas por el mismo usuario"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Desde el Policy en viewAny:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function viewAny(User $user)\n    {\n        return $user->rol === 2; //Reclutador\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Desde el index del controlador")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function index()\n    {\n        $this->authorize('viewAny',Vacante::class);\n        return view('vacantes.index');\n    }\n")),(0,a.kt)("h2",{id:"para-que-no-pueda-crear-vacantes"},"Para que no pueda crear vacantes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Desde el policy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function create(User $user)\n    {\n        return $user->rol === 2; // Reclutador\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Desde el controlador")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"    public function create()\n    {\n        $this->authorize('create',Vacante::class);\n        return view('vacantes.create');\n    }\n")))}d.isMDXComponent=!0}}]);