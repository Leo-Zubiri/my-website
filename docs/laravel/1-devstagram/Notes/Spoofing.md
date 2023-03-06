# Method Spoofing

El navegador nativamente solo soporta GET y POST, y con un metodo spoofing se agrega otro tipo de peticiones como PUT,PATCH y DELETE

```php
<form action="{{ route('posts.destroy',$post) }}" method="POST">
    @method('DELETE')
    @csrf
    <input 
        type="submit" 
        value="Eliminar Publicaion"
        class="bg-red-500 hover:bg-red-600 p-2 rounded text-white font-bold mt-4 cursor-pointer"
    />
</form>
```