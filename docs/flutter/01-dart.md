# Dart

Dart es un lenguaje de programación moderno y versátil creado por Google. Se utiliza para construir aplicaciones rápidas y eficientes para la web, dispositivos móviles y escritorio.

Flutter: Dart es el lenguaje principal utilizado en Flutter, un popular framework de Google para crear interfaces de usuario atractivas y de alto rendimiento para aplicaciones móviles y web.

- Fácil de aprender: Su sintaxis es clara y sencilla, similar a otros lenguajes populares como Java o C++.
- Rendimiento: Dart es rápido. Permite que las aplicaciones funcionen de manera fluida y respondan rápidamente a las acciones del usuario.
- Flexibilidad: Puedes usar Dart para crear aplicaciones para diferentes plataformas:
    - Web: Aplicaciones que se ejecutan en el navegador.
    - Móvil: Aplicaciones para teléfonos y tablets (Android y iPhone).
    - Escritorio: Aplicaciones para computadoras (Windows, Mac y Linux).

## Variables

Existen varias formas de declarar variables, es importante conocerlas y saber elegir cuando utilizarlas por que esto define la velocidad dentro de las aplicaciones flutter.

> **Diferencia entre `const` y `final`**. Una vez que se declara e inicializa la variable el valor no se puede cambiar, la diferencia es que el valor en `const` es asignado en tiempo de construccion y el de `final` en tiempo de ejecucion

```dart
void main() {
  
  // Tipado no estricto
  var myName = 'Hedson';
  
  // Especificar que es tipo String
  String sname = 'Leonardo';
  
  // Una vez establecido el valor no se puede cambiar
  final fname = 'Zubiri';
  
  // Declarar variable final pero asignar valor posteriormente
  late final lfname;
  lfname = 'Valdez';
  
  // Constante
  const fullname = 'Leo Zubiri';
  
  print('Hola soy $myName $sname $fname $lfname');
  print(fullname);
}
```

### Tipos de variables

```dart
void main(){
  final String nombre = 'Leo';
  final int edad = 25;
  final bool isOpenToWork = true;
  bool? isBoolean = null; // Variable booleana que es nullable (acepta nulos)
  
  // Listado string distintas formas:
  final mobilestack = ['android studio','flutter'];
  final projects = <String>['PicNoteAPI','Laratomic Habits'];
  final List<String> stack2 = <String>['React','Node.js'];
  
  // print multi linea
  print("""
  $nombre
  $edad
  $isOpenToWork
  $isBoolean
  $mobilestack
  $projects
  $stack2
  """);
}
```