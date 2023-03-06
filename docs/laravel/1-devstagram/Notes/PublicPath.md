# Eliminar archivo

```php
$imagen_path = public_path('uploads/'.$post->imagen);

// Facades Illuminate\Support\Facades\File
if(File::exists($imagen_path)){
    unlink($imagen_path);
}
```