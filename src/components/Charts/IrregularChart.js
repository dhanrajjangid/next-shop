"use client";

import ReactApexChart from "react-apexcharts";
export default function IrregularChart({ options, series }) {
  return (
    <>
      {typeof window !== "undefined" && series[0]?.name && (
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          width="100%"
        />
      )}
    </>
  );
}
