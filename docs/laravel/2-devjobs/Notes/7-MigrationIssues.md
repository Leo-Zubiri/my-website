# Problemas con las migraciones

Puede ocurrir que se intente crear una tabla con un campo de llave foránea de una tabla que aun no existe por que es la siguiente migración a ejecutar.

La forma menos óptima sería renombrar las migraciones para que una se ejecute antes que otra.

La mejor manera es ir creando mas migraciones constantemente para seguir con el concepto de control de versiones de la base de datos. 

> No crear una migracion por cada campo, crear una migración por cada conjunto de cambios conforme se avanza durante el proyecto.

## Cuando se agregan columnas nuevas

Es importante las convenciones en inglés:

```php artisan make:migration add_columns_to_vacantes_table```

Cuando se establecen las columnas es importante colocar su eliminación en el método down para no tener problemas con los rollbacks:

```php
    public function down()
    {
        Schema::table('vacantes', function (Blueprint $table) {
            $table->dropColumn('titulo');
        });
    }
```

`Otra alternativa si son muchas columnas:`

```php
Schema::table('vacantes', function (Blueprint $table) {
    $table->dropColumn([
        'titulo',
        'salario_id',
        'categoria_id',
    ]);
});
```

## Problemas con los Rollbacks

Cuando se intentan eliminar los campos que son llaves foráneas por defecto no deja eliminarlos para evitar valores faltantes o perdidos en la base de datos por error.

Para solucionarlo en el método down:

```php
    public function down()
    {
        Schema::table('vacantes', function (Blueprint $table) {
            $table->dropForeign('vacantes_categoria_id_foreign');
            $table->dropForeign('vacantes_salario_id_foreign');
            $table->dropForeign('vacantes_user_id_foreign');

            $table->dropColumn([
                'titulo',
            ]);
        });
    }
```