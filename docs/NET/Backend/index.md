# Backend

A veces denominado servidor, el back end de la aplicación administra la funcionalidad general de la aplicación. Cuando el usuario interactúa con el front end, la interacción envía una solicitud al back end en formato HTTP. El backend procesa la solicitud y devuelve una respuesta.

Cuando el backend procesa una solicitud, normalmente interactúa con los siguiente elementos:

- Servidores de bases de datos para recuperar o modificar datos relevantes
- Microservicios que realizan un subconjunto de las tareas solicitadas por el usuario
- API de terceros para recopilar información adicional o realizar funciones adicionales

El backend utiliza varios protocolos y tecnologías de comunicación para completar una solicitud. Además, gestiona miles de solicitudes distintas de forma simultánea. El back end combina técnicas de concurrencia y paralelismo, como la distribución de solicitudes en muchos servidores, el almacenamiento en caché y la duplicación de datos.