# React Redux CRUD

 Una de las mayores problemáticas de React es la forma en que se administran los estados y como los cambios pueden afectar a otros componentes. React propaga los cambios entre sus componentes de arriba-abajo y de abajo-arriba, es decir, un componente solo se puede comunicar con sus hijos directos y con su padre.

 Redux es una herramienta que nos ayuda a gestionar la forma en que accedemos y actualizamos el estado de la aplicación de una forma centralizada y controlada. Mediante Redux es posible centralizar el estado general de la aplicación en algo llamado store, liberando a los componentes la responsabilidad de administrar un estado interno.

 > Redux ya no es tan fundamental debido a las actualizaciones de React y el uso de su Context API. React Context API puede ser una buena solución cuando lo que necesitas es una simple gestión de estados. Pero debes recordar que el propósito de Redux es el de gestionar el estado de una aplicación, mientras que el de Context es pasar propiedades.

<br/>

### **Documentación Redux [Here >>>](https://redux-toolkit.js.org/)**
---
## **Instalación**

### **Instalar Redux en el proyecto**
```
npm install @reduxjs/toolkit react-redux
```

### **Instalar Redux desde el Create-React-App**
```
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```
---
## **Crear el Redux Store**
Store central donde se almacenará el estado global de la aplicación.

1. Crer archivo **src/app/store.js**
2. Desde el arhivo store.js agregar:
   ```Javascript
    import { configureStore } from '@reduxjs/toolkit'

    export const store = configureStore({
        reducer: {},
    })
   ```
---

## **Implementación**

### **Empezar a importar un Provider**
Componente que contiene a toda la aplicacion para que este sea el encargado de gestionar los estados.

1. Desde el archivo principal de react donde se monta "<**App/**>" se debe importar el store y el provider y posteriormente crear un Componente Provider que englobe al componente App
```Javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Redux
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provide store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
  
```

---

## **Crear Estado**
Los reducers son la forma en la cual se podrá modificar el estado de la store. Se puede contrastar con el setState en los estados de react.

> Se recomienda crear los Reducers en **src/features/carpeta**

Posteriormente desde esa ruta se pueden crear carpetas segun el contexto de funcionalidad. <br/>
**En este proyecto se creó la carpeta tasks/taskSlice.js** 

1. Dentro del archivo correspondiente se debe agregar el Slice: 
```Javascript 
import { createSlice } from '@reduxjs/toolkit' 

export const taskSlice = createSlice({
    name: 'tasks',
    initialState:[],
    reducers: {

    }
})

export default taskSlice.reducer
```
2. Importarlo desde el store.js

```javascript
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/tasks/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})
```
---

## **Desde los componentes**
Importar el useDispatch o useSelector
- **useDispatch** es para hacer algo
- **useSelector** es para traer algo
``` javascript
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
```
  
### **Desde el componente para leer el estado**
Se utiliza el useSelector
``` Javascript
import {useSelector} from 'react-redux';

function App() {
  
  //Desde la store obtener el estado de las tareas
  const taskState = useSelector(state => state.tasks)

  return (
    <div className="App">
      <p>Hola Mundo</p>

    </div>
  )
}

export default App

```

---

## **Crear Reducers para modificar el estado**
Desde taskSlice.js, se agrega el reducer, el cual es una función que recibel el state actual y un action.
```javascript
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state,action) => {
            state.push(action.payload)
        }
    }
})
```

Se exportan los reducers que se deseen al final del script
```javascript

//Se exporta el reducer y el estado Tasks
export const {addTask} = taskSlice.actions
export default taskSlice.reducer
```

### **Desde componente para cambiar el estado**

Se utiliza el useDispatch, se importa junto al reducer que se requiera
```javascript
//Para usar un reducer, disparar eventos
import { useDispatch } from "react-redux"
import { addTask } from '../features/tasks/taskSlice'
```

Para ejecutar el cambio en el state:
```javascript
 //Se importa el useDispatch como si fuera un hook en la parte superior
 const dispatch = useDispatch();

 //El parametro en addTask es conocido como payload
 dispatch(addTask(task));
```

---

## **Crear ID unicos con librería**

```
npm install uuid
```
Importar
```javascript
//V4 es uno de los estandar de id
import {v4 as uuid} from 'uuid';
```

Generar un ID único
```javascript
const id = uuid();
```
---

## **React Router**

[Documentation React router>>>](https://reactrouter.com/)

### **Instalación**

Desde el proyecto con react establecido:

```javascript
npm install react-router-dom@6
```

### **Implementación**

```Javascript
//Se importa React router en el componente App
import { BrowserRouter, Routes, Route } from 'react-router-dom';

...

//Se envuelven los componentes a cargar por rutas en las siguientes etiquetas:

<BrowserRouter>
  <Routes>
    
    {/* Componente que se carga por defecto ruta raíz */}
    <Route path='/' element={<Componente1 />} />
    
    {/* Componente que carga en la url/component2 */}
    <Route path='/component2' element={<Componente2 />}/>
    
  </Routes>
</BrowserRouter>

```

## **Navegar entre las rutas**

### **Link**
Importar Link para navegar al pulsar sobre ciertos elementos, es la alternativa sin anchor <*a*> para evitar el refresh de la página.

```javascript
import {Link} from 'react-router-dom';

...

// Colocar la etiqueta Link para la redireccion al darle click al elemento
<Link to='/ruta'> Ir a la ruta </Link>
```

### **useNavigate**
Importar el hook useNavigate para navegar en un momento dado con JavaScript
```javascript
import {useNavigate} from 'react-router-dom';

...

// Establecemos el hook en el componente deseado
const navigate = useNavigate();

...

// Para redireccionar a una ruta
navigate('/componente2');
```

### **Leer parametros en el url de la pagin**
Se utiliza el hook useParams

```javascript
import {useParams} from 'react-router-dom';

...

// Para obtener un objeto con los parametros de la url
const params = useParams();
```

---
