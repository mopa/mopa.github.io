# [LaTeX] Notas y Trucos


En esta página voy a ir almacenando pequeños trucos para la realización de documentos (no es la típica *cheatsheet*). Se trata más bien de las cosas usuales que nos surgen, como hacer anotaciones al margen, texto que envuelve una imagen, etc. 


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

