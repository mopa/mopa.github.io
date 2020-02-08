# Estadística y la Copa del Rey ACB 18-19



{{< scripthtml >}}
<!-- Llamamos a ChartJS y centramos los canvas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
<style media="screen">
canvas {
    padding: 0;
    margin: auto;
    display: block;
    width: 600px;
    height: 500px;
}
</style>
{{< /scripthtml >}}

El deporte y los datos, que gran combinación ;-) La copa del rey de baloncesto es una competición al más puro estilo de la *final four* de la Euroliga, por ello y como ya hice anteriormente, vamos a analizar los partidos mediante una gráfica tipo *PES*, *FIFA*, etc. Para ello tomamos las siguientes variables:

| 3PA      | 3-Point Attempted     | 3-Puntos Intentados       |
|----------|-----------------------|---------------------------|
| 3PM      | 3-Point Made          | 3-Puntos Anotados         |
| FGA      | Field Goals Attempted | Tiros de Campo Intentados |
| FGM      | Field Goals Made      | Tiros de Campo Anotados   |
| PTS      | Points                | Puntos                    |
| BLK      | Blocks                | Tapones                   |
| TO       | Turnovers             | Pérdidas                  |
| STL      | Steals                | Robos                     |
| AST      | Assists               | Asistencias               |
| Def. REB | Defensive Rebounds    | Rebotes Defensivos        |
| Off. REB | Offensive Rebounds    | Rebotes Ofensivos         |


&nbsp;

Estas variables son muy usuales y representativas a la hora de comparar dos equipos de un vistazo y sin entrar en demasiados detalles.

Voy a analizar cada partido, y los datos a representar son la media de la liga regular 2018 /2019 junto con las estadísticas del partido en cuestión. Esto lo hago así para ver lo que se esparaba que hiciera el equipo y lo ha pasado en el partido. No voy a normalizar los datos, si no que tomaré a los dos equipos que se enfrentan en las distintas eliminatorias y sobre la máxima entre la media de liga y los datos del partido hago el baremo. Todos los datos son los ofrecidos por la ACB.

&nbsp;

### Cuartos de Final: Iberostar Tenerife - Unicaja

Primer partido disputado y primera sorpresa. Tras la buena racha que traía Unicaja, se espera otro resultado, veamos la gráfica:

(*Nota*: si se pincha en el color del equipo en la leyenda se oculta dicho equipo)

<canvas id="cuartos_TEN-UNI" height="500" width="600"></canvas>

Lo que se esperaba: Unicaja a priori estaba un poquito por encima, anota más (mayores tiros de campo convertidos y puntos por partido) y coge más rebotes ofensivos que siempre es un *plus*. En cambio Iberostar Tenerife defiende mejor y mantiene el mismo porcentaje de 3 y 2 puntos que Unicaja.

Lo que pasó: La solidez y acierto desde el línea de tres del Iberostar Tenerife se impuso al equipo malagueño. Si además de esos factores sumamos como se ve en la gráfica el buen hacer en el rebote tanto defensivo como ofensivo y los tiros de campo convertidos del Tenerife, el Unicaja estuvo casi a merced de los tinerfeños.

&nbsp;

### Cuartos de Final: Barça Lassa - Valencia Basket

Segundo partido y los 3 últimos minutos agotaron al Valencia. El Barça llega líder de la liga y su experiencia en este tipo de partidos se impuso a un Valencia que aguantó hasta los minutos finales.

<canvas id="cuartos_BAR-VAL" height="500" width="600"></canvas>

Lo que se esperaba: Un Barça que impusiera su ritmo de principio a fin. Mejores en rebote (defensivo y ofensivo), en porcentaje de tiro de tres, puntos anotados, tiros de campo y defensa.

Lo que pasó: El Valencia salió con más ganas y con un puntito de más en defensa, pero se impuso el acierto en tiros de campo de los catalanes y su experiencia. Cabe destacar las pérdidas en momentos muy importantes del partido por parte del Valencia.

&nbsp;

### Cuartos de Final: K. Baskonia - D. S. Joventut

Tercer partido de copa al ritmo de Nico Laprovittola. Todo el partido estuvo a su merced y se jugaba a lo que él queria. El equipo vitoriano salió a medio gas y terminó a remolque del base argentino del Joventut.

<canvas id="cuartos_BKN-JOV" height="500" width="600"></canvas>

Lo que se esperaba: Un partido competido que se que se decidiera en el último cuarto. Aún con las ausencias de Shengelia y Granger, los baskonistas podían haber ganado, prueba de ello es la defensa que llevan haciendo durante toda la liga junto con la anotación.

Lo que pasó: Laprovittola. Salió con ganas de ganar y hacer historia en la copa y lo consiguió. La *penya* quiso ganar desde el principio y estuvo por encima en todos los aspectos. Laprovittola junto con Todorovic sentenciaron al Baskonia que desde el primer cuarto salió perdido y sin saber que hacer para ganar.

&nbsp;

### Cuartos de Final: Real Madrid - M. Estudiantes

Cuarto partido y último partido de los cuartos de final. Ilusión estudiantil por ganar de nuevo a su eterno rival (como ya hicieron en liga), pero Campazzo, Ayón y compañia pusieron tierra de por medio antes de lo previsto. 

<canvas id="cuartos_MAD-EST" height="500" width="600"></canvas>

Lo que se esperaba: Un partido algo más igualado de lo esperado y que el Estudiantes sacara más garra. Por otra parte el Madrid sigue en su línea de juego y control del partido.

Lo que pasó: Un Madrid arrollador que no dió ninguna opción al Estudiantes. 

&nbsp;

### Semifinal: Barça Lassa - I. Tenerife

Primer partido de las semifinales y primera gran polémica de la copa. A priori los catalanes llegan con ventaja en aspectos muy vitales del juego: rebote, anotación y porcentaje en tiros de tres. 

<canvas id="semis_BAR-TEN" height="500" width="600"></canvas>

El partido como se preveia lo dominó el Barça con una gran defensa, aprovechando las malas decisiones de tiro por parte del Tenerife junto con una defensa blanda. Pero llegó el último cuarto y con él un arreón de los tinerfeños que los puso a dos posesiones de empatar el partido. Prueba de ello es el rebote ofensivo y el porcentaje de triple. Una técnica muy discutido a falta de un minuto marcó la diferencia y la polémica.


&nbsp;

### Semifinal: Real Madrid - D. S. Joventut

Segunda semifinal con sabor amargo para el Joventut después del gran partido de cuartos. Se esperaba una mejor defensa de los catalanes, pero la buena defensa vino por parte del Madrid. 

<canvas id="semis_MAD-JOV" height="500" width="600"></canvas>

Como se puede apreciar en la gráfica, el partido estuvo marcado por el rebote madrileño y un buen porcentaje de anotación. En cambio, el Joventut no cerró el poste bajo, perdió demasiados balones y a Nico Laprovittola se le estuvo esperando todo el partido; totalmente desconocido respecto a su anterior aparición.


&nbsp;

### Final: Real Madrid - Barça Lassa

Final con un clásico y mucha polémica. El primer y segundo cuarto muy igualados, llegando empatados al descanso. El tercer cuarto pintaba merengue y el Barça despertó en el último cuarto con un Llull haciendo de las suyas. Las decisiones arbitrales tuvieron un peso demasiado importante en el partido.

<canvas id="final_BAR-MAD" height="500" width="600"></canvas>

Hasta la fecha los dos mejores equipos de la liga se encontraban en otra final. Ambos iguales, pero el factor cancha y la defensa del Madrid preveían la victoria a su favor. Lo que nos escontramos en el partido, es un rebote tanto defensivo como ofensivo dominado por el Madrid, mejor acierto en tiro para el Barça y algo que no aprecia en las gráficas, el mal sabor de boca que deja la actuación arbitral.

**_Actualizado el 17/02/2019_**




{{< scripthtml >}}
<!-- Scripts de los Radar Charts Cuartos de Final -->
<script src="/js/copa18-19/cuartos_TEN-UNI.js"></script>
<script src="/js/copa18-19/cuartos_BAR-VAL.js"></script>
<script src="/js/copa18-19/cuartos_BKN-JOV.js"></script>
<script src="/js/copa18-19/cuartos_MAD-EST.js"></script>

<script src="/js/copa18-19/semis_BAR-TEN.js"></script>
<script src="/js/copa18-19/semis_MAD-JOV.js"></script>

<script src="/js/copa18-19/final_BAR-MAD.js"></script>
{{< /scripthtml >}}

