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