> Funcionalidades útiles para aplicar en distintos casos

## Encriptar passwords

```php
//use Illuminate\Support\Facades\Hash;
User::create([
    ...
    'password' => Hash::make( $request->password )
]);
```

---

## Redireccionar sitio web

```return redirect()->route('posts.index');```

---

## [**HELPERS LARAVAEL**](https://laravel.com/docs/9.x/helpers)

### LowerCase 

```php
use Illuminate\Support\Str;
'username' => Str::lower($request->username),
```

### Slug
```php
use Illuminate\Support\Str;
// Da formato para poder utilizarlo como url: usuario-prueba
'username' => Str::slug($request->username),
```

---

## Autenticazion de usuarios

```php
//Intenta autenticar
auth()->attempt([
    'email' => $request->email,
    'password' => $request->password
]);

...

//Alternativa
auth()->attempt($request->only('email','password'));

//Visualizar esa autenticacion
dd(auth()->user());
```

## Proteger rutas con autenticación

```php
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {
        return view('dashboard');
    } 
```