
import { Box, Card, CardHeader, Divider,  MenuItem, Select, styled } from '@mui/material';
// import { BarChart } from '@mui/x-charts/BarChart';
// const uData = [8.3, 8.30, 8.40, 9.00, 9.10, ];

// const xLabels = [
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',

// ];
const ContentBox = styled("div")(() => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  }));

const Line = () => {
  return (
    <>
    <ContentBox>
    
    <Card sx={{ px: 2, mt:4,py: 2, mb: 1}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
          
          <CardHeader title="Working Hours" />
    <Divider />
       <Select size="small" defaultValue="This week">
         <MenuItem value="this_month">This week</MenuItem>
         <MenuItem value="last_month">Last week</MenuItem>
       </Select>
       </Box>
 {/* <BarChart
     width={500}
     height={300}
     series={[
      
       { data: uData, label: 'hrs', id: 'uvId', stack: 'total' },
       
     ]}
     xAxis={[{ data: xLabels, scaleType: 'band' }]}
   /> */}
   </Card>
   
   </ContentBox>
    </>
  )
}

export default Line