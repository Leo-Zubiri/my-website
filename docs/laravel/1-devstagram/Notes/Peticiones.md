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

<table>
    <thead>
        <tr>
            <th>Verb</th>
            <th>URI</th>
            <th>Action</th>
            <th>Route Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td><code>/photos</code></td>
            <td>index</td>
            <td>photos.index</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/photos/create</code></td>
            <td>create</td>
            <td>photos.create</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/photos</code></td>
            <td>store</td>
            <td>photos.store</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/photos/{photo}</code></td>
            <td>show</td>
            <td>photos.show</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/photos/{photo}/edit</code></td>
            <td>edit</td>
            <td>photos.edit</td>
        </tr>
        <tr>
            <td>PUT/PATCH</td>
            <td><code>/photos/{photo}</code></td>
            <td>update</td>
            <td>photos.update</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/photos/{photo}</code></td>
            <td>destroy</td>
            <td>photos.destroy</td>
        </tr>
    </tbody>
</table>
