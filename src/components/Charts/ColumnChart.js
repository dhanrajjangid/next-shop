"use client";

import ReactApexChart from "react-apexcharts";

export default function ColumnChart({ options, series }) {

  return (
    <>
      {typeof window !== "undefined" && options?.xaxis?.categories?.length > 0 && (
        <ReactApexChart options={options} series={series} type="bar" width="100%" />
      )}
    </>
  );
}
