import React from 'react';
import { Box, Card, Grid, Icon, styled, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": { opacity: 0.6, fontSize: "44px", color: theme.palette.primary.main }
}));
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));
const Form: React.FC = () => {
  return (
    <>
      
        <Grid container spacing={2}>
          <Grid item xs={12}>
          
          </Grid>
          <Grid item xs={12} md={3}>
            {/* <Card sx={{ py: 1, height: "100%", maxWidth:"100%",border: '1px solid #24665D', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}> */}
            <StyledCard elevation={6}>
            <ContentBox>
            <GroupsIcon />
            
            </ContentBox>
              <Typography sx={{ fontSize: 18 }}>Total Staff's</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>200</Typography>
              </StyledCard>
              <StyledCard elevation={6}>
            <ContentBox>
            <GroupsIcon />
            
            </ContentBox>
             
              <Typography sx={{ fontSize: 18  }}>Total stores</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>30</Typography>
              
              
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <AccessAlarmsIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>Active Staff's</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>80</Typography>
                  </StyledCard>
              </Grid>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <AssistWalkerIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>Training</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>10</Typography>
                  </StyledCard>
              </Grid>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <PersonOffIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>On Leave</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>08</Typography>
                  </StyledCard>
              </Grid>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <PersonAddDisabledIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>Medical Leave</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>07</Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <LightModeIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>Morning Shift</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>40</Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={4} lg={4}>
                {/* <Card sx={{ p: 1, height: "100%", border: '1px solid #24665D', textAlign: "center", flexDirection: "column" }}> */}
                <StyledCard elevation={6}>
                <ContentBox>
            <ModeNightIcon />
            <Box ml="12px">

            </Box>
            </ContentBox>
                  <Typography sx={{ fontSize: 18 }}>Evening Shift</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>35</Typography>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    </>
  );
};

export default Form;
