# Crear registro a partir de funcion de relacion

Cuando se cumplen con los estandares de laravel es posible crear registros a partir de una funcion de relacion:

```php
Crear un post al usuario en base a la tabla User y Post de la base de datos
$user->posts()->create([
    ...
])

```

Cuando se crea una relacion en una tabla pivote donde la relacion es entre un modelo y este mismo:

```php
// Modelo User
// Almacenar seguidores usuario 
public function followers(){
    // A un usuario lo siguen mas usuarios, de la tabla followers esta relacion es 'user_id' y 'follower_id'
    return $this->belongsToMany(User::class, 'followers', 'user_id','follower_id');
}
```

En este caso no se utiliza un create se utiliza un Attach:

```php
    // Crear registro a partir de relacion
    // A este usuario su follower es -> el usuario autenticado
    public function store(User $user,Request $request){
        $user->followers()->attach(auth()->user()->id);
    }

```

Para quitar un adjunto:

```php
    public function destroy(User $user,Request $request){
        $user->followers()->detach(auth()->user()->id);
        return back();
    }
```