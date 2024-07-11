
import {
  Avatar,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StaffStatus from "./StaffStatus";

const StaffRole = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
    
        <Container>
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "row-reverse",mt:1 }}
          >
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              style={{ marginBottom: "1px" }}
            />
          </Grid>

          <Card>
            
            <Card sx={{p:1,mt:1}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={1} sx={{display:"flex" ,alignItems:'center'}}>
                  <Avatar></Avatar>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Typography variant="h6">Vishnu</Typography>
                  <Typography>cashier</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Employee ID</Typography>
                  <Typography>6767112</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Joining Date</Typography>
                  <Typography>june 12</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Store</Typography>
                  <Typography>BBWE</Typography>
                </Grid>
              </Grid>
            </Card>
          </Card>
          <StaffStatus/>
        </Container>
      
    </>
  );
};

export default StaffRole;
