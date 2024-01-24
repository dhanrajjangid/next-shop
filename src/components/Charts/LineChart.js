"use client"

import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function LineCart({ options, series }) {
  return (
    <>
    {typeof window !== 'undefined' && 
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />}
    </>
    
  );
}
