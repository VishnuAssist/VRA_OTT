import { Avatar, Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from '@mui/icons-material/Work';
import StoreIcon from '@mui/icons-material/Store';



const Profile = () => {
  return (
   <>
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 1, mt: 1 }}>
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
          </Grid>
          
          </Paper>
          </Container>
          <Container>
          <Card>
            
            <CardContent>
              <Grid container spacing={2}>
               
                <Grid item xs={6} md={2}  sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                  <Typography variant="h6">Tony Stark</Typography>
                  <Typography>Manager</Typography>
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
            </Container>
          
   </>
  )
}

export default Profile