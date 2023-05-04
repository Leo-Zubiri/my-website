# Programacion Orientada a Objetos

**Para ejecutar este [proyecto](https://github.com/Leo-Zubiri/PHP-POO):** ```php -S localhost:3000```

## Creación de clases

```php
class Persona{

}
```

## Instanciar clase

```php
$persona = new Persona;
```

## Saber el tipo de dato de una variable

```php
var_dump($persona)  //object(Persona)#1 (0) { } 
```

## Atributos y funciones de clase

```php
class Persona{
    public $nombre;
    public $apellido;
    public $departamento;
    public $email;
    public $codigo;
}

//Sintaxis flecha. Acceder a los atributos o funciones
$empleado -> nombre = "Leo";
$apellido -> apellido = "Zubiri";
```

## Constructores

```php
class Persona{
    public $nombre;
    public $apellido;

    public function __construct($nombre,$apellido)
    {
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
    }
}

$persona = new Persona("Hedson");
```

## Constructor property promotion

```php
class Persona {
    public function __construct(
        public $nombre,
        public $apellido
    ){}
}
```

## Tipado en PHP

Las variables pueden tomar distintos tipos de datos a menos que se especifique. PHP intenta realizar conversiones en caso de pasar un tipo de dato que no coincida.

```php
    public function __construct(string $nombre, string $apellido)
    {
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
    }
```

## Métodos en clases

```php
class Persona{
    public function nombrePersona(){
        echo "Imprimir el nombre"
    }

    public function EjecucionEnClase(){
        //Ejecutar dentro de la clase
        $this->nombrePersona();
    }

    public function RetornoValor(){
        return "Hola";
    }
}

//Ejecutar desde una instancia
$persona = new Persona;
$persona -> nombrePersona();

```

## Modificadores de Acceso

- **public**. Acceder a los valores desde la clase o la instancia y/o modificarlos.
- **private**. Cuando se hereda de una clase, este atributo no se hereda.
- **protected**. Acceso y modificación solamente en la clase. Getters y setters.

## Getters y Setters

```php
class Persona{

    // Get - Obtener un valor
    public function getNombre(){
        return $this->nombre;
    }

    // Set - Modificar un valor
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
}

#Llamada a los métodos
$persona->setNombre("Nuevo Nombre");
$persona->getNombre();
```
> Al usar getters y setters las variables de clase deberían cambiarse a protected para asegurar que la manipulación de las variables solo sea mediante los respectivos métoodos.

## Herencia

```php
class Persona{
    protected $nombre;
    protected $apellido;

    public function __construct($nombre,$apellido){
        $this->nombre = $nombre;
        $this->apellido = $apellido;
    }
}

class Empleado extends Persona{
    protected $empleado_id;

    public function __construct($nombre,$apellido,$empleado_id){
        // Se llama el constructor del padre
        parent::__construct($nombre,$apellido);
        $this->empleado_id = $empleado_id;
    }
}
```

## Clases Abstractas

> Crear clases base que no necesitemos instanciar en objetos. Utilizada heredando hacia otras clases.

```php
abstract class Persona(){

}
```

## Métodos Estáticos

> Son aquellos métodos que no requieren una instancia para acceder a ellos.

```php
class Persona(){

    public static function miMetodoEstatico(){
        echo "Desde método estático";
    }
}

// Para llamar el método

Persona::miMetodoEstatico();
```

> De igual manera se pueden crear atributos estáticos con la misma finalidad y uso.

```php
class Persona(){
    protected static $atributo;

    public function __construct($atributo){
        self::$atributo = $atributo;
    }

    public function getAtributo(){
        return self::$atributo;
    }
}

/*
Al crear un objeto Persona, el valor del atributo no se le asigna al objeto si no a la clase misma.
*/
```