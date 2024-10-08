import React from 'react';
import { Box, Grid, Typography, Button, styled, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close'; 

interface modelcontent {
  open: boolean;
  handleClose: () => void;
}

const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: theme.spacing(2),
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

const Profile: React.FC<modelcontent> = ({ open, handleClose }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Profile
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: "red",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ContentBox>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                <ProfileImage
                  src={`https://th.bing.com/th/id/OIP.XgcIj9KkwGpkd8YqE9XxmQHaM7?w=115&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7&auto=format&dpr=2`}
                  alt="Profile Image"
                />
                <Typography variant="h5" align="center" sx={{ mt: 2 }}>
                  Tony Stark
                </Typography>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Button variant="contained" color="warning" sx={{ width: 130 }}>
                    Admin
                  </Button>
                </Box>
              </Grid>
              <Grid item sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }} xs={12} sm={6}>
                <InfoContainer>
                  <InfoItem>
                    <MailIcon />
                    <Typography sx={{ fontSize: 18 }} variant="body1">tony@gmail.com</Typography>
                  </InfoItem>
                  <InfoItem>
                    <WorkIcon />
                    <Typography sx={{ fontSize: 18 }} variant="body1">Manager</Typography>
                  </InfoItem>
                  <InfoItem>
                    <StoreIcon />
                    <Typography sx={{ fontSize: 18 }} variant="body1">TWG001</Typography>
                  </InfoItem>
                  <InfoItem>
                    <PhoneIcon />
                    <Typography sx={{ fontSize: 18 }} variant="body1">+431 9289432</Typography>
                  </InfoItem>
                  <InfoItem>
                    <CalendarMonthIcon />
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
          </ContentBox>
        </DialogContent>
        {/* <Box sx={{ textAlign: 'center', p: 2 }}>
          <Button variant="contained" onClick={handleClose} color="error">
            Close
          </Button>
        </Box> */}
      </Dialog>
    </>
  );
};

export default Profile;
