# Chuletario de Vim



## Global

+ `:saveas file` - guarda un fichero como...
+ `'0` - reabrir el último fichero abierto
+ `\` - Leader Key

## Movimientos del cursor

Todo en el modo normal

+ `w` - saltamos al inicio de la siguiente palabra
+ `e` - saltamos al final de una palabra
+ `b` - igual que `w` pero en sentido opuesto
+ `%` - saltamos a la pareja del paréntesis
+ `0` - saltamos al inicio de línea
+ `$` - saltamos al final de línea
+ `}` - saltamos al siguiente párrafo
+ `{` - saltamos al anterior párrafo
+ `C-D` - bajamos media página
+ `C-U` - subimos media página

+ `gg` - vamos al inicio del documento
+ `G` - vamos al final del documento
+ `5G` - vamos a la línea 5

+ `zz` - centramos el cursor en la pantalla


## Insertar

Entramos al modo insertar bajo las siguientes opciones:

+ `i` - entramos en el modo insertar *antes del cursor*
+ `I` - entramos en el modo insertar al inicio de línea
+ `a` - entramos en el modo insertar *después del cursor*
+ `A` - entramos en el modo insertar al final de la línea
+ `o` - entramos en el modo insertar en la siguiente línea
+ `O` - entramos en el modo insertar en la línea anterior
+ `ea` - entramos en el modo insertar al final de la palabra

### Insertar en varias columnas a la vez

Estando en el modo normal seleccionamos las columnas (a la vez que estar en la posición donde queremos insertar el texto) con `Ctrl + v`, seguidamente `I`, escribimos lo que sea y terminamos con `Esc`.

Más info en: [Cómo insertar el mismo texto en una columna en varias líneas con el editor #Vim](https://victorhckinthefreeworld.com/2019/10/09/como-insertar-el-mismo-texto-en-una-columna-en-varias-lineas-con-el-editor-vim/)


## Buscar / Reemplazar

+ Para buscar solo tenemos que poner `/palabra` en el modo normal.
+ Buscar dentro de otra busqueda: `/string1;/string2`. Lo que hace es primero buscar el *string1* y luego dentro de esos resultados el *string2*.

**Reemplazar**

`/palabra` -> `cgn` -> Entramos al modo *Insertar* y escribimos la palabra a sustituir -> `Esc` -> `n` para saltar a la siguiente coincidencia -> `.` para sustituir o `n` y nos vamos a la siguiente coincidencia sin sustituir.

Más info: [You dont need more than one cursor in vim](https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db)

## Texto

+ Modo *normal*. Cambiar todos los caracteres de mayusculas a minusculas: `g~~`

## Múltiples Ficheros Abiertos

+ `:sp fichero` - Abre `fichero` en un nuevo *buffer* y parte la ventana **horizontalmente**.
+ `:vsp fichero` - Abre `fichero` en un nuevo *buffer* y parte la ventana **verticalmente**.
+ `Ctrl` + `ww` - Cambiamos de ventana.

## Deshacer / Rehacer cambios

Para deshacer el cambio más reciente en **modo normal** usamos `:u` o `u`. Pero esto deshace el último cambio en el documento.

Si queremos deshacer varios cambios en de una misma línea y queremos deshacerlos todos a la vez, usamos `U`.

Para rehacer los cambios: `Ctrl + r`.

Más info y algún truco más: [Deshacer y rehacer cambios editando con #Vim](https://victorhckinthefreeworld.com/2019/10/23/deshacer-y-rehacer-cambios-editando-con-vim/).





## Copiar, Cortar y Pegar

### En el Modo Normal

Copiar:

+ `yy` - Copiar la linea
+ `3yy` - Copiar tres lineas, contando desde la actual a las siguientes
+ `yiw` - Copiar la palabra


Cortar (eliminar):

+ `dd` - Eliminar (cortar) la linea
+ `3dd` - Eliminar (cortar) tres lineas, contando desde la actual las siguientes
+ `d$` - Eliminar (cortar) todo desde el cursor hasta el final de la línea


Todos los comandos que se aplican para copiar son válidos para cortar (eliminar).


Pegar:

+ `p` - Pegar el texto después del cursor
+ `P` - Pegar el texto antes del cursor


De donde lo he sacado: [How to Copy, Cut and Paste in Vim / Vi \| Linuxize](https://linuxize.com/post/how-to-copy-cut-paste-in-vim/)


### En el *Clipboard*

Estando en el `modo Normal` hacemos [[Ctrl]] + [[v]] o [[Shift]] + [[v]] para seleccionar el texto, pulsamos [[Esc]] y seguidamente `:w !xclip -i -sel c` para **copiar**. En caso de que queramos **pegar**: `:r !xlcip -o -sel c`.



## Indentación

+ Indentar la línea actual de acuerdo a la **configuración por defecto**: `==`
+ Indentar el fichero entero: `gg=G`

**Configurar la Indentación**

Espacios para toda la indentación:
```vim
set expandtab
set shiftwidth=2
set softtabstop=2
```

*Hard tabs* para toda la indentación:
```vim
set shiftwidth=2
set tabstop=2
```

Mezcla de tabulación y espacios:
```vim
set shiftwidth=2
set softtabstop=2
```

