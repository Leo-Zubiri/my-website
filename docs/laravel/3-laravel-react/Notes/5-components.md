# Componentes

Se crea la carpeta `components` dentro del directorio `src`

Cuando se crea un componente se pueden utilizar los snnipets como el `rfc`= `react functional component`:

```jsx

export default function Resumen() {
  return (
    <div className="md:w-72">Resumen</div>
  )
}

```

## Crear componentes dinámicamente 

Considerando un arreglo que contiene categorias se puede utilizar la función `map`

```jsx
<div className="mt-10">
    {categorias.map((cat) => 
        <Categoria categoria={cat}/>
    )}
</div>
```

Se recorre el contenido de categorias con la variable `cat` y este se pasa a un componente `Categoria` a través de sus props:

```jsx
export default function Categoria({categoria}) {
  const {nombre} = categoria;

  return (
    <div>{nombre}</div>
  )
}
```