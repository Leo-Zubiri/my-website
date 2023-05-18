# Cláusulas SQL

## TOP 

Seleccionar N primeros registros de una tabla:

```sql
SELECT TOP 3 * FROM nombreTabla
```

Seleccionar N primeros productos con mayor precio:

```sql
SELECT TOP 4 * FROM Producto
ORDER BY precio DESC
```

> Retorna los 4 primeros productos con mayor precio


## MIN y MAX

Seleccionar el precio mas alto de los productos

```sql
SELECT MAX(precio) AS MaxPrecio FROM Producto
```

Seleccionar el precio mas bajo de los productos

```sql
SELECT MIN(precio) AS MinPrecio FROM Producto
```

## Having

Filtro por grupo de registros.

Lo siguiente *da error:* 

```sql
SELECT idCliente, nombreCliente,SUM(total) FROM Venta
WHERE SUM(total) > 100
GROUP BY idCliente
```

> Al agrupar para colocar condiciones se utiliza having

```sql
SELECT idCliente, nombreCliente,SUM(total) FROM Venta
GROUP BY idCliente
HAVING SUM(total) > 100
```
