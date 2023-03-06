# Publicar paquete

Cargar un diseño de paginación con tailwind y la paginación de laravel:

```php
<div class=" mt-10">
    {{ $vacantes->links() }}
</div>
```

Cuanto se utiliza la paginacion en la vista se busca el paquete de forma interna, pero cuando se publica un paquete se extrae el paquete del core de laravel para realizar cambios

```bash
php artisan vendor:publish --tag=laravel-pagination
```

Ahora existe la ruta `resources/views/vendor`

En este caso se modifica el archivo de tailwind.blade.php, se puede cambiar el texto al español con la paginación.