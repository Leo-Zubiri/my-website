# Tailwind CSS

## CREAR UN NUEVO PROYECTO REACT

### CRA - Create React App

```
npx create-react-app app-name
```
```
npm start
```

### Vite

```
npm create vite
```
```
npm install
```
```
npm run dev
```

---

## INSTALAR TAILWINDCSS

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Para crear el archivo de configuracion de tailwind:
```
npx tailwindcss init -p
```

## APLICAR ESTILOS TAILWINDCSS

Buscar el archivo css principal, borrar su contenido y colocar el siguiente:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind resetea todos los estilos por defecto que tienen los elementos HTML, de esa manera se identifica que tailwind está reconocido.

### PURGE

Taildwind genera un built ligero al purgar todos los estilos que no se estan ocupando. En la version 3 se coloca en el atributo **content:[]**

**En el archivo tailwind.config.js**
```Javascript
module.exports = {
  content: [ './index.html','./src/**/*.{vue,jsx,ts,js}',],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Responsive en tailwind

```css 
/* sm */
@media (min-width: 640px) { /* ... */ }
/* md */
@media (min-width: 768px) { /* ... */ }
/* lg */
@media (min-width: 1024px) { /* ... */ }
/* xl */
@media (min-width: 1280px) { /* ... */ }
```