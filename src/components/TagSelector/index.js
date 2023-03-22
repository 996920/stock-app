import { InputLabel } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
const TagSelector = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Tags"
        variant="outlined"
        placeholder="Filter by tags"
      />
    </div>
  );
};

export default TagSelector;
