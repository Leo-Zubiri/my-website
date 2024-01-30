# Ramas, uniones y conflictos

La rama es una versión alternativa del proyecto principal donde se puede modificar y trabajar con el código tal cual estaba en ese momento. Cuando alguna funcionalidad es aprobada se pueden pasar los cambios a la rama principal

## Rama

Saber que el status de las ramas

```bash
git branch
```

Crear rama

```bash
git branch rama-prueba
```

Cambiar de rama actual

```bash
git checkout nombre-rama
```

Crear y cambiarse a una rama nueva

```bash
git checkout -b nombre-nueva-rama
```

Para borrar una rama:
```bash
git branch -d nombre-rama
```

Para borrar una rama aunque nunca se hayan fusionado sus cambios a otra (forzar)

```bash
git branch -d nombre-rama -f
```

## Merge
 
Cuando se unen los cambios de una rama a otra existen 3 posibles casos:

- **Fast-forward:** Todos los commits de la rama origen se pueden integrar a la rama destino sin ningún problema ya que no interfieren.
- **Uniones automáticos:** cuando git detecta que trabajamos sobre una rama, con el tiempo integra los cambios en la otra de forma automática siempre y cuando no haya conflitos
- **Existen conflictos:**  Se producen cuando hay diferencias entre las dos ramas en el mismo lugar o archivo. Se debe corregir el problema manualmente y crear lo que se conoce como el **Merge commit**

Para unir una rama con otra, se debe estar posicionado en la rama que recibirá los cambios

```bash
git merge rama-origen
```

## Merge y conflictos

Un conflicto es el choque de cambios donde git no puede integrar los cambios directamente. Esto ocurre posiblemente por que existen cambios sobre mismas líneas y se debe conservar una u otra o ambas, se debe establecer manualmente que se conservará.

Se tiene que editar el archivo, git marca la sección del conflicto y se hace un commit con la resolución.


# Tags (Etiquetas)

Los tags son utilizados comúnmente para marcar en el registro histórico una versión o release del proyecto

Un tag hace referencia a un commit y a todo el estado de un proyecto en ese momento 

Se puede nombrar el tag como resulte más conveniente, puede ser una versión numérica o palabra clave


**Crear un tag**

```bash
git tag primer-release
```

**Visualizar los tags**

```bash
git tag
```

**Visualizar un tag específico**
```bash
git show v1.0.1
```

**Borrar un tag**

```bash
git tag -d nombre-tag
```

**Crear tag version**

```bash
git tag -a v1.0.0 -m "Version 1.0.0 lista"
```

**Crear tag en un commit específico**

> Se coloca el hash del commit

```bash
git tag -a v1.0.1 9fceb02 -m "Version alpha"
```

## Nomenclatura de una versión

Tomando como ejemplo:

`v1.0.2`

- v1: Representa una versión con cambios grandes o concretos, que diferencian totalmente  la versión anterior. Por lo general se utiliza cuando hay una gran cantidad de funcionalidades
- 0. El segundo número puede representar la adición de una nueva funcionalidad pero no representa por si sola una versión mayor
- 2. El tercer número generalmente es para la solución de bugs, conforme aparecen y son resueltos, este número va incrementando