# [LaTeX] Capítulo 1: Compiladores


Para empezar a comprender el mundo (La)TeX hay que tener unas nociones básicas de que es en sí y sus distintas variantes. 

## TeX
>TeX es un nuevo sistema de composición tipográfica dirigido a la creación de libros bonitos, y especialmente para libros que contienen un montón de matemáticas. Al preparar un manuscrito en formato TeX, estarás diciendo a la computadora exactamente como el manuscrito debe ser transformado en páginas cuyas calidad tipográfica es comparable a la de los mejores impresores del mundo

Esto es como definió Donald Knuth (su creador) que era TeX en el libro _The TeXbook_. Es la base de todo el sistema y lo primero que se creó allá por 1978.

TeX es un lenguaje basado en [macros](https://en.wikipedia.org/wiki/Macro_(computer_science)) y [tokens](https://en.wikipedia.org/wiki/Token_(parser)). Tiene un conocimiento preciso de los tamaños de todos los caracteres y símbolos, y usando esta información calcula la disposición óptima de letras por línea y líneas por página.

Cuando compilamos (por ejemplo por una CLI con ```tex example.tex```) el resultado es un fichero [DVI](https://en.wikipedia.org/wiki/DVI_file_format) que contiene la localización final de todos los caracteres. Este fichero se puede convertir a otros formatos o directamente imprimir.

El sistema base contiene unos 300 comandos llamados _primitivos_. Son comandos de bajo nivel, pero la mayor parte de la funcionalidad es proporcionada por archivos de formato. El formato por defecto original de Knuth, que añade unos 600 comandos, es Plain TeX.



## LaTeX
Con TeX se podían hacer cosas básicas, por lo que pronto surge la necesidad de realizar cosas más complejas y completas. Entra en escena Leslie Lamport, que crea LaTeX a principios de la década de 1980.

LaTeX es un conjunto de comandos definidos en términos de los subyacentes a TeX. De hecho todos los comandos usados en un documento LaTeX son en realidad conjuntos de comandos de TeX. Lo que hace es proporcionarnos un lenguaje de alto nivel que acceda al poder de TeX de una manera más fácil.

Podríamos establecer la siguiente diferencia entre ellos: TeX se ocupa de la maquetación, mientras que LaTeX maneja el lado del contenido para el procesamiento de documentos.

Gracias a que Leslie Lamport creó un sistema estandarizado de gestión de paquetes, la comunidad creció enormemente. Precisamente por esto tenemos paquetes para cualquier cosa y clases de documentos para todo lo que necesitemos.

OJO: para mantener tu reputación en el mundo LaTeX tienes que escribirlo con una T y X mayuscula, y pronunciarlo como _Lay-Tech_. Esto se debe a que la X en TeX es en realidad la letra _Chi_ mayúscula del griego. 


(Post en construcción)

## Referencias

https://www.latex-project.org/

https://www.sharelatex.com/blog/2012/12/01/the-tex-family-tree-latex-pdftex-xelatex-luatex-context.html

https://en.wikipedia.org/wiki/TeX

https://en.wikipedia.org/wiki/LaTeX

The LaTeX Companion, Frank Mittelbach.

The TeXbook, Donald E. Knuth.

