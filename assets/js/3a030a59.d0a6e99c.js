"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8896],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>A});var o=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function t(e,n){if(null==e)return{};var a,o,r=function(e,n){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},T=o.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),u=c(a),T=r,A=u["".concat(l,".").concat(T)]||u[T]||p[T]||i;return a?o.createElement(A,s(s({ref:n},d),{},{components:a})):o.createElement(A,s({ref:n},d))}));function A(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=T;var t={};for(var l in n)hasOwnProperty.call(n,l)&&(t[l]=n[l]);t.originalType=e,t[u]="string"==typeof e?e:r,s[1]=t;for(var c=2;c<i;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}T.displayName="MDXCreateElement"},6771:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const i={},s="Ejercicios",t={unversionedId:"sqlserver/ejercicios",id:"sqlserver/ejercicios",title:"Ejercicios",description:"Biblioteca",source:"@site/docs/sqlserver/ejercicios.md",sourceDirName:"sqlserver",slug:"/sqlserver/ejercicios",permalink:"/my-website/docs/sqlserver/ejercicios",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/sqlserver/ejercicios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conectar DB a PHP",permalink:"/my-website/docs/sqlserver/conexion"},next:{title:"Practica de Procedimientos almacenados",permalink:"/my-website/docs/sqlserver/examen_sp"}},l={},c=[{value:"Biblioteca",id:"biblioteca",level:2},{value:"Componentes",id:"componentes",level:2},{value:"Empresa Alquiler CD ROMS",id:"empresa-alquiler-cd-roms",level:2},{value:"Clientes, facturas, pedidos, art\xedculos",id:"clientes-facturas-pedidos-art\xedculos",level:2},{value:"Centro de instalaciones deportivas",id:"centro-de-instalaciones-deportivas",level:2},{value:"Ejercicios de Consultas",id:"ejercicios-de-consultas",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ejercicios"},"Ejercicios"),(0,r.kt)("h2",{id:"biblioteca"},"Biblioteca"),(0,r.kt)("p",null,"1.-Se trata de gestionar los pr\xe9stamos de libros de una biblioteca en la que se va a estudiar exclusivamente el funcionamiento de las peticiones y devoluciones de libros."),(0,r.kt)("p",null,"PETICI\xd3N DE LIBROS"),(0,r.kt)("p",null,"Un usuario puede realizar una petici\xf3n de uno o m\xe1s libros a la biblioteca. Para ello, es necesario presentar el carn\xe9 de usuario de la biblioteca y una ficha en la que se detallan los libros pedidos. Puede haber varios tipos de pr\xe9stamo (pr\xe9stamo de sala, colaborador, proyecto fin carrera, doctorado) en funci\xf3n de los cuales el usuario puede disponer de los ejemplares durante un per\xedodo de tiempo espec\xedfico, como se indica en la siguiente tabla: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SALA                    El d\xeda de la petici\xf3n.\nCOLABORADOR             Una semana.\nPROYECTO FIN CARRERA    Quince d\xedas.\nDOCTORADO               Un mes.\n")),(0,r.kt)("p",null,"Una vez entregados el carn\xe9 y la ficha, el sistema comprobar\xe1 y aceptar\xe1 la petici\xf3n de los libros solicitados siempre que pueda satisfacer la petici\xf3n, es decir, cuando existan ejemplares disponibles. Si se acepta la petici\xf3ns, se actualiza el n\xfamero de unidades de los libros de la biblioteca y se guarda la ficha de pr\xe9stamo."),(0,r.kt)("p",null,"DEVOLUCIONES DE LIBROS"),(0,r.kt)("p",null,"Un usuario no puede realizar m\xe1s peticiones hasta que no haya efectuado todas las devoluciones de la petici\xf3n anterior. El usuario, para hacer la petici\xf3n, necesita el carn\xe9, que no se le entrega hasta que no haya devuelto todos los libros. S\xed puede hacer una devoluci\xf3n parcial de los libros. Cuando un usuario realice una devoluci\xf3n, el sistema actualizar\xe1 el stock de libros y comprobar\xe1 la fecha de devoluci\xf3n de cada ejemplar para estudiar, en el caso de que la devoluci\xf3n se haga fuera de tiempo, la imposici\xf3n de una sanci\xf3n que tiene un coste de 200 pts por cada ejemplar y d\xedas de retraso en la devoluci\xf3n. En este caso, la sanci\xf3n se emite cuando el usuario entrega el \xfaltimo ejemplar."),(0,r.kt)("p",null,"El bibliotecario se encarga de las altas y bajas de los libros de la biblioteca."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [bibliotecaDB]\n\nCREATE TABLE Usuario(\nid_usuario INT PRIMARY KEY IDENTITY(1,1),\nnombre VARCHAR(40) NOT NULL,\napellidos VARCHAR(40) NOT NULL,\ntelefono int\n)\n\nCREATE TABLE Peticion(\nid_peticion INT PRIMARY KEY IDENTITY(1,1),\nid_us INT,\ntipoPresta TINYINT,\nlibros INT\n)\n\nCREATE TABLE Libro(\nISBN INT PRIMARY KEY IDENTITY(1,1),\ntitulo VARCHAR(40) NOT NULL,\nautor VARCHAR(40) NOT NULL,\neditorial VARCHAR(40) NOT NULL,\nstock INT\n)\n\nCREATE TABLE TipoPrest(\nid INT PRIMARY KEY IDENTITY(1,1),\ntipo VARCHAR(40) NOT NULL,\nperiodo VARCHAR(40) NOT NULL,\n)\n")),(0,r.kt)("h2",{id:"componentes"},"Componentes"),(0,r.kt)("p",null,"2- Una tienda especializada en componentes electr\xf3nicos compra sus existencias a una serie de proveedores, vendi\xe9ndolas posteriormente a sus clientes a la vez que lleva a cabo el control de almac\xe9n adecuado para controlar sus existencias en todo momento."),(0,r.kt)("p",null,"La gesti\xf3n de proveedores lleva unida la gesti\xf3n de los datos administrativos de \xe9stos m\xe1s la informaci\xf3n de los componentes que cada proveedor sirve. La gesti\xf3n de proveedores, adem\xe1s del t\xedpico mantenimiento de los datos relacionados, se encarga de generar los listados de las piezas servidas por un determinado proveedor, o los proveedores que sirven una determinada pieza."),(0,r.kt)("p",null,"Cuando un cliente solicita un determinado componente, se comprueba que hay existencias y se le informa de su precio. Si el cliente adquiere el producto, se actualizar\xe1 el almac\xe9n y se le emitir\xe1 una factura. Si no hay existencias del componente, pero el cliente est\xe1 interesado se proceder\xe1 a almacenar la petici\xf3n con objeto de realizar el correspondiente pedido al proveedor."),(0,r.kt)("p",null,"El control de almac\xe9n se encarga de tener actualizado el almac\xe9n de existencias, dando de alta los componentes que llegan, eliminando componentes defectuosos, y realizando los listados de componentes disponibles en el almac\xe9n y de los componentes pendientes de ser pedidos a un proveedor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [componentesDB]\n\nCREATE TABLE Cliente(\nid_cliente INT PRIMARY KEY IDENTITY(1,1),\nnombre VARCHAR(40) NOT NULL,\napellidos VARCHAR(40) NOT NULL,\ntelefono int\n)\n\nCREATE TABLE Peticion(\nid INT PRIMARY KEY IDENTITY(1,1),\ncliente INT NOT NULL,\npieza INT NOT NULL\n)\n\nCREATE TABLE Pieza(\nid_pieza INT PRIMARY KEY IDENTITY(1,1),\npeticion INT,\nproveedor INT NOT NULL,\nnombre VARCHAR(40) NOT NULL,\ndescripcion VARCHAR(40) NOT NULL,\nprecio MONEY NOT NULL,\nstock INT NOT NULL\n)\n\nCREATE TABLE Proveedor(\nid_pro INT PRIMARY KEY IDENTITY(1,1),\npieza INT NOT NULL,\nnombre VARCHAR(40) NOT NULL,\ndireccion VARCHAR(40) NOT NULL,\ntelefono int\n)\n\n")),(0,r.kt)("h2",{id:"empresa-alquiler-cd-roms"},"Empresa Alquiler CD ROMS"),(0,r.kt)("p",null,"3- Sea una empresa dedicada al alquiler de CD-ROMs de audio. Dicha empresa tiene un local de atenci\xf3n al p\xfablico donde est\xe1n expuestas las car\xe1tulas de los CDs m\xe1s demandados y las \xfaltimas novedades, aunque tambi\xe9n existen listados en papel de todos los t\xedtulos que se podr\xedan alquilar. Cuando un cliente solicita en alquiler un t\xedtulo, se comprueba si hay ejemplares disponibles y si el cliente no tiene problemas por ejemplares no devueltos, quedando constancia de la fecha de alquiler y la fecha m\xe1xima de entrega; de forma que cuando el cliente devuelva el ejemplar se podr\xe1 comprobar si se le tiene que imponer una sanci\xf3n. Cada cliente puede solicitar una relaci\xf3n de los CDs que ha alquilado previamente."),(0,r.kt)("p",null,"Cada ejemplar de cada t\xedtulo debe quedar plenamente identificado (incluyendo la informaci\xf3n necesaria para su r\xe1pida localizaci\xf3n f\xedsica)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [alquilerDB]\n\nCREATE TABLE Cliente(\nid_cliente INT PRIMARY KEY IDENTITY(1,1),\nalq_pendiente INT,\nRFC VARCHAR(200),\nnombre VARCHAR(200),\napellidos VARCHAR(40),\ntelefono int\n)\n\nCREATE TABLE Alquiler(\nid INT PRIMARY KEY IDENTITY(1,1),\ncliente INT,\ndisco INT,\nfecha_alq DATETIME,\nfecha_ent DATETIME\n)\n\nCREATE TABLE CD(\nid INT PRIMARY KEY IDENTITY(1,1),\ntitulo VARCHAR(40) NOT NULL,\nautor VARCHAR(40) NOT NULL,\nstock SMALLINT\n)\n\n")),(0,r.kt)("h2",{id:"clientes-facturas-pedidos-art\xedculos"},"Clientes, facturas, pedidos, art\xedculos"),(0,r.kt)("p",null,"Realizar el E/R correspondiente al siguiente supuesto: Se tienen CLIENTES de los que se guarda un n\xfamero de cliente, nombre, apellidos, lista de tel\xe9fonos, fax y correo electr\xf3nico. Los clientes realizan PEDIDOS. (Un pedido no puede ser realizado por dos clientes simult\xe1neamente). Cada pedido tiene un n\xfamero de pedido, una fecha asociada y una persona de contacto. Cada pedido aglutina varias L\xcdNEAS DE DETALLE, cada una con una cantidad y una referencia a un art\xedculo. Los ART\xcdCULOS tienen un descriptor, un identificador de familia y un identificador de modelo. Varias l\xedneas de detalle correspondientes a uno o varios pedidos (bien en su totalidad, bien en parte) constituyen un ALBAR\xc1N. Los albaranes contienen una fecha de entrega, una direcci\xf3n de entrega y el nombre y apellido del receptor. Varias l\xedneas de detalle correspondientes a uno o varios albaranes (bien en su totalidad, bien en parte) constituyen una FACTURA, la cual contiene un n\xfamero de factura, una fecha de cobro y un modo de pago."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [ejercicioDB]\n\nCREATE TABLE Cliente(\nid_cliente INT PRIMARY KEY IDENTITY(1,1),\nnombre VARCHAR(40) NOT NULL,\napellidos VARCHAR(40) NOT NULL,\ntelefono int,\nfax VARCHAR(40),\ncorreo VARCHAR(60)\n)\n\nCREATE TABLE Pedido(\nid INT PRIMARY KEY IDENTITY(1,1),\ncliente INT,\nalbaran INT\n)\n\nCREATE TABLE Albaran(\nid INT PRIMARY KEY IDENTITY(1,1),\npedido INT,\ncliente INT,\ndetalle INT,\nfactura INT,\nfecha_ent DATETIME,\ndireccion VARCHAR(100)\n)\n\nCREATE TABLE Factura(\nid INT PRIMARY KEY IDENTITY(1,1),\npedido INT,\ncliente INT,\nalbaran INT\n)\n\nCREATE TABLE Detalle(\nid INT PRIMARY KEY IDENTITY(1,1),\narticulo INT,\npedido INT,\nalbaran INT,\ncantidad SMALLINT\n)\n\nCREATE TABLE Articulo(\nid INT PRIMARY KEY IDENTITY(1,1),\nmodelo VARCHAR(100),\ndescripcion VARCHAR(100),\nfamilia VARCHAR(30)\n)\n\n")),(0,r.kt)("h2",{id:"centro-de-instalaciones-deportivas"},"Centro de instalaciones deportivas"),(0,r.kt)("p",null,"Construir el E/R correspondiente al siguiente enunciado: Un centro de instalaciones deportivas quiere hacer una aplicaci\xf3n de reservas. En el centro existen instalaciones deportivas (piscinas, gimnasios, frontones, etc.). El centro en cuesti\xf3n tiene socios, de los cuales se almacenan su direcci\xf3n, ciudad, provincia, tel\xe9fono, nombre y estado. Existen una serie de art\xedculos que se pueden alquilar junto con las reservas (balones, redes, raquetas, etc.). Cada instalaci\xf3n es reservada por un socio en una fecha dada desde una hora de inicio hasta una hora de fin siempre y cuando este al d\xeda en sus cuotas. Cada reserva puede tener asociada uno o varios art\xedculos deportivos que se alquilan a parte. Por ejemplo si yo quiero hacer una reserva para jugar a voleibol tengo que reservar una instalaci\xf3n polideportivo m\xe1s un art\xedculo red, m\xe1s un art\xedculo bal\xf3n.\nRealiza el modelo l\xf3gico relacional subyacente a este enunciado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"USE [Prueba]\n\nCREATE TABLE Instalacion(\nid INT PRIMARY KEY IDENTITY(1,1),\nnombre VARCHAR(50)\n)\n\n\nCREATE TABLE Reservacion(\nid INT PRIMARY KEY IDENTITY(1,1),\nsocio INT,\narticulo INT,\ninicio DATETIME,\nfinal DATETIME\n)\n\nCREATE TABLE Socio(\nid INT PRIMARY KEY IDENTITY(1,1),\nnombre VARCHAR(40) NOT NULL,\napellidos VARCHAR(40) NOT NULL,\ncalle VARCHAR(40) NOT NULL,\nciudad VARCHAR(40) NOT NULL,\nestado VARCHAR(40) NOT NULL,\ntelefono int,\n)\n\nCREATE TABLE Articulo(\nid INT PRIMARY KEY IDENTITY(1,1),\ninstalacion INT,\nnombre VARCHAR(100),\nstock TINYINT\n)\n\n")),(0,r.kt)("h2",{id:"ejercicios-de-consultas"},"Ejercicios de Consultas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--- Ejercicio de SQL - 22/11/2020\nuse FACELECF\n\n--- 1.  Mostrar todos los clientes que sean de la ciudad de Michoacan.\nselect * from CLIENTES where CIUDAD = 'Michoacan'\n\n--- 2.  Mostrar los rfc de los clientes que no tienen facturas generadas\nselect CLIENTES.RFC from CLIENTES, FACTURAS where FACTURAS.CLIENTE = NULL\n\n--- 3.  Mostrar el nombre de los productos que se est\xe1n utilizando en las facturas\nselect ARTICULOS.ARTICULO, DETFAC.FOLIO \nfrom ARTICULOS, DETFAC \nwhere ARTICULOS.ARTICULO = DETFAC.DESCRIPCION\n\n--- 4.  Mostrar los nombres de los clientes, la ciudad y los n\xfameros de facturas que tienen.\nselect NOMBRE, CIUDAD, FOLIO\nfrom FACTURAS\n\n--- 5.  Mostrar todos los clientes donde su nombre empiece con R.\nselect NOMBRE from FACTURAS where NOMBRE like 'R%'\n\n--- 6.  Mostrar todos los clientes donde su nombre termine con Z.\nselect NOMBRE from FACTURAS where NOMBRE like '%Z'\n\n--- 7.  Mostrar todos los clientes que contengan en su nombre la frase INE.\nselect NOMBRE from FACTURAS where NOMBRE like '%INE%'\n\n--- 8.  Mostrar todos los folios de facturas donde su subtotal sea mayor de 5000\nselect FOLIO from FACTURAS where SUBTOTAL > 5000\n\n--- 9.  Mostrar todos los folios de facturas donde su importe total sea menor a 3000\nselect FOLIO from FACTURAS where TOTAL < 3000\n\n--- 10. Mostrar todos los folios de facturas donde su importe varie de 6000 hasta los 10000\nselect FOLIO from FACTURAS \nwhere (6000 < TOTAL AND TOTAL < 10000)\n\n--- 11. Mostrar todos los folios de las facturas que se realizaron en el a\xf1o 2010\nselect FOLIO from FACTURAS where year(Fecha) = 2010\n\n--- 12. Mostrar todas las facturas del mes de Julio de cada a\xf1o\nselect * from FACTURAS where month(Fecha) = 07\n\n--- 13. Mostrar todas las facturas del mes de Agosto de los a\xf1os 2011 y 2009\nselect * from FACTURAS \nwhere month(Fecha) = 08 \n    AND year(Fecha) IN (2009, 2011)\n\n--- 14. Mostrar los clientes que tienen facturas del mes de octubre del a\xf1o 2011\nselect * from CLIENTES, FACTURAS \nwhere (CLIENTES.ID = FACTURAS.CLIENTE) \n    AND month(FACTURAS.FECHA) = 10\n    AND year(FACTURAS.FECHA) = 2011 \n\n--- 15. Mostrar los art\xedculos que se registraron en facturas de importe total mayor a 6000\nselect * from ARTICULOS, FACTURAS\nwhere FACTURAS.TOTAL > 6000\n\n\n")))}p.isMDXComponent=!0}}]);