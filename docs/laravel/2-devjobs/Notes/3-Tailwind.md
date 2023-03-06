# Tailwind CSS

Al instalar breeze automaticamente se configura el uso de tailwind en el proyecto pero con una fuente colocada por breeze. 
Para cambiar la fuente se hace desde tailwind.config.js y quitar el apartado del tema para que quede la que tiene por defecto:

```js
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
```