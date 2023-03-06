# Consultar DB en componente Livewire

Al crear un componente livewire se crean dos archivos, uno para la vista y otro para tipo controlador.

Considerando el controlador:

```php
    public function render()
    {
        // Consultar la DB
        $salario = Salario::all();
        return view('livewire.crear-vacante',[
            'salarios' => $salario,
        ]);
    }
```

Considerando la vista:

```php
    //La variable se encuentra disponible
    <option>-- Seleccione --</option>
    @foreach ($salarios as $salario)
        <option value="{{$salario->id}}">{{$salario->salario}}</option>
    @endforeach
```

## Formulario en livewire

Desde los inputs se reemplaza el atributo `name` por el de `wire:model`.

```php
 <select 
    wire:model="salario" 
    id="salario"
    class="block text-sm text-gray-500 font-bold uppercase mb-2 w-full"
 >
```

Y desde el controlador del componente:

```php
class CrearVacante extends Component
{

    public $salario;

    protected $rules = [
        'salario' => 'required',
    ];

    public function crearVacante(){
        $datos = $this->validate();
    }
}
```

Para poder mostrar los errores de validación desde la vista:

```php
@error('titulo')
    <p>{{message}}</p>
@enderror
```

### Crear componente para mostrar error

```php artisan make:livewire MostrarAlerta```

Desde la vista del componente:

```php
<div class="border border-red-500 bg-red-100 text-red-700 font-bold uppercase p-2 mt-2 text-xs ">
    <p>{{$message}}</p>
</div>
```

Desde el controlador del componente:

```php
class MostrarAlerta extends Component
{
    public $message;
    ...
}
```

Desde el error en la vista:

```php
@error('titulo')
    <livewire:mostrar-alerta :message="$message"/>
@enderror
```

## Subida de archivos livewire

Para habilitar la subida se debe agregar al controlador del componente:

```php
use Livewire\WithFileUploads;

class CrearVacante extends Component
{

    public $descripcion;
    public $imagen;

    use WithFileUploads;

    protected $rules = [
        'imagen' => 'required|image|max:1024',
    ];
    ...
}
```

`Componente para cargar imagen`

```php
<x-text-input 
    id="imagen" 
    class="block mt-1 w-full" 
    type="file" 
    wire:model="imagen" 
    accept="image/*"
/>
```

Mostrar Preview de imagen:

```php
<x-text-input 
    id="imagen" 
    class="block mt-1 w-full" 
    type="file" 
    wire:model="imagen" 
    accept="image/*"
/>

<div class="my-5 w-80">
    <!-- Two way data binding -->
    @if ($imagen)
        Imagen:
        <img src="{{$imagen->temporaryUrl()}}" alt="Preview">
    @endif
</div>
```

`Almacenar archivo despues de la validación:`

```php
    public function crearVacante(){
        $datos = $this->validate();

        // Almacenar la imagen
        $imagen =  $this->imagen->store('public/vacantes');
        $nombre_imagen = str_replace('public/vacantes/','',$imagen);
        ...
    }
```