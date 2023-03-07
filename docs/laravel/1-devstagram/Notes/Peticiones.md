## Peticion POST formulario

Tipos de Request y sus nombres convencionales
- GET (index)
- POST (store)
- PUT  (update)
- PATCH (update)
- DELETE (destroy)


Se debe colocar una ruta que espere la petición post y apunte a un método

```php
Route::post('/crear-cuenta', [RegisterController::class,'store'])->name('register');
```

El método en el controlador
```php
public function store(Request $request){
    // Despliega el dato username que viene del formulario
    dd($request->get('username'));
}
```

El form debe apuntar a la ruta:
```PHP
<form action="{{ route('register') }}" method="POST">
    @csrf  //Para evitar ataques Cross Site Request Forgery (CSRF)
```

Lo anterior crea un campo en HTML para autenticacion con un token
```php
 <form action="/crear-cuenta" method="POST">
  <input type="hidden" name="_token" value="3C1aXhib13hvgjMvPCf5PFCNMHynIIPFZATvPZZR">     
```

---

