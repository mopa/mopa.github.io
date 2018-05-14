
var options = {
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
      text: 'Playoff'
    }
};

var dataLiteracy = {
    labels: ["3PA", "3PM", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "CSKA",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.845,0.739,0.972,0.878,0.991,0.500,0.946,0.903,0.910,1.000]
        }, {
          label: "Real Madrid",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [0.759,0.674,0.913,0.846,0.926,0.444,0.893,0.774,0.990,0.655]
        }, {
          label: "Fenerbahce",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.836,0.870,0.917,0.951,1.000,0.444,0.893,1.000,0.810,0.724]
        }, {
          label: "Zalgiris",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.629,0.696,0.893,0.927,0.955,0.667,0.750,0.677,1.000,0.586]
        }
      ]
};

var ctx = document.getElementById("canvas_play_per");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});