import { Avatar, Box,  Container, Grid, Paper, Typography,
  
  Button,
  styled} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from '@mui/icons-material/Phone';




const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center"
}));

const Profile = () => {
  return (
   <>
    <Container maxWidth="sm">
      <ContentBox>
      <Paper elevation={3} sx={{ p: 1, mt: 9, backgroundColor:"#ede3e2", display: "flex", justifyContent: "center"}}>
        <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Avatar sx={{ width: 80, height: 80 }}>
              <AccountCircleIcon sx={{ width: 70, height: 70 }} />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Tony Stark
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button variant="contained" startIcon>
              Admin
            </Button>
            </Grid>
          <Grid item xs={12}>
          <Box sx={{ display:"flex", justifyContent:"center",px:"2"}}>
            <MailIcon/>
            <Typography variant="body1">
                tony.stark@gmail.com
              </Typography>
              </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ display:"flex", justifyContent:"center",px:"1"}}>
            <WorkIcon/>
            <Typography variant="body1">
                Manager
              </Typography>
              </Box>
          </Grid>
          <Grid item xs={6}>
          <Box sx={{ display:"flex", justifyContent:"center",px:"1"}}>
            <StoreIcon/>
            <Typography variant="body1">
                TWG001
              </Typography>
              </Box>
          </Grid>
          <Grid item xs={6} md={6}>
          <Box sx={{ display:"flex", justifyContent:"center",px:"1"}}>
            <PhoneIcon/>
            <Typography variant="body1">
                +431 9435942
              </Typography>
              </Box>
          </Grid>
         
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <Button variant="contained" color="error" startIcon={<EditIcon/>}>
              Edit Profile
            </Button>
          </Grid>
          
          
          </Grid>
          
          </Paper>
          </ContentBox>
          </Container>
          
           
          
   </>
  )
}

export default Profile