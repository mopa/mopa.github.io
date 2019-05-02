var options2 = {
    responsive: false,
    maintainAspectRatio: true,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 1,
            display: false,
        }
    },
    title: {
      display: true,
      text: 'Temporada Regular - Datos Normalizados'
    }
};

var dataLiteracy2 = {
    labels: ["3PA", "3PM", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "CSKA",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.421,0.747,0.605,1.000,1.000,0.700,0.289,1.000,0.450,0.323]
        }, {
          label: "Real Madrid",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.890,1.000,0.642,0.640,0.739,0.870,0.217,0.704,0.900,0.423]
        }, {
          label: "Fenerbahce",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.326,0.589,0.004,0.383,0.298,0.635,0.448,0.423,0.469,0.261]
        }, {
          label: "Zalgiris",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.000,0.114,0.000,0.499,0.364,0.085,1.000,0.377,0.580,0.293]
        }
      ]
};

var ctx2 = document.getElementById("canvas_reg_uno");
var myRadarChart2 = new Chart(ctx2, {
    type: 'radar',
    data: dataLiteracy2,
    options: options2
});