# Cambios en los Archivos

## Comparar el cambio que tuvo un archivo

Para comparar el archivo original del commit y los cambios que se realizaron

```bash
git diff
```

Para visualizar con lo que esté en el stage:

```bash
git diff --stage
```

> La forma en que el comando presenta los cambios no es tan clara


## Cambiar el commit

Para arreglar el mensaje del último commit que hicimos, o bien, quitarlo para modificar y volver a hacer uno.

> Cambiar el mensaje del último commit:

```bash
git commit --amend -m "Mensaje actualizado"
```
> Si se requierea modificar los cambios que incluye el commit:

```bash
git reset --soft HEAD^
```

- **HEAD** representa el último commit (Puede ser sustituido por el hash del commit que se requiera) y el simbolo **'^'** le indica cuantos commits antes a partir del mencionado anteriormente
  - Ejemplo: `HEAD^3`, `HEAD^` indica un commit antes del último
- **--soft**, indica que quita el commit pero sin quitar los cambios que se encuentran en este

> Es recomendable solo revertir los commits cuando son recientes para no afectar cambios históricos y posiblemente tener conflictos.


## Quitar todo rastro del commit

```bash
git reset --hard HEAD^
```

```bash
git reset --hard HASHCOMMIT
```

## REFLOG

Histórico de todo los movimientos que han ocurrido entre los commits

```bash
git reflog
```

> A pesar de existan eliminaciones de commits, aún se puede regresar a estos a través del hash


## Ignorar el seguimiento de archivos

Es normal que existan directorios o archivos que no tienen relevancia. Se puede crear un archivo `.gitignore` en la raíz del proyecto para evitar que git les de seguimiento

`.gitignore`

```gitignore
directorio/
directorio2/

archivo.txt
*.log
```

> Al archivo gitignore hay que darle seguimiento a los cambios ya que indica en todo momento que directorios o archivos del proyecto pueden ser genéricos para git

