import React from "react";
import WestIcon from "@mui/icons-material/West";
import { color } from "@mui/system";

const SearchResults = ({ selectedItems }) => {
  return (
    <>
      {selectedItems.length > 0 ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <WestIcon sx={{ color: "blue" }} />
            Showing results for{" "}
          </span>
          {selectedItems.map((item, index) => (
            <span key={item}>
              {item}
              {index === selectedItems.length - 1 ? "" : ", "}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchResults;
