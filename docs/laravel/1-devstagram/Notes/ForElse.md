# Directiva forelse

Intenta iterar sobre un objeto pero si no tiene contenido entra en el else, un caso de ejemplo es para evitar if():

```php
    @if($posts->count())
        @foreach ($posts as $post)
            <h1> {{ $post->titulo }} </h1>
        @endforeach
    @else
        <p>No hay posts</p>
    @endif
```

En su lugar:

```php
    @forelse ($posts as $post)
        <h1> {{ $post->titulo }} </h1>
    @empty
        <p>No hay posts</p>
    @endforelse
```