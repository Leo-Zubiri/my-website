# useSWR

`State While Revalidate`

SWR es una estrategia para devolver primero los datos en caché (obsoletos), luego envíe la solicitud de recuperación (revalidación), y finalmente entrege los datos actualizados. Con SWR, el componente obtendrá constante y automáticamente el último flujo de datos. Y la interfaz de usuario será siempre rápida y reactiva.

Es bastante utilizado para el consumo de API's

## Instalacion

Desde el proyecto en react 

```npm i swr```

## Uso

```jsx
import useSWR from 'swr';

...

  const fetcher = () => clienteAxios('/api/productos').then(data=>data.data.data);
  const {data,error,isLoading} = useSWR('/api/productos',fetcher);

  if(isLoading) return 'Cargando...';

  ...
```
## Refresh interval

No reemplaza el comportamiento de un Socket pero el comportamiento es bastante similar

```jsx
  const {data,error,isLoading} = useSWR('/api/productos',fetcher,{
    refreshInterval : 1000
  });
```

```php
    public function index()
    {
        return new ProductoCollection(Producto::
            where('disponible',1)
            ->get()
        );
    }

```
Lo anterior estaría escuchando los cambios cada segundo cuando un producto deje de estar disponible se verá reflejado en el frontend