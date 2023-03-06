# Directiva choice

Funciona al estilo de un enum

```php
    {{ $user->followers->count()}}
    <span class="font-normal">
        @choice('Seguidor|Seguidores',$user->followers->count())
    </span>
```
Dependiendo la cantidad es mejor que muestre un texto u otro