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