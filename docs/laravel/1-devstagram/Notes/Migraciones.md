# **Migraciones**

> Las migraciones establecen la estructura de las tablas en la bdd.

**Iniciar las migraciones**```php artisan migrate```

**Iniciar migración con nombre:** ```php artisan make:migration agregar_imagen_user```

**Retornar a la migración anterior:** ```php artisan migrate:rollback```

**Retornar varias migraciones atrás:** ```php artisan migrate:rollback --step=5```

---

## Modificar el schema de usuario mediante otra migración

```php artisan make:migration add_username_to_users_table```

Se agrega la columna username a la tabla users. Se crea una migración para tener un control de versiones y sin tocar el esquema definido anteriormente.

```php
public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('username');
    });
}

public function down()
{
    Schema::table('users', function (Blueprint $table) {
        $table->dropColumn('username');
    });
}
```
Se ejecuta la ultima migración: ```php artisan migrate```