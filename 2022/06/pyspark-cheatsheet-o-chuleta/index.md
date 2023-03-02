# [PySpark] CheatSheet o Chuleta



Como bien indica el título de este post es para dejar por aquí una chuleta para PySpark.

## Principales comandos

| Acción                                             | Comando                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| Importar SparkSession                              | `from pyspark.sql import SparkSession`                               |
| Crear SparkSession                                 | `spark = SparkSession.builder.appName("MiAplicacion").getOrCreate()` |
| Crear RDD a partir de una lista                    | `rdd = spark.sparkContext.parallelize([1, 2, 3, 4, 5])`              |
| Crear DataFrame a partir de un archivo CSV         | `df = spark.read.csv("archivo.csv", header=True, inferSchema=True)`  |
| Ver los primeros n elementos de un RDD o DataFrame | `rdd.take(5)` / `df.show(5)`                                         |
| Ver el esquema de un DataFrame                     | `df.printSchema()`                                                   |
| Seleccionar columnas de un DataFrame               | `df.select("col1", "col2")`                                          |
| Filtrar un DataFrame                               | `df.filter(df.col1 > 10)`                                            |
| Agrupar y contar elementos en un DataFrame         | `df.groupBy("col1").count()`                                         |
| Crear una nueva columna en un DataFrame            | `df.withColumn("nueva_col", df.col1 + df.col2)`                      |
| Eliminar una columna de un DataFrame               | `df.drop("col1")`                                                    |
| Renombrar una columna de un DataFrame              | `df.withColumnRenamed("col1", "nuevo_nombre")`                       |
| Unir dos DataFrames                                | `df1.join(df2, on="clave")`                                          |
| Crear una tabla temporal a partir de un DataFrame  | `df.createOrReplaceTempView("tabla_temp")`                           |
| Ejecutar una consulta SQL en una tabla temporal    | `spark.sql("SELECT * FROM tabla_temp")`                              |
| Escribir un DataFrame en un archivo CSV            | `df.write.csv("archivo_salida.csv", header=True)`                    |
| Detener la sesión de Spark                         | `spark.stop()`                                                       |


## Transformaciones a un RDD

| Transformación | Descripción                                                                   | Ejemplo                                          |
| -------------- | ----------------------------------------------------------------------------- | ------------------------------------------------ |
| map            | Aplica una función a cada elemento del RDD                                    | `rdd.map(lambda x: x * 2)`                       |
| filter         | Filtra los elementos que cumplan una condición                                | `rdd.filter(lambda x: x > 5)`                    |
| flatMap        | Aplica una función a cada elemento del RDD y devuelve una lista de resultados | `rdd.flatMap(lambda x: [x, x**2])`               |
| distinct       | Elimina los elementos duplicados del RDD                                      | `rdd.distinct()`                                 |
| sample         | Devuelve una muestra aleatoria del RDD                                        | `rdd.sample(withReplacement=True, fraction=0.5)` |
| union          | Une dos RDDs                                                                  | `rdd1.union(rdd2)`                               |
| intersection   | Devuelve los elementos que se encuentran en ambos RDDs                        | `rdd1.intersection(rdd2)`                        |
| subtract       | Elimina los elementos del primer RDD que se encuentran en el segundo RDD      | `rdd1.subtract(rdd2)`                            |
| cartesian      | Crea todas las posibles parejas de elementos entre dos RDDs                   | `rdd1.cartesian(rdd2)`                           |
| sortBy         | Ordena los elementos del RDD según una clave                                  | `rdd.sortBy(lambda x: x, ascending=False)`       |


## Acciones de un RDD

| Acción         | Descripción                                           | Ejemplo                                 |
| -------------- | ----------------------------------------------------- | --------------------------------------- |
| collect        | Devuelve todos los elementos del RDD                  | `rdd.collect()`                         |
| count          | Devuelve el número de elementos del RDD               | `rdd.count()`                           |
| first          | Devuelve el primer elemento del RDD                   | `rdd.first()`                           |
| take           | Devuelve los primeros n elementos del RDD             | `rdd.take(5)`                           |
| top            | Devuelve los n elementos más grandes del RDD          | `rdd.top(5)`                            |
| reduce         | Combina los elementos del RDD aplicando una función   | `rdd.reduce(lambda x, y: x + y)`        |
| foreach        | Aplica una función a cada elemento del RDD            | `rdd.foreach(lambda x: print(x))`       |
| saveAsTextFile | Guarda el RDD en un archivo de texto                  | `rdd.saveAsTextFile("ruta/al/archivo")` |
| countByKey     | Cuenta el número de elementos para cada clave del RDD | `rdd.countByKey()`                      |
| takeOrdered    | Devuelve los n elementos más pequeños del RDD         | `rdd.takeOrdered(5)`                    |


