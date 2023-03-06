# Modelo Categoría

Crear un modelo junto con su migración y controlador:

```php artisan make:model Categoria --migration --controller```

Se establece los atributos del modelo que corresponde a la tabla en la base de datos:

```php
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('icono');
            $table->timestamps();
        });
    }
```

Despues se migra a la base de datos esta estructura:

```php artisan migrate```