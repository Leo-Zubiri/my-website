# HTTP

HTTP, de sus siglas en inglés: "Hypertext Transfer Protocol", es el nombre de un protocolo el cual nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML. Es la base de cualquier intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador Web.

Clientes y servidores se comunican intercambiando mensajes individuales (en contraposición a las comunicaciones que utilizan flujos continuos de datos). Los mensajes que envía el cliente, normalmente un navegador Web, se llaman peticiones, y los mensajes enviados por el servidor se llaman respuestas.

Los datos que retorne el protocolo al cliente pueden tener distintos formatos:
- HTML
- JSON
- XML

## Metodos de peticion HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs.

GET

    El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
HEAD

    El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
POST

    El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
PUT

    El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
DELETE

    El método DELETE borra un recurso en específico.
CONNECT

    El método CONNECT establece un túnel hacia el servidor identificado por el recurso.
OPTIONS

    El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.
TRACE

    El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
PATCH

    El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.


## Codigos de respuesta

Que nuestro servidor retorne un mensaje con una numeracion entre los siguientes rangos:

- `100 - 199`. Codigos informativos
- `200 - 299`. Codigos de exito, correcto.
- `300 - 399`. Redireccion
- `400 - 499`. Indican que hay un error
- `500 - 599`. Indican un error en el servidor



</br></br>

# JSON

JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript.

En la práctica, .json es un archivo que contiene una serie de datos estructurados en formato de texto y se usa para transferir información entre sistemas.JSON es una notación para la transferencia de datos que sigue un estándar específico. Por eso, puede emplearse en diferentes lenguajes de programación y de sistemas.

Los datos contenidos en un archivo en formato JSON deben estructurarse por medio de una colección de pares con nombre y valor o deben ser una lista ordenada de valores. Sus elementos tienen que contener:

- **Clave**: corresponde al identificador del contenido. Por eso, debe ser una string delimitada por comillas.
- **Valor**: representa el contenido correspondiente y puede contener los siguientes tipos de datos: string, array, object, number, boolean o null. 

Ejemplo de fommato json:

```json
{
    "nombre": "HEDSON",
    "edad": 24,
    "programador": true,
    "direccion": {
        "calle": "",
        "cp": 89600,
        "number": 734
    },
    "opciones": [16, 31, 28],
    "productos": [
        {"nombre":"refresco", "precio": 23.00},
        {"nombre":"chocolate", "precio": 17.50},
    ]
}
```