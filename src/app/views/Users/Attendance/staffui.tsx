import { Avatar, Card, CardContent, Container, Grid, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import StaffStatus from './StaffStatus'
import { Timelapse } from "@mui/icons-material";

const Staffui = () => {
  return (
    <>
    <Container>
    <Card>
          
          <CardContent>
            
            <Grid container spacing={2}>

           
            
              <>
            

              <Grid item xs={12} md={1} sx={{display:"flex" ,justifyContent:"center",alignItems:'center'}}>

             

                <Avatar sx={{width:70,height:70}}></Avatar>
              </Grid>
              <Grid item xs={6} md={2}  sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Typography variant="h6">Employee Name</Typography>
                <Typography>Role</Typography>
              </Grid>
              <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Typography variant="h6">Employee ID</Typography>
                <Typography>XXXXXX</Typography>
              </Grid>
              <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Typography variant="h6">Joining Date</Typography>
                <Typography>DD/MM/YYYY</Typography>
              </Grid>
              <Grid item xs={6} md={3} sx={{display:"flex" ,justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Typography variant="h6">Store</Typography>
                <Typography>XXXXX</Typography>
              </Grid>
              </>
           
            </Grid>
            </CardContent>
          </Card>
          <Card sx={{ p: 1, mt: 1 }}>
        
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={2.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <Timelapse></Timelapse>
            <Typography>00:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
          
          <Grid
            item
            xs={6}
            md={2.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <Timelapse></Timelapse>
            <Typography>00:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
          
          <Grid
            item
            xs={6}
            md={2.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <Timelapse></Timelapse>
            <Typography>00:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
         
          <Grid
            item
            xs={6}
            md={2.4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center"
            }}
          >
            <Timelapse></Timelapse>
            <Typography>00:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
          
          <Grid item xs={12} md={2.4} container spacing={1} sx={{p:2,display: "flex",justifyContent:"center",alignItems:"center", flexDirection: "row" ,width:"100%"}}>
            <Grid item xs={10} md={8} lg={8}>
              Annual Leave
            </Grid>
            <Grid item xs={1} md={4} lg={4} >
              0
            </Grid>
            <Grid item xs={10} md={8} lg={8}>
              Brithday Leave
            </Grid>
            <Grid item xs={1} md={4} lg={4}>
              0
            </Grid>
            <Grid item xs={10} md={8} lg={8}>
              Family care
            </Grid>
            <Grid item  xs={1} md={4} lg={4}>
              0
            </Grid>
            <Grid item xs={10} md={8} lg={8}>
              MC
            </Grid>
            <Grid item xs={1} md={4} lg={4}>
              0
            </Grid>
            <Grid item xs={10} md={8} lg={8}>
              Emergency Leave
            </Grid>
            <Grid item xs={1} md={4} lg={4}>
              0
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ mt: 2, p: 1,display:"flex",justifyContent:"center",alignItems:"center" }}>
        <Typography sx={{fontSize:30,fontWeight:"bold"}} variant='h6'>No Data</Typography>
      </Card>
    </Container>
    </>
  )
}

export default Staffui