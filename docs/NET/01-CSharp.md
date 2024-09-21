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