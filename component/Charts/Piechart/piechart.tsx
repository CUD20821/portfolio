"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TooltipItem,
  ChartOptions,
} from "chart.js";
import { Stats } from "@/app/utils/graph";
import "./piechart.css";
import { PieLegend } from "./legend";
import { Doughnut } from "react-chartjs-2";
// import { text } from "stream/consumers";
import { useTheme } from "next-themes";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  graphTitle: string;
  stats: Stats;
  onSelectCategory?: (category: string) => void;
}

const PieChart: React.FC<Props> = ({ graphTitle, stats, onSelectCategory }) => {
  const chartRef = useRef<any>(null);
  const { theme, resolvedTheme } = useTheme();
  const categories = Object.keys(stats);
  const counts = Object.values(stats);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [theme, resolvedTheme]);

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart: any) => {
      const {
        ctx,
        chartArea: { top, width, height },
      } = chart;

      // Lấy số lượng category từ chính dữ liệu hiện tại của chart
      const dynamicCount = chart.data.labels?.length || 0;

      ctx.save();

      const textColor =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--text-2")
          .trim() || "#000";

      // Cấu hình số (Ví dụ: 6)
      const fontSizeNumber = (height / 150).toFixed(2);
      ctx.font = `bold ${fontSizeNumber}em sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = textColor;

      const centerX = width / 2;
      // const centerY = top + (height / 2);
      const centerY = top + height / 2;

      // Vẽ con số dynamic
      ctx.fillText(dynamicCount.toString(), centerX, centerY);

      // Vẽ chữ phụ
      // const fontSizeText = (height / 450).toFixed(2);
      // ctx.font = `${fontSizeText}em sans-serif`;
      // ctx.fillStyle = "#6b7280"; // Màu xám nhạt (Tailwind gray-500)
      // ctx.fillText("category", centerX, centerY + 25);

      ctx.restore();
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderColor: "#fff",
        borderWidth: 1,
        radius: "80%",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    // maintainAspectRatio: false,
    cutout: "70%",
    onClick: (_, elements) => {
      if (!elements.length) return;

      const index = elements[0].index;
      const category = categories[index];
      onSelectCategory?.(category);
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"doughnut">) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = (
              ((value as number) / (total as number)) *
              100
            ).toFixed(1);

            return `${percentage}%(${value})`;
          },
        },
      },
    },
  };

  return (
    <div className="graph-wrap">
      <h1>{graphTitle}</h1>
      <div className="piechart">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <PieLegend
        labels={categories}
        colors={data.datasets[0].backgroundColor as string[]}
      />
    </div>
  );
};

export default PieChart;
