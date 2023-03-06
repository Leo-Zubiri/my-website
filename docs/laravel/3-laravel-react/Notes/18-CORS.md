# CORS

El cross-origin resource sharing permite establecer que dominios se aceptan para peticiones.

## Configuración de AXIOS

```jsx
const clienteAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    },
    withCredentials: true
})
```
## Configurando Laravel

Desde el archivo `config/cors.php` establecer el siguiente valor en `true`:

```php
'supports_credentials' => false,
```