import React from 'react';
import { Card, Grid, Typography } from '@mui/material';

const Form: React.FC = () => {
  return (
    <>
      <Card>
        <Typography variant="h5" gutterBottom>
          Staff Management
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Card sx={{ p: 1, height: "100%", border: '1px solid black', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <Typography sx={{ fontSize: 25 }}>Total Staff's</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>200</Typography>
              <Typography sx={{ fontSize: 25 }}>Total stores</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>30</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>Active Staff's</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>80</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>Training</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>10</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>On Leave</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>08</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>Medical Leave</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>07</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>Morning Shift</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>40</Typography>
                </Card>
              </Grid>
              <Grid item xs={4} lg={4}>
                <Card sx={{ p: 1, height: "100%", border: '1px solid black', textAlign: "center", flexDirection: "column" }}>
                  <Typography sx={{ fontSize: 25 }}>Evening Shift</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>35</Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Form;
