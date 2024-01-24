"use client"

import Chart from "react-apexcharts";
export default function ColumnChart({options,series}) {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="100%"
    />
  );
}
