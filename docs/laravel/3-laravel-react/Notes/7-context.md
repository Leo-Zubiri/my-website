# Context API

Con context se pasa el state desde un componente principal hacia otros importando el contexto sin la necesidad de pasar a través de props cada argumento

# **Context API**

## 1. Crear context y provider

El provider es un componente que puede proporcionar funciones, variables y state a los componentes hijos. El context es lo que identifica a distintas porciones unas de otras.

```js

import {createContext,useState} from 'react'

const MiContext = createContext();

const MiProvider = ({children}) => {

  const numero = 10;
  const miFn = () => {}
  const [state,setState] = useState({datos:[],headers:{}});

  return (
        <CotizadorContext.Provider value={{
          numero,miFn,state,setState
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}
```

## 2. Envolver a los componentes con el provider

Se importa el provider y entre estas etiquetas se colocan los componentes que tendrán acceso al contexto.

```js
import App	 from "./components/App"

import {MiProvider} from './context/MiProvider'

function App() {

  return (
    <MiProvider>
      <App  />
    </MiProvider>
  )
}

export default App
```


## 3. Importar el contexto
Desde los componentes envueltos por el provider para acceder al context.
Para usar determinado context se utiliza el hook ```useContext();```

```js
import MiContext from '../context/MiContext'

// Se obtienen las partes que se necesiten
const {numero,miFn,state,setState} = useContext(MiContext);
```

## 4. Simplificar lo anterior mediante Hook.

```js
import { useContext } from "react";

import MiContext from "../context/MiProvider";

const useMiContext = () => {
    return useContext(MiContext);
}

export default useMiContext;
```

Ahora para acceder a las porciones del contexto desde los componentes:

```js
import useMiContext from '../hooks/useCotizador'

...

const {numero,miFn,state,setState} = useMiContext();
```

---
