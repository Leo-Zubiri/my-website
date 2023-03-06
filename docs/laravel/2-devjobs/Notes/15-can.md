# Directiva `can`

Desde la vista verifica a través de un Policy si un usuario cumple con ciertos criterios para mostrar/hacer algo.

```php
@can('create',App\Models\Vacante::class)
    <p> Es un reclutador </p>
@else
    <p> Es un desarrollador </p>
@endcan
```

```php
@cannot('create',App\Models\Vacante::class)
    <p> Es un desarrollador </p>
@else
    <p> Es un reclutador </p>
@endcannot
```