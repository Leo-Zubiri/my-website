# Evitar Guardar registros iguales

En el caso del modelo Post se tiene la siguiente funcion: 

```php
    public function checkLike(User $user){
        return $this->likes->contains('user_id',$user->id);
    }

```