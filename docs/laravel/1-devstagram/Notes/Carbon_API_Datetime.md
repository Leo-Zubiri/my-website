# Carbon

[Visitar la documentación](https://carbon.nesbot.com/docs/)

Es una simple API para formatear fechas en PHP que se encuentra integrada de forma nativa en 
laravel.

Con el timestamps se mantiene guardado la fecha de creacion de los registros:

**2023-01-09 02:44:48**

Con la función **difForHumans**:

```php
<p class="test-sm text-gray-500">
    {{ $post->created_at->diffForHumans() }}
</p>
```
Se consiguen mensajes como:

- **Hace 2 dias**
- **Hace 1 minuto**
- **Hace 2 horas**