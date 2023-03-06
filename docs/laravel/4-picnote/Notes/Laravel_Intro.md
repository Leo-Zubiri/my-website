[**<<Previous**](./README.md)

# Laravel Intro

## Comandos MVC LARAVEL 

> Con el siguiente comando se crea toda una entidad, se le asocia una vista y un controlador. 

```php
// -c controller
// -m migration file
// -f factory (seeding)
// --api  

php artisan make:model Modelo -c -m -f --api
```

El comando anterior crea archivos en:
1. database/factories
2. database/migrations
3. app/Models
4. app/Http/Controllers

---

<br/>

### **En database/migrations:**
```php
Schema::create('Users', function (Blueprint $table) {
   $table->id();
   $table->string('nombre');
   $table->integer('edad')->unique()->nullable();
   //$table->longText('edad');
   $table->timestamps();
});
```
```php artisan migrate```

> Lo anterior crea la tabla en la bdd según el esquema indicado
---

<br/>

### **En database/factories:**

```php
public function definition()
{
  return [
      'nombre' => fake()->name(),
      'edad' => fake()->numberBetween(18,99),
  ];
}
```
> Lo anterior indica los datos generados aleatorios que servirán para sembrarse en la bdd.
---

<br/>

### **En database/seeders**
```php
public function run()
 {
     \App\Models\Users::factory(10)->create();

     // \App\Models\User::factory()->create([
     //     'name' => 'Test User',
     //     'email' => 'test@example.com',
     // ]);
 }
```
Elimina tablas y vuelve a crear con datos aleatorios:

```php artisan migrate:fresh --seed```

> Lo anterior crea la tabla y la cantidad de registros que se desean sembrar en la base de datos

---

<br/>

### **En routes/api.php**

> Debe apuntar al controller respectivo

```php
Route::apiResource('users','App\Http\Controllers\UsuarioController');
```

**Si se desea poner rutas manualmente:**
```php
Route::get('users','App\Http\Controllers\UsuarioController@metodo');
```

**Para ver rutas:**
```php artisan r:l```

> Lo anterior configura la ruta para que apunte a un controlador con funcionalidad de API. Ejemplo **localhost:3000/usuario** puede apuntar a un UsuarioController
---

<br/>

## **Configurar Servicio API**

El comando para MVC crea un controlador para el modelo en la ruta de **app/Http/Controllers**.

Se debe configurar los métodos en el Controller para darle la funcionalidad de API.

**GET**
```php
//Retornar todos los registros
public function index()
{
  //Retorna todos los registros de la bdd
  return NombreModelo::all();
}

//Retornar a partir de la llegada de un id
public function show(Usuario $usuario)
{
  $usuario->show();
  return $usuario;
}
```
> Al llegar un identificador desde la url **dominio/usuario/12** en el show, el parametro asocia ese 12 con un objeto de tipo **Usuario** automáticamente

**POST**
```php

//Especificar el objeto con los atributos
public function store(Request $request)
{
  $usuario = new Usuario();
  $usuario->nombre = $request->nombre;
  $usuario->edad = $request->edad;
  $usuario->save();
  return $usuario;
}

//Alternativa Asignación masiva
public function store(Request $request)
{
  // El request con all se convierte a un arreglo
  return Usuario::create($request->all());
}
```
> En la asignación masiva se debe proteger los datos que vengan en el request para pedir por lo menos ciertos valores como necesarios

Desde app/Models/...

```php
// Se marca los campos que interesam para el modelo al momento que llegue un request con más parámetros de los necesarios
protected $fillable = ['nombre','edad'];
```

### **PUT**

```php
public function update(Request $request, Usuario $usuario)
{
   $usuario->update($request->all());
   return $usuario;
}
```

### **DELETE**

```PHP
public function destroy(Usuario $usuario)
{
  $usuario->delete();
  return "Usuario Eliminado";
}
```

---

<br/>

## **Schemas**

**Relaciones entre tablas**

```php
Schema::create('usuarios', function (Blueprint $table) {
   $table->id() //genera columna entidadSingular_id  -> usuario_id

   //Primer forma más automatizada.  Mascotas
   $table->foreignId('mascota_id')->constrained();

   //Segunda forma más específica.
   $table->unsignedBigInteger('masc_id')
   $table->foreign('masc_id')->references('id')->on('usuarios')
});
```

Desde el modelo en la carpeta **app/Models/---.php**:

```php
class Mascota extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'raza'
    ];

    public function Mascota(){
        // Una mascota pertenece a un usuario
        return $this->belongsTo(Usuario::class);

        // Una mascota peretenece a varios Usuarios 
        return $this->belongsToMany(Usuario::class);

        // Una mascota tiene un usuario
        return $this->hasOne(Usuario::class);

        // Una mascota tiene muchos usuarios
        return $this->hasMany(Usuario::class);
    }
}

```

> El método de relación debe estar especificado entre las entidades implicadas. Para leer más [**Visita el sitio**](https://laravel.com/docs/9.x/eloquent-relationships) 

---

<br/>

## **Crear un objeto a partir de su relación en tablas**

El controlador principal debe contener una función que utilice el modelo externo relacionado:

```php

// MODELO Usuario
public function createMascota(Request $request, Usuario $usuario){
  // Crea una mascota relacionada a un usuario en particular
  $mascota = $usuario->mascotas()->create($request->all());
  return $mascota;
}
```

> Como lo anterior es un método que se sale de los esenciales de una API se debe establecer la ruta del recurso

```php

Route::post('usuario/{usuario}/mascotas','App\Http\Controllers\UsuarioController@createMascota')->name('usuario.createMascota');
```

**POST de lo anterior**

```localhost:3000/api/usuario/3/mascotas```

**Body**

```php
{
  'nombre':'test',
  'edad': 2
}
```

---

<br/>

## **Consola Tinker**

> Tinker es una consola de comandos con la que podremos interactuar con todas las clases y métodos de nuestra aplicación, una herramienta muy útil a la hora de realizar pruebas de funcionamiento

```php artisan tinker``` para acceder

```exit()``` para salir

<br/>

Entre las cosas que se pueden probar:

**Probar factory:** ```App\Models\Usuario::factory(1)->make()```


**Obtener entidades de la DB:** 

- ```App\Models\Mascota::first()```  retorna el primer registro
- ```App\Models\Mascota::all()```  retorna todos los registros
- ```App\Models\Mascota::find(1)``` retorna la mascota con id=1
- ```Mascota::find(1)->usuario``` retorna el usuario correspondiente a la mascota
- ```Mascota::find(1)->usuario->mascotas``` retorna todas las mascotas que pueda tener el usuario con la mascota id=1
- ```Usuario::find(3)->mascotas()->create(['nombre'=>'test','edad'=>1]);``` crear una mascota relacionada al usuario 3 

---

<br/>


## **Paginador**

> Retornar x cantidad de registros repartidas en z páginas

```php
public function index(){
  $paginador = Usuario::paginate(10);

  //Retorna atributos de paginacion incluyendo data
  return $paginador;

  // Retorna solo la data
  return $paginador->items();

  //Retornar JSON
  return response()->json([
    'data' => $paginador->items(),
    'total' => $paginador->total(),
    'per_page' => $paginador->perPage(),
    'current_page' => $paginador->currentPage(),
    'last_page' => $paginador->lastPage(),
    'next_page_url' => $paginador -> nextPageUrl()
    'previous_page_url' => $paginador -> previousPageUrl()
    'from' => $paginador->firstItem(),
    'to' => $paginador->lastItem(),
  ]);

  return jsend_success($paginador);
}

```
[**Retornar Status JSON**](https://github.com/omniti-labs/jsend)

[**Status laravel jsend**](https://github.com/shalvah/laravel-jsend)
