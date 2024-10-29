# Creacion Proyecto API

Desde Visual Studio se crea un nuevo proyecto de tipo `ASP .NET CORE Web API`. 


## Controlador

Un controlador es una clase que hereda de la clase `Controller` propia del framework de asp. 

Un controlador responde mediante `endpoints`, es decir, una URL especifica que direcciona al metodo en el controlador para que este realice un proceso y retorne una respuesta.

**Para crear un controlador**

Desde Visual Studio en en la carpeta `Controllers` al dar click derecho Agregar>Controlador y seleccionar la opcion que corresponda a la API

### Codigo ejemplo controlador

Considerando el controlador `OperationController` con el siguiente contenido:

```c#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        [HttpGet]
        public decimal Add(decimal a, decimal b) { 
            return a + b;
        }
    }
}
```

Al ser un metodo GET se puede acceder mediante el navegador y la URL que asp genera en automatico para el endpoint segun su nombre `/api/operation`.

Se pueden mandar los valores mediante la url anexando `?a=1&b=8` por el nombre de los parametros

Finalmente el acceso es el siguiente segun la url en desarrollo: `https://localhost:7048/api/operation?a=1&b=8`

***Al acceder a la url con los parametros esperados, nos retornara el resultado de la suma en el navegador.***


## Solicitudes HTTP

Se coloca una sentencia por cada metodo segun el verbo http que se requiera. 

```c#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        [HttpGet]
        public decimal Add(decimal a, decimal b) { 
            return a + b;
        }

        [HttpPost]
        public decimal Substract(decimal a, decimal b)
        {
            return a - b;
        }

        [HttpPut]
        public decimal Edit(decimal a, decimal b)
        {
            return a * b;
        }

        [HttpDelete]
        public decimal Delete(decimal a, decimal b)
        {
            return a / b;
        }
    }
}
```