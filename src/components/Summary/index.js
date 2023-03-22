import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import PersonalSummary from "../PersonalSummary";
import FamilySummary from "../FamilySummary";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Summary = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <div id="summary">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab label="Personal" {...a11yProps(0)} />
          <Tab label="Family" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {activeTab === 0 ? <PersonalSummary /> : null}
      {activeTab === 1 ? <FamilySummary /> : null}
    </div>
  );
};

export default Summary;
