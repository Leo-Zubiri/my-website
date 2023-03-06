## **Login y Post Controller**

```php artisan make:controller PostController```

```php artisan make:controller LoginController```

```php
Route::get('/muro',[PostController::class],'index')->name('posts.index');
```

> Una vez que el usuario entre a su cuenta redireccionar al muro