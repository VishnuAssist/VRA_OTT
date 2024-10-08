import { Fragment } from "react";
import { Card, Grid, styled} from "@mui/material";
import PieChart from "./shared1/PieChart";
import BarChart from "./shared1/BarChart";
import LineChart from "./shared1/LineChart";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "20px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));


 function Analytics1() {

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>

           <BarChart/>
           </Card>

          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
             <PieChart/>
            </Card>
          </Grid>
          <Grid item lg={12} md={6} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
             <LineChart/>
            </Card>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
export default Analytics1;