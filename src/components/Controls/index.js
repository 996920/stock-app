import { Box, Chip, Grid, Tabs, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import DateSelector from "../DateSelector";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TagSelector from "../TagSelector";
import FilterControl from "../FilterControl";
import { useTheme } from "@mui/system";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Controls = ({ selectedItems, setSelectedItems }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="lg"
      spacing={4}
      sx={{
        marginTop: "30px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3} sx>
          <DateSelector />
        </Grid>
        {isSmallScreen ? (
          <Chip label="Equity" />
        ) : (
          <Grid item lg={5}>
            <FilterControl
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </Grid>
        )}
        {isSmallScreen ? (
          <Chip label="Debt" />
        ) : (
          <Grid item lg={3}>
            <TagSelector />
          </Grid>
        )}
        {isSmallScreen ? (
          <Chip label="Equity(MF)" />
        ) : (
          <Grid item lg={1}>
            <Button variant="contained">
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Controls;
