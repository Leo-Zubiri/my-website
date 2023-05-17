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