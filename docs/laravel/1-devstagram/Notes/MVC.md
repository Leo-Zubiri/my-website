## **MVC - MODEL VIEW CONTROLLER**

**Modelo** - Es el encargado con todas las interacciones en la base de datos.

**Vista** - Se encarga de todo lo que se ve en pantalla.

**Controlador** - Comunica modelo y vista. 

## Comando MVC

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