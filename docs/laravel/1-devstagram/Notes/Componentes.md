# Componentes en Laravel

```php artisan make:component NombreComponente```

> Se crea un archivo para la lógica y otro para la vista

> El primer archivo se crea en la ruta **app/View/Components**
> En los archivos de este directorio se encuentra la lógica del lado del servidor para los componentes

>  El segundo archivo se crea en la ruta **resources/views/components**


## Utilizar un componente

Desde el blade.php de la vista deseada se debe agregar un etiqueta con el formato: **<x-NombreComponente/>**

## Slots

Para reutilizar un componente con un contenido que pueda variar se utilizan los slots, equivalentes a los props en react, para esto:

```php
<x-NombreComponente>
    Contenido Slot
</x-NombreComponente>
```
Desde el componente se debe recibir como:

```php
<div>
    <h1> {{ $slot }}</h1>
</div>
```
## Varios Slots especificos

```php
 <x-listar-post>
    <x-slot:titulo>
        <header>Esto es un header</header>
    </x-slot:titulo>
    Contenido
</x-listar-post>
```
```php
<div>
    {{ $titulo }}
    <h1> {{ $slot }}</h1>
</div>
```

## Pasar informacion a componente

Desde el archivo php correspondiente a la logica se agrega al constructor la variable a recibir

```php
    public $variable;
    
    public function __construct($variable)
    {
        $this->variable = $variable;
    }
```

Desde la etiqueta del componente:
```php
<x-mi-componente :variable="$variable"/>
```

> En caso de error a pesar de todo estar correcto se puede limpiar cache ```php artisan view:clear```