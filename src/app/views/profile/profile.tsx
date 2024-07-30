import {  Box, Container, Grid, Paper, Typography, Button, styled } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';

import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: theme.spacing(4),
}));

const ProfileImage = styled('img')({
  width: 200,
  height: 250,
  borderRadius: 10,
});

const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Profile = () => {
  return (
    <Container maxWidth="md">
      <ContentBox>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: "#e5ffe5", width: "100%", height: "auto" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} sx={{ display: "flex",justifyContent:"center", flexDirection: "column", alignItems: "center" }}>
              <ProfileImage
                src={`https://th.bing.com/th/id/OIP.XgcIj9KkwGpkd8YqE9XxmQHaM7?w=115&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7&auto=format&dpr=2`}
                alt="Profile Image"
              />
              <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                Tony Stark
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", mb: 2 }}>
                <Button variant="contained" color="primary" sx={{ width: 130 }}>
                  Admin
                </Button>
              </Box>
              
              <InfoContainer>
                <InfoItem>
                  <MailIcon  />
                  <Typography sx={{ fontSize: 18 }} variant="body1">tony@gmail.com</Typography>
                </InfoItem>
                <InfoItem>
                  <WorkIcon  />
                  <Typography sx={{ fontSize: 18 }} variant="body1">Manager</Typography>
                </InfoItem>
                <InfoItem>
                  <StoreIcon  />
                  <Typography sx={{ fontSize: 18 }} variant="body1">TWG001</Typography>
                </InfoItem>
                <InfoItem>
                  <PhoneIcon  />
                  <Typography sx={{ fontSize: 18 }} variant="body1">+431 9289432</Typography>
                </InfoItem>
                <InfoItem>
                  <CalendarMonthIcon  />
                  <Typography sx={{ fontSize: 18 }} variant="body1">04/04/2005</Typography>
                </InfoItem>
              </InfoContainer>
             
              <Box sx={{ display: "flex", mt: 2 }}>
                <Button variant="contained" color="error" sx={{ width: 130 }}>
                  Logout
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </ContentBox>
    </Container>
  );
}

export default Profile;
