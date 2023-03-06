# Buscador

```php artisan make:livewire FiltrarVacantes```

`Componente hijo`

```php
class FiltrarVacantes extends Component
{
    public $termino;
    public $categoria;
    public $salario;

    public function leerDatosFormulario(){
        $this->emit('terminosBusqueda',$this->termino,$this->categoria,$this->salario);
    }
}
```

```componente padre```

```php
class HomeVacantes extends Component
{
    public $termino;
    public $categoria;
    public $salario;

    protected $listeners = [
        'terminosBusqueda' => 'buscar'
    ];

    public function buscar($termino,$categoria,$salario){
        $this->termino = $termino;
        $this->categoria = $categoria;
        $this->salario = $salario;
    }
}
```