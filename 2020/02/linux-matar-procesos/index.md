# [Linux] Matar Procesos



No existen sistemas infalibles y de vez en cuando las aplicaciones se quedan congeladas, no responden y por más que pinchemos el botón de cerrar no quiere cerrarse. En estos casos recurrimos a la terminal y podríamos usar `xkill`, pero puede pasar que notemos el sistema lento y no sepamos de donde viene. Para estas situaciones y conocer mejor lo que se está ejecutando, voy a mostrar de forma (intentaré que sea breve) ver los procesos que más usan la CPU y la memoria.

## Ver los procesos en ejecución

Tenemos varias opciones: el administrador del sistema (depende la distribución que uses), `top`, `ps`, `htop`, ... y un sin fin de utilidades gráficas y por [CLI](https://es.wikipedia.org/wiki/Interfaz_de_l%C3%ADnea_de_comandos?oldformat=true). Aquí trataré solo con `ps` y `htop`.

### PS

Con `ps` se pueden hacer auténticas maravillas, pero vamos a lo que nos interesa. Vamos a listar los procesos de todos los usuarios (`-a`), la información del proceso (`-u`) y listar los procesos de todas las terminales y usuarios (`-x`):
```bash
ps aux
```

Esto nos saca un *tochaco* que a primera vista no gusta nada, vamos a refinarlo
```bash
ps axc -o cmd:18,%cpu --sort=-%cpu | head
```

Ahora mucho mejor, el comando anterior nos muestra de forma ordenada los procesos que están consumuendo mayor cantidad de CPU. *Tip*: usa un <tt>alias</tt> en tu `.bashrc` para ejecutarlo rapidamente.


### HTOP

Otra forma de ver en vivo y en directo el consumo e información de los procesos, es con el comando `htop`, que por defecto no viene instalado en algunas distribuciones. Solo hemos de ejecutar:
```bash
htop
```

Con <tt>F3</tt> buscamos la aplicación que nos interese, con <tt>F6</tt> tenemos más opciones de ordenar los procesos, etc.



## Matar procesos

### Usando el PID del proceso

Una forma de realizar esta acción es a través del [PID](https://es.wikipedia.org/wiki/Identificador_de_proceso?oldformat=true) del proceso, para conocer al susodicho tenemos varias opciones. Por ejemplo para conocer el PID de firefox:
```bash
ps -ef | grep firefox

pidof firefox
```

El segundo es mucho más fácil puesto que nos saca directamente lo que buscamos. Ahora para matarlo usamos `kill`:
```bash
kill -9 PID
```

El parámetro `-9` quiere decir que *mata al proceso*, puede parecer redundante pero tiene que ver con las [señales del sistema](https://en.wikipedia.org/wiki/Signal_(IPC)?oldformat=true#Sending_signals). 


### Usando el nombre del proceso

El comando `killall` termina con todos los programas que conincidan con el nombre que le pasemos. Por ejemplo para matar firefox:
```bash
killall -9 firefox
```

Tenemos más opciones, una de ellas es poder terminar todos los procesos que está corriendo un usuario en particular:
```bash
sudo killall -u usuario
```

### Usando parte del nombre del proceso

Con `pkill` matamos los proceso especificando el nombre o parte del nombre. Al igual que en los ejemplos anteriores:
```bash
pkill -9 firefox
```

`pkill` puede enviar la señal al proceso de un usuario. Esto es, que queremos matar firefox para un usuario particular:
```bash
pkill -9 -u usuario firefox
```


## Matar un proceso zombi

Existen ocasiones que ejecutamos un programa y al cerrarlo dicho programa no se elimina de la tabla de procesos. No son dañinos pero ocupan espacio en la RAM. Es poco comun tener este tipo de procesos pero se puede dar el caso, de modo que vamos a buscarlos y eliminarlos.
```bash
ps aux | grep Z
```

Este comando nos lista los procesos zombi junto con su PID, por lo que ya solo queda hacer un `kill -9 PID`.


## Algunos comandos interesantes

Expongo a continuación algunos comandos de `ps` con la salida formateada a ver solo el tanto por ciento de CPU o memoria:
```bash
# Listamos los procesos que consumen mas CPU
ps axc -o cmd:18,%cpu --sort=-%cpu | head

# Saber el uso de CPU de un proceso
ps axc -o cmd:18,%cpu | grep <Nombre proceso>

# Listar los procesos que consumen mas Memoria
ps axc -o cmd:18,%mem --sort=-%mem | head

# Saber el uso de Memoria de un proceso
ps axc -o cmd:18,%mem | grep <Nombre proceso>

# Saber el uso de CPU y Memoria de un proceso mostrandolo de forma jerarquica
ps axc -H --forest -o cmd:18,%cpu,%mem | grep containerd
```



