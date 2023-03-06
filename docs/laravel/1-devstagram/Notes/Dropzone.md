# Dropzone

[Página oficial ->](https://www.dropzone.dev/)

```npm install --save dropzone```

```js
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "watch": "vite build --watch"
}
```
En el Head:

```html
@vite('resources/css/app.css')`
@vite('resources/js/app.js')`
```

## CSS del Dropzone

Referencia en el Head:

```@stack('styles')```

Inyectar estilos solo en las vistas que se requieran
```html
@push('styles')
<link rel="stylesheet" href="https://unpkg.com/dropzone@5/dist/min/dropzone.min.css" 
type="text/css" />
@endpush
```

## resources/js/app.js

```js
import Dropzone from "dropzone";
// Establecer ruta y endpoint manualmente
Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone',{
    dictDefaultMessage: "Sube aquí tu imagen",
    acceptedFiles: ".png,.jpg,.jpeg,.gif",
    addRemoveLinks: true,
    dictRemoveFile:"Borrar archivo",
    maxFiles: 1,
    uploadMultiple: false
})
```

## HTML

```html
<form action=" {{ route('imagenes.store')}}" 
method="POST"
enctype="multipart/form-data"
id="dropzone" 
class="dropzone border-dashed border-2 w-full h-96 
rounded flex flex-col justify-center items-center">
@csrf
</form>
```

> Necesita en el form una ruta en el action para empezar a mostrarse


# Controlador para subir imagenes

```php
Route::post('/imagenes',[ImagenController::class,'store'])->name('imagenes.store');
```

```php
public function store(Request $request){
    $imagen = $request->file('file');

    return response()->json(['imagen' => $imagen->extension()]);
}
```

# Eventos Dropzone

Algunos eventos se muestran a continuación:

```php
dropzone.on("sending", function(file,xhr,formData){
    console.log(file)
});

dropzone.on("success", (file,response) => { 
    console.log(response);
});

dropzone.on("error", (file,message) => { 
    console.log(message);
});

dropzone.on("removedfile", (file,message) => { 
    console.log("Archivo eliminado");
});
```