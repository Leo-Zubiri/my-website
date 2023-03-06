# Array functions

Algunas funciones importantes para utilizar con los arreglos en react.

[`Mas funciones y comportamiento en Does it mutate!!! ->`](https://doesitmutate.xyz/)

## map

```jsx
{
    pedido.length === 0 ? (
    <p className="text-center text-2xl"> 
        No hay elementos en tu pedido aún
    </p>
    ) : (
    pedido.map(prod=>(
        <ResumenProducto 
        key={prod.id}
        producto={prod}
        />
    ))
    )
}
```

## filter

```jsx
const productoEdit = pedido.filter(pedidoState => pedidoState.id === producto.id)[0];

//retorna un arreglo de objetos

```

## some

```jsx
if(pedido.some(pedidoState => pedidoState.id === producto.id)){
    // Si Está en el pedido
    const pedidoActualizado = pedido.map(pedidoState => 
        pedidoState.id === producto.id ? producto : pedidoState)
    setPedido(pedidoActualizado);
} else {
    setPedido([...pedido,producto]);
}
```

## Reduce

Reduce utiliza un callback con un acumulado y despues la variable en cada iteracion, y el ultimo parametro en que valor empieza el acumulado

```jsx
useEffect(() => { 
    const nuevoTotal = pedido.reduce((total,prod) => (prod.precio*prod.cantidad) + total,0);
},[pedido])
```