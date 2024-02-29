# Github Issues

Las personas pueden crear preguntas o incógnitas, reportar errores y solicitar nuevas funciones en el repositorio de GitHub del proyecto.

La opción de Issues puede ser desactivada desde la configuración del repositorio

![](../git/img/github-issues.png)

Un issue se puede relacionar a un pull request para indicar que esta fue resuelta en alguna integración de cambios

## Cerrar Issue

Se puede cerrar el issue desde github para marcar que ya no es necesario seguirlo. Se pueden crear referencias donde un commit resuelve un issue y posteriormente desde la interfaz de github cerrarlo

Existe la posibilidad de **Cerrar issues mediante un commit**

Desde el local al momento de crear un commit hay ciertas palabras clave: 

- **Fixes** y el número correspondiente del issue

```bash
git commit -am "Fixes #5: Solucionado esta situacion"
```

> Desde github aparece el issue como cerrado e indica el commit relacionado


## Issue templates

Desde la configuración del repositorio en github existe la opción para crear plantillas para los issues.

Entonces podemos establecer algún formato para describir los bugs, solicitar características entre otras cosas.
Cuando algún usuario intente crear un nuevo issue se le cargará el formato para que intente seguir las buenas prácticas para la descripción del issues

![](../git/img/github-issues_config.png)

![](../git/img/github-issues_types.png)