"use client";

import { PieChartDataOptions, PieChartSeries } from "@/data/PieChartData";
import { LineChartOptions, LineChartSeries } from "@/data/LineChartData";
import { ColumnChartOptions, ColumnChartSeries } from "@/data/ColumnChartData";
import {
  IrregularChartOptions,
  IrregularChartSeries,
} from "@/data/IrregularChartData";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("@/components/Charts/LineChart"), {
  ssr: false,
});
const PieChart = dynamic(() => import("@/components/Charts/PieChart"), {
  ssr: false,
});
const IrregularChart = dynamic(
  () => import("@/components/Charts/IrregularChart"),
  { ssr: false }
);
const ColumnChart = dynamic(() => import("@/components/Charts/ColumnChart"), {
  ssr: false,
});

export default function ChartsPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <ColumnChart
              options={ColumnChartOptions}
              series={ColumnChartSeries}
            />
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <PieChart options={PieChartDataOptions} series={PieChartSeries} />
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <IrregularChart
              options={IrregularChartOptions}
              series={IrregularChartSeries}
            />
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <LineChart options={LineChartOptions} series={LineChartSeries} />
          </div>
        </div>
      </div>
    </section>
  );
}
