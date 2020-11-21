# [Docker] Monitorizar contenedores



Ya hemos hecho algunas cositas interesantes con los contenedores de Docker y llega un momento en que necesitamos monitorizarlos, saber que está pasando, los recursos que consume o por qué no funciona correctamente. Para ello Docker nos brinda tres comandos: `logs`, `top` y `stats`.

### docker logs

Como os podéis imaginar con `docker logs` nos va a mostrar los logs del contenedor que queramos. La sintaxis sería:
```bash
docker logs <ID o nombre contenedor>
```

Si queremos seguir la salida que va mostrando:
```bash
docker logs -f <ID o nombre contenedor>
```

O mostrar las últimas diez salidas:
```bash
docker logs --tail 10 <ID o nombre contenedor>
```

### docker top

Mostramos los procesos que están corriendo de un contenedor:
```bash
docker top <ID o nombre contenedor>
```

### docker stats

Nos muestra las estadísticas del flujo de recursos de un contenedor o de varios contenedores. Esto es, el uso de CPU, memoria, trafico de red y de disco.
```bash
docker stats <IDs o nombre contenedores>
```

Si queremos ver todos los contenedores:
```bash
docker stats -a
```

Podemos usar con la opción `--format` para sacar la información que queramos de la forma que nos guste, por ejemplo:
```bash
docker stats --format "{{.Name}}\t{{.CPUPerc}}" <IDs o nombre contenedorres>
```

La salida de este comando es la monitorización de solo el porcentaje de CPU por los contenedores especificados.


### Usar un contenedor

Existen contenedores que se encargan de recoger las métricas y usos de otros contenedores, algunos de estos son [cAdvisor](https://github.com/google/cadvisor) o [Prometheus](https://prometheus.io/) (esta es ya una solución cuando tenemos una infraestructura importante). Cualquiera de estas opciones es buena si el fin es que todo funcione correctamente :D













