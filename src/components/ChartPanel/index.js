import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Charts from "../Charts";
import FormControl from "@mui/material/FormControl";
import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Radio from "@mui/material/Radio";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: isSmallScreen ? "block" : "flex",
          justifyContent: "space-between",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" Overview" {...a11yProps(0)} />
          <Tab label="Treem map" {...a11yProps(1)} />
          <Tab label="Insights " {...a11yProps(2)} />
        </Tabs>
        <Box>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Current"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Invested"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      {value === 0 ? <Charts /> : null}
    </Box>
  );
}
