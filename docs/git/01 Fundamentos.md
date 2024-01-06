# Fundamentos

Una vez instalado Git se puede acceder a los comandos desde una consola.

## Comandos básicos de git

- Versión instalada de Git:

    ```bash
    git --version
    ```

- Ayuda con los comandos de Git:

    ```bash
    git help
    ```

- Ayuda específica con un comando de Git: `git help <command>`

    ```bash
    git help commit
    ```
## Primeras configuraciones

Configurar el perfil de git para interactuar con los repositorios, esta configuración es local para tener un control pero los datos no son tan fiables como para identificar correctamente a usuarios

- `Nombre de Usuario`: 
  
    ```bash
    git config --global user.name "Leo Zubiri"
    ```

- `Email`

    ```bash
    git config --global user.email "Leo.Zubiri@mail.com"
    ```

- `Ver los datos de configuracion global`

    ```bash
    git config --global -e
    ```


## Primeros pasos

**Para inicializar un repositorio**

Desde la ruta raíz del proyecto

- Para inicializar/crear el repositorio

    ```bash
    git init
    ```
- Para ver el status de los cambios en la rama

    ```bash
    git status
    ```
- Agregar archivos al stage (Marcar como listo para posteriormente crear un commit)
  
    ```bash
    git add <file.ext>
    ```

    Agregar todos los archivos:

    ```bash
    git add .
    ```
- Quitar archivo del Stage

    ```bash
    git reset <file.ext>
    ```

- Realizar commit (guardar cambios)

    ```bash
    git commit -m "Primer commit"
    ```

- Regresar los cambios al último commit

    ```bash
    git checkout -- .
    ```

- Hacer un add al stage y commit en un solo comando

    ```bash
    git commit -am "Changes added and commited with one command"
    ```
    > Solo funciona para los archivos que ya se encuentren por lo menos con seguimiento en un commit (No untracked)

- Ver los commits realizados

    ```bash
    git log
    ```

## Branch (Ramas)

Una rama es una ruta alternativa para trabajar sobre el código, de esta manera se puede trabajar en distintos conceptos a la vez sin la necesidad de estar chocando con los cambios

> La rama principal **master/main** se debe utilizar lo menos posible, debe destinarse a las versiones finales o concretas para producción

- Saber en que rama estoy

    ```bash
    git branch
    ```

- Cambiar el nombre de la rama:

    Se cambia la rama master por el nombre de main

    ```bash
    git branch -m master main
    ```
    Cambiar globalmente el nombre de la rama principal en nuevos repositorios: 

    ```bash
    git config --global init.defaultBranch main
    ```