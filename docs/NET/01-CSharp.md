# C# Intro

Conceptos generales necesarios para complementar los conceptos basicos de c#

## Clases

- Las propiedades de la clase se recomienda escribirlas con mayuscula inicial. Ej: `public decimal Total;`
- Las propiedades privadas se recomienda escribirlas con guion bajo. Ej: `private decimal _myvar;`

```c#
class Sale{
    public decimal Total {get; set;}
    public Sale(){}
    public Sale(decimal Total){
        // this hace referencia a la variable de la clase
        this.Total = Total;
    }

    public string GetInfo(){
        return $"El total es {Total}";
    }
}
```

```c#
/*
Existe distinta sintaxis para poder crear un objeto:
*/
Sale sale = new Sale();
var sale2 = new Sale();
Sale sale3 = new();

var mySale = new Sale(19);
Console.WriteLine(mySale.GetInfo());
```

### Herencia

Practicamente permite que una clase pueda reutilizar el codigo existente de otra clase.

Ejemplo, creando una clase que herede de la clase `Sale` utilizada anteriormente

```c#
class SaleWithTax : Sale {
    // base manda el parametro al constructor de la clase padre (Sale)
    public SaleWithTax(decimal Total) : base(total){

    }
}

var saleWithTax = new SaleWithTax(10);
saleWithTax.GetInfo(); // Metodo heredado de la clase Sale
```

> **Protected**. Este modificador de acceso permite que las propiedades y metodos de la clase padre puedan usarse dentro de la case heredada pero sin que sean accesibles a traves del objeto. Es parecido a lo que haria el modificador `private` pero permitiendo que se pueda heredar.

### Sobreescritura / override

En ocasiones el comportamiento heredado no es lo que necesitamos por lo que podemos sobreescribir los metodos que heredamos en una clase. Se utiliza la palabra reservada `virtual` para indicar que es posible sobreescribir el metodo de la clase padre y desde la clase heredada se utiliza `override` para indicar el nuevo comportamiento

```c#
class Sale{
    public virtual string GetInfo (){return "Hello";}
}

class SaleWithTax : Sale{
    public override string GetInfo(){return "Hi!";}
}
```

## Interfaces

Un interfaz en es una colección de definiciones que una clase o una estructura puede implementar (como métodos, propiedades, eventos o indexadores).

A diferencia de las clases, los interfaces no contienen implementaciones de métodos, solo definen los miembros que deben ser implementados por las clases o estructuras que los implementan.

Las interfaces son un contrato que una clase puede firmar para indicar que implementará ciertas funcionalidades y propiedades. 

```c#
interface ISale{
    decimal Total {get; set;}
}

interface ISave{
    public void Save();
}

public class Sale : ISale,ISave{
    public decimal Total {get; set;}
    public void Save(){
        Console.WriteLine("Save");
    }
}

public class RandomClass : ISave{
    public void Save(){
        Console.WriteLine("Save method");
    }
}
```

Gracias a las interfaces se pueden realizar metodos o funciones que esperen un objeto que cumpla con la interfaz, independiente de que clase provenga.

```c#
var sale = new Sale();
var rClass = new RandomClass();
void Some(ISave save){
    // Do something
}

Some(sale);
Some(rClass);
```

## Generics

Con Generics se pueden crear clases o métodos que son independientes de su tipo contenido. En vez de escribir métodos o clases con la misma funcionalidad para diferentes tipos, se puede crear únicamente un método o una clase para ello.

Una clase genérica se define una única vez y se puede reutilizar con cualquier tipo. Un ejemplo básico es el de la clase List del espacio de nombres `System.Collections.Generic` que se puede instanciar como una lista de enteros, de cadenas o de clases:

```c#
var list = new List<int>();
list.Add(23);
 
var stringList = new List<string>();
stringList.Add("mi cadena");
 
var miClaseList = new List<MiClase>();
miClaseList.Add(new MiClase());
```

<br>

**Creando una clase generica**

Por convencion se utiliza como parametro de clase `<T>`. **T** indica un Tipo de dato, no se especifica alguno en particular

```c#
public class MyList<T>{
    private List<T> list;
    private int _limit;

    public MyList(int limit){
        _limit = limit;
        list = new List<T>();
    }

    public void Add(T element){
        if(_list.Count < _limit){
            _list.Add(element);
        }
    }
}

var numbers = new MyList<int>(2);
var names = new MyList<string>(1);

numbers.Add(34);
numbers.Add(28);
numbers.Add(50); // La clase MyList no agregara el tercer elemento por fijar el limite en 2 elementos en el constructor

names.Add("Aitana");
names.Add("Daniela"); // No se agregara a la lista MyList<string>(1);
names.Add("Leo"); // No se agregara a la lista MyList<string>(1);
```


## Serializacion y deserializacion (JSON)

Utilizando la siguiente clase Persona, se pueden convertir instancias de clase al formato json(serializar) y viceversa, convertir formato json a instancias de objeto

```c#
using System.Text.Json;

var p1 = new People(){
    Name = "Hedson",
    Age = 24
};

// Serializar un objeto a formato JSON
string json = JsonSerializer.Serialize(p1);
Console.WriteLine(json);

// Deserializar un formato Json a Objeto
string myJson = @" {""Name"":""Leonardo"",""Age"":25} ";
People people = JsonSerializer.Deserialize<People>(myJson);
Console.WriteLine(people?.Name);
Console.WriteLine(people?.Age);

public class People{
    public string Name {get; set;}
    public int Age {get; set;}
}

```

## Programacion Funcional

¿Qué es la programación funcional en C#?

La programación funcional es un paradigma de programación que se centra en el uso de funciones como bloques fundamentales para construir programas. 

En C#, aunque es un lenguaje orientado a objetos, también permite la programación funcional mediante el uso de funciones de orden superior, expresiones lambda y la inmutabilidad de los datos. 

Características clave de la programación funcional en C#:
- **Funciones de orden superior:** Estas son funciones que pueden recibir otras funciones como parámetros o devolver funciones como resultado. Esto permite crear código más modular y reutilizable.
- **Inmutabilidad:** En la programación funcional, se prefiere no modificar los datos una vez que han sido creados. Esto ayuda a evitar efectos secundarios y hace que el código sea más predecible y fácil de entender.
- **Expresiones lambda:** C# permite el uso de expresiones lambda, que son una forma concisa de definir funciones anónimas. Esto facilita la escritura de código funcional, especialmente al trabajar con colecciones y LINQ.
- **Composición de funciones:** Se pueden combinar varias funciones para crear nuevas funciones, lo que permite construir soluciones complejas a partir de componentes más simples.

<br>

### Funcion Pura

Una función pura es una función que siempre produce el mismo resultado cuando se llama con los mismos argumentos y que no tiene efectos secundarios, es decir, no modifica ni depende del estado externo.

Para que una función sea considerada como pura, debe cumplir con dos reglas fundamentales:

1. Dado el mismo conjunto de argumentos, la función siempre debe devolver el mismo resultado. Esto significa que la función no debe depender de ninguna variable o estado externo.
2. La función no debe tener efectos secundarios. Esto significa que la función no debe cambiar ningún estado externo o interactuar con otras partes del sistema. La función solo debe realizar operaciones en los datos de entrada y devolver un resultado.

Las funciones puras siempre devuelven el mismo resultado cuando reciben los mismos parámetros. En cambio, otras funciones que dependen de factores externos (como el tiempo o una petición HTTP) no siempre pueden devolver el mismo resultado aunque reciban los mismos parámetros, incluso, pueden no necesitar recibir parámetros para ejecutarse correctamente.

**Ejemplo funcion pura**

```js
const double = x => x*2
double(2) // siempre es 4
double(3) // siempre es 6

const isGreaterThan = (value, comparison) => value > comparison
isGreaterThan(5, 6) // siempre devuelve false
isGreaterThan(8, 6) // siempre devuelve true
```

**Ejemplo de funcion que no es pura**

```js
const time = () => new Data().toLocalTimeString()
time() // siempre devuelve un resultado diferente
```

<br>

### Funcion de primera clase

En C#, se dice que las funciones son de primera clase ("objetos de primera clase") cuando se pueden tratar como cualquier otro tipo de dato. Esto significa que puedes:

- **Asignar funciones a variables:** Puedes almacenar una función en una variable, lo que te permite pasarla y utilizarla más tarde.
- **Pasar funciones como argumentos:** Puedes enviar funciones como parámetros a otras funciones, lo que permite crear funciones más flexibles y reutilizables.
- **Devolver funciones desde otras funciones:** Puedes crear funciones que devuelvan otras funciones, lo que permite construir comportamientos dinámicos y complejos.

> Desde C# 3.0, se introdujeron tipos como `Func` y `Action`, que facilitan el uso de funciones de primera clase en el lenguaje. Esto permite a los desarrolladores aprovechar la programación funcional, haciendo que el código sea más modular y expresivo.

> Si el metodo no retorna nada se utiliza `Action` y si es una funcion que retorna valor se usa `Func`

```c#
// Guardar Funcion en una variable
var showVar = Show;
var showUpperVar = ShowUpper;
showVar("Hi!");

// Ejecutar un metodo enviando otro metodo como parametro
Some(showVar,"Hello there");

// Ejecutar una funcion enviando otra funcion como parametro
Console.WriteLine(Somefn(showUpperVar,"To upper!!!"));

void Show(string message){
    Console.WriteLine(message);
}

string ShowUpper(string message){
    return message.ToUpper();
}

// Se puede recibir un metodo como parametro, se utiliza el tipo Action en caso de que sea un metodo que no retorne nada, y se utiliza el generic <string> por que recibe ese valor para ejecutar el void
void Some(Action<string> fn, string message){
    Console.WriteLine("Proceso aqui");
    fn(message);
    Console.WriteLine("Proceso aqui");
}

// Se puede recibir una funcion como parametro, indicando lo que se recibe y retorna junto a la sentencia Func<recibe,retorna>
string Somefn(Func<string,string> fn, string message){
    Console.WriteLine("Proceso aqui");
    return fn(message);
    Console.WriteLine("Proceso aqui");
}
```

<br>


## Expresiones Lambda

> En algunos lenguajes pueden conocerse como funciones flecha, función literal o función anónima

Las expresiones lambda en C# son una forma concisa de definir funciones anónimas. Una manera sencilla de conceptualizarlas es pensar en ellas como una forma de escribir métodos en una sola línea. Por ejemplo, en lugar de definir un método completo, puedes usar una expresión lambda para realizar una operación simple, como sumar dos números o filtrar una lista

Las expresiones lambda son especialmente útiles en programación funcional y se utilizan comúnmente con métodos como Select, Where y otros que operan sobre colecciones. Esto permite escribir código más limpio y legible, facilitando la manipulación de datos en colecciones y la implementación de lógica de negocio de manera más directa.

```c#
// La siguiente funcion lambda recibe dos numeros enteros y regresa uno.
Func<int,int,int> sub = (int a,int b) => a-b;

// Se puede simplificar por que se indico los tipos de dato de las variables de entrada
Func<int,int,int> sub = (a,b) => a-b;

// Sin una funcion lambda se tendria que crear una funcion como la siguiente
int sub(int a, int b){
    return a-b;
}

// Existe la posibilidad de escribir mas lineas de codigo en una funcion lambda
Func<int,int> some = a => {
    a = a + 1;
    return a * 5;
};
```