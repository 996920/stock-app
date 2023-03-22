import React from "react";
import { PieChart, Pie, Legend } from "recharts";
import { useMediaQuery, useTheme } from "@mui/material";
const data = [{ name: "Equity", value: 100, fill: "#3467eb" }];

const renderLegend = (value, entry) => {
  console.log(value, entry);
  return (
    <span style={{ color: "#6b6f70", fontWeight: 500, padding: "10px" }}>
      {value} {entry.payload.value}%
    </span>
  );
};

const AccountChart = () => {
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
        />
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={isSmallScreen ? 30 : 60}
          outerRadius={isSmallScreen ? 40 : 80}
          fill="#3467eb"
          paddingAngle={0}
          dataKey="value"
        />
      </PieChart>
    </div>
  );
};

export default AccountChart;
