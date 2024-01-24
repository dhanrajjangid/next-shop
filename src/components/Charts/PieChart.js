"use client";

import ReactApexChart from "react-apexcharts";

export default function PieChart({ options, series }) {
  return (
    <>
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width={380}
        />
      )}
    </>
  );
}
