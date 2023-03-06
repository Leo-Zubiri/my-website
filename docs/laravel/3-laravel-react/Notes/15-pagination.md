# Pagination

```php
    public function index()
    {
        return new ProductoCollection(Producto::
            where('disponible',1)->
            orderBy('id','DESC')->
            paginate(10)
        );
    }
```
