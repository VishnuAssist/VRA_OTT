import { Box, Container, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const invoicePill = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={10}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={"18px"} fontWeight={500}>
                Invoice No :
              </Typography>
              <Typography>#DH456443</Typography>
            </Box>
         
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={"18px"} fontWeight={500}>
                Invoice To :
              </Typography>
              <Typography>Vishnu Venkat</Typography>
              <Typography fontSize={"18px"} fontWeight={500}>
                Phone :
              </Typography>
              <Typography>+61 67234832938</Typography>
            </Box>
          </Grid>
          <Grid item md={2} >
         
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={"18px"} fontWeight={500}>
                Invoice Date :
              </Typography>
              <Typography>30/08/2024</Typography>
            </Box>
      
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={"18px"} fontWeight={500}>
                Pay To :
              </Typography>
              <Typography>Assist 360 Restaurant</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default invoicePill;
