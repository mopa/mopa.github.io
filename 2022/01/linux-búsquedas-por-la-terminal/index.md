# [Linux] Búsquedas por la terminal


Tarde o temprano vamos a tener la necesidad de buscar algo en la terminal, ya sean archivos, directorios, ejecutables, etc. Pues bien tenemos poderosas herramientas que por si solas o combinadas nos van a solucionar este menester


## `whereis`

Con este buscamos la localización de algún binario, fuente o manual de un comando (el famoso `man`).
```bash
whereis bash
```

Para buscar los ficheros fuente
```bash
whereis -s bash
```

Para buscar los ficheros `man`
```bash
whereis -m bash
```


## `which`

Si sólo queremos la localización de un ejecutable la mejor opción es usar `which`. Esto es porque este comando busca el ejecutable como argumento en los directorios listados en las variables de entorno del `PATH` (le dice a la *shell* y a otros programas en que directorios buscar los ficheros ejecutables).
```bash
which bash
```

### `type`

Este comando lo anido aquí porque está muy relacionado con el anterior. Lo bueno de este, es que aparte de dar información acerca del comando buscado, nos muestra como es interpretado. Esto es que si tenemos un *alias* definido nos lo va a indicar.
```bash
type bash
```


## `locate`

Con `locate` partimos de que tenga ya una indexación de los ficheros, esto es que antes de poder usarlo hemos de ejecutar 
```bash
updatedb
```

Una vez haya terminado ya si podemos buscar cualquier fichero o directorio por el nombre (aunque también podemos hacer búsquedas por patrones)
```bash
locate myfile.md
```


## `find`

Es el más conocido y tiene *tropocientas* opciones y combinaciones posibles, pero aquí nos vamos a quedar con lo más práctico. Su sintaxis básica es
```bash
find [options] [path...] [expression]
```

### Buscar directorios o carpetas
```bash
find /home/linuxize -type d -name documents
```

### Buscar ficheros por nombre

```bash
find /home/user -type f -name document.pdf

## Para buscar en el mismo directorio donde nos encontramos
find . -type f -name document.pdf

## Busquedas sin distincion de mayusculas y minusculas
find /home/user -type f -iname document.pdf
```

### Buscar ficheros por extensión

```bash
find /home/user -type f -name '*.pdf'

## Lo contrario de lo anterior
find /home/user -type f -not -name '*.pdf'
```

Tenemos muchas más opciones como buscar recursivamente, por tamaño, fecha de modificación, permisos, usuario, etc.

## `fd`

Se auto define como [una alternativa](https://github.com/sharkdp/fd) simple, rápida, *user-friendly*… y tiene toda la razón, para buscar solo tenemos que hacer
```bash
fd document
```


## `ag` o The Silver Searcher

[Esta alternativa](https://github.com/ggreer/the_silver_searcher) también es muy rápida y al igual que la anterior buscar es simplemente escribir lo siguiente
```bash
ag docu
```


