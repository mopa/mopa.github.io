# [Vim] Eliminar líneas siguiendo un patrón


Ya sabemos que Vim es una herramienta con mucha potencia (y con una curva de aprendizaje bastante pronunciada) y a la vez liviana, incluso cuando cargamos plugins. Es por esto mismo por lo que lo uso para hacer limpieza de grandes archivos, y en esta ocasión necesitaba eliminar las líneas de un fichero si las mismas contiene un patrón.

Tenemos varias formas de hacerlo, una de ellas es buscar en todo el documento la palabra o patrón y directamente eliminar las líneas
```vim
:g /palabra/d
```

Lo inverso sería
```vim
:g!/palabra/d
```

Esta forma de borrado inverso (borramos las líneas que **no** contienen la palabra) también podemos hacerlo así
```vim
:v /palabra/d
```

Esto quiere decir que `:v` es el opuesto de `:g`.  Aprovechando este tema dejo un **bonus**, para eliminar todas las líneas en blanco escribimos
```vim
:g/^$/d
```

o
```vim
:g/^\s*$/d
```

