import React from "react";
import AccountChart from "../AccountChart";
import SectorChart from "../SectorChart";
import { useMediaQuery, useTheme } from "@mui/material";
const Charts = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ display: isSmallScreen ? "block" : "flex" }}>
      <AccountChart />
      <SectorChart />
    </div>
  );
};

export default Charts;
