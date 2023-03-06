# latest()

Para traer registros en orden, desde el mas reciente al mas antiguo en lugar de utilizar una query se utiliza el método latest():

```php
$posts = Post::whereIn('user_id',$ids)->latest()->paginate(20);
```