import { Padding } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StockInfo = (props) => {
  console.log(props.stock);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        borderBottom: "1px solid  #ccc",
        width: "100%",
        margin: "0px 20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <span style={{ color: "#aaa" }}>Qty. </span>
            {props.stock.qty}
          </Box>
          &#9642;
          <Box sx={{ paddingLeft: "3px", color: "#aaa" }}>Buy avg. </Box>
          <Box>
            <span>{props.stock.buyAvg}</span>
          </Box>
        </Box>
        <Box>
          <span
            style={{
              color: props.stock.profitAndLossChg > 0 ? "#0b7522" : "#cf151e",
            }}
          >
            {props.stock.profitAndLossChg > 0 ? "+" : ""}
            {props.stock.profitAndLossChg}%
          </span>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Box sx={{ fontSize: "20px" }}>
          <b>{props.stock.name}</b>
        </Box>
        <Box>
          <span
            style={{
              color: props.stock.profitAndLoss > 0 ? "#0b7522" : "#cf151e",
            }}
          >
            {props.stock.profitAndLoss > 0 ? "+" : ""}
            {props.stock.profitAndLoss}
          </span>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ color: "#aaa" }}> Invested &nbsp;</Box>
          <Box>{props.stock.buyAvg}</Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ color: "#aaa" }}>LTP</Box>
          &nbsp;
          <Box>{props.stock.ltp}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StockInfo;
