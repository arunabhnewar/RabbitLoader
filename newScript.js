// Speed Score Script
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

// Website visit script
var options = {
  series: [
    {
      name: "Team A",
      type: "column",
      fill: "solid",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Team B",
      type: "area",
      fill: "gradient",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
  ],
  labels: [
    "01/01/2023",
    "02/01/2023",
    "03/01/2023",
    "04/01/2023",
    "05/01/2023",
    "06/01/2023",
    "07/01/2023",
    "08/01/2023",
    "09/01/2023",
    "10/01/2023",
    "11/01/2023",
  ],

  // Chart
  chart: {
    height: 320,
    type: "line",
    // stacked: false,
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#9E9E9E",
  },

  // Datalabels
  dataLabels: {
    enabled: false,
  },

  // Stroke
  stroke: {
    width: 1,
    curve: "smooth",
    lineCap: "round",
  },

  lineCap: "round",

  plotOptions: {
    bar: {
      columnWidth: "16%",
      borderRadius: 2.5,
    },
  },
  colors: ["#00A76F", "#FFAB00"],

  // Fill
  fill: {
    opacity: [0.85, 0.1],
    gradient: {
      shadeIntensity: 0,
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },

  // Grid
  grid: {
    borderColor: "#919EAB33",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },

  // Markers
  markers: {
    size: 0,
    strokeColors: "#FFFFFF",
  },

  // Xaxis
  xaxis: {
    type: "datetime",
    axisBorder: { show: false },
    axisTicks: { show: false },
  },

  yaxis: {
    min: 0,
    color: "#919eab",
    logBase: 20,
    labels: {
      style: {
        colors: ["#919eab"],
        fontSize: "11px",
        fontWeight: 400,
      },
    },
  },

  // Tooltip
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " visits";
        }
        return y;
      },
    },
  },

  // Legend
  legend: {
    show: true,
    fontSize: "13px",
    position: "top",
    horizontalAlign: "right",
    markers: {
      radius: 12,
    },
    fontWeight: 600,
    itemMargin: {
      horizontal: 8,
    },
    labels: {
      colors: "#212b36",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
