# GITHUB

Es una plataforma para mantener repositorios git con código fuente en la nube.

Lo anterior permite que tengamos una copia local del historial de cambios y que estos sean integrados posteriormente con la copia principal en la nube a través de un PUSH de cambios.


- **PUSH:**  Es el proceso de enviar los cambios realizados a un repositorio remoto
- **PULL:**  Es el proceso de descargar o actualizar los archivos del proyecto desde un repositorio remoto (bajar cambios)

## GIT REMOTE

Permite interactuar con los repositorios remotos. Al utilizar github y crear un repositorio en la plataforma, se muestran opciones para enlazar el repostitorio local con uno remoto (plataforma de git)

**Ver los remotos configurados**

```bash
git remote -v
```

**Agregar un remoto**
La dirección/url
```bash
git remote add https:/github.com/usuario/repositorio.git
```
**PUSH al remote**
```bash
git push -u origin master
```
> Lo anterior indica  que se va a subir todo lo que hay en la rama `master` al repositorio en github. Se utilizan las credenciales de github para que los cambios sean aplicados.

### PULL

Se utiliza para traer los cambios mas recientes del origin configurado con el `remote`. Es decir, que la versión de la rama sea la más actualizada según la que se encuentra en github

Pull por defecto al origen configurado:

```bash
git pull
```

Se puede especificar la rama:
```bash
git pull origin main
```
#### PULLING STRATEGY

Existen estrategias distintas a la hora de unir los cambios del remoto con el local a través de un PULL, esto se le conoce como **PULLING WITHOUT RECONCILE STRATEGY**.

Entre las estrategias para el pull:

- pull.rebase false - MERGE
- pull.rebase true - rebase
- pull.ff only - fast-forward only

Es muy común utilizar la estrategia del fast-forward, en caso contrario existirán conflictos que resolver

Para establecer la estrategia del pulling en la configuración global:

```bash
git config --global pull.ff only
```
En caso de querer ver el archivo de la configuración
```bash
git config --global -e
```

## GIT PUSH
Una vez que se terminen los cambios locales para actualizar el repositorio remoto se utiliza el **push**

```bash
git push
```

Existe la posibilidad de que lleguen a haber conflictos si hay cambios en el origin que choquen con los locales. Si colocamos la estrategia del pull solo para fast-forward no podríamos actualizar la rama con solo **git pull**

Para que exista la posibilidad de atender los conflictos se puede configurar la estrategia del pull solo para el local

```bash
git config pull.rebase true
git pull
```




## GITHUB TAGS

Por defecto las tags agregadas en el repositorio de forma local, no se suben automaticamente a GitHub. Para que se envíen a GitHub es necesario actualizarlas cada cierto tiempo de ser necesario con:

```bash
git push --tags
```

![](img/github-repo-opt.png)

Se puede descargar el código como se encuentra en cada tag (versión)

![](img/github-tags.png)


### RELEASE TAGS

Desde la sección de tags se selecciona uno que represente una versión de lanzamiento o pre-lanzamiento. En la información del tag se puede pulsar en editar

En la edición se puede describir la versión así como agregar otra clase de recursos que se quieran asociar a la descarga de ese release.

Una vez configurado la sección de releases del repositorio lo contendrá

![](img/github-releases.png)


## GIT FETCH

Sirve para actualizar las referencias en base al repositorio remoto sin la necesidad de bajar los cambios mas actuales y crear un merge o rebase

Es decir, se puede hacer primero un `fetch` para ver si hay actualizaciones en el remoto y posteriormente hacer el `pull` de los cambios

```bash
git fetch
```

```bash
git pull
```

## GITHUB FORK

Git clone es para clonar un repositorio publico a tu repositorio local (Es como descargar el proyecto en tu computadora)

`GIT FORK` es para darle seguimiento al proyecto, es decir Haciendo un fork puedes contribuir a un repositorio que no es tuyo mediante pull requests, internamente un fork hace una copia exacta del repositorio original en tu cuenta github (con una url diferente a la del fork) y luego puedes usar clone para llevarlo a tu repositorio local, así tu trabajas en una copia exacta del proyecto original y ya en tu repositorio podrás hacerle los cambios que quieras sin afectar el repositorio original.
Usualmente Fork se usa en proyectos Open Source. Donde no se le puede dar acceso a todo el mundo, pero si alguien quiere contribuir lo puede hacer de esta manera.


