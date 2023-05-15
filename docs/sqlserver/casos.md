# Sentencias y casos de uso

## Borrar Tabla

```sql
--- Borrar tabla
DROP TABLE usuario
```

## Modificar Formato de Atributo de Tabla

```sql
ALTER TABLE Cliente ALTER COLUMN nombre VARCHAR(200)
```

```sql
---Modificar estructura de una columna/campo
--- ALTER TABLE NombreTabla ALTER COLUMN NombreCampo TipoDato
ALTER TABLE Usuario ALTER COLUMN edad int
```

## Eliminar atributo/columna de una tabla

```sql
--- Eliminar campo/columna
ALTER TABLE Usuario DROP COLUMN edad
```

## Insertar datos desde otra Tabla o DB

```sql 
---INSERTAR INFO DESDE OTRA TABLA O BDD
use [databaseName]
INSERT INTO CLIENTE(RFC,nombre)
SELECT RFC,CONTRIBUYENTE FROM FACELECF.dbo.CLIENTES
```

## Buscar Palabras Clave en Columnas de texto

```sql
--- Mostrar Clientes morales, en su nombre terminacion es c.v
select * from Cliente where nombre like '%c.v.'
```

## Extraer día, mes y año de atributo Date

```sql
select 
	day(FECHA) As _day, 
	month(FECHA) As _month, 
	year(FECHA) As _year 
from FACTURAS
```

## Consulta en base a una fecha

```sql
---Facturas del mes de Junio
select * From FACTURAS where month(FECHA)=6
```

## Consulta en base a rango de fechas

```sql
--- Facturas entre 10 de Junio y 20 de Junio 2013
select * from FACTURAS where FECHA between '20130610' and '20130620'
```

## Consulta en base a varias fechas específicias

```sql
--- Facturas de JUNIO del 10, 15 y 17
select * from FACTURAS where month(FECHA) = 6 and (day(FECHA)=10 or day(FECHA)=15 or day(FECHA)=17
```

Alterativa

```sql 
--- Otra manera
select * from FACTURAS where month(FECHA) = 6 and day(FECHA) in (10,15,17)
```