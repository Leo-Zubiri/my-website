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

