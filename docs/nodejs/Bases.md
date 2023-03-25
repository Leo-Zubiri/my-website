# Bases de Node

## Requerir Paquetes (Require)

Node tiene variedad de paquetes detallados en su documentación, para importar se utiliza require:

```js
const fs = require('fs'); // File System

fs.writeLine('archivo.txt',"contenido", (err)=>{
    if(err) throw err;

    console.log('Archivo creado');
});
```

> `File System en Node`

## Importar archivos JS

Para importar funcionalidades JS alojadas en otros archivos:

Considerando una función dentro de un archivo JS

```js title="Archivo Secundario JS"
const myFunction = () => {
    ...
} 

module.exports = {
    myFunction
}
```

```js title="Archivo principal JS"
const {myFunction} = require('./archivo.js');

myFunction();
```