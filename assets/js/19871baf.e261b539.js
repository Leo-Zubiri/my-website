"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2580],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),u=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?t.createElement(k,l(l({ref:a},p),{},{components:n})):t.createElement(k,l({ref:a},p))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3481:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const o={},l=void 0,s={unversionedId:"laravel/picnote/Notes/Laravel_Intro",id:"laravel/picnote/Notes/Laravel_Intro",title:"Laravel_Intro",description:"<<Previous",source:"@site/docs/laravel/4-picnote/Notes/Laravel_Intro.md",sourceDirName:"laravel/4-picnote/Notes",slug:"/laravel/picnote/Notes/Laravel_Intro",permalink:"/my-website/docs/laravel/picnote/Notes/Laravel_Intro",draft:!1,editUrl:"https://github.com/Leo-Zubiri/my-website/tree/master/docs/laravel/4-picnote/Notes/Laravel_Intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PicNote API",permalink:"/my-website/docs/laravel/picnote/Notes/"},next:{title:"Node JS",permalink:"/my-website/docs/nodejs/"}},i={},u=[{value:"Comandos MVC LARAVEL",id:"comandos-mvc-laravel",level:2},{value:"<strong>En database/migrations:</strong>",id:"en-databasemigrations",level:3},{value:"<strong>En database/factories:</strong>",id:"en-databasefactories",level:3},{value:"<strong>En database/seeders</strong>",id:"en-databaseseeders",level:3},{value:"<strong>En routes/api.php</strong>",id:"en-routesapiphp",level:3},{value:"<strong>Configurar Servicio API</strong>",id:"configurar-servicio-api",level:2},{value:"<strong>PUT</strong>",id:"put",level:3},{value:"<strong>DELETE</strong>",id:"delete",level:3},{value:"<strong>Schemas</strong>",id:"schemas",level:2},{value:"<strong>Crear un objeto a partir de su relaci\xf3n en tablas</strong>",id:"crear-un-objeto-a-partir-de-su-relaci\xf3n-en-tablas",level:2},{value:"<strong>Consola Tinker</strong>",id:"consola-tinker",level:2},{value:"<strong>Paginador</strong>",id:"paginador",level:2}],p={toc:u},c="wrapper";function d(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/my-website/docs/laravel/picnote/Notes/"},(0,r.kt)("strong",{parentName:"a"},"<<Previous"))),(0,r.kt)("h1",{id:"laravel-intro"},"Laravel Intro"),(0,r.kt)("h2",{id:"comandos-mvc-laravel"},"Comandos MVC LARAVEL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Con el siguiente comando se crea toda una entidad, se le asocia una vista y un controlador. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// -c controller\n// -m migration file\n// -f factory (seeding)\n// --api  \n\nphp artisan make:model Modelo -c -m -f --api\n")),(0,r.kt)("p",null,"El comando anterior crea archivos en:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"database/factories"),(0,r.kt)("li",{parentName:"ol"},"database/migrations"),(0,r.kt)("li",{parentName:"ol"},"app/Models"),(0,r.kt)("li",{parentName:"ol"},"app/Http/Controllers")),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"en-databasemigrations"},(0,r.kt)("strong",{parentName:"h3"},"En database/migrations:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Schema::create('Users', function (Blueprint $table) {\n   $table->id();\n   $table->string('nombre');\n   $table->integer('edad')->unique()->nullable();\n   //$table->longText('edad');\n   $table->timestamps();\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"php artisan migrate")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"lo-anterior-crea-la-tabla-en-la-bdd-seg\xfan-el-esquema-indicado"},"Lo anterior crea la tabla en la bdd seg\xfan el esquema indicado")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"en-databasefactories"},(0,r.kt)("strong",{parentName:"h3"},"En database/factories:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function definition()\n{\n  return [\n      'nombre' => fake()->name(),\n      'edad' => fake()->numberBetween(18,99),\n  ];\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"lo-anterior-indica-los-datos-generados-aleatorios-que-servir\xe1n-para-sembrarse-en-la-bdd"},"Lo anterior indica los datos generados aleatorios que servir\xe1n para sembrarse en la bdd.")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"en-databaseseeders"},(0,r.kt)("strong",{parentName:"h3"},"En database/seeders")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function run()\n {\n     \\App\\Models\\Users::factory(10)->create();\n\n     // \\App\\Models\\User::factory()->create([\n     //     'name' => 'Test User',\n     //     'email' => 'test@example.com',\n     // ]);\n }\n")),(0,r.kt)("p",null,"Elimina tablas y vuelve a crear con datos aleatorios:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"php artisan migrate:fresh --seed")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lo anterior crea la tabla y la cantidad de registros que se desean sembrar en la base de datos")),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"en-routesapiphp"},(0,r.kt)("strong",{parentName:"h3"},"En routes/api.php")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Debe apuntar al controller respectivo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Route::apiResource('users','App\\Http\\Controllers\\UsuarioController');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Si se desea poner rutas manualmente:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('users','App\\Http\\Controllers\\UsuarioController@metodo');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Para ver rutas:"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan r:l")),(0,r.kt)("blockquote",null,(0,r.kt)("h2",{parentName:"blockquote",id:"lo-anterior-configura-la-ruta-para-que-apunte-a-un-controlador-con-funcionalidad-de-api-ejemplo-localhost3000usuario-puede-apuntar-a-un-usuariocontroller"},"Lo anterior configura la ruta para que apunte a un controlador con funcionalidad de API. Ejemplo ",(0,r.kt)("strong",{parentName:"h2"},"localhost:3000/usuario")," puede apuntar a un UsuarioController")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"configurar-servicio-api"},(0,r.kt)("strong",{parentName:"h2"},"Configurar Servicio API")),(0,r.kt)("p",null,"El comando para MVC crea un controlador para el modelo en la ruta de ",(0,r.kt)("strong",{parentName:"p"},"app/Http/Controllers"),"."),(0,r.kt)("p",null,"Se debe configurar los m\xe9todos en el Controller para darle la funcionalidad de API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GET")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"//Retornar todos los registros\npublic function index()\n{\n  //Retorna todos los registros de la bdd\n  return NombreModelo::all();\n}\n\n//Retornar a partir de la llegada de un id\npublic function show(Usuario $usuario)\n{\n  $usuario->show();\n  return $usuario;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Al llegar un identificador desde la url ",(0,r.kt)("strong",{parentName:"p"},"dominio/usuario/12")," en el show, el parametro asocia ese 12 con un objeto de tipo ",(0,r.kt)("strong",{parentName:"p"},"Usuario")," autom\xe1ticamente")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n//Especificar el objeto con los atributos\npublic function store(Request $request)\n{\n  $usuario = new Usuario();\n  $usuario->nombre = $request->nombre;\n  $usuario->edad = $request->edad;\n  $usuario->save();\n  return $usuario;\n}\n\n//Alternativa Asignaci\xf3n masiva\npublic function store(Request $request)\n{\n  // El request con all se convierte a un arreglo\n  return Usuario::create($request->all());\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"En la asignaci\xf3n masiva se debe proteger los datos que vengan en el request para pedir por lo menos ciertos valores como necesarios")),(0,r.kt)("p",null,"Desde app/Models/..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Se marca los campos que interesam para el modelo al momento que llegue un request con m\xe1s par\xe1metros de los necesarios\nprotected $fillable = ['nombre','edad'];\n")),(0,r.kt)("h3",{id:"put"},(0,r.kt)("strong",{parentName:"h3"},"PUT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function update(Request $request, Usuario $usuario)\n{\n   $usuario->update($request->all());\n   return $usuario;\n}\n")),(0,r.kt)("h3",{id:"delete"},(0,r.kt)("strong",{parentName:"h3"},"DELETE")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-PHP"},'public function destroy(Usuario $usuario)\n{\n  $usuario->delete();\n  return "Usuario Eliminado";\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"schemas"},(0,r.kt)("strong",{parentName:"h2"},"Schemas")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Relaciones entre tablas")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"Schema::create('usuarios', function (Blueprint $table) {\n   $table->id() //genera columna entidadSingular_id  -> usuario_id\n\n   //Primer forma m\xe1s automatizada.  Mascotas\n   $table->foreignId('mascota_id')->constrained();\n\n   //Segunda forma m\xe1s espec\xedfica.\n   $table->unsignedBigInteger('masc_id')\n   $table->foreign('masc_id')->references('id')->on('usuarios')\n});\n")),(0,r.kt)("p",null,"Desde el modelo en la carpeta ",(0,r.kt)("strong",{parentName:"p"},"app/Models/---.php"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class Mascota extends Model\n{\n    use HasFactory;\n\n    protected $fillable = [\n        'nombre',\n        'raza'\n    ];\n\n    public function Mascota(){\n        // Una mascota pertenece a un usuario\n        return $this->belongsTo(Usuario::class);\n\n        // Una mascota peretenece a varios Usuarios \n        return $this->belongsToMany(Usuario::class);\n\n        // Una mascota tiene un usuario\n        return $this->hasOne(Usuario::class);\n\n        // Una mascota tiene muchos usuarios\n        return $this->hasMany(Usuario::class);\n    }\n}\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"El m\xe9todo de relaci\xf3n debe estar especificado entre las entidades implicadas. Para leer m\xe1s ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/eloquent-relationships"},(0,r.kt)("strong",{parentName:"a"},"Visita el sitio"))," ")),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"crear-un-objeto-a-partir-de-su-relaci\xf3n-en-tablas"},(0,r.kt)("strong",{parentName:"h2"},"Crear un objeto a partir de su relaci\xf3n en tablas")),(0,r.kt)("p",null,"El controlador principal debe contener una funci\xf3n que utilice el modelo externo relacionado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n// MODELO Usuario\npublic function createMascota(Request $request, Usuario $usuario){\n  // Crea una mascota relacionada a un usuario en particular\n  $mascota = $usuario->mascotas()->create($request->all());\n  return $mascota;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Como lo anterior es un m\xe9todo que se sale de los esenciales de una API se debe establecer la ruta del recurso")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\nRoute::post('usuario/{usuario}/mascotas','App\\Http\\Controllers\\UsuarioController@createMascota')->name('usuario.createMascota');\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"POST de lo anterior")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000/api/usuario/3/mascotas")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{\n  'nombre':'test',\n  'edad': 2\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"consola-tinker"},(0,r.kt)("strong",{parentName:"h2"},"Consola Tinker")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tinker es una consola de comandos con la que podremos interactuar con todas las clases y m\xe9todos de nuestra aplicaci\xf3n, una herramienta muy \xfatil a la hora de realizar pruebas de funcionamiento")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"php artisan tinker")," para acceder"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," para salir"),(0,r.kt)("br",null),(0,r.kt)("p",null,"Entre las cosas que se pueden probar:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Probar factory:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Models\\Usuario::factory(1)->make()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Obtener entidades de la DB:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App\\Models\\Mascota::first()"),"  retorna el primer registro"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App\\Models\\Mascota::all()"),"  retorna todos los registros"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App\\Models\\Mascota::find(1)")," retorna la mascota con id=1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mascota::find(1)->usuario")," retorna el usuario correspondiente a la mascota"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Mascota::find(1)->usuario->mascotas")," retorna todas las mascotas que pueda tener el usuario con la mascota id=1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Usuario::find(3)->mascotas()->create(['nombre'=>'test','edad'=>1]);")," crear una mascota relacionada al usuario 3 ")),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"paginador"},(0,r.kt)("strong",{parentName:"h2"},"Paginador")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Retornar x cantidad de registros repartidas en z p\xe1ginas")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function index(){\n  $paginador = Usuario::paginate(10);\n\n  //Retorna atributos de paginacion incluyendo data\n  return $paginador;\n\n  // Retorna solo la data\n  return $paginador->items();\n\n  //Retornar JSON\n  return response()->json([\n    'data' => $paginador->items(),\n    'total' => $paginador->total(),\n    'per_page' => $paginador->perPage(),\n    'current_page' => $paginador->currentPage(),\n    'last_page' => $paginador->lastPage(),\n    'next_page_url' => $paginador -> nextPageUrl()\n    'previous_page_url' => $paginador -> previousPageUrl()\n    'from' => $paginador->firstItem(),\n    'to' => $paginador->lastItem(),\n  ]);\n\n  return jsend_success($paginador);\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/omniti-labs/jsend"},(0,r.kt)("strong",{parentName:"a"},"Retornar Status JSON"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/shalvah/laravel-jsend"},(0,r.kt)("strong",{parentName:"a"},"Status laravel jsend"))))}d.isMDXComponent=!0}}]);