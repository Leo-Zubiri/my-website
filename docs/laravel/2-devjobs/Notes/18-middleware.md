# Middleware

En algunos casos se limitan los endpoints utilizando policies pero también se pueden llegar a necesitar los middleware.

## Custom Middleware

```php artisan make:middleware RolUsuario```

Crea el archivo en `App/Http/Middleware`

En el archivo de `kernel.php` se establecen todos los middleware para su acceso por lo que se debe agregar:

```php
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        ...
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
        'rol.reclutador' => RolUsuario::class,
    ];
```

Para establecer el middleware:

```php
// Notificaciones
Route::get('/notificaciones',NotificacionController::class)->middleware(['auth','verified','rol.reclutador'])->name('notificaciones');
```

> El policy no permite redireccionar por que genera un codigo 403 de no autorizado, pero un middleware si puede intervenir con el routing

> Si un middleware llega a tener muchos if's es recomendable crear varios middleware para que sea mas facil de mantener