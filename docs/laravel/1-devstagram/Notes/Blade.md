## Blade

> Blade es el sistema de plantillas de Laravel, el cual nos permite generar HTML dinámico con una sintaxis mucho más limpia que si usaramos PHP plano.

## Insertar código php en HTML
Al utilizar PHP plano lo normal sería utilizar la etiqueta ```<?php ?>```

**Blade permite insertar código php de la siguiente forma:**

```php
<body> 
    // Expresion procesada
    {{ 1+1 }}

    // Con la directiva php
    @php echo date('Y') @endphp

    //Se llama una función helper nativa de laravel
    {{ now()->year }}
</body>
```

### [**Helpers de Laravel ->**](https://laravel.com/docs/9.x/helpers)