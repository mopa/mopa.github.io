# [Python/Pandas] Truquitos para ser más ágiles



Una de las operaciones más habituales es importar ficheros. Pero cuando tratamos con alguno que es bien *gordo*, esta simple operación se vuelve una tortura, así que es mejor importar solo algunos datos. 

### read_csv

Comando archiconocido, y uno de sus argumentos es `nrows`. Si añadimos, por ejemplo, `nrows=5` como argumento de ese gran fichero, estaremos importando una pequeña porción.

Si usamos _GNU/Linux_ tenemos el comando `head` para ver las primeras líneas del documento, e.g.:

```bash
head -n 5 data.csv
```

Otra operación para cargar más rápido el documento, sería &laquo;sacar&raquo; las columnas que nos interesan, y si además sabemos el tipo de datos aún más rápida será la carga. Veamos un pequeño ejemplo:
```python
# Cargamos algunas filas del fichero
df = pd.read_csv('data.csv', nrows=5)

# Extraemos la lista de columnas
df.columns.tolist()
```

Esto nos devuelve la lista de columnas, por lo que ahora podemos cargas las columnas que nos interese, además de poder especifica el tipo de datos que es cada una para una carga más rápida:
```python
df = pd.read_csv('data.csv', usecols=['c1', 'c2'], dtype={'c1':str, 'c2':int})
```

Otra ventaja de este último argumento (`dtype`) es que si alguna columna contiene tanto cadenas como números, es la de declarar dicha columna como tipo *string* para no obtener errores cuando tratamos de unir tablas.

&nbsp;

### select_dtypes

Una vez hecho el preprocesamiento de datos, podemos tenemos por defecto distintos tipos de datos en cada columna (`bool`, `int64`, `float64`, etc.), la distribución de los mismos la comprobamos con
```python
df.dtypes.value_counts()
```

Con el anterior comando obtenemos todos los posibles tipos de datos del *dataframe*. Podemos hacer un *sub-dataframe* solo con los tipos de datos que desemos con el siguiente comando:
```python
df.select_dtypes(include=['float64', 'int64'])
```

&nbsp;

### copy

Es obvia su función, pero podríamos pensar para que queremos este comando. Si por ejemplo hacemos una copia de un *dataframe* y se nos ocurre hacerlo así:
```python
import pandas as pd
df1 = pd.DataFrame({ 'a':[0,0,0], 'b': [1,1,1]})
df2 = df1
df2['a'] = df2['a'] + 1
df1.head()
```

El resultdo es que `df1` ha cambiado dado que estamos apuntando al mismo sitio en memoria. Por esta razón necesitamos `.copy()`:
```python
df2 = df1.copy()
```

Otra opción sería
```python
from copy import deepcopy
df2 = deepcopy(df1)
```

&nbsp;

<!--
AÑADIR MÁS COSAS Y CLARIFICARLO
-->
### map

Se usa para hacer transformaciones de datos. Primero definimos un diccionario con las llaves sean los valores antiguos y los valores sean los nuevos valores.
```python
level_map = {1: 'high', 2: 'medium', 3: 'low'}
df['c_level'] = df['c'].map(level_map)
```

Algunos ejemplos: `True`, `False` a 1, 0; definir niveles; etc.


&nbsp;

### value counts

Es un comando para verificar las distribuciones de valores. Por ejemplo, si queremos comprobar los posibles valores y la frecuencia para cada valor individual en la columna `'c'` podemos hacer
```python
df['c'].value_counts()
```

Algunos trucos/argumentos útiles:

+ `normalize = True`: si queremos comprobar la frecuencia en lugar de hacer el recuento.
+ `dropna = False`: si queremos incluir los valores perdidos (*missing values*) en las estadísticas.
+ `df['c'].value_counts().reset_index()`: si queremos convertir la tabla de estadísticas a un *dataframe*.
+ `df['c'].value_counts().sort_index()`: para mostrar las estadísticas ordenadas según los valores de la columna `['c']`.



&nbsp;

### Número de valores perdidos (*missing values*)

Al importar algunos *datasets* o por estar haciendo algún modelo, nos encontrar con los *missing values* en filas o columnas. Usamos `.isnull()` y `.sum()` para contar el número de valores perdidos que hay en las columnas que especifiquemos.
```python
import pandas as pd
import numpy as np

df = pd.DataFrame({ 'id': [1,2,3], 'c1':[0,0,np.nan], 'c2': [np.nan,1,1]})
df = df[['id', 'c1', 'c2']]

df['num_nulls'] = df[['c1', 'c2']].isnull().sum(axis=1)

df.head()
```

&nbsp;

### Seleccionar filas especificando los IDs

En SQL al hacer `SELECT * FROM ... WHERE ID in ('A001', 'C022', ...)` obtenemos los registros de los IDs especificados. Para hacer lo mismo en Pandas:
```python
df_filter = df['ID'].isin(['A001','C022',...])
df[df_filter]
```

&nbsp;

### Grupos de percentiles

Tenemos una columna numérica y queremos clasificar los valores en dicha columna en grupos, digamos que el 5% superior en el grupo 1, 5-20% en el grupo 2, 20-50% en el grupo 3 y el 50% inferior en el grupo 4. 
```python
import numpy as np

cut_points = [np.percentile(df['c'], i) for i in [50, 80, 95]]

df['group'] = 1

for i in range(3):
    df['group'] = df['group'] + (df['c'] < cut_points[i])
# or <= cut_points[i]
```

Otra opción sería con `pandas.cut()`.


&nbsp;

### to_csv

Comando utilizado por todos/as, pero veamos un par de trucos adicionales. El primero es,
```python
print(df[:5].to_csv())
```

Imprime las primeras cinco filas pero de la forma exacta en que se guardan.

El segundo truco es al tratar con números enteros y valores perdidos mezclados. Si una columna tienen tanto valores enteros como perdidos, el tipo de dato sería flotante en lugar de entero. Cuando exportamos la tabla podemos añadir el argumento `float_format='%.0f'` para redondear todos los flotantes a enteros.


&nbsp;

### Muestras aleatorias

En algunos casos queremos ver una muestra aleatoria de más de una fila. Si por ejemplo queremos una muestra de tamaño 200 hacemos
```python
df.sample(n=200).head(10)
```

Otra forma de hacerlo es con NumPy:
```python
import numpy as np

rows = np.random.choice(df.index.values, 200)
df200 = df.loc[rows]
df200.head()
```


&nbsp;


Referencias:

+ [10 Python Pandas tricks that make your work more efficient](https://towardsdatascience.com/10-python-pandas-tricks-that-make-your-work-more-efficient-2e8e483808ba)
+ [How to use Pandas sample to select rows and columns](http://www.pybloggers.com/2018/11/how-to-use-pandas-sample-to-select-rows-and-columns/)
+ [Python Data Science Handbook, Jake VanderPlas](https://jakevdp.github.io/PythonDataScienceHandbook/)

