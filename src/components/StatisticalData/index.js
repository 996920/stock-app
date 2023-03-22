import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import StockInfo from "../StockInfo";

const width1 = 450;
const width2 = 120;
const data = [
  {
    id: 0,
    name: "COALINDIA",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 561,
  },
  {
    id: 1,
    name: "HSCL",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 215,
  },
  {
    id: 2,
    name: "IDEA",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: -215,
  },
  {
    id: 3,
    name: "INE0J1Y01017",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 0,
  },
  {
    id: 4,
    name: "INF109KC11G1",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 2562,
  },
  {
    id: 5,
    name: "LICI",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 0.27,
  },
  {
    id: 6,
    name: "TCS",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: -20,
  },
  {
    id: 7,
    name: "YESbANK",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: 57,
    profitAndLossChg: 36.27,
  },
  {
    id: 8,
    name: "ICICI PRUDENTIAL IVERNIGHT FUND-DIRECT PLAN-MF",
    qty: 1,
    buyAvg: 157.45,
    buyVal: 100,
    ltp: 103,
    presentVal: 214,
    profitAndLoss: -25,
    profitAndLossChg: 36.27,
  },
];

const columns = [
  {
    field: "name",
    headerName: "Symbol",
    width: width1,
  },
  {
    field: "qty",
    headerName: "Qty.",
    width: width2,
  },
  {
    field: "buyAvg",
    headerName: "Buy avg.",
    width: width2,
  },
  {
    field: "buyVal",
    headerName: "Buy value",
    width: width2,
  },
  {
    field: "ltp",
    headerName: "LTP",
    width: width2,
  },
  {
    field: "presentVal",
    headerName: "Present Value",
    width: width2,
  },
  {
    field: "profitAndLoss",
    headerName: "P&L",
    width: width2,
    renderCell: (cellData) => {
      //   console.log(cellData);
      const textColor = cellData.row.profitAndLoss > 0 ? "#0b7522" : "#cf151e";

      return (
        <span style={{ color: textColor }}>{cellData.row.profitAndLoss}</span>
      );
    },
  },
  {
    field: "profitAndLossChg",
    headerName: "P&L chg.",
    width: width2,
    renderCell: (cellData) => {
      //   console.log(cellData);
      const textColor =
        cellData.row.profitAndLossChg > 0 ? "#0b7522" : "#cf151e";

      return (
        <span style={{ color: textColor }}>
          {cellData.row.profitAndLossChg > 0 ? "+" : ""}
          {cellData.row.profitAndLossChg}%
        </span>
      );
    },
  },
];

const StatisticalData = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isSmallScreen ? (
        data.map((stock) => <StockInfo stock={stock} key={stock.id} />)
      ) : (
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSizeOptions={[10]}
            paginationModel={{ page: 0, pageSize: 10 }}
            rowSpacingType="border"
            showColumnVerticalBorder={true}
            showCellVerticalBorder={true}
          />
        </Box>
      )}
    </>
  );
};

export default StatisticalData;
