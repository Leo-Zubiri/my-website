# Crear Registros en Laravel

```php
Post::create([
    'titulo' => $request->titulo,
    'descripcion' => $request->descripcion,
    'imagen' => $request->imagen,
    'user_id' => auth()->user()->id,
]);
```

Otra forma

```php
$post = new Post;
$post->titulo = $request->titulo;
...
$post->save();
```

## Crear registro con relacion especificada

```php
//Acceder al objeto user que viene en el request
// A partir de ahi se accede a la relacion para crear un post
$request->user()->posts()->create([
    'titulo' => $request->titulo,
    'descripcion' => $request->descripcion,
    'imagen' => $request->imagen,
    'user_id' => auth()->user()->id,
]);
```