# React Toastify

Ideal para mostrar notifiaciones flotantes de tipo toast

[`Leer mas sobre las funciones en toastify`](https://fkhadra.github.io/react-toastify/introduction/)

## SETUP

```npm i react-toastify```

Se configura en dos pasos:

1. En que parte del layout se muestra.
2. Evento de cuando se muestra.

## Uso

Primer paso:

```jsx
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
...

    //Desde el layout
    <ToastContainer/>
```

Segundo paso:

```jsx
import { toast } from "react-toastify";
...

// Desde donde se llama el evento

toast.succes('Correcto')
```