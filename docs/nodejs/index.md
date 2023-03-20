# Node JS

![]('/img/../../../../static/img/node.png)

Utilizar JavaScript desde el lado del servidor, es decir, para el backend.

## Que se puede hacer con Node?

- Uso de sockets para comunicación real cliente-servidor
- Manejo de archivos FileSystem, cargas simultáneas
- Servidores locales y remotos con información en tiempo real
- Conexiones a base de datos
- Creación de servicios REST en segundos

## Por que es tan popular?

- Entradas y salidas que no realizan bloqueos del servidor
- Rápido y fácil de configurar
- Mas de 470 mil paquetes disponibles (Ecosistema con más librerías open source del mundo)


## App Blocking y App no-Blocking

Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are *non-blocking*, and accept callback functions. Some methods also have *blocking* counterparts, which have names that end with Sync.

## Hello world

Create a project directory and a `app.js`:

```js
console.log("Hola mundo!");
```

Ejecutar con:

```bash
node app.js
```

## Ciclo de vida de un proceso en Node

Cada proceso pasa por 3 partes

1. Pila de procesos (Call Stack)
2. Node Apis
3. Cola de callbacks

Lo primero es la función main que empieza a ejecutar el contenido del programa en la pila de procesos

Si es un instrucción directa se ejecuta, si es una función especial como setTimeOut pasa a la cola de Node Apis y se sigue ejecutando la pila de procesos

Cuando termina la pila de procesos se pasa a los Node Apis para ver cuales estan listos y pasarlo a la cola de callbacks

La pila de procesos junto con el main puede terminar antes que incluso las otras dos pilas