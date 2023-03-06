# Validar envío formulario

[Mas sobre las validaciones](https://laravel.com/docs/9.x/validation)

El post del formulario debe tener la validación en su controller:

```php
public function store(Request $request){
    // Validacion
    $this->validate($request,[
        'name' => 'required|min:5' // o bien ['required','min:5']

        // El username no debe existir en la bdd
        'username' => 'required|unique:users|min:3|max:30',

        'email' => 'required|unique:users|email|max:60',

    ]);
}
```


Dentro del formulario crear una directiva:

```php
 <input
    id="name"
    name="name"
    type="text"
    placeholder="Tu Nombre"
    class="border p-3 w-full rounded-lg
    @error('name')
        border-red-500
    @enderror
    "
    value={{ old('name') }}
/>

@error('name')
    <p>{{ $message }}</p>
@enderror
```
> Laravel ya tiene mensajes dependiendo el error en las validacione

![](../img/5.1.png)

> Por defecto los errores en las validaciones vienen en inglés. En caso de necesitarlos en español se debe instalar un paquete desde un repositorio desde terceros:

## **Cambiar idioma mensajes de error validaciones**

[Laravel en español](https://github.com/MarcoGomesr/laravel-validation-en-espanol)

1. En la carpeta **resources** crear carpeta **lang**
2. Abrir una terminal y desde la raiz del proyecto:
   ```git clone https://github.com/MarcoGomesr/laravel-validation-en-espanol.git resources/lang/es```

3. Desde la carpeta **config** acceder a **app.php** y modificar:
   
```php
    //Buscar y editar por español
    'locale' => 'es',
```

---

## **PASSWORD y PASSWORD CONFIRMED**

**Por defecto el campo debe llamarse password_confirmation**

```PHP
<input
   id="password"
   name="password"
   type="password"
   placeholder="Password de inicio de sesión"
   class="border p-3 w-full rounded-lg
   @error('password')
       border-red-500
   @enderror"
/>

@error('password')
<p class="bg-red-500 text-white my-2 rounded-lg text-sm p-2 text-center uppercase">
   {{ $message }}
</p>
@enderror


...


<input
   id="password_confirmation"
   name="password_confirmation"
   type="password"
   placeholder="Repite tu password"
   class="border p-3 w-full rounded-lg"
/>
```

**Para validar solo se valida el campo password:**

```php
public function store(Request $request){
  // Validacion
  $this->validate($request,[
      'password' => 'required|confirmed|min:6'
  ]);
}
```

**Lo anterior comprueba con el confirmed y manda el mensaje correspondiente**