import React from "react";
import Grid from "@mui/material/Grid";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Icon, useMediaQuery, useTheme } from "@mui/material";
function formatAmount(value) {
  var val = Math.abs(value);
  if (val >= 10000000) {
    val = (value < 0 ? "-" : "") + (val / 10000000).toFixed(2) + " Cr";
  } else if (val >= 100000) {
    val = (value < 0 ? "-" : "") + (val / 100000).toFixed(2) + " L";
  }
  return (value < 0 ? "-" : "") + val;
}

const PersonalSummary = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      id="personal-summary"
      container
      sx={{
        borderBottom: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        width: "auto",
      }}
    >
      <Grid
        item
        xs={6}
        md={4}
        sx={{ padding: isSmallScreen ? "10px 0px" : "" }}
      >
        <Box>
          <div>Invested </div>
          <div>
            <span style={{ fontSize: "20px" }}>
              <b>{isSmallScreen ? formatAmount(113143.26) : "1,13,143.26"}</b>
            </span>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={4}
        sx={{ padding: isSmallScreen ? "10px 0px" : "" }}
      >
        <Box>
          <div>{isSmallScreen ? "Current" : "Present value"} </div>
          <div>
            <span style={{ fontSize: "20px" }}>
              <b>{isSmallScreen ? formatAmount(113143.26) : "1,13,143.26"}</b>
            </span>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          borderTop: isSmallScreen ? "1px solid #ccc" : "0px",
          padding: isSmallScreen ? "10px" : "0px",
        }}
      >
        <Box
          sx={{
            display: isSmallScreen ? "flex" : "block",
            justifyContent: isSmallScreen ? "space-between" : "",
          }}
        >
          <div>{isSmallScreen ? "P&L" : "Unrealized P&L"}</div>
          <div style={{ color: "red" }}>
            <span style={{ fontSize: "20px" }}>
              <b>{isSmallScreen ? formatAmount(-7053.28) : "-7,053.28"}</b>
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
