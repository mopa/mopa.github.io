# [Linux] Editar y Modificar PDFs



Cuando nos iniciamos en el mundo GNU/Linux hay una de las tareas más comunes que puede llegar a ser un suplicio: editar archivos PDF. Para operaciones tan básicas como unir o cortar páginas, encriptar, etc. tenía que recurrir a alguna web que realizaban estos propósitos o resignarme a hacer alguna treta.

Dado que me estoy empezando a manejar mejor con aplicaciones en [CLI](https://es.wikipedia.org/wiki/Interfaz_de_l%C3%ADnea_de_comandos?oldformat=true) (por aquello de automatizar procesos), busqué soluciones de este tipo y me encontré con dos: **PDFtk** y **Xpdf**. Aparte de estas dos también buscaba una en la que pudiera hacer resaltado de texto, anotaciones, etc. y entonces me topé con **Master PDF Editor**, que incluso en su versión gratuita no le falta de nada.


### PDFtk

En más de una ocasión he tenido que unir varios PDF, unir páginas de distintos PDF, eliminar páginas... todo de forma recursiva. Así que eso de ir uno a uno sería una locura, mejor que PDFtk lo haga. Primero instalamos el paquete, que obviamente dependerá de la distribución que uséis:
```bash
sudo apt install pdftk # Debian
sudo pacman -S pdftk # Manjaro
```

Voy a poner algunos comandos útiles.

+ Unir varios PDF en un nuevo documento:
```bash
pdftk in1.pdf in2.pdf in3.pdf cat output out123.pdf
```

+ Lo anterior pero usando *wildcards*:
```bash
pdftk *.pdf cat output out.pdf
```

+ Eliminar la página 13 de in1.pdf y crear un documento nuevo:
```bash
pdftk in1.pdf cat 1-12 14-end output out.pdf
```

+ Seleccionar varias páginas de distintos PDF y crear uno nuevo:
```bash
pdftk A=in1.pdf B=in2.pdf cat A1-7 B1-5 A8 output out.pdf
```

+ Sacar un informe con los metadatos marcadores y etiquetas;
```bash
pdftk in1.pdf dump_data output informe.txt
```

Podemos encontrar más ejemplos en [PDFtk Server Examples](https://www.pdflabs.com/docs/pdftk-cli-examples/), como [añadir marcas de agua](https://www.pdflabs.com/docs/how-to-add-headers-footers-watermarks-and-stamps-to-pdf/), y nunca viene mal echar un vistazo al [manual](https://www.pdflabs.com/docs/pdftk-man-page/).


### Xpdf

Esta herramienta aunque es un visor (el cual ofrece algunas cosas interesantes), también puede realizar conversiones, extraer texto, extraer imágenes, analizar fuentes, extraer información, etc. Lo primero como siempre es instalar el paquete:
```bash
sudo apt install xpdf # Debian
sudo pacman -S xpdf # Manjaro
```

Veamos algunos ejemplos:

+ Extraer texto y guardarlo en un `.odt` o `.txt`:
```bash
pdftotext in1.pdf out.odt
pdftotext in1.pdf out.txt
```

+ Extraer las imágenes y guardarlas en una carpeta:
```bash
pdfimages -all in1.pdf /ruta/carpeta
```

+ Ver la información del PDF:
```bash
pdfinfo in1.pdf
```

Esta herramienta trae algunas utilidades más que podemos ver en su [página de soporte](https://www.xpdfreader.com/support.html). 


### Master PDF Editor

Sin duda una aplicación completa para todas esas operaciones de resaltado de texto, añadir flechas y otras figuras.

![](/img/masterpdfeditor.png)



### Herramientas Online

De forma online existen multitud de herramientas para hacer las tareas descritas anteriormente. Las expongo ya que en alguna ocasión seguro que haremos uso de ellas, ya sea por necesidad o por simple curiosidad. Eso sí, no tendremos la misma libertad y versatilidad, estas webs nos hacen el &laquo;apaño&raquo; en ocasiones puntuales.

+ [Soda PDF](https://www.sodapdf.com/es/)
+ [iLove PDF](https://www.ilovepdf.com/es)
+ [Online OCR](https://www.hipdf.com/ocr)


### Conclusiones

Con estas tres herramientas cubrimos todas las necesidades que tengamos para manipular PDF, desde lo básico hasta manejar varios documentos a la vez, extraer información o crear scritps. Si además incluimos las herramientas online que nos pueden salvar de más de un apuro, el manejo de PDFs se queda en un juego de niñxs.

