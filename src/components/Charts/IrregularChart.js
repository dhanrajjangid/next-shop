import Chart from "react-apexcharts";
export default function IrregularChart({options,series}) {
  return (
    <Chart
      options={options}
      series={series}
      width="100%"
    />
  );
}
