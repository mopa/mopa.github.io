
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
          label: "BARçA - Liga",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [1.00,0.88,0.97,0.98,1.00,0.70,1.00,0.85,1.00,1.00]
        }, {
          label: "VALENCIA - Liga",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.88,0.89,0.96,0.90,0.91,0.50,0.98,0.59,0.89,0.97]
        },{
          label: "BARçA - C. Copa",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.87,0.96,1.00,1.00,0.98,0.33,0.49,1.00,0.80,0.58]
        }, {
          label: "VALENCIA - C. Copa",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.87,1.00,0.83,0.78,0.90,1.00,0.99,0.56,0.83,0.29]
        }
      ]
};

var ctx = document.getElementById("cuartos_BAR-VAL");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});