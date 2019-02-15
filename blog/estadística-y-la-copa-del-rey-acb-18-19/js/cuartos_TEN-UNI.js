
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
          label: "Tenerife - Liga",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.79,0.91,0.96,0.92,0.93,0.98,0.72,0.98,0.88,0.85]
        }, {
          label: "Unicaja - Liga",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.78,0.91,1.00,0.98,0.97,0.68,0.72,0.90,0.88,1.00]
        },{
          label: "Tenerife - C. Copa",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [1.00,1.00,0.86,1.00,1.00,0.50,1.00,0.86,1.00,0.89]
        }, {
          label: "Unicaja - C. Copa",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.75,0.98,0.95,0.90,0.89,1.00,0.81,1.00,0.69,0.49]
        }
      ]
};

var ctx = document.getElementById("cuartos_TEN-UNI");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});