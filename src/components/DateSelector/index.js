import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";

const DateSelector = () => {
  const [date, setDate] = useState(moment());

  const handleDateChange = (data) => {
    setDate(data);
  };

  return (
    <DatePicker
      format="YYYY-MM-DD"
      label="Date"
      value={date}
      onChange={handleDateChange}
      sx={{ width: "100%" }}
    />
  );
};

export default DateSelector;
