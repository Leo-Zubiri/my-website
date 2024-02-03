# Rebase

Sirve para: 

- Ordenar commits
- Corregir mensajes de los commits
- Unir commits
- Separar commits

Si estando en una rama queremos actualizarla a la versión del master, se puede utilizar un rebase, los commits de la rama se van a temporales, integra los commits restantes de master y después vuelve a incorporar los commits que estaban en temporales

## Actualizando Rama

> Se podría utilizar un merge estando desde la rama para traer cambios del master, pero un rebase podría llegar a ser la mejor opción

Estando desde la rama a actualizar

```bash
git rebase master
```

> Al tener actualizada la rama cuando se intente hacer un merge en master, este será un fast-forward y no tendrá conflictos


# Rebase - Squash

Es recomendable solo aplicar el rebase con commits que solo se encuentra de forma local, es decir, no han salido a través de un **PUSH** para evitar conflictos innecesarios.

```bash
git rebase -i HEAD~3
```

**HEAD~3** Indica la cantidad de commits antes del más reciente (HEAD)

> Al colocar el comando se muestra un menú de opciones junto con la selección de los commits(hash)

La lista de commits se vería de la siguiete forma:

```bash
pick 123a2eb Nombre commit 3
pick 9aasn12a Nombre commit 2
pick 12nau12a Nombre commit 1
```

Entre la lista de comandos que se pueden usar, para **unir dos commits en uno solo** se puede utilizar `squash` o `s`

Se edita la lista de commits
```bash
pick 123a2eb Nombre commit 3
pick 9aasn12a Nombre commit 2
squash 12nau12a Nombre commit 1
```
> Lo anterior indica que se fusione el commit mas cercano al HEAD(1) con el antecesor a este (2). 

- Se presiona ESC para salir
- Se escribe :wq! y Enter para guardar y cerrar el archivo.