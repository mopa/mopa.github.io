# [LaTeX/Pandoc] Tutorial Básico



Desde que uso <tt>Markdown</tt> realizar documentos se ha convertido en una tarea realmente fácil y rápida. Es cierto que en formato [RAW](https://www.wikiwand.com/es/Raw_(formato)) no lo podemos enviar de forma general, se vuelve necesario convertirlo a PDF. Y en esta tarea es donde entra en juego [Pandoc](https://pandoc.org/), el cual es un conversor de documentos libre y de código abierto.

Pandoc usa nuestro amado <tt>LaTeX</tt> para convertir a PDF, con lo que se convierte en una combinación perfecta y personalizable.


### Instalación

Dado que uso Manjaro pongo el comando para este, pero para las demás distribuciones habidas y por haber el comando es similar (según se use *apt*, *yum*, etc.):
```bash
sudo pacman -S pandoc
```

Para tener una completa integración instalamos los dos siguientes paquetes:
```bash
sudo pacman -S pandoc-citeproc pandoc-crossref
```

### Uso básico

El comando más básico de Pandoc es,
```bash
pandoc fileINPUT.txt -o fileOUTPUT.pdf
```

Las extensiones que he puesto son de ejemplo, puedes ver algunas [demos  aquí](https://pandoc.org/demos.html).

Tenemos varias opciones para pasarle a Pandoc, pero como vamos a usar LaTeX, dos que nos interesan son
```bash
--latex-engine=COMPILADOR
--template=RUTA
```

La primera opción es la elección del compilador, ya sea <tt>pdflatex</tt>, <tt>xelatex</tt>, etc. Y la segunda opción es la ubicacion de la plantilla que vamos a usar. Esta es una de las cosas que más me gustan, eliges el estilo del documento al instante.

Pandoc nos provee de una plantilla por defecto, que podemos extraer con
```bash
pandoc -D latex > plantilla.latex
```

A partir de esta personalizamos nuestra plantilla y la podemos colocar (por ejemplo) en `\home\user\.config\pandoc`. 


### Plantillas

Un buen punto de inicio es usar [esta plantilla](https://github.com/jgm/pandoc-templates/blob/master/default.latex) que es la del [autor](https://github.com/jgm) de Pandoc, y a partir de esta modificar a nuestro gusto.

En la documentación de Pandoc podemos ver la [sintaxis](https://pandoc.org/MANUAL.html#template-syntax) de las plantillas además de las [variables](https://pandoc.org/MANUAL.html#variables-for-latex) que usa para LaTeX.

Las plantillas al principio son un poco caos, sobre todo por la cantidad de opciones y parámetros a usar. Por eso mismo y para no hacer muy largo el artículo, lo dejaré para más adelante y así dedicarle una entrada específica.


### Automatizar todo el proceso

Al comando básico de Pandoc visto anteriormente se le pueden añadir más opciones como:

+ `-V`: asignamos valores a las variables de la plantilla, e.g., `-V documentclass=book`.
+ `--toc`: añadir un indice al documento.
+ `-N`: numera las secciones.
+ `--filter FILTRO`: añade funcionalidades adicionales incluidas en un filtro.

Pasar todo esto en un solo comando se vuelve totalmente impracticable. Por ello vamos a usar <tt>YAML</tt> y <tt>MAKE</tt>.

#### Metadatos YAML y Makefile

En la plantilla nos aparacen un montón de variables, para poder asiganarle valores de una forma cómoda vamos a usar un archivo <tt>YAML</tt>. Un modelo puede ser el siguiente:
```yaml
---
# Datos
title: Título
author: Nombre
lang: es

# Control
toc: True

# Formato
documentclass: article
geometry:
- top=1in
- bottom=1in
- right=0.5in
- left=1.5in
mainfont: LiberationSans
fontsize: 12pt
---
```

Este bloque <tt>YAML</tt> se puede añadir al inicio de nuestro Markdown o guardarlo en un archivo aparte e incluirlo en el comando de Pandoc:
```bash
pandoc datos.yaml input.md -o output.pdf
```


El comando se ha vuelto &laquo;manejable&raquo; pero aún así es largo por lo que vamos a crear un **<tt>Makefile</tt>**. Este archivo va a contener todas las órdenes y opciones para compilar nuestro Markdown.

Primero creamos un archivo de nombre `makefile` (así tal cual, sin extensión ni nada), lo editamos y vamos a incluir el siguiente bloque de código:
```
FILES = doc_markdown.md

all:
	pandoc \
	--filter pandoc-crossref \
	--filter pandoc-citeproc \
	--template=/home/USER/.config/pandoc/plantilla.latex \
	-N \
	$(FILES) metadata.yaml \
	-f markdown -o OUTPUT.pdf

clean:
	rm OUTPUT.pdf

.PHONY: clean
```

Explico un poco que tenemos:
+ `FILES`: obviamente ahí indicamos el nombre del fichero Markdown.
+ `all`: el comando Pandoc junto con todas las opciones. La barra invertida `\` es para partir el comando y que sea más legible.
+ `clean`: para elminar el PDF.
+ `.PHONY`: por si hay algún archivo que se llame *clean*.

Ahora solo nos queda llamar a `make`:
```bash
make
```

Si queremos borrar el PDF:
```bash
make clean
```

Este archivo <tt>make</tt> es muy básico, se pueden hacer un montón de cosas a partir de aquí. Esta forma de automatizar el proceso es realmente simple y rápida, aunque dependiendo del editor que se use también es posible sin tener que usar un <tt>makefile</tt>.

*Workflow*:

<video controls style="width:100%; height:auto;">
	<source src='/img/latex-pandoc-workflow.webm' type="video/webm">
</video>

### Referencias

+ [La opción Pandoc](https://ondiz.github.io/cursoLatex/Contenido/15.Pandoc.html)
+ [Math in MarkDown](https://github.com/cben/mathdown/wiki/math-in-markdown)
+ [LaTeX and pandoc templates](https://tex.stackexchange.com/questions/296990/latex-and-pandoc-templates)
+ [You got LaTeX in my Markdown!](https://kesdev.com/you-got-latex-in-my-markdown/)
+ [Converting Markdown to Beautiful PDF with Pandoc](https://jdhao.github.io/2019/05/30/markdown2pdf_pandoc/)
+ [[Intro] Compilación, Linkado y Makefiles en C](https://pfctelepathy.wordpress.com/2015/05/11/intro-compilacion-linkado-y-makefiles-en-c/)
+ [Generic Makefile for Markdown documentation ](https://gist.github.com/ekaitz-zarraga/f90f4c9c46a394e2048a#file-makefile)

