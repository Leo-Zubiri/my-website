# Stash

El Stash es un espacio temporal donde se pueden colocar los cambios que aún no estan listos para un commit

Se regresa al estado del último commit pero los cambios en los que estuvimos trabajando siguen reservados en el stash

**Guardar todos los cambios actuales en el stash**

```bash
git stash
```

**Ver la lista de elementos guardados en el stash**
```bash
git stash list
```

> Pueden existir múltiples stash pero se debe intentar reducir la cantidad de ellos.

**WIP on master** hace referencia a Work In Progress


**Recuperar los avances del trabajo del stash**
```bash
git stash pop
```