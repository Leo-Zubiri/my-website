## Limitar acceso a rutas al no estar autenticado

En el controlador de las peticiones se establece la seguridad mendiante auth().
Se puede dejar sin proteccion ciertos metodos del controlador de la forma siguiente: 

```php
public function __construct()
{
    $this->middleware('auth')->except(['show']);
}
```