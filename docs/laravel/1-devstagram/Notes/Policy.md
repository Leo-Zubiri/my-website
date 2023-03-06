# Policy

**App\policies\...**

Las politicas permiten poder ver, eliminar y actualizar un registro

Para agregar politicas a un modelo: 

```php artisan make:policy PostPolicy --model=Post```

En lugar de hacer verificaciones para evitar que un usuario elimine un Post que no le pertenece de forma convencional:

```php
if($post->id === auth()->user()->id){

}else{
    
}
```

En su lugar el archivo PostPolicy tiene:

```php
public function delete(User $user, Post $post)
{
    return $user->id === $post->user_id;
}
```
Y desde el controlador y la funcion en donde se desea aplicar:

```php
$this->authorize('delete',$post);
```