
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  // TextField,
  Typography,
} from "@mui/material";
// import React, { useState } from "react";
import StaffStatus from "./StaffStatus";


const StaffRole = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };
 

  return (
    <>
    
        <Container>
          {/* <Grid
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
          </Grid> */}

          <Card>
            
            <CardContent>
              <Grid container spacing={2}>
                
                <Grid item xs={12} md={1} sx={{display:"flex" ,justifyContent:"center",alignItems:'center'}}>
                  <Avatar sx={{width:70,height:70}}></Avatar>
                </Grid>
                <Grid item xs={6} md={2}  sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Typography variant="h6">Vishnu</Typography>
                  <Typography>cashier</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Typography variant="h6">Employee ID</Typography>
                  <Typography>6767112</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Typography variant="h6">Joining Date</Typography>
                  <Typography>june 12</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Typography variant="h6">Store</Typography>
                  <Typography>BBWE</Typography>
                </Grid>
              
              </Grid>
              </CardContent>
            </Card>
          
          <StaffStatus/>
        </Container>
      
    </>
  );
};

export default StaffRole;
