# 2. Prepare

---

# Preparar los datos para la exploracion

## How Data is Collected

- Interviews
- Observations
- Forms
- Questionnaries
- Surveys
- Cookies


---

# Data type

## Cuantitativos

### Discrete Data

Data que se cuenta y tiene una cantidad de valores limitada

### Continuos Data

Pueden medirse y tener casi cualquier valor numerico


## Cualitativos

### Nominal Data

Datos cualitativos que se categorizan sin ningun orden establecido

### Ordinal Data

Datos cualitativos con un orden o escala preestablecidos

# Other terms

## Internal Data

Datos que viven dentro de los propios sistemas de una empresa

## External Data

Datos generados fuera de una organizacion

## Structured Data

Datos organizados en un formato determinado

## Unstructued Data

Datos no organizados de alguna forma facilmente identificable

## Data Model

Un modelo es utilizado para organizar los elementos de datos y la forma en que se relacionan entre ellos.
Contribuyen a mantener la coherencia de los datos y brindar un mapa de como se organizan los datos.

## Data elements

Piezas de informacion, como nombres de personas, numeros de cuenta y direcciones.

---

## Unstructured examples

- Audio files
- Video files
- Emails
- Photos
- Social media

## Structured examples

- spreadsheets
- databases

--- 

# Modelado de datos

Proceso de creación de diagramas que representan visualmente cómo se organizan y estructuran los datos. Estas representaciones visuales se llaman modelos de datos

## Tipos mas comunes de modelado de datos

1. Conceptual. La forma en que los datos interactúan en una organización. Un modelo de datos conceptual no contiene detalles técnicos. 
   
2. Lógico. Se centra en los detalles técnicos de una base de datos, como las relaciones, los atributos y las entidades.  Pero no detalla los nombres reales de las tablas de la base de datos. Ese es el trabajo de un modelo de datos físico.
   
3. Físico. Describe el funcionamiento de una base de datos. Un modelo de datos físico define todas las entidades y atributos utilizados; por ejemplo, incluye los nombres de las tablas, los nombres de las columnas y los tipos de datos de la base de datos.
   
## Técnicas de modelado de datos

- Diagrama de Relacion de entidades (ERD)
- Diagrama de Lenguaje Unificado de Modelado (UML)

---

# Wide Data

Los datos con formato ancho cada sujeto tiene una fila con múltiples columnas respecto al sujeto.

# Long Data

Cada sujeto tiene multiples filas la cual cada uno representa datos de un tiempo para el sujeto, lo componen columnas pero son varios registros

---

# Data Bias (Sesgo)

Tipo de error que sistemáticamente orienta a los resultados a una determinada dirección.

Bias/Unbiased

- Sampling bias
- Observation bias
- Interpretation bias
- Confirmation bias

Good data ROCCC:
R eliable
O riginal
C omprehensive
C urrent
C ited

---

# Data ethics

1. Ownership
2. Transcaction transparency
3. Consent
4. Currency
5. Privacy
6. Openess / Opened data

# Meta data

Data about data

3 common types:

- Descriptive
- Structural
- Administrative

Usando de ejemplo un libro:

Descriptivo: ISBN, editorial, titulo, autor

Estructural: Indice, paginas

Administrativo: Fuente tecnica de un recurso digital. Cuando se descargó el archivo, tamaño, tipo, etc.

---

## Best practices organizing data

- Naming conventions. - Guidlines that describe content, date, or version of file.
- Organize files into folders
- Archiving older files
- Align naming and storage practices with your team

### Repasa las siguientes convenciones para la nomenclatura de archivos:

    Decide las convenciones de nomenclatura de archivos al inicio de un proyecto a fin de evitar tener que cambiar el nombre de los archivos una y otra vez.

    Alinea tus convenciones de nomenclatura de archivos con las que tu equipo o empresa ya aplican.

    Asegúrate de que los nombres de los archivos sean significativos; ten en cuenta incluir información como el nombre del proyecto y cualquier otra cosa que te ayude a identificar (y a usar) rápidamente el archivo para el propósito adecuado.

    Incluye la fecha y el número de versión en los nombres de los archivos; los formatos comunes son AAAAMMDD para las fechas y v## para las versiones (o revisiones).

    Crea un archivo de texto como archivo de muestra, con contenido que describa (desglose) la convención de nomenclatura de archivos y un nombre de archivo que se aplique.

    Evita los espacios y los caracteres especiales en los nombres de los archivos. En cambio, usa guiones, guiones bajos o letras mayúsculas. Los espacios y los caracteres especiales pueden producir errores en algunas aplicaciones.

### Prácticas recomendadas para mantener los archivos organizados

Recuerda estos consejos para mantener tu organización cuando trabajas con archivos:

    Crea carpetas y subcarpetas en una jerarquía lógica para que los archivos relacionados se almacenen juntos.

    Separa el trabajo en curso del ya completado para que sea más fácil encontrar los archivos de los proyectos actuales. Archiva los archivos más antiguos en otra carpeta o en una unidad de almacenamiento externo.

    Si no se hace una copia de seguridad automática de tus archivos, deberás hacer una manualmente con frecuencia para no perder el trabajo importante.

## Data Security

Protecting data from unauthorized access or corruption by adopting safety measures

    El cifrado usa un algoritmo único para alterar los datos y hacer que los usuarios y las aplicaciones que no conocen el algoritmo puedan usarlos. Este algoritmo se guarda como una “clave” que puede usarse para revertir el cifrado; por lo tanto, si tienes la clave, puedes usar los datos en su forma original.  

    La tokenización reemplaza los elementos de datos que quieres proteger con datos generados aleatoriamente que se denominan “token”. Los datos originales se almacenan en otra ubicación y se asignan en los tokens. Para acceder a los datos originales completos, el usuario o la aplicación debe tener permiso para usar los datos tokenizados y la asignación del token. Esto significa que, si se piratean los datos tokenizados, los datos originales siguen estando seguros en otra ubicación. 

> Como analista de datos junior, probablemente, no tendrás la responsabilidad de crear estos sistemas. Muchas empresas tienen equipos completos dedicados a la seguridad de datos o contratan empresas externas que se especializan en seguridad de datos para crear estos sistemas.