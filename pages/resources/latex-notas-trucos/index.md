# [LaTeX] Notas y Trucos


En esta página voy a ir almacenando pequeños trucos para la realización de documentos (no es la típica *cheatsheet*). Se trata más bien de las cosas usuales que nos surgen, como hacer anotaciones al margen, texto que envuelve una imagen, etc. 

### Webs

- [Tables Generator](https://www.tablesgenerator.com/)
- [Table Convert](https://tableconvert.com/)
- [Detexify - LaTeX handwritten symbol recognition](http://detexify.kirelabs.org/classify.html)
- [LaTeX Previewer](http://www.tlhiv.org/ltxpreview/)


### Listas ordenadas por letras

Para tener listas ordenadas con letras minúsculas, usamos el paquete `enumitem`:
```latex
\begin{enumerate}[label=\alph*]

\end{enumerate}
```

Esto no daría una salida como la siguiente:
```
a) Item
b) Item
c) Item
```


### Anotaciones al margen

Con el paquete `marginnote` tenemos más flexibilidad para usar notas al margen, como por ejemplo especificar la geometría de las notas. [Documentación oficial](https://www.ctan.org/pkg/marginnote)


### Eliminar borde de los enlaces

Es conocido que al usar el paquete `hyperref` nos hace las referencias cruzadas, pero al generar el documento PDF algunos lectores dibujan unos bordes rojos alrededor de estas referencias (o de enlaces). Para evitar esto usamos una de las opciones del propio paquete:
```latex
\usepackage[hidelinks]{hyperref}
```

o también
```latex
\hypersetup{hidelinks}
```

Sin embargo, si lo que queremos es cambiar el color de los bordes o ponerlos más acordes a nuesro estilo:
```latex
\hypersetup{
  colorlinks   = true,  % Colorea los enlaces
  urlcolor     = blue,  % Color para los hyperlinks
  linkcolor    = blue,  % Color para los enlaces internos
  citecolor   = red     % Color para las citas
}
```

