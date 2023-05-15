# Practica de Procedimientos almacenados

```sql
/* Examen Practico 1 - Zubiri Valdez Hedson Leonardo */

/*Generar la base de datos  Examen1*/
CREATE DATABASE Examen1
use Examen1

/*Generar la tabla de MetodoPago con la estructura que se muestra */
CREATE TABLE MetodoPago(
Clave INT PRIMARY KEY NOT NULL,
Descripcion VARCHAR(50) NOT NULL,
Activo BIT NOT NULL
)

/*Ingrese la informacion en la tabla*/
INSERT INTO MetodoPago (
	Clave,Descripcion,Activo
)
VALUES 
	(01, 'Efectivo', 1),
	(02, 'Cheque nominativo', 1),
	(03, 'Transferencia electr�nica de fondos', 1),
	(04, 'Tarjeta de cr�dito', 1),
	(05, 'Monedero electr�nico', 1),
	(06, 'Dinero electr�nico', 1),
	(08, 'Vales de despensa', 1),
	(12, 'Daci�n en pago', 1),
	(13, 'Pago por subrog aci�n', 1),
	(14, 'Pago por consignaci�n', 1),
	(15, 'Condonaci�n', 1),
	(17, 'Compensaci�n', 1),
	(23, 'Novaci�n', 1),
	(24, 'Confusi�n', 1),
	(25, 'Remisi�n de deuda', 1),
	(26, 'Prescripci�n o caducidad', 1),
	(27, 'A satisfacci�n del acreedor', 1),
	(28, 'Tarjeta de d�bito', 1),
	(29, 'Tarjeta de servicio', 1),
	(98, 'NA', 0),
	( 99, 'Por definir', 1);

/*Visualizar que los datos esten insertados*/
SELECT * FROM MetodoPago

/*Agregue el campo de Estilo tipo varchar de 50 caracteres*/
ALTER TABLE MetodoPago ADD Estilo VARCHAR(50) Null;


/*
	Realice el procedimiento almacenado que permita modificar el campo Estilo dependiendo del contenido a buscar ejemplo:
		Modifique todos los que tienen la palabra pago y poner en el campo Estilo= �Pago�
*/
GO
CREATE PROCEDURE ModificarEstiloPorDesc (
	@PalabraBusqueda VARCHAR(50),
	@ModificacionEstilo VARCHAR(50)
)
AS 
	UPDATE [MetodoPago]
	SET Estilo = @ModificacionEstilo
	WHERE Descripcion LIKE '%'+@PalabraBusqueda+'%'

GO
EXECUTE ModificarEstiloPorDesc 'pago' , 'Pago'


/*Realice el procedimiento almacenado que nos permita ingresar un nuevo elemento para la tabla M�todoPago*/
GO
CREATE PROCEDURE AgregarElemento(
	@CLAVE INT, @Desc VARCHAR(50),@Activo BIT,@Estilo VARCHAR(50)
)
AS 
	INSERT INTO MetodoPago (Clave,Descripcion,Activo,Estilo)
	VALUES
		(@CLAVE,@Desc,@Activo,@Estilo)


GO
EXECUTE AgregarElemento 100,'Pago',0,Null


/*Realice el procedimiento almacenado que nos permita eliminar un registro de la tabla MetodoPago indicando la clave a eliminar.*/
GO
CREATE PROCEDURE EliminaPorClave(@Clave INT)
AS
	DELETE FROM MetodoPago
	WHERE Clave = @Clave

GO
Execute EliminaPorClave 100;


/*Realice el procedimiento almacenado que nos devuelva el contenido de la tabla MEtodoPAgo seg�n el filtro deseado de la descripci�n. Ejemplo que devuelva todos los que contengan la palabra Tarjeta.*/
GO
CREATE PROCEDURE FiltroResultsPorDesc(
	@PalabraBusqueda VARCHAR(50)
)
AS
	SELECT * FROM MetodoPago
	WHERE Descripcion LIKE '%'+@PalabraBusqueda+'%'


GO
Execute FiltroResultsPorDesc 'Tarjeta'
```