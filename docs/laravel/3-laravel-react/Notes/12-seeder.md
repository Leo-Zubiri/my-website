# Seeder 

Sembrar valores en la base de datos en base a un modelo

```php artisan make:seeder CategoriaSeeder```

Dentro del seeder se colocan los elementos:

```php

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorias')->insert([
            'nombre' => 'Café',
            'icono' => 'cafe',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Hamburguesas',
            'icono' => 'hamburguesa',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
    }
}

```

Desde el `DatabaseSeeder` colocar:

```php
    public function run()
    {
        $this->call(CategoriaSeeder::class);
    }
```

Por ultimo se ejecuta el seeder:

```php artisan db:seed```

Lo anterior siembra los valores en la base de datos pero puede duplicar el contenido.

Para evitar eso y volver a insertar todo desde cero:

```php artisan migrate:refresh --seed```