# Intervención de imagenes

Para lograr estandarizar las imagenes cargadas se utiliza una librería popular de PHP

```PHP
composer require intervention/image
```

## Integración con Laravel

Abrir **config.php**

Agregar ```Intervention\Image\ImageServiceProvider::class```` al arreglo de providers

```php
'providers' => []
```

De igual manera agregar ```'Image' => Intervention\Image\Facades\Image::class``` al arreglo aliases.

## Utilizar 

```use Intervention\Image\Facades\Image;```

```php
public function store(Request $request){
    $imagen = $request->file('file');
    $nombreImagen = Str::uuid().".".$imagen->extension();

    $imagenServidor = Image::make($imagen);
    $imagenServidor->fit(1000,1000);
    $imagenPath = public_path("uploads").'/'.$nombreImagen;
    $imagenServidor->save($imagenPath);

    return response()->json(['imagen' => $imagen->extension()]);
}
```

> En caso de error para escribir la imagen subida se debe crear manualmente el directorio 
> public/uploads