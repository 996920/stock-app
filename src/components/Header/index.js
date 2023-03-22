import React from "react";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: isSmallScreen ? "space-between" : "flex-start",
        borderBottom: "1px solid #ccc",
        padding: isSmallScreen ? "5px" : "10px",
      }}
      l
    >
      <BusinessCenterOutlinedIcon
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      />
      <Typography variant="h5"> Holdings </Typography>
      <IconButton
        sx={{
          display: isSmallScreen ? "unset" : "none",
          marginTop: "3px",
        }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
