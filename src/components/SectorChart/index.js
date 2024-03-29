import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { PieChart, Pie, Legend } from "recharts";

const data = [
  { name: "Information", value: 80.19, fill: "#3467eb" },
  { name: "Financials", value: 11.01, fill: "#40a8c2" },
  { name: "Materials", value: 8.78, fill: "#4bd1f2" },
  { name: "Communication", value: 0.01, fill: "#3467eb" },
  { name: "Others", value: 0.0, fill: "#4bf542" },
];

const renderLegend = (value, entry) => {
  return (
    <span style={{ color: "#6b6f70", fontWeight: 500, padding: "10px" }}>
      {value} {entry.payload.value}%
    </span>
  );
};

const SectorChart = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <PieChart
        width={isSmallScreen ? 400 : 700}
        height={isSmallScreen ? 300 : 400}
      >
        <Legend
          height={36}
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          iconSize={10}
          padding={5}
          formatter={renderLegend}
          align="right"
        />
        <Pie
          data={data}
          cx={isSmallScreen ? 90 : 200}
          cy={isSmallScreen ? 180 : 200}
          innerRadius={isSmallScreen ? 50 : 100}
          outerRadius={isSmallScreen ? 80 : 150}
          fill="#3467eb"
          paddingAngle={0}
          dataKey="value"
        />
      </PieChart>
    </div>
  );
};

export default SectorChart;
