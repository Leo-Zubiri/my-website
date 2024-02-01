# Stash

El Stash es un espacio temporal donde se pueden colocar los cambios que aún no estan listos para un commit

Se regresa al estado del último commit pero los cambios en los que estuvimos trabajando siguen reservados en el stash

**Guardar todos los cambios actuales en el stash**

```bash
git stash
```

**Guardar stash con nombre**
```bash
git stash save "Contenido del stash"
```

**Ver la lista de elementos guardados en el stash**
```bash
git stash list
```

```bash
git stash list --stat
```

> Pueden existir múltiples stash pero se debe intentar reducir la cantidad de ellos.

**WIP on master** hace referencia a Work In Progress


**Recuperar los avances del trabajo del stash**
```bash
git stash pop
```
> Lo anterior recupera y elimina el último stash

## Conflictos en el stash

Al momento de recuperar los cambios temporales del stash, estos pueden chocar con los cambios del último commit.

El proceso es similar a los conflictos en el merge, se mantienen los cambios que se requieran manualmente y se crea un commit con la solución del conflicto

## Borrar todo el contenido en el STASH

> En caso de no necesitar los cambios que se guardaron temporalmente, se pueden eliminar
```bash
git stash clear
```

## Recuoerar un stash en particular

> Se coloca el identificador mostrado con el `git stash list`

```bash
git stash apply stash@{2}
```

## Eliminar un stash en particular
> Se coloca el identificador mostrado con el `git stash list`

```bash
git stash drop stash@{2}
```

## Ver mas info de un stash
> Se coloca el identificador mostrado con el `git stash list`
```bash
git stash show stash@{2}
```