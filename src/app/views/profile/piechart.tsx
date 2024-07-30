
import { Box,  Card, CardHeader,  Divider, Grid, MenuItem, Select, styled, } from '@mui/material';

const uData = [4000, 3000, 2000, 2780, 1890, ];


const xLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',

];
const LeaveItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

const ContentBox = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
   
  }));
const Chart = () => {
  return (
    <>
    
    <ContentBox>
       

     <Card sx={{ px: 2, mt:4,py: 2, mb: 1}}>
           
           <Box sx={{display:"flex",justifyContent:"space-between"}}>
           <CardHeader title="Task Activity" />
     <Divider />
        <Select size="small" defaultValue="This week">
          <MenuItem value="this_month">This week</MenuItem>
          <MenuItem value="last_month">Last week</MenuItem>
        </Select>
        </Box>
 {/* <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: '10 New Task Assigned ' },
            { id: 1, value: 15, label: '15 Task Completed ' },
            { id: 2, value: 20, label: '20 Task Due ' },
          ],
        },
      ]}
      width={600}
      height={300}
    /> */}
     
            
  </Card>
  
  {/* <Card sx={{ width: '100%', px: 2, py: 2,mt:2 }}>
        
        <CardHeader title="Task Activity" action={<Button color="primary">View all</Button>} />
        
      
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <LeaveItem item xs={12} sm={6} md={4}>
          
          <CircularProgressWithLabel color="error" size={100} value={65}/>
            
            <Typography variant="body2">Assigned Task:25</Typography>
           
          </LeaveItem>
          <LeaveItem item xs={12} sm={6} md={4}>
          
          <CircularProgressWithLabel color="success" size={100} value={45}/>
            
            <Typography variant="body2">Task Completed:15</Typography>
            
          </LeaveItem>
          <LeaveItem item xs={12} sm={6} md={4}>
          
          <CircularProgressWithLabel color='warning' size={100} value={25}/>
            
            <Typography variant="body2">Task Due:10</Typography>
            
          </LeaveItem>



</Grid>
        </Card> */}
  </ContentBox>
  
  
    </>
  )
}

export default Chart