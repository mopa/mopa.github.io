# [Docker] Comandos Útiles



Siguiendo con la dinámica del anterior post de Docker, voy a describir algunos comandos útiles que cuando comenzamos a usar contenedores nos van a ayudar a entenderlos y aprovechar mejor sus virtudes.


### Contenedor Interactivo

La mejor forma de ver esto es con alguna distribución, por ejemplo Ubuntu. Lo que hacemos es crear un contenedor basado en Ubuntu y entrar dentro del mismo (opción `-i`). Además sacamos por pantalla la salida del contenedor (`-t`):

```bash
docker run -it ubuntu

# Entramos al contenedor y lanzamos bash
docker run -it ubuntu bash
```

Para salir del contenedor solo hay que ejecutar `exit`, lo cual también parará el propio contenedor.

OjO! Cada vez que ejecutamos un `docker run` estamos creando un contenedor nuevo. Dado que al hacer `exit` lo hemos parado, podemos volver a usarlo con `docker start -i <ID o nombre del contenedor>`.


### Contenedor en Background/Segundo Plano

Arrancamos un contenedor (e.g. de php) y lo dejamos en segundo plano para no tener abierta la terminal:

```bash
docker run -d php
```


### Darle un Nombre al Contenedor

Para no tener que estar mirando el ID o el nombre _random_ que le da Docker a los contenedores cada vez que creamos uno, vamos a pasarle la opción `--name` al crearlo:

```bash
docker run -it --name docker_ubuntu ubuntu
```


### Ejecutar Comandos

Teniendo un contenedor en background, por ejemplo un Ubuntu, le podemos pasar comandos con:

```bash
docker exec docker_ubuntu echo Hola Mundo
```

La sintaxis sería: `docker exec <ID o nombre contenedor> <Comando a ejecutar>`.

Hay contenedores que su modo interactivo es entrar a un intérprete de comandos (php, python, etc.), y en caso de que quisieramos hacer algún cambio en los mismo podemos usar `exec`. Suponiendo que tenemos un contenedor de php corriendo (`docker run -it --name docker_php php`):

```bash
docker exec -it docker_php bash
```

&nbsp;

---

&nbsp;


Con estos comandos ya podemos jugar mejor y comprender como funcionan los contenedores además de aprovecharlos no solo para correr un microservicio o un framework.



