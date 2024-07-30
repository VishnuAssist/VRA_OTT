
import { Button, Card, CardHeader, Divider, Grid, styled, Typography } from "@mui/material";
import CircularProgressWithLabel from "../../components/progresswithlabel/label";
const ContentBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '16px',
  gap: '16px',
});

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

const Page = () => {
  return (
    <ContentBox>
      <Card sx={{ width: '100%', px: 2, py: 2 }}>
        
        <CardHeader title="Leaves Management" action={<Button color="primary">View all</Button>} />
        
      
        <Divider sx={{ mb: 2,backgroundColor:"#E08A6B" }} />
        <Grid container spacing={2}>
          <LeaveItem item xs={12} sm={6} md={3}>
          <CircularProgressWithLabel color="primary" size={50} value={45}/>
            
            <Typography sx={{fontWeight:"bold"}} variant="body2">Flexi Leave</Typography>
          </LeaveItem>

          <LeaveItem item xs={12} sm={6} md={3}>
          <CircularProgressWithLabel color="success" size={50} value={35}/>
            <Typography sx={{fontWeight:"bold"}} variant="body2">Casual Leave</Typography>
          </LeaveItem>

          <LeaveItem item xs={12} sm={6} md={3}>
          <CircularProgressWithLabel color="warning" size={50} value={75}/>
            <Typography sx={{fontWeight:"bold"}} variant="body2">Medical Leaves</Typography>
          </LeaveItem>

          <LeaveItem item xs={12} sm={6} md={3}>
          <CircularProgressWithLabel color="error" size={50} value={86}/>
            <Typography sx={{fontWeight:"bold"}} variant="body2">Annual Leave</Typography>
          </LeaveItem>
        </Grid>
      </Card>
    </ContentBox>
  );
};

export default Page;
