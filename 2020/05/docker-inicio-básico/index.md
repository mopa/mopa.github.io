# [Docker] Inicio  Básico



En el mundo de los que nos gusta el *cacharreo* Docker se ha convertido en una herramienta casi obligada, nos evitamos reinstalaciones, &laquo;formateos&raquo; y demás engorrros con sus correspondientes pérdidas de tiempo.

Se ha escrito mucho sobre Docker, lo que pretendo con esta pequeña introducción es dejar claras algunas deficiones, y ofrecer una serie de comandos básicos.


## Deficiones

### Docker

Es como un gestor de paquetes tipo Snap o AppImage.


### Imagen

Es un paquete con todo lo necesario para ejecutar una aplicación o servicio. Es como un ejecutable.


### Contenedor

Es la imagen en funcionamiento. Es cada una de las instancias o procesos que hay en funcionamiento.

Instancia: es una copia de una versión ejecutable del programa que ha sido escrito en la memoria del computador.

Utiliza y comparte el SO de la máquina con otras aplicaciones y con otros contenedores. Al detener el contenedor este se queda en el equipo.



## Comandos

### Imágenes

Ver imagenes descargadas:
```bash
docker image ls

# Equivalente
docker images
```

Ver imagenes intermedias:
```bash
docker image ls -a
```

Ver los numeros de identificacion, `ID`:
```bash
docker image ls -q
```

Borrar las imagenes que no estamos utilizando:
```bash
docker image prune
```

Borrar una o varias imagenes:
```bash
docker image rm <nombre imagen>
```

O también con:
```bash
docker rmi <nombre imagen>
```


### Contenedores

Iniciar un contenedor:
```bash
docker run hello-world
```

Ver los contenedores que tenemos:
```bash
docker ps -a
```

Para un contenedor:
```bash
docker stop <nombre o ID>
```

Iniciar de nuevo:
```bash
docker start <nombre o ID>
```

Reiniciar:
```bash
docker restart <nombre o ID>
```

Matando contenedores:
```bash
docker kill <nombre o ID>
```

Borrar contenedor:
```bash
docker rm <nombre contenedor>
```

Borrar todos los contenedores que estén parados:
```bash
docker container prune
```

Ver el proceso del docker:
```bash
docker top <nombre contenedor>
```

Ver estadisticas:
```bash
docker stats --no-stream <nombre contenedor>
```

Lo paramos con [[Ctrl]] + [[c]]




## Referencias

+ [Docker. Introducción y primeros pasos](https://www.atareao.es/tutorial/docker/)
+ [Post-installation steps for Linux \| Docker Documentation](https://docs.docker.com/engine/install/linux-postinstall/)
+ [Install Docker Engine on Debian \| Docker Documentation](https://docs.docker.com/engine/install/debian/)
+ [Docker Hub](https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux)

