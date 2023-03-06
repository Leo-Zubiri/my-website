# Relaciones en BDD

Los modelos pueden tener distintos tipos de relaciones entre si

1. One to One. Un usuario tiene un perfil - Un perfil es de un usuario
2. One to many. Usuario puede tener multiples posts
3. Belongs to. Un Post pertenece a un usuario
4. Has one of many. Traer el ultimo registro de multiples relacionados a un modelo
5. Has one of thought. Un modelo con relacion a muchos pero cada uno de estos es una Relacion uno a uno.
6. Has many through. Relacion muchos a uno y a partir de ahi muchos a uno

En el Modelo se agrega una funcion que haga referencia a la relacion

Por ejemplo, Un usuario tiene varios Posts

```php
public function posts(){
  return $this->hasMany(Post::class);
}
```

Para traer informacion en especifico

```php
public function user(){
  return $this->belongsTo(User::class)->select(['name','username']);
}
```