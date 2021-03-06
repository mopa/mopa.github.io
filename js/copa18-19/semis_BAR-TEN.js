
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
      text: 'Semifinales - Copa del Rey 2018-2019'
    }
};

var dataLiteracy = {
    labels: ["3P%", "2P%", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "BARCELONA - Liga",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [1.00,0.82,1.00,0.89,0.95,0.53,0.81,0.96,1.00,1.00]
        }, {
          label: "TENERIFE - Liga",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.91,0.84,0.97,0.81,0.89,0.49,0.76,0.86,0.87,0.83]
        },{
          label: "BARCELONA - C. Copa",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.89,1.00,0.92,0.91,1.00,1.00,0.67,1.00,0.72,0.77]
        }, {
          label: "TENERIFE - C. Copa",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.90,0.91,1.00,0.89,0.93,0.25,1.00,0.38,0.76,0.96]
        }
      ]
};

var ctx = document.getElementById("semis_BAR-TEN");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});