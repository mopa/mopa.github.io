# [Python] Desarrollo usando contenedores de Docker



Aquellos que comienzan en el mundo de Python pueden verse confundidos por como pueden tener un entorno de desarrollo local sin *ensuciar* demasiado su sistema. Cierto es que se pueden usar los [entornos virtuales](https://pablomopa.com/2021/04/python-crear-entornos-virtuales-en-python-3/), pero cuando los proyectos se van volviendo más complejos usar Docker se vuelve algo prácticamente obligatorio.

Tal es así que cuando necesitamos tener control sobre las dependencias/librerías que estamos usando, vamos a tener que usar alguna herramienta adicional, bien sea con el típico `requirements.txt`, [poetry](https://python-poetry.org/), etc.

La estructura básica de la que vamos a partir es la siguiente:
```bash
app-folder
├── docker-compose.yaml
├── Dockerfile
├── requirements.txt
└── src
    └── main.py
```

De aquí en adelante todos los comandos se ejecutaran estando ubicados en nuestra `app-folder`.

## Imagen de Docker

Lo primero que necesitaremos es una imagen de Python sobre la que vamos a trabajar, es decir, a partir de esta instalaremos las dependencias que queramos. Creamos el siguiente `Dockerfile`

```bash
FROM python:3.11-slim

# Some pip settings to reduce image size and log-spam
ENV PIP_DEFAULT_TIMEOUT=100 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 

# Set the work directory and copy our requirements
WORKDIR /app
COPY requirements.txt ./

RUN pip install -r requirements.txt

# Some system jobs and create a user
RUN set -ex \
    && addgroup --system --gid 1000 user \
    && adduser --system --uid 1000 --gid 1000 --no-create-home user \
    && apt-get update \
    && apt-get upgrade -y \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

USER user
```

En el fichero `requirements.txt` como ya sabes van todas las librerías que vamos a necesitar (aquí va un ejemplo).

```bash
requests==2.28.2
beautifulsoup4>=4.9.3
numpy
```

Ahora construimos la imagen con un

```bash
# docker build -t <nombre imagen>:<tag> <dockerfile>

docker build -t pythondev:latest .
```

## Arrancando la imagen

Si todo a ido bien podemos crear el contenedor con el siguiente comando

```bash
docker run --rm -it \
-v $(pwd)/src:/app \
--name pythondevcontenedor \
pythondev:latest \
/bin/bash
```

Esto lo que hará será crear una nueva instancia de la imagen que hemos construido y mostrar la consola de `IPython`, en la cual podríamos correr el archivo que queremos. 

Otra opción (la que suelo usar) es arrancar una instancia pero la dejo en *detach*, y cuando quiero correr el script o la app entro dentro del contenedor (según el IDE que uses esto lo hace automáticamente). Para hacer esto en vez de usar el comando anterior para crear el contenedor uso este:

```bash
docker run -d --rm -it \
-v $(pwd)/src:/app \
--name pythondevcontenedor \
pythondev:latest \
tail -f /dev/null
```

OjO! Hay que tener en cuenta el *flag* `--rm`, esto implica que cuando paremos el contenedor se borrará automáticamente. Si no queremos esto, creamos dicho contenedor sin este *flag*.

## Desarrollo

Ahora podemos ir desarrollando nuestro código en la carpeta `src` y se ejecutará dentro del contenedor que hemos creado anteriormente. Depende del [IDE](https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado) que estemos usando, nos podremos conectar remotamente al contenedor y aprovechar todas las posibilidades que nos de el IDE. En el caso los de la familia de editores de Jetbrains tendremos que configurar el interprete, con VSCode deberemos de instalar la extensión *dev containers* y con el maravilloso Neovim tenemos que instalar la extensión [nvim-remote-containers](https://github.com/jamestthompson3/nvim-remote-containers).


