# [Linux] Compresión de PDFs




Con el volumen de documentos digitales que manejamos estos días, puede que hayamos llegado a una situación en la que necesitemos comprimir archivos PDF. Afortunadamente, en el mundo de Linux, contamos con varias herramientas eficientes para esto.  En este post, vamos a explorar algunas de las más destacadas, siguiendo por supuesto aquellas que sean para la terminal, ya que es mi forma habitual de trabajar. 

Voy a ir mostrando desde las que me dan un peor resultado al mejor. Partimos de un PDF base que tiene un tamaño de 6.2 MB.

<img alt="Keychron K3" src="/img/pdf-compress-results.jpg" width=750>

## pdftk

Es una de las [opciones más conocidas](https://www.pdflabs.com/) y aparte de la compresión ofrece una gran cantidad de funciones para manipular PDFs. Seguramente se encuentre en los repositorios de tu distribución y una vez instalada realizamos la compresión con

```bash
pdftk input.pdf output output.pdf compress
```

## pdfjam

Al igual que la anterior también nos ofrece más [opciones para la manipulación](https://github.com/rrthomas/pdfjam) de PDFs, pero nos interesa la compresión, la cual podemos ir variando con el parámetro `scale`

```bash
pdfjam --scale 0.5 input.pdf
```


## ghostscript

Sin duda uno de los [programas más conocidos](https://www.ghostscript.com/) y utilizados para manipular estos archivos. El «problema» que nos encontramos con él es debido a la [gran cantidad de opciones](https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file) de las que dispone. Para comprimir manteniendo el equilibrio entre tamaño y calidad,

```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```


## shrinkpdf

Aunque *Ghostscript* nos ofrece mucho juego para poder realizar este trabajo, llega un momento en el que necesitamos que las cosas sean un poquito más simples y directas. Aquí es donde encontré una alternativa con [Shrinkpdf](https://github.com/aklomp/shrinkpdf). Existen algunos repositorios (como los [AUR](https://aur.archlinux.org/packages/shrinkpdf) de Arch y derivadas) donde tenemos disponible la herramienta lista para instalar, también podemos descargarlo desde el repositorio de Github.

Su uso es bastante sencillo

```bash
shrinkpdf -o output.pdf input.pdf
```

Además podemos controlar la resolución de salida en DPI

```
shrinkpdf -r 90 -o output.pdf input.pdf
```

O incluso hacer un conversión a escala de grises

```bash
shrinkpdf -g -r 90 -o output.pdf input.pdf
```




Con estas herramientas, deberías poder manejar cualquier necesidad de compresión de PDFs que puedas tener. Recuerda siempre hacer una copia de tus archivos originales antes de comprimirlos.



