# Sweet Alert

[`Visitar sitio`](https://sweetalert2.github.io/)

A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies

Desde el layout de la aplicación se le puede agregar un stack para esperar que se inserte algo en esa parte

```php
...
     @stack('styles')
    </head>
    <body class="font-sans antialiased">

        ...

        @stack('scripts')
    </body>
</html>

```

Ahora desde el componente livewire que es insertado en el layout:

```php
@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script> 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
    })
    </script>
@endpush
```

# Eventos en Livewire

[`Visitar Sitio`](https://laravel-livewire.com/docs/2.x/events)

Existen 3 formas

- Desde la vista
- Desde el controlador del componente
- Desde Javascript


## Desde el controlador del componente

```php
<button 
    wire:click="$emit('prueba',{{$vacante->id}})"
>
Eliminar
</button>

...

class MostrarVacantes extends Component
{
    protected $listeners = ['prueba'];

    public function prueba($vacante_id){
        dd('Prueba');
    }
}
```


## Desde la vista

```php
    <button 
        wire:click="$emit('prueba',{{$vacante->id}})"
    >
    Eliminar
    </button>

    ...

    <script> 
        Livewire.on('prueba', (vacante_id) => { 

        })
    </script>
```

## Emitiendo Desde Javascript

```php
    <script> 
        Livewire.on('mostrarAlerta', (vacante_id) => { 
            Swal.fire({
                title: 'Eliminar Vacante?',
                ...
                }).then((result) => {
                if (result.isConfirmed) {

                    // Eliminar la vacante
                    Livewire.emit('eliminarVacante',vacante_id)

                    Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado correctamente',
                    'success'
                    )
                }
            })
        })

    </script>

    ...
    
    protected $listeners = ['eliminarVacante'];

    public function eliminarVacante(Vacante $vacante){
        $vacante->delete();
    }
```