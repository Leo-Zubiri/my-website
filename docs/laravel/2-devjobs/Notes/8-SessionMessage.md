# Session() Message

Al crear un mensaje de sesión se puede acceder a este mientras se pase a otra ruta y después de eso desaparece.

```php
// Crear Mensaje
session()->flash('mensaje','La vacante se publicó correctamente');

//Redireccionar al usuario
return redirect()->route('vacantes.index');
```

Desde la vista en la siguiente ruta:

```php
@if (session()->has('mensaje'))
    <div class="uppercase border border-green-600 bg-green-100 text-green-600 font-bold p-2 my-3 text-sm">
        {{session('mensaje')}}
    </div>
@endif
```