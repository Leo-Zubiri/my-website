"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3997],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>b});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?t.createElement(b,l(l({ref:n},u),{},{components:a})):t.createElement(b,l({ref:n},u))}));function b(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6071:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={},l="Problemas con las migraciones",s={unversionedId:"laravel/devjobs/Notes/MigrationIssues",id:"laravel/devjobs/Notes/MigrationIssues",title:"Problemas con las migraciones",description:"Puede ocurrir que se intente crear una tabla con un campo de llave for\xe1nea de una tabla que aun no existe por que es la siguiente migraci\xf3n a ejecutar.",source:"@site/docs/laravel/2-devjobs/Notes/7-MigrationIssues.md",sourceDirName:"laravel/2-devjobs/Notes",slug:"/laravel/devjobs/Notes/MigrationIssues",permalink:"/my-website/docs/laravel/devjobs/Notes/MigrationIssues",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/2-devjobs/Notes/7-MigrationIssues.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consultar DB en componente Livewire",permalink:"/my-website/docs/laravel/devjobs/Notes/LivewireDB"},next:{title:"Session() Message",permalink:"/my-website/docs/laravel/devjobs/Notes/SessionMessage"}},i={},c=[{value:"Cuando se agregan columnas nuevas",id:"cuando-se-agregan-columnas-nuevas",level:2},{value:"Problemas con los Rollbacks",id:"problemas-con-los-rollbacks",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"problemas-con-las-migraciones"},"Problemas con las migraciones"),(0,r.kt)("p",null,"Puede ocurrir que se intente crear una tabla con un campo de llave for\xe1nea de una tabla que aun no existe por que es la siguiente migraci\xf3n a ejecutar."),(0,r.kt)("p",null,"La forma menos \xf3ptima ser\xeda renombrar las migraciones para que una se ejecute antes que otra."),(0,r.kt)("p",null,"La mejor manera es ir creando mas migraciones constantemente para seguir con el concepto de control de versiones de la base de datos. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No crear una migracion por cada campo, crear una migraci\xf3n por cada conjunto de cambios conforme se avanza durante el proyecto.")),(0,r.kt)("h2",{id:"cuando-se-agregan-columnas-nuevas"},"Cuando se agregan columnas nuevas"),(0,r.kt)("p",null,"Es importante las convenciones en ingl\xe9s:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"php artisan make:migration add_columns_to_vacantes_table")),(0,r.kt)("p",null,"Cuando se establecen las columnas es importante colocar su eliminaci\xf3n en el m\xe9todo down para no tener problemas con los rollbacks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function down()\n    {\n        Schema::table('vacantes', function (Blueprint $table) {\n            $table->dropColumn('titulo');\n        });\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Otra alternativa si son muchas columnas:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Schema::table('vacantes', function (Blueprint $table) {\n    $table->dropColumn([\n        'titulo',\n        'salario_id',\n        'categoria_id',\n    ]);\n});\n")),(0,r.kt)("h2",{id:"problemas-con-los-rollbacks"},"Problemas con los Rollbacks"),(0,r.kt)("p",null,"Cuando se intentan eliminar los campos que son llaves for\xe1neas por defecto no deja eliminarlos para evitar valores faltantes o perdidos en la base de datos por error."),(0,r.kt)("p",null,"Para solucionarlo en el m\xe9todo down:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function down()\n    {\n        Schema::table('vacantes', function (Blueprint $table) {\n            $table->dropForeign('vacantes_categoria_id_foreign');\n            $table->dropForeign('vacantes_salario_id_foreign');\n            $table->dropForeign('vacantes_user_id_foreign');\n\n            $table->dropColumn([\n                'titulo',\n            ]);\n        });\n    }\n")))}m.isMDXComponent=!0}}]);