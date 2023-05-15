# Ejercicios

## Biblioteca

1.-Se trata de gestionar los préstamos de libros de una biblioteca en la que se va a estudiar exclusivamente el funcionamiento de las peticiones y devoluciones de libros.

PETICIÓN DE LIBROS

Un usuario puede realizar una petición de uno o más libros a la biblioteca. Para ello, es necesario presentar el carné de usuario de la biblioteca y una ficha en la que se detallan los libros pedidos. Puede haber varios tipos de préstamo (préstamo de sala, colaborador, proyecto fin carrera, doctorado) en función de los cuales el usuario puede disponer de los ejemplares durante un período de tiempo específico, como se indica en la siguiente tabla: 

    SALA 					El día de la petición.
    COLABORADOR 			Una semana.
    PROYECTO FIN CARRERA 	Quince días.
    DOCTORADO 			    Un mes.

Una vez entregados el carné y la ficha, el sistema comprobará y aceptará la petición de los libros solicitados siempre que pueda satisfacer la petición, es decir, cuando existan ejemplares disponibles. Si se acepta la peticións, se actualiza el número de unidades de los libros de la biblioteca y se guarda la ficha de préstamo.


DEVOLUCIONES DE LIBROS

Un usuario no puede realizar más peticiones hasta que no haya efectuado todas las devoluciones de la petición anterior. El usuario, para hacer la petición, necesita el carné, que no se le entrega hasta que no haya devuelto todos los libros. Sí puede hacer una devolución parcial de los libros. Cuando un usuario realice una devolución, el sistema actualizará el stock de libros y comprobará la fecha de devolución de cada ejemplar para estudiar, en el caso de que la devolución se haga fuera de tiempo, la imposición de una sanción que tiene un coste de 200 pts por cada ejemplar y días de retraso en la devolución. En este caso, la sanción se emite cuando el usuario entrega el último ejemplar.

El bibliotecario se encarga de las altas y bajas de los libros de la biblioteca.

```sql
USE [bibliotecaDB]

CREATE TABLE Usuario(
id_usuario INT PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(40) NOT NULL,
apellidos VARCHAR(40) NOT NULL,
telefono int
)

CREATE TABLE Peticion(
id_peticion INT PRIMARY KEY IDENTITY(1,1),
id_us INT,
tipoPresta TINYINT,
libros INT
)

CREATE TABLE Libro(
ISBN INT PRIMARY KEY IDENTITY(1,1),
titulo VARCHAR(40) NOT NULL,
autor VARCHAR(40) NOT NULL,
editorial VARCHAR(40) NOT NULL,
stock INT
)

CREATE TABLE TipoPrest(
id INT PRIMARY KEY IDENTITY(1,1),
tipo VARCHAR(40) NOT NULL,
periodo VARCHAR(40) NOT NULL,
)
```

## Componentes

2- Una tienda especializada en componentes electrónicos compra sus existencias a una serie de proveedores, vendiéndolas posteriormente a sus clientes a la vez que lleva a cabo el control de almacén adecuado para controlar sus existencias en todo momento.

La gestión de proveedores lleva unida la gestión de los datos administrativos de éstos más la información de los componentes que cada proveedor sirve. La gestión de proveedores, además del típico mantenimiento de los datos relacionados, se encarga de generar los listados de las piezas servidas por un determinado proveedor, o los proveedores que sirven una determinada pieza.

Cuando un cliente solicita un determinado componente, se comprueba que hay existencias y se le informa de su precio. Si el cliente adquiere el producto, se actualizará el almacén y se le emitirá una factura. Si no hay existencias del componente, pero el cliente está interesado se procederá a almacenar la petición con objeto de realizar el correspondiente pedido al proveedor.

El control de almacén se encarga de tener actualizado el almacén de existencias, dando de alta los componentes que llegan, eliminando componentes defectuosos, y realizando los listados de componentes disponibles en el almacén y de los componentes pendientes de ser pedidos a un proveedor.

```sql
USE [componentesDB]

CREATE TABLE Cliente(
id_cliente INT PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(40) NOT NULL,
apellidos VARCHAR(40) NOT NULL,
telefono int
)

CREATE TABLE Peticion(
id INT PRIMARY KEY IDENTITY(1,1),
cliente INT NOT NULL,
pieza INT NOT NULL
)

CREATE TABLE Pieza(
id_pieza INT PRIMARY KEY IDENTITY(1,1),
peticion INT,
proveedor INT NOT NULL,
nombre VARCHAR(40) NOT NULL,
descripcion VARCHAR(40) NOT NULL,
precio MONEY NOT NULL,
stock INT NOT NULL
)

CREATE TABLE Proveedor(
id_pro INT PRIMARY KEY IDENTITY(1,1),
pieza INT NOT NULL,
nombre VARCHAR(40) NOT NULL,
direccion VARCHAR(40) NOT NULL,
telefono int
)

```

## Empresa Alquiler CD ROMS

3- Sea una empresa dedicada al alquiler de CD-ROMs de audio. Dicha empresa tiene un local de atención al público donde están expuestas las carátulas de los CDs más demandados y las últimas novedades, aunque también existen listados en papel de todos los títulos que se podrían alquilar. Cuando un cliente solicita en alquiler un título, se comprueba si hay ejemplares disponibles y si el cliente no tiene problemas por ejemplares no devueltos, quedando constancia de la fecha de alquiler y la fecha máxima de entrega; de forma que cuando el cliente devuelva el ejemplar se podrá comprobar si se le tiene que imponer una sanción. Cada cliente puede solicitar una relación de los CDs que ha alquilado previamente.

Cada ejemplar de cada título debe quedar plenamente identificado (incluyendo la información necesaria para su rápida localización física).

```sql
USE [alquilerDB]

CREATE TABLE Cliente(
id_cliente INT PRIMARY KEY IDENTITY(1,1),
alq_pendiente INT,
RFC VARCHAR(200),
nombre VARCHAR(200),
apellidos VARCHAR(40),
telefono int
)

CREATE TABLE Alquiler(
id INT PRIMARY KEY IDENTITY(1,1),
cliente INT,
disco INT,
fecha_alq DATETIME,
fecha_ent DATETIME
)

CREATE TABLE CD(
id INT PRIMARY KEY IDENTITY(1,1),
titulo VARCHAR(40) NOT NULL,
autor VARCHAR(40) NOT NULL,
stock SMALLINT
)

```

## Clientes, facturas, pedidos, artículos

Realizar el E/R correspondiente al siguiente supuesto: Se tienen CLIENTES de los que se guarda un número de cliente, nombre, apellidos, lista de teléfonos, fax y correo electrónico. Los clientes realizan PEDIDOS. (Un pedido no puede ser realizado por dos clientes simultáneamente). Cada pedido tiene un número de pedido, una fecha asociada y una persona de contacto. Cada pedido aglutina varias LÍNEAS DE DETALLE, cada una con una cantidad y una referencia a un artículo. Los ARTÍCULOS tienen un descriptor, un identificador de familia y un identificador de modelo. Varias líneas de detalle correspondientes a uno o varios pedidos (bien en su totalidad, bien en parte) constituyen un ALBARÁN. Los albaranes contienen una fecha de entrega, una dirección de entrega y el nombre y apellido del receptor. Varias líneas de detalle correspondientes a uno o varios albaranes (bien en su totalidad, bien en parte) constituyen una FACTURA, la cual contiene un número de factura, una fecha de cobro y un modo de pago.

```sql
USE [ejercicioDB]

CREATE TABLE Cliente(
id_cliente INT PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(40) NOT NULL,
apellidos VARCHAR(40) NOT NULL,
telefono int,
fax VARCHAR(40),
correo VARCHAR(60)
)

CREATE TABLE Pedido(
id INT PRIMARY KEY IDENTITY(1,1),
cliente INT,
albaran INT
)

CREATE TABLE Albaran(
id INT PRIMARY KEY IDENTITY(1,1),
pedido INT,
cliente INT,
detalle INT,
factura INT,
fecha_ent DATETIME,
direccion VARCHAR(100)
)

CREATE TABLE Factura(
id INT PRIMARY KEY IDENTITY(1,1),
pedido INT,
cliente INT,
albaran INT
)

CREATE TABLE Detalle(
id INT PRIMARY KEY IDENTITY(1,1),
articulo INT,
pedido INT,
albaran INT,
cantidad SMALLINT
)

CREATE TABLE Articulo(
id INT PRIMARY KEY IDENTITY(1,1),
modelo VARCHAR(100),
descripcion VARCHAR(100),
familia VARCHAR(30)
)

```

## Centro de instalaciones deportivas

Construir el E/R correspondiente al siguiente enunciado: Un centro de instalaciones deportivas quiere hacer una aplicación de reservas. En el centro existen instalaciones deportivas (piscinas, gimnasios, frontones, etc.). El centro en cuestión tiene socios, de los cuales se almacenan su dirección, ciudad, provincia, teléfono, nombre y estado. Existen una serie de artículos que se pueden alquilar junto con las reservas (balones, redes, raquetas, etc.). Cada instalación es reservada por un socio en una fecha dada desde una hora de inicio hasta una hora de fin siempre y cuando este al día en sus cuotas. Cada reserva puede tener asociada uno o varios artículos deportivos que se alquilan a parte. Por ejemplo si yo quiero hacer una reserva para jugar a voleibol tengo que reservar una instalación polideportivo más un artículo red, más un artículo balón.
Realiza el modelo lógico relacional subyacente a este enunciado.


```sql
USE [Prueba]

CREATE TABLE Instalacion(
id INT PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(50)
)


CREATE TABLE Reservacion(
id INT PRIMARY KEY IDENTITY(1,1),
socio INT,
articulo INT,
inicio DATETIME,
final DATETIME
)

CREATE TABLE Socio(
id INT PRIMARY KEY IDENTITY(1,1),
nombre VARCHAR(40) NOT NULL,
apellidos VARCHAR(40) NOT NULL,
calle VARCHAR(40) NOT NULL,
ciudad VARCHAR(40) NOT NULL,
estado VARCHAR(40) NOT NULL,
telefono int,
)

CREATE TABLE Articulo(
id INT PRIMARY KEY IDENTITY(1,1),
instalacion INT,
nombre VARCHAR(100),
stock TINYINT
)

```