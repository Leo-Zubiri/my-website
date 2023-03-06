# Modal

React-Modal es una de las librerías mas populares para modal. 

[Vistitar React Modal](https://www.npmjs.com/package/react-modal)

```npm i react-modal```

Para utilizar:

```jsx

import Modal from 'react-modal'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root');

export default function MiComponente() {
    return <> 
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto/>
        </Modal>
    </>
}
```

Desde el respectivo componente donde se desea empezar a abrir el modal:

```jsx
<button
    type="button"    
    onClick={() => { 
        handleClickModal();
    }}
>
    Mostrar
</button>
```

## Contenido del Modal

Para colocar un icono para cerrar, usar icono de:

[heroicons](https://heroicons.com/)

`Ejemplo:`

```jsx
<div className="flex justify-end">
    <button onClick={handleClickModal}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </button>
</div>
```