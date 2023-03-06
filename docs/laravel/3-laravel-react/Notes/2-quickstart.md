# Primeros Pasos

---

## Laravel

### Creación del Proyecto

```composer create-project laravel/laravel devjobs```

### Ejecutar el proyecto

```php artisan serve```

### Conexión a Base de Datos

Crear una nueva conexion a la base de datos e identificar el Host, puerto, usuario y contraseña

Despues se configura el archivo .env con los respectivos datos.

---

## React

### Creación del Proyecto

Vite permite configurar proyectos en distintas tecnologías, configurar para  React y JavaScript.

```npm create vite@latest```

Instalar modulos de node: 

```npm install```

### Ejecutar el proyecto

```npm run dev```

### Instalando Tailwind CSS

Desde una ternminal en la ruta del proyecto en React:

```npm install -D tailwindcss postcss autoprefixer```

```npx tailwindcss init -p```

Establecer las siguientes rutas en tailwind.config.cjs:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
```
Desde el index.css solo colar:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
> Desde App.jsx se borran las importaciones y el contenido del componente, al colocar HTML con clases de Tailwind debe aplicarlo

---

## Docsify

> Incluir documentación a este proyecto

[`A magical documentation site generator`](https://docsify.js.org/#/quickstart)

### SETUP

It is recommended to install `docsify-cli` globally, which helps initializing and previewing the website locally.

```bash
npm i docsify-cli -g
```

Then prepare a directory to store the documentation files:

```bash
docsify init ./docs
```

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```