"use client";

import ReactApexChart from "react-apexcharts";
export default function LineCart({ options, series }) {
  return (
    <>
      {typeof window !== "undefined" && (
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      )}
    </>
  );
}
