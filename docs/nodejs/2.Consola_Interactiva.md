# Consola Interactiva

Utilizar paquete Colors para mejorar la estética de las opciones en consola.

## Leer por consola

Utilizar paquete readLine propio de node:

```js
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readLine.question('Seleccione una opción: ', (opc) => {
        console.log(opc);
        readLine.close();
    })
```

## Inquirer

Permite crear interfaces de consola con mayores funcionalidades

```npm install --save inquirer```

### Modificar `package.json`

La versión 9 de inquirer ahora requiere el uso de módulos de ECMAScript. 

**Se agrega el "type": "module"**

```json
{
  "name": "todolist-nodeconsola",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "colors": "^1.4.0",
    "inquirer": "^9.1.5"
  }
}

```

Se cambian require por imports y se cambia la forma de exportar:

```js
import inquirer from 'inquirer';
 
import colors from 'colors';
```

```js
const miFuncion = () => {}

export {
    miFuncion
};
```

### Uso

```js title="App.js"

import colors from 'colors';
import { inquirerMenu, pausa} from './helpers/inquirer.js'

console.clear();

const main = async() => {
    let opc = '';
    do {
        opc = await inquirerMenu();
        console.log(opc);
        if(opc !== '0') await pausa();
    } while (opc !== '0');

}

main();
```

```js title="inquirer.js"
import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log("=======================================".white);
    console.log("              TO-DO LIST              ".blue);
    console.log("         Seleccione una opción        ".green);
    console.log("=======================================\n".white);

    const opt = await inquirer.prompt(preguntas)
    const {opcion} = opt;
    return opcion;
}

const pausa = async() => {
    console.log('\n')
    await inquirer.prompt({
        type: 'input',
        name: 'continuar',
        message: `Presione ${'ENTER'.green} para continuar...\n`,
    })
}

export {
    inquirerMenu,
    pausa
}
```

### Leer por consola y validar

```js
const leerInput = async(mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: mensaje,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}
```

### Confirmación 

```js
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'confirmed',
            message
        }
    ]

    const {confirmed} = await inquirer.prompt(question);

    return confirmed;
}
```

### Selección múltiple

```js
const listadoCheckList = async (tareas=[]) => { 
    const choices = tareas.map((tarea,i) => {

        return {
            value: tarea.id,
            name: `${i+1}. ${tarea.desc}`,
            checked: tarea.completadoEn ? true:false
        }
    })

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccion: ',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(preguntas)
    return ids;
    // Retorna arreglo
}
```

---

## Guardar y Leer archivo

```js
import fs from 'fs';

// Crear archivo
fs.writeFileSync(archivo,JSON.stringify(data))

// Leer archivo
if(!fs.existsSync(archivo)) return null;
const info = fs.readFileSync(archivo, {encoding: 'utf-8'})
const data = JSON.parse(info);
```

---

## UUID

Paquete para crear identificadores únicos a nivel mundial.

```npm i uuid```

```js title="Crear ID"
import { v4 as uuidv4 } from 'uuid';
id = uuidv4();
```

## Objeto to Array

```js
get ListadoArr(){
    const listado = [];
    Object.keys(this._listado).forEach(key => {
        const tarea = this._listado[key]
        listado.push(tarea)
    })

    return listado;
}
```

## Eliminar de un objeto

```js
borrarTarea(id=''){
    if(this._listado[id]){
        delete this._listado[id];
    }
}
```