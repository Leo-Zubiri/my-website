# Livewire

Es un framework full stack de laravel para evitar el reload de la pagina al mandar al controlador y despues retornar de nuevo. Este framework esta basado en AJAX, por lo que realiza un re-render de lo que cambió en el DOM.
Es una mezcla cliente/servidor.

## Funciones Soportadas por Livewire

- Validacion de formularios
- Subida de archivos
- Paginación
- Redireccionar
- Autorización 
- Mensajes Flash
- Eventos

> Se recomienda instalar extensiones de livewire en vscode

## Instalación

```composer require livewire/livewire```

## Crear componente Livewire

```php artisan make:livewire nombre```

> Lo anterior crea un archivo php en **app/Http/Livewire/archivo.php** y la vista en **resources/views/livewire/archivo.blade.php**

En el caso de la vista, siempre se debe retornar un `<div>` general

## Utilizar el componente

```<livewire:nombre-componente/>```

Ademas colocar la directiva en el head:

```php
@livewireStyles
```

Y antes de cerrar el body:


```php
@livewireScripts
```

> Se deve envolve el codigo con las anteriores dos directivas para el correcto funcionamiento de AJAX


## Pasar información y mostrarla

> Se pueden utilizar Modelos en el archivo controlador de livewire pero no está disponible el modelo Request como en un controlador normal.

Si se declaran atributos de clase en el archivo php mencionado, no es necesario pasarlo a la vista. Automáticamente ya se puede utilizar.

**Pasar info a través de su archivo php**

```php

    public $mensaje = "Contenido de atributo";
    
    public function render()
    {
        return view('livewire.like-post');
    }

    ...


    <div>
        <h1> {{ $mensaje }}</h1>
    </div>

```

**Pasar info a través de la etiqueta de componente**

```php
    @php
        $mensaje = "Hola mundo";
    @endphp
    <livewire:like-post :mensaje="$mensaje"/>
```

## Eventos en livewire

> Con livewire ya no se necesita utilizar formularios ni button con el type submit, tampoco el csrf

Componente livewire con evento wire:click que apunta a la funcion like

```php
<div>
    <button 
        wire:click="like"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </button>
</div>

```

Desde la logica del componente

```php
    public function like(){
        return "dede la funcion like";
    }
```

## Interfaces Reactivas

Se debe crear una funcion mount que establece variables la primera vez que se carga el componente

```php
    public $isLiked;

    public function mount($post){
        $this->isLiked = $post->checklike(auth()->user());
    }
```
Para que se vuelva reactivo se debe ir alterando esa variable a lo largo del código:

```php
    public function like(){
        if($this->post->checkLike(auth()->user())){
            $this->isLiked = false;
        } else {
            $this->isLiked = true;
        }
    }
```
Y se pueden escuchar los cambios desde la vista del componente livewire:

```php
<div>
    <button 
        wire:click="like"
    >
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="{{ $isLiked ? "red" : "white" }}" 
            ...
        </svg>
    </button>
</div>
```