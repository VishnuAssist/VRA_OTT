import { Box, Card, Grid, MenuItem, TextField, Typography,Select, Divider, CardHeader,useTheme, styled } from "@mui/material";

    import Chart from "./chart";
    import Avatar from '@mui/material/Avatar';
    import Stack from '@mui/material/Stack';
    import InfoIcon from '@mui/icons-material/Info';
    import Mytable from "./table";
import DoughnutChart from "../../dashboard/shared/Doughnut";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flexDirection:"column",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

   
const Heading = () => {
  const { palette } = useTheme();  
  const theme = useTheme();  
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    
                    <StyledCard elevation={6} sx={{backgroundColor:theme.colors.info.main}}>
                        <Typography sx={{ fontSize: 18 ,color:"#FFFFFF"}}>Today's income</Typography>
                        <Typography sx={{ fontSize: 20,color:"#FFFFFF", fontWeight: "bold" }}>$655.00</Typography>
                        </StyledCard>
                   

                </Grid>
                <Grid item xs={12} md={4}>
                    
                    <StyledCard elevation={6} sx={{backgroundColor:theme.colors.success.main}} >
                        <Typography sx={{ fontSize: 18 ,color:"#FFFFFF"}}>Product sold</Typography>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" ,color:"#FFFFFF"}}>22 Items sold</Typography>
                        </StyledCard>
                  


                </Grid>
                <Grid item xs={12} md={4}>
                    
                    <StyledCard elevation={6} sx={{backgroundColor:theme.colors.secondary.main}}>
                        <Typography sx={{ fontSize: 18,color:"#FFFFFF" }}>Today's Customer</Typography>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" ,color:"#FFFFFF"}}>77 Customers</Typography>
                        </StyledCard>
                    

                </Grid>
            
            <Chart/>
            <Mytable/>
            </Grid>
            </Grid>
            <Grid item md={4}>
           <Grid item md={12}>

            <Card sx={{ px: 1, py: 2, mb: 1}}>
           
            <Typography sx={{ fontSize: 20 , display: "flex",  flexDirection: "start"}}>Sales Summary</Typography>
            
            <Box  sx={{display: "flex", alignItems:"center" ,alignSelf: 'flex-start'}}>
        <Typography sx={{ fontSize: 16,}}>Show Summary For</Typography>
        <Select size="small" defaultValue="July 2024">
          <MenuItem value="This Month">July 2024</MenuItem>
          <MenuItem value="Last Month">Jun 2024</MenuItem>
        </Select>
        </Box>
        
       
            
              

              <DoughnutChart
                height="300px"
                
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            
           
           
            
           </Card>
           
           </Grid>
           <Grid item md={12}>
           <StyledCard elevation={6}>
      <CardHeader title="Employees" />
      <Divider />
      <Stack sx={{p:2,width:"100%", display:"flex",justifyContent:"space-between"}} direction="row" spacing={2}>
      <Box sx={{gap:2,display: "flex", flexDirection:"row"}}>
      <Avatar src="/broken-image.jpg" />
      <Box  sx={{display: "flex", alignItems:"center" ,justifyContent:"center",flexDirection:"column"}}>
      <Typography sx={{ fontSize: 15, fontWeight:"bold" }}>Rizwan Ahamed</Typography>
      <Typography sx={{ fontSize: 15 }}>Manager</Typography>
      </Box>
      </Box>
      <InfoIcon fontSize="small" />
    </Stack>
    <Stack sx={{p:2,width:"100%", display:"flex",justifyContent:"space-between"}} direction="row" spacing={2}>
      <Box sx={{gap:2,display: "flex", flexDirection:"row"}}>
      <Avatar src="/broken-image.jpg" />
      <Box  sx={{display: "flex", alignItems:"center" ,justifyContent:"center",flexDirection:"column"}}>
      <Typography sx={{ fontSize: 15, fontWeight:"bold" }}>Rizwan Ahamed</Typography>
      <Typography sx={{ fontSize: 15 }}>Manager</Typography>
      </Box>
      </Box>
      <InfoIcon fontSize="small" />
    </Stack>
    
    
      </StyledCard>
            </Grid>
            </Grid>
            
            
            </Grid>
           

        </>
    )
}
export default Heading;