# [Python] Regresión Lineal



Sigo en mi ruta por ir pasando tareas que hacía en Matlab, y una de las habituales que podemos encontrarnos es una [regresión lineal](ttps://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal?oldformat=true) o una [no lineal](https://es.wikipedia.org/wiki/Regresi%C3%B3n_no_lineal?oldformat=true). Mejor no entro en el debate del porqué no se usa `Python + Numpy +` otras librerías en el ámbito académico, de modo que me limito a describir como poder hacer estas regresiones con `Numpy`.

Supongamos que tenemos los datos en dos `arrays` (ya sea cargando los datos de un `csv`, un archivo de texto o cualquier otra forma), lo único que tenemos que hacer es especificar el grado del polinomio con el que queremos hacer el ajuste. 

Un ejemplo puede ser el siguiente código, donde cargamos `Numpy` renombrándolo a `np`, tenemos los datos en listas y el modelo de regresión lineal lo tenemos con el método `polyfit` (en este especificamos el grado del polinomio). Como podéis observar hay un método llamado `poly1d`, este método lo que hace es construir el polinomio de una dimensión con los coeficientes que ha calculado `polyfit`. Por último con `linspace` creamos un `array` que va de 1 a 5 tomando 100 números (esto lo hago para luego hacer la gráfica).
```python
import numpy as np

# Variables con nuestros datos a analizar
x = [1,2,3,4,5]
y = [10,20,30,40,50]

# Modelo de Regresion Lineal. Especificamos que es de grado 1
regmodel = np.poly1d(np.polyfit(x,y,1))
regline = np.linspace(1,5,100)
```

Si queremos ver los coeficientes del polinomio, podemos hacer
```python
z = np.polyfit(x, y, 1)
print("\nCoeficientes del Polinomio:\n", z)
```


También estaría bien saber el grado de lo buena que es nuestra regresión, el [R cuadrado](https://es.wikipedia.org/wiki/Coeficiente_de_determinaci%C3%B3n?oldformat=true) ( $R^2$ ). Para esto llamamos a la librería `sklearn`,

```python
import numpy as np
from sklearn.metrics import r2_score


# Mostramos el R cuadrado
print(r2_score(y,regmodel(x)))
```

Por último nos quedaría representar los datos junto con la regresión, así que cargamos `matplotlib` y *ploteamos*:
```python
import matplotlib.pyplot as plt

# Representamos los datos con un Scatter
# y la regresion con un plot
plt.scatter(x,y)

plt.plot(regline, regmodel(regline))

plt.show()
```


A partir de estas indicaciones podemos crear nuestra propia plantilla para representar datos junto con la regresión (lineal o no lineal), y así sólo tenemos que aplicarla a un `.csv` o al conjunto de datos que tengamos. 



