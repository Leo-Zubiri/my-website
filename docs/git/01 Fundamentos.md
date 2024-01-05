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

- `Ver los datos del usuario configurado`

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