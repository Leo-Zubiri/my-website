# PicNote API

La documentación busca registrar todos los aspectos importantes desde la configuración hasta la finalización de ésta API hecha con el framework laravel (PHP).

La funcionalidad esperada queda descrita a continuación:

Se dan de alta apuntes tomados como fotografías o notas, estos apuntes pertenecen a materias de las cuales se toman clases. El objetivo es conseguir una manipulación tipo álbum, con mayor organización de apuntes según las respectivas materias a las que pertenecen.

Se busca que la funcionalidad de esta API sea dinámica. Segun las materias dadas de alta por el usuario y su respectivo horario, la alta de apuntes debe asignarse de forma organizada y de forma automática hacia la materia o álbum correspondiente. 

---
<br/>

## **CREACION DEL PROYECTO:**

```composer create-project laravel/laravel PicNote-API```

<br/>

## **DISEÑO TABLAS**

Diseño prototipo para generar un diagrama en [**dbDiagram.io**](https://dbdiagram.io/):

```SQL
Table User {
  userID int
  username varchar 
  password password
}

Table Album{
  albumID int
  userID int [ref: > User.userID] 
  name varchar
  desc varchar
  createdAt datetime
  group char
  grade int
  start_schedule datetime
  end_schedule datetime
  daysperweek varchar
}


Table Note {
  noteID int
  albumID int [ref: > Album.albumID]
  imageUrl varchar
  createdAt datetime
  isHomework boolean
  dueTo datetime
}
```
![](../img/tablesDesignV2.png)

---

<br/>

## **CREACION DE MODELOS**

- -c controller
- -m migration file
- -f factory (seeding)
- --api  

**Desde una terminal**

```php artisan make:model Album -c -m -f --api```

```php artisan make:model Note -c -m -f --api```

> **NOTA:** El modelo User viene creado por defecto en cada proyecto laravel

---

<br/>

## **SCHEMAS**

```php
Schema::create('albums', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained();
    $table->string('name', 25);
    $table->char('group',4);
    $table->tinyInteger('grade');
    $table->dateTime('start_schedule');
    $table->dateTime('end_schedule');
    $table->string('daysperweek',100);
    $table->timestamps();
});
```

```php
Schema::create('notes', function (Blueprint $table) {
    $table->id();
    $table->foreignId('album_id')->constrained();
    $table->string('image_url');
    $table->boolean('isHomework');
    $table->dateTime('dueTo');
    $table->timestamps();
});
```
<br/>

## **RELACIONES**

> Desde cada modelo creado se deben establacer las relaciones que se tienen con otras entidades.

```php
User
public function albums(){
    // Un usuario tiene varios albumes
    return $this->hasMany(Album::class);
}


Album
public function user(){
    return $this->belongsTo(User::class);
}

public function courses(){
    return $this->hasMany(Note::class);
}


Note
public function course(){
    return $this->belongsTo(Album::class);
}
```

---

## **RUTAS**

> Rutas para el consumo de las funcionalidades de la API

- /
  
- user/create
- user/{user}
- user/{user}/albums

- album/create
- album/{album}
- album/{album}/courses

- course/create
- course/{course}
- course/{course}/notes

- note/create
- note/{note}

---

<br/>

## **Validaciones a los Requests**

```php artisan make:request UserRequest```

> Lo anterior crea archivo en app/http/requests

Dentro del archivo UserRequest.php se deben agregar las importaciones:

```php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
```

Se debe agregar los siguientes métodos:

```php
 public function rules()
  {
      return [
          'name' => 'required',
          'email' => 'required|email|unique:users',
          'password' => 'required|min:6'
      ];
  }

  //El formato json que retorna
  public function failedValidation(Validator $validator)
  {
      throw new HttpResponseException(response()->json([
          'success'   => false,
          'message'   => 'Validation errors',
          'data'      => $validator->errors()
      ]));
  }

  /*
  Si se quiere sobreescribir los mensajes de error por defecto de laravel
  public function messages()
  {
      return [
          'email.required' => 'Email is required',
          'email.email' => 'Email is not correct'
      ];
  }
  */
```

> Por defecto laravel tiene retorno de mensajes para las reglas que se indiquen (required,min:5,etc)


Por último se sustituye en el método donde se desee aplicar las reglas:

**UserController.php**

```php
use App\Http\Requests\UserRequest;

...

public function store(UserRequest $request)
{   

}
```

> Aunque no tenga contenido el método store se está evaluando por que se espera que el request sea de tipo UserRequest

![](../img/requestRules.png)

---

<br/>

## **API AUTH**

[**Sobre la autenticacion de API**](https://laravel.com/docs/5.8/api-authentication)

>  En la ruta /config/auth.php ya se encuentra una protección para las api mediante tokens

Se debe crear una nueva migración para la tabla User en donde se creará un nuevo atributo para guardar el token

```php artisan make:migration add_apitoken_touserstable```

```php
Schema::table('users', function ($table) {
    $table->string('api_token', 80)->after('password')
        ->unique()
        ->nullable()
        ->default(null);
});
```
```php artisan migrate```

Durante la creacion de los usuarios se debe agregar el campo del ApiKey

```php
    return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password']),
        'api_token' => Str::random(60),
    ]);
```

Se agrega la siguiente definicion en config.php

```php
'api' => [
    'driver' => 'token',
    'provider' => 'users',
    'hash' => false,
],
```

Es decir:

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'api' => [
        'driver' => 'token',
        'provider' => 'users',
        'hash' => false,
    ],
],
```

**Se protegen todas las rutas necesarias**

```php
Route::group(["middleware" => "auth:api"], function () {
    Route::post('/album/create','App\Http\Controllers\AlbumController@store');
    Route::get('album/{album}','App\Http\Controllers\AlbumController@show');
    Route::put('album/{album}','App\Http\Controllers\AlbumController@update');
    Route::delete('album/{album}','App\Http\Controllers\AlbumController@destroy');
    Route::get('album/{album}/courses','App\Http\Controllers\AlbumController@getCourses');
});
```

> Ahora dentro del Header de las peticiones debe haber dos elementos importantes:

- Accept=application/json
- api_token= token...


![](../img/authApiResult.png)

---