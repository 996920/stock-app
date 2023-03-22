import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";

const options = [
  {
    label: "Equity",
    value: "equity",
  },
  {
    label: "Debt",
    value: "debt",
  },
  {
    label: "Equity (MF)",
    value: "equitymf",
  },
  { label: "Debt (MF)", value: "debtmf" },
];

function getStyles(name, opts) {
  return {
    fontWeight:
      opts.find((opt) => opt.value === name) === -1 ? "normal" : "bold",
  };
}

const FilterControl = ({ setSelectedItems, selectedItems }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedItems(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleDelete = (val) => {
    const filteredValues = selectedItems.filter((value) => value !== val);
    console.log("filetered op", filteredValues);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="filter">Filter</InputLabel>
      <Select
        multiple
        labelId="filter"
        input={<OutlinedInput label="Filter" />}
        value={selectedItems}
        onChange={handleChange}
        renderValue={(selectedValues) => {
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selectedValues.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  // onDelete={(e) => {
                  //   e.stopPropagation();
                  //   handleDelete(value);
                  // }}
                />
              ))}
            </Box>
          );
        }}
      >
        {options.map((opt) => {
          return (
            <MenuItem
              key={opt.value}
              value={opt.label}
              style={getStyles(opt.value, options)}
            >
              {opt.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FilterControl;
