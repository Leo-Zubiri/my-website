# Cambiar idioma de los mensajes de error

Clonar el repositorio:

```git
git clone https://github.com/MarcoGomesr/laravel-validation-en-espanol.git resources/lang
```
Abrir el archivo `/config/app.php` y reemplazar el valor de la variable `locale` por `es`.

Desde los formularios un parametro más es `no validate` para que se usen las validaciones de laravel y no de HTML

> En el caso de algunos componente de breeze es necesario modificar manualmente. x-auth-validation-errors / x-input-error

Algunos apartados no se traducen como el enlace para recuperar contraseña en el login.

Desde login.blade.php se quita el contenido del enlace para colcarlo en un componente:

```php artisan make:component Link```

El archivo de lógica app/view/components no es necesario por lo que se puede eliminar.

El componente:

```html
<x-link :href="route('register')">
    Crear cuenta
</x-link>
```
Opcion 1:

```html
<a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" 
href="{{ $href }}">
    {{ $slot }}
</a>
```

Opcion 2:

```php
@php
    $classes = "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" 
@endphp

<a {{ $attributes->merge([
    'class' => $classes,
    'href' => $href
])}}>
    {{ $slot }}
</a>
```

Ya solo se cambia el texto del boton de log in desde la vista antes mencionada.