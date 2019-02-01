
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
      text: 'Temporada Regular'
    }
};

var dataLiteracy = {
    labels: ["3PA", "3PM", "FGA", "FGM", "PTS","BLK","TO","STL","Def. REB", "Off. REB"],
      datasets: [
        {
          label: "CSKA",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          data: [0.775,0.919,0.956,1.000,1.000,0.835,0.853,1.000,0.885,0.772]
        }, {
          label: "Real Madrid",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(54, 162, 235)",
          data: [0.957,1.000,0.960,0.937,0.963,0.928,0.838,0.890,0.979,0.805]
        }, {
          label: "Fenerbahce",
          fill: true,
          backgroundColor: "rgba(255, 202, 40,0.2)",
          borderColor: "rgb(255, 202, 40)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(255, 202, 40)",
          data: [0.738,0.868,0.889,0.892,0.902,0.799,0.886,0.786,0.889,0.751]
        }, {
          label: "Zalgiris",
          fill: true,
          backgroundColor: "rgba(46,125,50,0.2)",
          borderColor: "rgb(46,125,50)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgb(46,125,50)",
          data: [0.611,0.715,0.889,0.912,0.911,0.496,1.000,0.769,0.912,0.761]
        }
      ]
};

var ctx = document.getElementById("canvas_reg_per");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: dataLiteracy,
    options: options
});