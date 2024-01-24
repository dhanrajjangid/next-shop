export const LineChartOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Jul", "Aug", "Sep"],
  },
};

export const LineChartSeries = [
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 120, 82, 105],
  },
  {
    name: "Laptops",
    data: [20, 111, 95, 61, 19, 92, 49, 51, 50, 80, 112, 145],
  },
  {
    name: "Chargers",
    data: [10, 200, 20, 160, 55, 192, 15, 51, 99, 30, 80, 200],
  },
];
