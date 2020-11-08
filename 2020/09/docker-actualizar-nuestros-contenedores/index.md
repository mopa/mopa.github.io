# [Docker] Actualizar nuestros contenedores



Cuando llevamos algún tiempo usando Docker surge una nueva necesidad: **actualizar** nuestros servicios. Tradicionalmente esto siempre lo hacíamos cuando actualizábamos el sistema, con el consecuente problema de si algún paquete queríamos que conservara alguna versión en particular y demás títeres. 

Actualizar los contenedores es realmente fácil, solo hay que asegurarse de donde estamos guardando los datos (me refiero a aquello de los [volúmenes](https://docs.docker.com/storage/volumes/)). Procedemos de la siguiente manera:
{{< mermaid >}}
graph TB;
  A(Descargamos la imagen) --> B(Paramos el contenedor)
  B --> C(Eliminamos el contenedor)
  C --> D(Arrancamos de nuevo el contenedor)
{{< /mermaid >}}


Un [ejemplo con mysql](https://stackoverflow.com/questions/26734402/how-to-upgrade-docker-container-after-its-image-changed#26833005) es el siguiente:
```shell
docker pull mysql
docker stop my-mysql-container
docker rm my-mysql-container
docker run --name=my-mysql-container --restart=always \
  -e MYSQL_ROOT_PASSWORD=mypwd -v /my/data/dir:/var/lib/mysql -d mysql
```

Si estamos usando `docker-compose` procedemos de la misma manera:
```shell
docker-compose pull
docker-compose stop
docker-compose up -d
```

Hay que tener especial cuidado con los volúmenes que tengan asociados los contenedores, pero aparte de eso es coser y cantar.

