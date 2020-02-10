# Abrir con VIM en Xfce



Suelo usar **Vim** con regularidad junto con **Xfce** como entorno de escritorio. Al hacer la típica operación de *Abrir con...* un archivo de texto, markdown o lo que sea, la quería hacer con (obviamente) Vim. Bien, estuve [buscando](https://askubuntu.com/questions/788737/open-vim-in-xfce4-terminal-from-thunar) información y lo que encontré es que debemos editar el fichero `/usr/share/applications/vim.desktop` y cambiar los siguientes valores:
```bash
Exec=xfce4-terminal -e "vim %F"

Terminal=false
```


Pero esto me funcionó un tiempo (no estoy seguro de si fue después de alguna actualización) y tuve que volver a repetir lo anterior varias veces. No estoy dispuesto a hacer repetir esta tarea más veces, y la [solución](https://stackoverflow.com/questions/11950038/how-to-open-text-with-vim-from-thunar#11953964) es crear un fichero `.desktop` (lo llamamos como nos de la gana) en `~/.local/share/applications/` con el siguiente contenido:
```bash
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
NoDisplay=true
Exec="xfce4-terminal -e 'vim %F'"
Name="VIMMMM"
Comment=Custom definition for "xfce4-terminal -e 'vim %F'"
```

*NOTA*: otra opción sería copiar el archivo `/usr/share/applications/vim.desktop` y pegarlo en `~/.local/share/applications/` para posteriormente modificar las líneas `Exec=` y `Terminal=`.


Ahora ya podemos abrir los ficheros en _Vim_ desde _Thunar_ pinchando dos veces sin tener que abrir la terminal ;)

