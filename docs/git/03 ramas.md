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