# Storage link

Un usuario tiene acceso a los archivos almacenados en la carpeta public y a su vez cuando sube un archivo es almacenado en storage.

Al querer acceder a un elemento se utilizan link simbólicos.

```php artisan storage:link```

> The [devjobs\public\storage] link has been connected to [devjobs\storage\app/public].  

Para acceder:

```php
<img src="{{ asset('storage/vacantes/'.$imagen) }}" alt="{{'Imagen Vacante '.$titulo}}">
```