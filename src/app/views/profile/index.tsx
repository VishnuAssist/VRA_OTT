
import { Box, Card, CardHeader, Container, Divider, Grid, MenuItem, Select, styled } from "@mui/material"
import Profile from "./profile"
// import { PieChart } from '@mui/x-charts/PieChart';
import Page from "./attendance"

import Line
 from "./linechart"


 const ContentBox = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
 
}));
// const data = [
//   { value: 35, label: 'Task Assigned' },
//   { value: 25, label: 'Task Completed' },
//   { value: 10, label: 'Pending Task' },
 
// ];

// const size = {
//   width: 400,
//   height: 300,
// };

// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 20,
// }));



const index = () => {
  return (
    <>
    <Card>
    <Container sx={{ mt: 3 }} maxWidth="lg">
    <Grid item xs={12} container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}>
<Profile open={false} handleClose={function (): void {
              throw new Error("Function not implemented.");
            } }/>
</Grid>

<Grid item xs={6} 
          
           >

<Page/>
</Grid>
<Grid container spacing={2}>
<Grid item xs={12} md={6} 
          >
            <ContentBox>
       

       <Card sx={{ px: 2, mt:4,py: 2, mb: 1}}>
             
             <Box sx={{display:"flex",justifyContent:"space-between"}}>
             <CardHeader title="Task Activity" />
             <Divider sx={{ mb: 2,backgroundColor:"#E08A6B" }} />
          <Select size="small" defaultValue="This week">
            <MenuItem value="this_month">This week</MenuItem>
            <MenuItem value="last_month">Last week</MenuItem>
          </Select>
          </Box>
          {/* <PieChart series={[{ data,outerRadius:80, innerRadius: 50 }]} {...size}>
      
    </PieChart> */}
              </Card>
              </ContentBox>
            
          </Grid>
          <Grid item xs={12} md={6}>
          
            <Line/>
            </Grid>
            </Grid>
</Container>
</Card>
    </>
  )
}

export default index