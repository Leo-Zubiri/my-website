# Validacion $this->validate()

Permitir cambiar nombre de usuario mientras no sea usado por alguien, o permitir pasar con el que ya le pertenece al autenticado

Permitir tomar valores excepto... con el 'not_in'

```php
// Modificar el request
$request->request->add(['username'=>Str::slug($request->username)]);

$this->validate($request,[
    'username' => [
        'required','min:3','max:20',
        'unique:users,username,'.auth()->user()->id,
        'not_in:twitter,editar-perfil'
    ]
]);
```