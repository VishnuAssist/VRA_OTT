import React from "react";
import { Box, Card, Grid, styled, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonAddDisabledIcon from "@mui/icons-material/PersonAddDisabled";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": {
    opacity: 0.6,
    fontSize: "44px",
    color: theme.palette.primary.main,
  },
}));
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));
const Form: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} sx={{mt:1}}>
        <Grid item xs={12} md={3}>
          <StyledCard
            elevation={6}
            sx={{ display: "flex", flexDirection: "column",  backgroundColor: "#F8EDE3",
              border: "1px solid",
              boxShadow: "5px 7px #577B8D",
              ':hover': {
                boxShadow: 20, 
              } }}
          >
            <Box sx={{ display: "flex", justifyContent:"space-between",width:"100%", p: 2 }}>
              <GroupsIcon />

              <Typography sx={{ fontSize: 18 }}>Total Staff's</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                200
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly",width:"100%", p: 2 }}>
              <GroupsIcon />

              <Typography sx={{ fontSize: 18 }}>Total stores</Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                30
              </Typography>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#FF6969",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <AccessAlarmsIcon />
                
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>Active Staff's</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  80
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#BB9AB1",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <AssistWalkerIcon />
                
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>Training</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  10
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#B5C18E",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <PersonOffIcon />
                
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>On Leave</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  08
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#F1F1F1",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <PersonAddDisabledIcon />
                 
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>Medical Leave</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  07
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#C4E4FF",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <LightModeIcon />
                 
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>Morning Shift</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  40
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <StyledCard elevation={6} sx={{
                  backgroundColor: "#B6BBC4",
                  border: "1px solid",
                  boxShadow: "5px 7px #869c98",
                  ':hover': {
                    boxShadow: 20, 
                  }
}}>
                <ContentBox>
                  <ModeNightIcon />
                
                </ContentBox>
                <Typography sx={{ fontSize: 18 }}>Evening Shift</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  35
                </Typography>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
