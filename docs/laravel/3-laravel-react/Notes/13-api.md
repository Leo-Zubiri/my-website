# Respuesta JSON

Para comunicarse con react se debe utilizar una REST API, laravel tiene un archivo destinado a registrar las rutas de ese comportamiento.

El archivo `routes/web.php` está destinado a rutas de aplicación monolítica donde se cargan las vistas web.

Se debe utilizar `routes/api.php` en donde cada endpoint es accedido como `host/api/ruta`

Por ejemplo:

```php

Route::apiResource('/categorias',CategoriaController::class);

// api/categorias
```
> apiResource carga todos los métodos del controlador y asocia los respectivos métodos con los de HTTP

`Desde el controlador para retornar un JSON con categorias`:

```php
public function index() {
    return response()->json([
        'categorias' => Categoria::all()
    ]); 
}
```

##  API Resources

Con API Resources se pueden personalizar las respuestas JSON.

Para crear una respuesta personalizada:

```php artisan make:resource CategoriaCollection```

```php artisan make:resource CategoriaResource```

Los archivos resultantes se encuentran en `app/Http/Resources`

El archivo `Collection` se utiliza para retornar todos los campos de la misma forma, desde el controlador:

```php
public function index() {
    // return response()->json([
    //     'categorias' => Categoria::all()
    // ]); 

    return new CategoriaCollection(Categoria::all());
}
```

Desde el `Resource` se establece la respuesta compuesta segun se requiera:

```php
public function toArray($request)
{
    return [
        'id' => $this->id,
        'nombre' => $this->nombre,
        'nombre_id' => $this->nombre. "-". $this->id,
    ];
}
```

## Crear Modelo junto a metodos API

Al crear un modelo si se coloca la bandera `--api`, el controlador es creado junto con los metodos necesarios para el comportamiento de API REST.

```php artisan make:model Producto --resource --api --migration```

## Retornar JSON a través de Resource

Si se crea una relación entre modelos:

```php
class Pedido extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }
}
```

Y se utiliza un Resource se puede retornar:

```php
     */
    public function index()
    {
        return new PedidoCollection(Pedido::with('user')->where('estado',0)->get());
    }
```

El método `with` añade los datos del usuario completos `user()` junto a los datos del pedido