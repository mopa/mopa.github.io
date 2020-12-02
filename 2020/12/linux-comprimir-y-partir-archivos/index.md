# [Linux] Comprimir y partir archivos


Hasta no hace mucho era común encontrarse por las redes archivos comprimidos en varias partes, de este modo carpetas, imagenes, etc. de varios gigabytes se podían compartir de forma más fácil. Como si fuera cosa del pasado, recientemente he tenido varias situaciones de diversa índole en las que he tenido que recurrir a esta solución. Para que no caiga en el olvido, [comparto como he hecho esta operación](https://stackoverflow.com/questions/1120095/split-files-using-tar-gz-zip-or-bzip2).

El «algoritmo» sería: primero comprimir los archivos con `tar` y luego partirlos con `split`.

```bash
tar cz fichero_1 fichero_2 | split -b 1024MiB - ficheros.tgz_
```

Este comando nos comprime los ficheros `fichero1` y `fichero2` (pueden ser ficheros o carpetas), después los parte en trozos de 1024MiB y además les añade un sufijo de letras (la secuencia es: `aa`, `ab`, `ac`, ...), es decir, el resultado sería:
```bash
ficheros.tgz_aa
ficheros.tgz_ab
ficheros.tgz_ac
.
.
.
```

Para descomprimir:
```bash
cat ficheros.tgz_* | tar xz
```

&nbsp;


**En caso de tener sólo un archivo**, podemos usar `gzip`:
```bash
gzip -c fichero | split -b 1024MiB - fichero_part.gz_
```

Y para descomprimir:
```bash
cat fichero_part.gz_* | gunzip -c > fichero
```

&nbsp;


Como indica la documentación de `split`, en el argumento del tamaño, `-b`, las unidades son: `K,M,G,T,P,E,Z,Y` para potencias de 1024 o `KB,MB,...` para potencias de 1000. Además hay una equivalencia entre las formas `KiB=K`, `MiB=M`, etc.

Otro argumento interesante de `split` es poder cambiar el sufijo, particularmente me gusta más que sea numérico, de modo que añado `-d`. Así si quiero partir varios ficheros en trozos de 500MiB y que el sufijo sea con números,
```bash
tar cz fichero1 fichero2 | split -d -b 500M - ficheros.tgz_
```

Espero que el post sea de ayuda :wink:





