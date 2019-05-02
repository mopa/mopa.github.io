
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
          label: "RMadrid - Liga",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.78,0.88,0.88,0.88,0.96,1.00,0.81,0.72,1.00,0.48]
        }, {
          label: "Joventut - Liga",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.76,0.84,0.83,0.82,0.86,0.82,1.00,0.77,0.92,0.48]
        },{
          label: "RMadrid - C. Copa",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.59,1.00,1.00,0.91,1.00,0.55,0.75,1.00,0.86,1.00]
        }, {
          label: "Joventut - C. Copa",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [1.00,0.73,0.86,0.86,0.87,0.55,0.95,1.00,0.63,0.67]
        }
      ]
};

var ctx = document.getElementById("semis_MAD-JOV");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});