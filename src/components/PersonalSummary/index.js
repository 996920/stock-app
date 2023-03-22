import React from "react";
import Grid from "@mui/material/Grid";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Icon, useMediaQuery, useTheme } from "@mui/material";

const PersonalSummary = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      id="personal-summary"
      container
      sx={{
        border: "2px solid #ccc",
        padding: "20px",
        margin: "20px",
        width: "auto",
      }}
    >
      <Grid item xs={6} md={4} sx={{ display: isSmallScreen ? "" : "" }}>
        <Box>
          <div>Invested </div>
          <div>
            <span style={{ fontSize: "20px" }}>
              <b>1,13,143.26</b>
            </span>
          </div>
        </Box>
      </Grid>
      <Grid item xs={6} md={4}>
        <Box>
          <div>{isSmallScreen ? "Current" : "Present value"} </div>
          <div>
            <span style={{ fontSize: "20px" }}>
              <b>1,13,143.26</b>
            </span>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: isSmallScreen ? "flex" : "block",
            justifyContent: isSmallScreen ? "space-between" : "",
          }}
        >
          <div>{isSmallScreen ? "P&L" : "Unrealized P&L"}</div>
          <div style={{ color: "red" }}>
            <span style={{ fontSize: "20px" }}>
              <b>-7,053.28</b>
            </span>
            <span style={{ fontSize: "13px", paddingLeft: "10px" }}>
              <b>&#9660; -6.23%</b>
            </span>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PersonalSummary;
