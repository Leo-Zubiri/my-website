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

---

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

---

## Inicializar aplicación Node

Desde el directorio del proyecto:

Configuración básica

```npm init```

Configuración con opciones en el package.json
```npm init -Y```

> La configuración y dependencias se establecen en el `package.json`

---

## Recibir información en línea de comando

En una app de javascript se pueden leer los argumentos colocados en la línea de comandos:

```js
console.log(process.argv);
```

Considerando la ejecución de una app con una variable desde la línea de comandos:

```bash
node app --var=10
```
```js
const [,,arg3="var=5"] = process.argv;
const [, var] = arg3.split('=');
```

> Lo anterior accede según el orden de los argumentos por lo que no es tan conveniente.


---

## Yargs

```npm i yargs```

Yargs es un paquete que controla las entradas por línea de comandos, siendo una mejor manera para leer argumentos.

```js title="Utilizando Yargs"
const argv = require('yargs').argv;

console.log(argv.var);
```

La constante argv es un objeto, entonces considerando ```node app --var=5``` se tiene:

```js
{
    var:5,
}
```

> El orden de los argumentos no es tan importante por lo que es una mejor manera de trabajar con las variables desde la línea de comandos