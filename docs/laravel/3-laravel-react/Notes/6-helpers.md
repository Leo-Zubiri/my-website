# Helpers

Se crea el directorio `helpers` dentro de `src`

Dentro se pueden colocar archivos js con funciones de ayuda, ejemplo para formatear a moneda un número:

```js
export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
}
```
Ya desde un componente se puede importar la función y utilizarla desde este:

```jsx
import { formatearDinero } from "../helpers";

export default function Producto({producto}) {
    const {nombre,imagen,precio} = producto;

  return (
    <p> {formatearDinero(precio)} </p>
  )
}

```