import moment from "moment"; // Import the moment library
export const IrregularChartOptions = {
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#8e8da4",
      },
      offsetX: 0,
      formatter: function (val) {
        return (val / 1000000).toFixed(2);
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    type: "datetime",
    labels: {
      rotate: -15,
      rotateAlways: true,
      formatter: function (val) {
        return moment(val).format("DD MMM YYYY");
      },
    },
  },
  title: {
    text: "Market Share Trend",
    align: "left",
    offsetX: 14,
  },
  tooltip: {
    shared: true,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetX: -10,
  },
};
export const IrregularChartSeries = [
  {
    name: "series-1",
    data: [
      [new Date("01/01/2014").getTime(), 30],
      [new Date("01/02/2014").getTime(), 40],
      [new Date("01/03/2014").getTime(), 45],
      [new Date("01/04/2014").getTime(), 50],
      [new Date("01/05/2014").getTime(), 49],
      [new Date("01/06/2014").getTime(), 60],
      [new Date("01/07/2014").getTime(), 50],
      [new Date("01/08/2014").getTime(), 41],
    ],
    type: "area",
  },
  {
    name: "series-2",
    data: [
      // [new Date("01/01/2014").getTime(), 0],
      // [new Date("01/02/2014").getTime(), 0],
      // [new Date("01/03/2014").getTime(), 0],
      [new Date("01/04/2014").getTime(), 25],
      [new Date("01/05/2014").getTime(), 30],
      [new Date("01/06/2014").getTime(), 45],
      [new Date("01/07/2014").getTime(), 32],
      [new Date("01/08/2014").getTime(), 19],
      // [new Date("01/12/2014").getTime(), 0],
      // [new Date("01/13/2014").getTime(), 0],
      // [new Date("01/14/2014").getTime(), 0],
    ],
    type: "area",
  },
  {
    name: "series-3",
    data: [
      // [new Date("01/01/2014").getTime(), 0],
      // [new Date("01/02/2014").getTime(), 0],
      // [new Date("01/03/2014").getTime(), 0],
      // [new Date("01/04/2014").getTime(), 0],
      // [new Date("01/05/2014").getTime(), 0],
      [new Date("01/06/2014").getTime(), 55],
      [new Date("01/07/2014").getTime(), 42],
      [new Date("01/08/2014").getTime(), 29],
      [new Date("01/14/2014").getTime(), 75],
    ],
    type: "area",
  },
];
