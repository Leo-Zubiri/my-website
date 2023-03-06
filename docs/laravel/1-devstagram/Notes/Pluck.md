# pluck()

Cuando se accede a informacion a traves de los metodos y relaciones de los modelos se retorna grandes cantidades de informacion, es decir varios atributos

Con el método pluck se selecciona que atributos tomar:

```php
// Obtener posts de followings
$ids = auth()->user()->followings->pluck('id')->toArray();
$posts = Post::whereIn('user_id',$ids)->paginate(20);

```
Lo anterior retorna un arreglo con los id de cada usuario que sigue el usuario autenticado