// progress_percentage_score
var options1 = {
  chart: {
    height: 280,
    type: "radialBar",
  },
  series: [75, 44],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "60%",
      },

      dataLabels: {
        name: {
          show: true,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontWeight: 600,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: true,
          label: "Total",
          color: "#637381",
          fontSize: "12px",
          fontWeight: 600,
          formatter: function (w) {
            return (
              //   w.globals.seriesTotals.reduce((a, b) => {
              //     return a + b;
              //   }, 0) / w.globals.series.length
              `2,234`
            );
          },
        },
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#00CC66", "#FFAA33"],
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["After", "Before"],
  colors: ["#00CC66", "#FFAA33"],
  legend: {
    show: true,
    fontSize: "13px",
    position: "bottom",
    horizontalAlign: "center",
    paddingTop: 1,
    markers: {
      radius: 12,
    },
    fontWeight: 600,
    itemMargin: {
      horizontal: 8,
    },
    labels: {
      colors: "#000000",
    },
  },
};

new ApexCharts(
  document.querySelector("#progress_percentage_score"),
  options1
).render();
