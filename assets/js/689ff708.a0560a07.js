"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7576],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>g});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return n?t.createElement(g,r(r({ref:a},d),{},{components:n})):t.createElement(g,r({ref:a},d))}));function g(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},809:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const s={},r="SASS",l={unversionedId:"css/SASS",id:"css/SASS",title:"SASS",description:"Syntactically Awesome Style Sheets",source:"@site/docs/css/3. SASS.md",sourceDirName:"css",slug:"/css/SASS",permalink:"/my-website/docs/css/SASS",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/css/3. SASS.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Metodolog\xeda BEM",permalink:"/my-website/docs/css/BEM"},next:{title:"Responsive Web Design",permalink:"/my-website/docs/css/Responsive"}},i={},c=[{value:"Syntactically Awesome Style Sheets",id:"syntactically-awesome-style-sheets",level:2},{value:"Como usar SASS",id:"como-usar-sass",level:2},{value:"Alternativas",id:"alternativas",level:3},{value:"Instalar SASS",id:"instalar-sass",level:2},{value:"<strong>Si se utiliza NodeJS para instalar globalmente</strong>",id:"si-se-utiliza-nodejs-para-instalar-globalmente",level:3},{value:"<strong>Una vez instalado Sass, podemos ver si realmente est\xe1 disponible, usando el siguiente comando:</strong>",id:"una-vez-instalado-sass-podemos-ver-si-realmente-est\xe1-disponible-usando-el-siguiente-comando",level:3},{value:"Compilaci\xf3n",id:"compilaci\xf3n",level:2},{value:"<strong>Compilar SCSS y generar CSS estandar</strong>",id:"compilar-scss-y-generar-css-estandar",level:3},{value:"<strong>Compilar Sass de manera autom\xe1tica con un &quot;watcher&quot;</strong>",id:"compilar-sass-de-manera-autom\xe1tica-con-un-watcher",level:3},{value:"<strong>Compilar toda una carpeta con un &quot;watcher&quot;</strong>",id:"compilar-toda-una-carpeta-con-un-watcher",level:3},{value:"<strong>Gu\xeda de uso</strong>",id:"gu\xeda-de-uso",level:2},{value:"Variables",id:"variables",level:2},{value:"Anidaci\xf3n de selectores (Nesting)",id:"anidaci\xf3n-de-selectores-nesting",level:2},{value:"<strong>HTML de ejemplo</strong>",id:"html-de-ejemplo",level:3},{value:"<strong>CSS estandar</strong>",id:"css-estandar",level:3},{value:"<strong>SASS Nesting</strong>",id:"sass-nesting",level:3},{value:"Referencia al selector padre (&#39;&amp;&#39;)",id:"referencia-al-selector-padre-",level:2},{value:"<strong>BEM y SCSS</strong>",id:"bem-y-scss",level:3},{value:"Propiedades anidadas",id:"propiedades-anidadas",level:2},{value:"M\xf3dulos de c\xf3digo",id:"m\xf3dulos-de-c\xf3digo",level:2},{value:"<strong>Para que SASS no compile un m\xf3dulo por separado</strong> se coloca como <strong>&#39;_modulo.scss&#39;</strong>",id:"para-que-sass-no-compile-un-m\xf3dulo-por-separado-se-coloca-como-_moduloscss",level:3},{value:"<strong>Importar m\xf3dulos</strong>",id:"importar-m\xf3dulos",level:3},{value:"Recomendacion de division de modulos",id:"recomendacion-de-division-de-modulos",level:3},{value:"Mixins (Funciones)",id:"mixins-funciones",level:2},{value:"<strong>Herencia</strong>(Inheritance)",id:"herenciainheritance",level:2},{value:"<strong>Operadores</strong>",id:"operadores",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...s}=e;return(0,o.kt)(p,(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sass"},"SASS"),(0,o.kt)("h2",{id:"syntactically-awesome-style-sheets"},"Syntactically Awesome Style Sheets"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Existen dos tipos de sintaxis para escribir su c\xf3digo:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sintaxis Sass"),": Esta sintaxis te evita colocar puntos y coma al final de los valores de propiedades. Adem\xe1s, las llaves no se usan y en su lugar se realizan identados.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sintaxis SCSS"),": Es una sintaxis bastante similar a la sintaxis del propio CSS Podr\xedamos decir que SCSS es c\xf3digo CSS con algunas cosas extra."))),(0,o.kt)("blockquote",null,(0,o.kt)("h2",{parentName:"blockquote",id:"en-la-pr\xe1ctica-aunque-podr\xeda-ser-m\xe1s-r\xe1pido-escribir-con-sintaxis-sass-es-menos-recomendable-porque-te-aleja-m\xe1s-del-propio-lenguaje-css"},"En la pr\xe1ctica, aunque podr\xeda ser m\xe1s r\xe1pido escribir con sintaxis Sass, es menos recomendable, porque te aleja m\xe1s del propio lenguaje CSS."),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"como-usar-sass"},"Como usar SASS"),(0,o.kt)("h3",{id:"alternativas"},"Alternativas"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Preprocesar con alguna herramienta de interfaz gr\xe1fica"),", como el caso de Prepros, CodeKit o Scout-App. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Usar la l\xednea de comandos para preprocesar"),". Permite personalizar completamente el comportamiento del preprocesador."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Usar herramientas de automatizaci\xf3n"),". Como tercera opci\xf3n es muy com\xfan tambi\xe9n usar herramientas que permiten automatizar el flujo de trabajo frontend, compilando archivos CSS, Javascript, optimizando im\xe1genes, etc. Paquetes como Gulp, Grunt o Webpack (aunque este \xfaltimo es m\xe1s un empaquetador).")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"instalar-sass"},"Instalar SASS"),(0,o.kt)("h3",{id:"si-se-utiliza-nodejs-para-instalar-globalmente"},(0,o.kt)("strong",{parentName:"h3"},"Si se utiliza NodeJS para instalar globalmente")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g sass\n")),(0,o.kt)("h3",{id:"una-vez-instalado-sass-podemos-ver-si-realmente-est\xe1-disponible-usando-el-siguiente-comando"},(0,o.kt)("strong",{parentName:"h3"},"Una vez instalado Sass, podemos ver si realmente est\xe1 disponible, usando el siguiente comando:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sass --version\n")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"compilaci\xf3n"},"Compilaci\xf3n"),(0,o.kt)("h3",{id:"compilar-scss-y-generar-css-estandar"},(0,o.kt)("strong",{parentName:"h3"},"Compilar SCSS y generar CSS estandar")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sass estilos_sass.scss estandar-compilado.css\n")),(0,o.kt)("h3",{id:"compilar-sass-de-manera-autom\xe1tica-con-un-watcher"},(0,o.kt)("strong",{parentName:"h3"},'Compilar Sass de manera autom\xe1tica con un "watcher"')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Tener un vigilante "watcher" se encarga de compilar autom\xe1ticamente el fichero cada vez que guardes el archivo original.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sass --watch estilos_sass.scss estandar-compilado.css\n")),(0,o.kt)("h3",{id:"compilar-toda-una-carpeta-con-un-watcher"},(0,o.kt)("strong",{parentName:"h3"},'Compilar toda una carpeta con un "watcher"')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"El watch nos permite observar un archivo en concreto, o todos los archivos de una carpeta."),'\nSe recomienda crear una carpeta "sass" donde colocar\xe1s tu c\xf3digo fuente, con archivos de extensi\xf3n ".scss". Otra llamada "css", donde se colocar\xe1 el c\xf3digo compilado. ')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"sass --watch carpetaorigen:carpetadestino\n\n// Se puede establecer las rutas de los directorios\nsass --watch app/sass:public/stylesheets\n")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"gu\xeda-de-uso"},(0,o.kt)("strong",{parentName:"h2"},"Gu\xeda de uso")),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SCSS"},"//Variable\n$color-primario: #55A;\n$color-secundario: #6B6;\n$color-texto: #666;\n\n$espaciado-estandar: 10px;\n$espaciado-doble: 20px;\n\n$fuente-normal: 1em;\n$fuente-pequena: 0.8em;\n$fuente-grande: 1.4em;\n\n$tipografia-general: arial, verdana, sans-serif;\n$tipografia-alternativa: 'Times New Roman', Times, serif;\n\n$color-fondos: #F55;\n\nh1 {\n  background-color: $color-fondos;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nota: Hoy CSS ya incorpora variables, aunque se usa otra sintaxis. El problema es que no est\xe1n disponibles todav\xeda en todos los navegadores, por lo que no es totalmente seguro usarlas, a no ser que implementes PostCSS con CSS Next")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"anidaci\xf3n-de-selectores-nesting"},"Anidaci\xf3n de selectores (Nesting)"),(0,o.kt)("h3",{id:"html-de-ejemplo"},(0,o.kt)("strong",{parentName:"h3"},"HTML de ejemplo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Html"},'<div class="cajadestacada">\n  <header>Este es el encabezado <a href="#">Enlace encabezado</a> </header>\n  <p>Lorem ipsum...</p>\n</div>\n')),(0,o.kt)("h3",{id:"css-estandar"},(0,o.kt)("strong",{parentName:"h3"},"CSS estandar")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".cajadestacada {\n  background-color: red;\n}\n\n.cajadestacada header {\n  background-color: black;\n  color: #fff;\n}\n\n.cajadestacada header a {\n  color: #ff6;\n}\n")),(0,o.kt)("h3",{id:"sass-nesting"},(0,o.kt)("strong",{parentName:"h3"},"SASS Nesting")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".cajadestacada {\n  background-color: red;\n\n  header {\n    background-color: black;\n    color: #fff;  \n\n    a {\n      color: #ff6;\n    }\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"La regla, no escrita, es que no debes de definir estilos CSS a selectores que aniden m\xe1s de tres elementos."),"\nUsar selectores complejos, en los que se apliquen varios niveles de anidaci\xf3n puede llegar a ser contraproducente. En lugar de anidar a veces es preferible por ejemplo usar clases. ")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"referencia-al-selector-padre-"},"Referencia al selector padre ('&')"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Esto nos sirve para que, al definir c\xf3digo anidado, podamos continuar en el uso del selector sobre el que estamos trabajando, a fin de no repetirlo de nuevo. ")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Este c\xf3digo de CSS, hace uso del selector padre para definir un estilo para el enlace cuando est\xe1 en estado "hover".')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"a.dinamico {\n  color: red;\n  &:hover {\n    background-color: #ff6;\n  }\n}\n")),(0,o.kt)("h3",{id:"bem-y-scss"},(0,o.kt)("strong",{parentName:"h3"},"BEM y SCSS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'En estos casos haces nombres de clases como "form--black" o "form',(0,o.kt)("strong",{parentName:"p"},'submit", o incluso cosas m\xe1s complejas como "form'),'submit--desactivado". ')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"El resultado ser\xeda algo como:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},".form {\n  margin: 10px;\n  padding: 15px;\n  &--black {\n    color: #fff;\n    background-color: #000;\n  }\n  &__submit {\n    color: red;\n    &--desactivado {\n      color: #999;\n    }\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"propiedades-anidadas"},"Propiedades anidadas"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Estandar CSS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-CSS"},"h2 {\n  color: #666;\n  font-family: verdana;\n  font-weight: bold;\n  font-size: 0.9em; }\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SCSS")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SCSS"},"h2 {\n color: #666;\n font: {\n    family: verdana;\n    weight: bold;\n    size: 0.9em;\n }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"m\xf3dulos-de-c\xf3digo"},"M\xf3dulos de c\xf3digo"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sass te ofrece la posibilidad de dividir el c\xf3digo CSS en varios archivos"),", dividir el c\xf3digo CSS de tu aplicaci\xf3n en m\xfaltiples ficheros, facilitar\xe1 enormemente el mantenimiento"),(0,o.kt)("h3",{id:"para-que-sass-no-compile-un-m\xf3dulo-por-separado-se-coloca-como-_moduloscss"},(0,o.kt)("strong",{parentName:"h3"},"Para que SASS no compile un m\xf3dulo por separado")," se coloca como ",(0,o.kt)("strong",{parentName:"h3"},"'_modulo.scss'")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'As\xed pues, todos los archivos que comiencen por un "_" no generar\xe1n nuevos archivos .css')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1976).Z,width:"207",height:"250"})),(0,o.kt)("h3",{id:"importar-m\xf3dulos"},(0,o.kt)("strong",{parentName:"h3"},"Importar m\xf3dulos")),(0,o.kt)("p",null,"Esto se consigue con la sentencia @import, a continuaci\xf3n del nombre del m\xf3dulo a importar, sin el gui\xf3n bajo y sin la extensi\xf3n. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@import 'modulo';\n")),(0,o.kt)("h3",{id:"recomendacion-de-division-de-modulos"},"Recomendacion de division de modulos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Colores"),(0,o.kt)("li",{parentName:"ul"},"Fuentes"),(0,o.kt)("li",{parentName:"ul"},"Espaciados"),(0,o.kt)("li",{parentName:"ul"},"Reset o normalize "),(0,o.kt)("li",{parentName:"ul"},"Botones"),(0,o.kt)("li",{parentName:"ul"},"Capas modales"),(0,o.kt)("li",{parentName:"ul"},"Paneles"),(0,o.kt)("li",{parentName:"ul"},"Tooltips"),(0,o.kt)("li",{parentName:"ul"},"Cabecera"),(0,o.kt)("li",{parentName:"ul"},"Pie")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"mixins-funciones"},"Mixins (Funciones)"),(0,o.kt)("p",null,"Este mixin simplemente define dos propiedades de CSS, que ser\xe1n incluidas all\xed donde se invoque:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin color-invertido {\n  background-color: #111;\n  color: #eee;\n}\n")),(0,o.kt)("p",null,"Invocacion del mixin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"h1.invertido {\n  font-size: 1.3em;\n  padding: 15px;\n  @include color-invertido;\n}\n")),(0,o.kt)("p",null,"Parametros en mixin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@mixin transformar($propiedad) {\n  -webkit-transform: $propiedad;\n  -ms-transform: $propiedad;\n  transform: $propiedad;\n}\n\n....\n\n.escalada {\n  @include transformar(scale(2, 3))\n}\n\nh1 {\n  color: blue;\n  @include transformar(rotate(22deg))\n}\n\n....\n\n@mixin encabezados($tamano) {\n  h1 {\n    font-size: $tamano;\n  }\n  h2 {\n    font-size: $tamano - 0.2;\n  }\n  h3 {\n    font-size: $tamano - 0.5;\n  }\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"herenciainheritance"},(0,o.kt)("strong",{parentName:"h2"},"Herencia"),"(Inheritance)"),(0,o.kt)("p",null,'La herencia, un mecanismo por el cual un selector puede recibir estilos CSS que nos llegan de declaraciones realizadas con anterioridad con la directiva @extend y las denominadas "placeholder class"(%).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"%heading {\n  background-color: blanchedalmond;\n  color: brown;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n/*Esta declaraci\xf3n indica un estilo de base para nuestros encabezados y nos sirve para poder agregarla en donde la necesitemos. */\n\n\n....\nh1 {\n  @extend %heading;\n  font-size: 2em;\n}\n\nh2 {\n  @extend %heading;\n  font-size: 1.5em;\n}\n\n/*Ambos encabezados usar\xe1n los mismos estilos base, con la \xfanica diferencia que sus tama\xf1os de fuente ser\xe1n distintos.*/\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"operadores"},(0,o.kt)("strong",{parentName:"h2"},"Operadores")),(0,o.kt)("p",null,"Sass tiene operadores matem\xe1ticos estandar (+, -, *, math.div(), %)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},'@use "sass:math";\n\n.container {\n  display: flex;\n}\n\narticle[role="main"] {\n  width: math.div(600px, 960px) * 100%;\n}\n\naside[role="complementary"] {\n  width: math.div(300px, 960px) * 100%;\n  margin-left: auto;\n}\n\n')))}u.isMDXComponent=!0},1976:(e,a,n)=>{n.d(a,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAD6CAMAAAAx6ONzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZBMUM5Q0YzNjMyNTExRTg4NUNCRjRDOTkyOTYxNzFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZBMUM5Q0Y0NjMyNTExRTg4NUNCRjRDOTkyOTYxNzFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkExQzlDRjE2MzI1MTFFODg1Q0JGNEM5OTI5NjE3MUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkExQzlDRjI2MzI1MTFFODg1Q0JGNEM5OTI5NjE3MUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4fQJ40AAAAYFBMVEVfX2Dx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"}}]);