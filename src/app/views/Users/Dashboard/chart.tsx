import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  styled,
  
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const uData = [350, 200, 300, 400, 500, 600];
const pData = [325, 245, 328, 455, 521, 555];
const yData = [340, 275, 350, 500, 580, 595];
const xLabels = ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"];
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const Chart = () => {
  return (
    <>
      <StyledCard elevation={8}>
        <Box
          sx={{
            display: "flex",
            justifyContent:"space-between",
           width:"100%"
          }}
        >
          <CardHeader title="Sales Summary" />
          <Button endIcon={<ArrowRightIcon fontSize="small" />}>View all</Button>
         
        </Box>
        <Divider />
        <CardContent sx={{ width: "100%", p: 2 }}>
          <LineChart
            height={300}
            series={[
              { data: pData, label: "pv" },
              { data: uData, label: "uv" },
              { data: yData, label: "cv" },
            ]}
            xAxis={[{ scaleType: "point", data: xLabels }]}
          />
        </CardContent>
      </StyledCard>
    </>
  );
};

export default Chart;
