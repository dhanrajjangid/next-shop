import Chart from "react-apexcharts";
export default function PieChart({ options, series }) {
  return <Chart options={options} series={series} type="pie" width="100%" />;
}
