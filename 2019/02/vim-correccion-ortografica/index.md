# [Vim] Corrección Ortográfica


Poco a poco voy conociendo más cosas sobre Vim, y lo que antes me parecía un tarea ardua ahora lo hago con más rapidez. Cierto es que al principio cuesta y una cosa que echaba de menos era tener un corrector ortográfico (por lo que pudiera pasar). Voy a mostrar varias cositas y trucos para tener lo necesario ante este tema. 

Para activarlo lo hacemos con el comando:
```
:setlocal spell
```

Esto puede (probablemente) no escoja por defecto nuestro idioma, pero tranquilos no pasa nada, lo especificamos tal que
```
:setlocal spell spelllang=es
```

Bien ahora si marcha la cosa, nos resalta las palabras que tengan algún error. ¿Cómo navego por los errores? Fácil, con `]s` vamos hacia adelante y con `[s` hacia atrás. Una vez estemos encima de la palabra con `z=` nos da un listado de sugerencias, y con `zg` añadimos la palabra al diccionario o `zw` para eliminarla.

Como ya he terminado de corregir las faltas de ortografía quiero desactivarla,
```
:set nospell
```

Si por defecto al abrir Vim queremos tener la corrección ortográfica, editamos nuestro `.vimrc` e incluimos lo siguiente
```
set spelllang=es
```

Otra cosa que se me ocurre es si trabajamos en diferentes idiomas, lo suyo sería poder activar la corrección dependiendo del idioma en que estemos escribiendo, entonces nos creamos un atajo en `.vimrc`:
```
nnoremap <silent> <C-g> :set spell spelllang=es<CR>
nnoremap <silent> <C-f> :set spell spelllang=en<CR>
```

Entonces en el modo normal pulsamos `Ctrl+g` para activar el diccionario español o `Ctrl+f` para activar el diccionario inglés.

