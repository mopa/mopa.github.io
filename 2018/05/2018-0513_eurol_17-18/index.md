# Estadística y la Final Four de Belgrado


{{< scripthtml >}}
<!-- Llamamos a ChartJS y centramos los canvas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
<style media="screen">
canvas {
    padding: 0;
    margin: auto;
    display: block;
    width: 500px;
    height: 400px;
}
</style>
{{< /scripthtml >}}

Ahora que ya tenemos al caer la [Final Four de Belgrado](http://www.euroleague.net/final-four/belgrade-2018), vamos echar un vistazo atrás y ver como ha sido la temporada para los equipos implicados. Empezamos por la temporada regular, es decir, sin contar los *Playoff*. He tomado las siguientes variables:

<div class="tg-wrap"><table><tr><td>3PA</td><td>3-Point Attempted</td><td>3-Puntos Intentados</td></tr><tr><td>3PM</td><td>3-Point Made</td><td>3-Puntos Anotados</td></tr><tr><td>FGA</td><td>Field Goals Attempted</td><td>Tiros de Campo Intentados</td></tr><tr><td>FGM</td><td>Field Goals Made</td><td>Tiros de Campo Anotados</td></tr><tr><td>PTS</td><td>Points</td><td>Puntos</td></tr><tr><td>BLK</td><td>Blocks</td><td>Tapones</td></tr><tr><td>TO</td><td>Turnovers</td><td>Pérdidas</td></tr><tr><td>STL</td><td>Steals</td><td>Robos</td></tr><tr><td>AST</td><td>Assists</td><td>Asistencias</td></tr><tr><td>Def. REB</td><td>Defensive Rebounds</td><td>Rebotes Defensivos</td></tr><tr><td>Off. REB</td><td>Offensive Rebounds</td><td>Rebotes Ofensivos</td></tr></table></div>

<!-- REESCRIBIR COMO UNA PERSONA NORMAL OSTIA!! -->
He elegido estas porque creo que son bastante representativas a la hora de comparar dos equipos. Tras recoger los datos ofrecidos por la web de la *Euroliga*, hago una gráfica tipo *FIFA*, *PES*, etc. Es lo que se suele llamar una *Radar Chart*.

Antes de sacar conclusiones voy a explicar que está representado. En ambas gráficas he tomado la media de la temporada regular 2017/2018. Para la primera se han calculado los valores tomando el 100% como el máximo, y sobre este cuanto corresponde los siguientes valores. En la segunda se normalizan los datos, por lo que el máximo es 1 y el mínimo es 0. De esta forma se aprecian mejor las diferencias, pero no queda tan llamativo como la primera gráfica.

(*Nota*: si se pincha en el color del equipo en la leyenda se oculta dicho equipo)

<!-- Canvas de la Temporada Regular -->
<canvas id="canvas_reg_per" height="400" width="500"></canvas>
&nbsp;

<canvas id="canvas_reg_uno" height="400" width="500"></canvas>

Ahora ya si podemos empezar ha valorar la temporada regular, pero lo haré según los enfrentamiento de semifinales.

<!-- COMPLETAR -->
**CSKA-Real Madrid**. Obviamente el CSKA es el equipo con mayor anotación, tiros de campo anotados y robos por partido. El Real Madrid tiene mayor cantidad de triples anotados pero también intentados, cosa que si lo vemos en el CSKA tienen menos triples anotados pero son más efectivos. Otro aspecto fundamental a favor del Real Madrid son los rebotes defensivos.</p>

**Fenerbahce-Zalgiris**. Al ver las gráficas tenderíamos a decir que el Fenerbahce lo tiene "fácil". Pero si hacemos una lectura tranquilamente veremos que los tiros de campo ambos equipos están igualados, y al porcentaje de triples le pasa lo mismo, pero con una salvedad, el Fenerbahce anota algunos más. Con el tipo de baloncesto actual esto puede suponer la victoria.</p>
&nbsp;

## Playoff
Durante los *Playoff* los equipos pueden haber perdido/recuperado jugadores importantes, cambiado los esquemas por las eliminatorias u otros factores, por lo que resulta interesante observar si ha habido grandes cambios.

<!-- Canvas de la Temporada Regular -->
<canvas id="canvas_play_per" height="400" width="500"></canvas>
&nbsp;

<canvas id="canvas_play_uno" height="400" width="500"></canvas>

**CSKA-Real Madrid**. CSKA mejora en puntos, rebotes ofensivos y tiros de campo, vamos que mejora su parte ofensiva aún dejando un poco atrás el triple. El Real Madrid baja en casi todos los aspectos excepto en el rebote defensivo.

**Fenerbahce-Zalgiris**. Fenerbahce ha seguido en su línea pero mejorando en los tiros y anotación, por contra de no coger tantos rebotes como durante la temporada regular. Zalgiris se ha hecho fuerte en defensa, cogienddo más rebotes, perdiendo menos balones además de anotar más aún no siendo el triple su principal baza.

&nbsp;

## Jugadores
Para terminar voy a hacer un gráfico de burbujas (o *bubble plot*) con algunas de las categorías más relevantes en la estadística. Lo haré para la temporada regular y tomando la media por partido.

### Media en tiros de 2 (en %)
<img src="/img/euro_17-18/Season_2FG.svg" height="400"/>

### Media en tiros de 3 (en %)
<img src="/img/euro_17-18/Season_3FG.svg" height="400"/>

### Media de puntos por partido
<img src="/img/euro_17-18/Season_Puntos.svg" height="400"/>

### Media de rebotes por partido
<img src="/img/euro_17-18/Season_Rebotes.svg" height="400"/>

### Media de asistencias por partido
<img src="/img/euro_17-18/Season_Asistencias.svg" height="400"/>

### Media de robos por partido
<img src="/img/euro_17-18/Season_Robos.svg" height="400"/>



<!-- Scripts de los Radar Charts Temporada Regular -->
<script src="/js/euro17-18/radar_chart_regular_per.js"></script>
<script src="/js/euro17-18/radar_chart_regular_uno.js"></script>

<!-- Scripts de los Radar Charts Playoff -->
<script src="/js/euro17-18/radar_chart_playoff_per.js"></script>
<script src="/js/euro17-18/radar_chart_playoff_uno.js"></script>

