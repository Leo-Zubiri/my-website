# Laratest

Se utiliza el entorno de **Laragon**. Proyecto para implementar funcionalidades de laravel que son de utilidad para proyectos futuros.

## Creacion del Proyecto

Desde la terminal de laragon:

```bash
laravel new laratest
```

Configuration:

- Starter kit: breeze
- Testing framework: 1. PHPUnit
- Initialize a git repo: yes
- Database: MySQL
- Run default migrations: yes

## Ejecucion del proyecto

Desde la terminal de laragon

```bash
cd laratest
php artisan serve
```

En caso de que no se hayan realizado las migraciones a la base de datos:

```bash
php artisan serve
```