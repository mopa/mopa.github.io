
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
      text: 'Cuartos de Final - Copa del Rey 2018-2019'
    }
};

var dataLiteracy = {
    labels: ["3P%", "2P%", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "RMadrid - Liga",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.78,1.00,0.90,0.88,0.95,1.00,1.00,0.82,0.87,0.59]
        }, {
          label: "Estudiantes - Liga",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.69,0.93,0.92,0.85,0.87,0.63,0.91,0.99,0.78,0.62]
        },{
          label: "RMadrid - C. Copa",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [1.00,0.88,1.00,1.00,1.00,0.82,0.83,1.00,1.00,1.00]
        }, {
          label: "Estudiantes - C. Copa",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.69,0.77,0.93,0.74,0.67,0.82,1.00,0.57,0.61,0.47]
        }
      ]
};

var ctx = document.getElementById("cuartos_MAD-EST");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});