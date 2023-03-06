# Invokable Controller

Controladores de un solo método

``` php artisan make:controller NotificacionController --invokable```

Desde la ruta web:

```php
// Notificaciones
Route::get('/notificaciones',NotificacionController::class);
```