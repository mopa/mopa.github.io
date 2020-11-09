# [Python] Resolver ecuaciones y sistemas de ecuaciones



En ingeniería (y en el ámbito científico en general) es de sobra conocido `Matlab` para resolver ecuaciones, hacer modelado, simulaciones, etc. Pero ya sea por el precio, forma de trabajar, filosofía de software o cualquier otra razón no queramos usarlo y busquemos un reemplazo. Podemos optar por usar [GNU Octave](https://www.gnu.org/software/octave), pero yo me inclino por `Python` + `Jupyter`. Así pues, vamos a ver como podemos resolver ecuaciones, ecuaciones cuadráticas, sistemas de ecuaciones lineales y una pequeña introducción al cálculo simbólico.

## Ecuaciones de segundo grado

Archiconocidas ecuaciones y una forma de resolverlas es con la librería `cmath`, la cual nos permite trabajar con funciones para números complejos. Entonces si tenemos

\\[ ax^2 + bx + c = 0 \\]

donde $ a $, $ b $ y $ c $ son números reales y $ a \neq 0 $. Para resolverla lo haremos mediante
\\[ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\]

de modo que el script sería el siguiente:
```python
import cmath

a = 20
b = 25
c = 5

# Calculamos el discriminante
d = (b**2) - (4*a*c)

# Buscamos las dos soluciones
sol1 = (-b-cmath.sqrt(d))/(2*a)
sol2 = (-b+cmath.sqrt(d))/(2*a)

# Sacamos por pantalla las soluciones
print('Las soluciones son {0} y {1}'.format(sol1,sol2))
```


## Sistemas de ecuaciones lineales

Un ejemplo puede ser el siguiente
```
4x + 3y = 20
-5x + 9y = 26
```

Para resolver este tipo de sistemas vamos a usar matrices, que para resolverlos se representan en la forma $ A X = B $, es decir:
\\[ A = \begin{pmatrix} 4 & 3 \\\ -5 & 9 \end{pmatrix} \\]

\\[ X = \begin{pmatrix} x \\\ y \end{pmatrix} \\]

\\[ B = \begin{pmatrix} 20 \\\ 26 \end{pmatrix} \\]

Por tanto, para saber los valores de $ x $ e $ y $ efectuamos la siguiente operación:
\\[ X = A^{-1} B \\]

Para traducir todo esto a `Python` vamos a usar la librería `NumPy`, ya que nos ofrece los métodos `inv()` y `dot()`, con los que hacer la inversa y la operación punto de las matrices.
```python
import numpy as np

# Introducimos los coeficientes
m_list = [[4, 3], [-5, 9]]
A = np.array(m_list)

# Hacemos la inversa
inv_A = np.linalg.inv(A)

# Operamos
B = np.array([20, 26])
X = np.linalg.inv(A).dot(B)

# Sacamos la solución
print(X)
```

Una alternativa es usar el método `solve()` que directamente nos busca la solución al sistema lineal:
```python
A = np.array([[4, 3], [-5, 9]])
B = np.array([20, 26])
X = np.linalg.solve(A,B)

print(X)
```


## Cálculo simbólico

Si hemos usado Matlab, es sabido que podemos definir variables como *simbólicas*, pues en Python existe una magnifica librería, `SymPy`, que nos permite hacer esto y resolver ecuaciones de una forma muy fácil. Siguiendo con el ejemplo del anterior del sistema de ecuaciones, resolverlo con SymPy sería así:
```python
from sympy import symbols, Eq, solve

# Declaramos las variables
x, y = symbols('x y')

# Definimos las ecuaciones
eq1 = Eq(4*x + 3*y - 20, 0)
eq2 = Eq(-5*x + 9*x -26, 0)

# Resolvemos
solve((eq1,eq2), (x, y))
```

## Conclusiones

Tenemos multitud de opciones para resolver ecuaciones y sistemas de ecuaciones, según sea nuestro problema o el entorno en el que estemos trabajando podemos usar la librería. Sin duda SymPy es lo mas parecido a los que vienen de Matlab, y aunque solo haya realizado un pequeño ejemplo tiene una gran comunidad con la que encontrar soluciones en este campo.







