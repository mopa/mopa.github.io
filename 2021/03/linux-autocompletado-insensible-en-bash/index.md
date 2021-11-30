# [Linux] Autocompletado insensible en Bash


Aunque el título suene engañoso y a Bash le demos este horrible adjetivo que tienen algunas personas, el caso al que me refiero con *insensible* es que no distinga entre mayúsculas y minúsculas.

Cuando uso el comando `cd` para moverme entre directorios (aunque cada día uso más [ranger](https://ranger.github.io/), me resultaba ciertamente molesto estar pulsando la tecla `shift` cada vez que me encontraba con una carpeta o archivo con la primera letra en mayúsculas. Necesitaba agilizar ese proceso y esta [opción de autocompletado](https://askubuntu.com/questions/87061/can-i-make-tab-auto-completion-case-insensitive-in-bash) la podemos hacer efectiva para nuestro usuario actual
```bash
# Copiamos el contenido de /etc/inputrc a nuestra home en caso de que no exista
if [ ! -a ~/.inputrc ]; then echo '$include /etc/inputrc' > ~/.inputrc; fi

# Añadimos a ~/.inputrc el autocompletado insensible
echo 'set completion-ignore-case On' >> ~/.inputrc
```

o para todos los usuarios
```bash
# Añadimos a /etc/inputrc el autocompletado insensible
echo 'set completion-ignore-case On' >> /etc/inputrc

# Si nos estamos con root usad este comando
echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc
```

Otra opción es usar el siguiente script: [bash-sensible](https://github.com/mrzool/bash-sensible). El cual hace que la experiencia con Bash sea un poco más sensata por defecto.

