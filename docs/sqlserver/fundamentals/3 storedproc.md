# STORED PROCEDURES

```sql
GO
CREATE PROCEDURE nombreProc(
    @param1 varchar(50),
    @param2 varchar(11),
)
AS
    INSERT INTO nombreTabla(
        columna1,
        columna2
    )
    VALUES (@param1,@param2);
GO
```

```sql
EXEC nombreProc "valor1","valor2";
```