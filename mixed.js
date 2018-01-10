new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Mumbai",
          type: "line",
          borderColor: "Red",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Delhi",
          type: "line",
          borderColor: "Orange",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Mumbai",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Delhi",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: ' Below Poverty Line(thousand): Mumbai & Delhi'
      },
      legend: { display: false }
    }
});
