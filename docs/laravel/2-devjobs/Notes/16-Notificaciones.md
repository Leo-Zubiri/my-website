# Notificaciones

```php artisan make:notification Notification```

Se crea en la ruta: `app/Notifications/Notification.php`

## Guardar Notificaciones en la base de datos

En el archivo de notificacion generado se debe agregar:

```php

    // Almacena las notificaciones en la base de datos
    public function toDatabase($notifiable){

    }
```

```php
    public function via($notifiable)
    {
        return ['mail','database'];
    }
```

y crear una tabla para almacenar:

```php artisan notifications:table```

## Crear y enviar notificacion

Desde el constructor de la notificacion se establecen los parametros necesarios para la notificación, se configura el metodo de database y el de mail:

```php

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($id_vacante,$nombre_vacante,$usuario_id)
    {
        $this->id_vacante = $id_vacante;
        $this->nombre_vacante = $nombre_vacante;
        $this->usuario_id = $usuario_id;
    }

        // Almacena las notificaciones en la base de datos
    public function toDatabase($notifiable){
        return [ 
            'id_vacante' => $this->id_vacante,
            'nombre_vacante' => $this->nombre_vacante,
            'usuario_id' => $this->usuario_id
        ];
    }

    public function toMail($notifiable)
    {
        $url = url('/candidatos/'.$this->id_vacante);
        return (new MailMessage)
                    ->line('Has recibido un nuevo candidato en tu vacante')
                    ->line('Vacante: '.$this->nombre_vacante)
                    ->action('Ver notificaciones', $url)
                    ->line('Gracias!');
    }

```

`Para instanciar la creación de la notificación:`

```php
// Crear notificación y enviar email
$this->vacante->reclutador->notify(new NuevoCandidato($this->vacante->id,$this->vacante->titulo,auth()->user()->id));

```

## Obtener Notificaciones

```php
    $notificaciones = auth()->user()->unreadNotifications;

    // Limpiar notificaciones
    auth()->user()->unreadNotifications->markAsRead();

    return view('notificaciones.index',[
        'notificaciones' => $notificaciones,
    ]);
```