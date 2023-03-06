## **Eloquent**

> Laravel incluye su propio ORM (Object Relational Mapper) para interactuar con la base de datos.
> En eloquent cada tabla tiene su propio modelo

**Crear modelo:** ```php artisan make:model Cliente```

Si el modelo se llama Cliente la tabla se llamará Clientes. Por eso es recomendable llamar los modelos en singular y en inglés

Los modelos estan en **app/Models/**

> El modelo por defecto cuando se crea un nuevo proyecto es el de **User**

Dentro del modelo hay algunos arreglos:

<br/>

Para indicar los valores esperados que se van a insertar en la base de datos:

```php
protected $fillable = [
    'name',
    'email',
    'password',
    'username',
];

```