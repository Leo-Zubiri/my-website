"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5773],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:r},p),{},{components:t})):a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6823:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const i={},o="**Migraciones**",l={unversionedId:"laravel/devstagram/Notes/Migraciones",id:"laravel/devstagram/Notes/Migraciones",title:"**Migraciones**",description:"Las migraciones establecen la estructura de las tablas en la bdd.",source:"@site/docs/laravel/1-devstagram/Notes/Migraciones.md",sourceDirName:"laravel/1-devstagram/Notes",slug:"/laravel/devstagram/Notes/Migraciones",permalink:"/docs/laravel/devstagram/Notes/Migraciones",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/1-devstagram/Notes/Migraciones.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MVC",permalink:"/docs/laravel/devstagram/Notes/MVC"},next:{title:"Modelo",permalink:"/docs/laravel/devstagram/Notes/Modelo"}},s={},c=[{value:"Modificar el schema de usuario mediante otra migraci\xf3n",id:"modificar-el-schema-de-usuario-mediante-otra-migraci\xf3n",level:2}],p={toc:c},m="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migraciones"},(0,n.kt)("strong",{parentName:"h1"},"Migraciones")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Las migraciones establecen la estructura de las tablas en la bdd.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Iniciar las migraciones"),(0,n.kt)("inlineCode",{parentName:"p"},"php artisan migrate")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Iniciar migraci\xf3n con nombre:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"php artisan make:migration agregar_imagen_user")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Retornar a la migraci\xf3n anterior:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"php artisan migrate:rollback")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Retornar varias migraciones atr\xe1s:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"php artisan migrate:rollback --step=5")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"modificar-el-schema-de-usuario-mediante-otra-migraci\xf3n"},"Modificar el schema de usuario mediante otra migraci\xf3n"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"php artisan make:migration add_username_to_users_table")),(0,n.kt)("p",null,"Se agrega la columna username a la tabla users. Se crea una migraci\xf3n para tener un control de versiones y sin tocar el esquema definido anteriormente."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"public function up()\n{\n    Schema::table('users', function (Blueprint $table) {\n        $table->string('username');\n    });\n}\n\npublic function down()\n{\n    Schema::table('users', function (Blueprint $table) {\n        $table->dropColumn('username');\n    });\n}\n")),(0,n.kt)("p",null,"Se ejecuta la ultima migraci\xf3n: ",(0,n.kt)("inlineCode",{parentName:"p"},"php artisan migrate")))}u.isMDXComponent=!0}}]);