# **Tailwindcss**

> Las versiones mas actuales de laravel utilizan **Vite**, por lo que en el proyecto existe un archivo **vite.config.js**

## **Instalación**

1. Detener el servidor del proyecto
2. Desde la ruta raiz del proyecto ejecutar en una terminal:
    ```npm install -D tailwindcss postcss autoprefixer```
3. Posteriormente para inicializar: ```npx tailwindcss init -p```
   > Lo anterior crea el archivo de configuracion **tailwind.config.js**
4. Dentro de las configuraciones se agregan los archivos donde tailwind compilará:
   ```js
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ]
   ```
5. Dentro de la raiz en **resources/css** se guarda el archivo **app.css** con:
   ```js
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
   ```
6. A través de una terminal se ejecuta ```npm run dev```
7. Desde el layout se apunta al archivo **app.css**
   ```php
       <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Devstagram - @yield('titulo')</title>
        @vite('resources/css/app.css')
        </head>
   ```

   > Para cargar correctamente el proyecto se debe mantener en ejecución **php artisan serve** y **npm run dev**