# Visual Studio Code

Se puede utilizar VSCode como un editor de codigo para programar con C#

La plataforma .NET se usa para desarrollar y ejecutar aplicaciones en Windows, macOS y Linux. La plataforma .NET proporciona un entorno de runtime para ejecutar aplicaciones. También puede ver que se denomina Common Language Runtime o CLR al entorno de ejecución de .NET. El runtime de .NET no es necesario para escribir el código de C#, pero es necesario para ejecutar las aplicaciones de C#.

**Visual Studio Code usa el SDK de .NET y las extensiones de C# para proporcionar un entorno de desarrollo para escribir, ejecutar y depurar aplicaciones de C#.**

## Extensiones

Se agregan las siguientes dos extensiones oficiales de microsoft para vscode:

- C# Dev :
  Tenga en cuenta que la instalación del Kit de desarrollo de C# instala las siguientes extensiones:
  - Herramienta de instalación de .NET. Esta extensión instala y administra diferentes versiones del SDK y el entorno de ejecución de .NET.
  - C#: compatibilidad con idioma base para C#.
  - Kit de desarrollo de C#: extensión oficial de C# de Microsoft.
- Intellicode for C# Dev Kit: La extensión final que necesita se denomina IntelliCode for C# Dev Kit. Esta extensión proporciona desarrollo asistido por IA para C# Dev Kit.

## SDK de .NET

La extensión del Kit de desarrollo de C# para Visual Studio Code te ayuda a instalar el Kit de desarrollo de software (SDK) de .NET. El SDK de .NET es necesario para ejecutar y depurar aplicaciones de C#.

Para comprobar la instalacion del SDK, desde vscode en una terminal:

```bash
dotnet --version
```

Si no se encuentra instalado:

1. Desde vscode ir a **View > Command Palette** escribir la opcion de **.NET: Install New .NET SDK**
2. Esperar a que el proceso termine y ejecutar nuevamente `dotnet --version`


## Aplicacion de Consola

El kit de desarrollo de software (SDK) de .NET incluye una interfaz de línea de comandos (CLI) a la que se puede acceder desde el terminal integrado de Visual Studio Code. 

**Crear una nueva aplicacion de consola**

```bash
dotnet new console -o ./Myfolder/TestProject
```

**Compilar el codigo fuente:**

Desde la terminal en la ruta del proyecto

```bash
dotnet build
```

**Ejecutar**

```bash
dotnet run
```