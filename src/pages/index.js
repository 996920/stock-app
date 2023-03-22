import Header from "../components/Header";

import { CssBaseline } from "@mui/material";
import React, { useState } from "react";
import Controls from "@/components/Controls";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Summary from "@/components/Summary";
import SearchResults from "@/components/SearchResults";

import ChartPanel from "@/components/ChartPanel";
import StatisticalData from "@/components/StatisticalData";

const Home = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Header />
        <Controls
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <Summary />
        <SearchResults selectedItems={selectedItems} />

        <ChartPanel />
        <StatisticalData />
      </LocalizationProvider>
    </>
  );
};

export default Home;
