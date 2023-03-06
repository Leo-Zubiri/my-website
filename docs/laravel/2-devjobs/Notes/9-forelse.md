# Directiva FORELSE

Un codigo condicional para mostrar un componente en la vista:

```php
@if(count($vacantes) > 0)
    // Mostrar componentes
@else
    // Mostrar mensaje de no existencia
@endif
```

En las ultimas versiones de laravel se sustituye el foreach:

```php
@forelse ($vacantes as $vacante)
    // Mostrar componentes
@empty
    // Mostrar mensaje de no existencia
@endforelse
```