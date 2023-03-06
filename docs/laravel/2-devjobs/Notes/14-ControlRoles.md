# Control por roles

Utilizando el controlador y las policies de vacante.

Un desarrollador no puede crear vacantes, entonces para bloquear el acceso a lo relacionado con el modelo:

## Para que no pueda ver vacantes creadas por el mismo usuario

`Desde el Policy en viewAny:`

```php
    public function viewAny(User $user)
    {
        return $user->rol === 2; //Reclutador
    }
```

`Desde el index del controlador`

```php
    public function index()
    {
        $this->authorize('viewAny',Vacante::class);
        return view('vacantes.index');
    }
```

## Para que no pueda crear vacantes

`Desde el policy`

```php
    public function create(User $user)
    {
        return $user->rol === 2; // Reclutador
    }
```

`Desde el controlador`

```php
    public function create()
    {
        $this->authorize('create',Vacante::class);
        return view('vacantes.create');
    }
```