import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';

const Form: React.FC = () => {
  return (
    <>
      
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Card sx={{p:1,maxWidth:"100%",border: '1px solid #24665D',display: "flex", justifyContent: "center", alignItems: "center",m:1}}>
        <Typography variant="h5" gutterBottom>
          Staff Management
        </Typography>
        </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ py: 1, height: "100%", maxWidth:"100%",border: '1px solid #24665D', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              
                <Grid item xs={6}>
              <Typography sx={{ fontSize: 18 }}>Total Staff's</Typography>
              <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>200</Typography>
              </Grid>
              
             
              <Typography sx={{ fontSize: 18  }}>Total stores</Typography>
              <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>30</Typography>
              
              
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>Active Staff's</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>80</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>Training</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>10</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>On Leave</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>08</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>Medical Leave</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>07</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>Morning Shift</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>40</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 18 }}>Evening Shift</Typography>
                  <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>35</Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    </>
  );
};

export default Form;
