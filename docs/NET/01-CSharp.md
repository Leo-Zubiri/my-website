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