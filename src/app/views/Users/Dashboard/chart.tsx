
import { Box, Card, Grid, MenuItem, Select, styled, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [350, 200, 300, 400, 500, 600];
const pData = [325, 245, 328, 455, 521, 555];
const yData=[340,275,350,500,580,595];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));

const Chart = () => {
  return (
    <>
     
    <Grid item xs={12}  md={12}>
    <Grid container spacing={1}>
        
        <StyledCard elevation={8}>
        <Box sx={{display: "flex",  flexDirection: "column",alignSelf: 'flex-start'}}>
        <Typography sx={{ fontSize: 20 ,}}>Sales Summary</Typography>
        <Box  sx={{display: "flex", alignItems:"center" ,alignSelf: 'flex-start'}}>
        <Typography sx={{ fontSize: 16,}}>Show Summary For</Typography>
        <Select size="small" defaultValue="July 2024">
          <MenuItem value="This Month">July 2024</MenuItem>
          <MenuItem value="Last Month">Jun 2024</MenuItem>
        </Select>
        </Box>
        </Box>
        <Box sx={{width:"100%"}}>
        <LineChart
      width={800}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
        { data: yData, label: 'cv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    
</Box>
</StyledCard>
        
        </Grid>
        
           
</Grid>
    </>
  )
}

export default Chart