# Axios

Axios es una alternativa al FetchAPI de Javascript

```npm i axios```


Para utilizarlo en react

```js
import axios from 'axios'

...

    const obtenerCategorias = async () => {
        try {
            const respuesta = await axios('http://127.0.0.1:8000/api/categorias')
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        obtenerCategorias()
    },[])

```

## API en Variable de entorno

Desde el proyecto en react crear un archivo `.env.local`, se debe colocar la variable con `VITE_` al inicio:

```VITE_API_URL=http://127.0.0.1:8000```

Para acceder a la variable desde código:

```js
import.meta.env.VITE_API_URL
```
Por lo que se sustituye en la petición:

```js
const respuesta = await axios(`${import.meta.env.VITE_API_URL}/api/categorias`)
```

## Cliente de Axios

Crear directorio `src/config/axios.js`

```js
import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export default clienteAxios;
```

Desde el archivo donde se utilice la variable de entorno:

```jsx

import clienteAxios from "../config/axios";

...

 const respuesta = await clienteAxios('/api/categorias')
```