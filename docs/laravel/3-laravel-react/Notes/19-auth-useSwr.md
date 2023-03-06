# Auth y useSWR

Cuando se obtiene el token de laravel en el front se puede utilizar useSWR para revalidar los datos.

    Hay ventajas de implementar SWR, si el token expira se cerrará la sesión, se identificará que usuario inicia sesión.

## useAuth

Se integra SWR al hook personalizado de useAuth

```jsx
import useSWR from 'swr';

import clienteAxios from "../config/axios"

export const useAuth = ({middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')

    const {data: user,error,mutate} = useSWR('/api/user', ()=>
        clienteAxios('/api/user',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (datos,setErrores) => { 
        try {
            const response = await clienteAxios.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',response.data.token);
            setErrores([])
            await mutate() //Forzar revalidacion useSWR

            ...
        
    useEffect(() => { 
        if(middleware === 'guest' && url && user){
            navigate(url)
        }
    },[user,error]
```

## Proteger ruta

Se agrega al useEffect de useAuth:

```jsx

    useEffect(() => { 
        if(middleware === 'guest' && url && user){
            navigate(url)
        }

        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    },[user,error])

```
Desde el layout que se ocupa para las rutas con autenticacion requerida:

```jsx
export default function Layout() {
  
  const {modal,handleClickModal} = useAppContext();
  
  const {user,error} = useAuth({
    middleware: 'auth'
  })

```

## Remover token

Desde useAuth:

```jsx

    const logout =  async () => { 
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }
```

Desde el componente que lo importa:

```jsx
    const { logout } = useAuth({
        middleware: 'auth'
    })
```

Desde laravel

```php
    public function logout(Request $request){
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
```