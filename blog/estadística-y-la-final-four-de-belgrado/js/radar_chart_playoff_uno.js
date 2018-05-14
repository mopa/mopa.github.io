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
      text: 'Playoff - Datos Normalizados'
    }
};

var dataLiteracy2 = {
    labels: ["3PA", "3PM", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "CSKA",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.581,0.200,0.741,0.423,0.932,0.250,0.786,0.769,0.679,1.000]
        }, {
          label: "Real Madrid",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.349,0.000,0.185,0.269,0.409,0.167,0.571,0.462,0.964,0.167]
        }, {
          label: "Fenerbahce",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.558,0.600,0.222,0.769,1.000,0.167,0.571,1.000,0.321,0.333]
        }, {
          label: "Zalgiris",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.000,0.067,0.000,0.654,0.636,0.500,0.000,0.231,1.000,0.000]
        }
      ]
};

var ctx2 = document.getElementById("canvas_play_uno");
var myRadarChart2 = new Chart(ctx2, {
    type: 'radar',
    data: dataLiteracy2,
    options: options2
});