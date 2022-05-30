# [Python] Crear entornos virtuales en Python 3


Una de las formas más seguras y eficientes de desarrollar proyectos en Python es usando entornos virtuales. Podemos hacer todo tipo de perrerías y si no va bien simplemente borramos una carpeta y volvemos a empezar.

Aunque existen varios métodos para tener entornos virtuales, aquí solo vamos a hacerlo de la forma más sencilla posible.

Sabiendo que estamos usando Python 3 (verifica la versión por defecto con`python --version` y si no es la 3, has de usar `python3 --version`) y estamos en la carpeta de nuestro proyecto, ejecutamos
```shell
python -m venv venv
```

en donde el último parámetro `venv` es el nombre que va a recibir la carpeta que va a contener los archivos de nuestro entorno virtual (instalación de librerías, etc.).

Ahora necesitamos **activarlo**
```shell
source venv/bin/activate
```

Una vez hayamos terminado de trabajar en nuestro proyecto, **desactivamos** el entorno con un simple
```shell
deactivate
```

# Instalación de dependencias
Una vez tenemos el entorno virtual creado y activado, pasamos a instalar dependencias con
```shell
pip install <paquete>
```

Sin embargo, si tenemos un fichero `requirements.txt` las podemos instalar con
```shell
pip install -r requirements.txt
```

<img alt="Entornos virtuales en Python" src="/img/python-entornos-virtuales.png" width=800>

