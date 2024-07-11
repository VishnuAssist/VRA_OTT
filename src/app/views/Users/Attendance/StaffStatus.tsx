import { Timelapse } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const StaffStatus = () => {
  const data = [
    {
      date: "10-7-2024",
      checkin: "6:30AM",
      checkout: "5:30PM",
      status: "Present",
    },
    {
      date: "19-12-2024",
      checkin: "2:30AM",
      checkout: "9:30PM",
      status: "Leave",
    },
    {
      date: "06-10-2024",
      checkin: "1:30AM",
      checkout: "10:30PM",
      status: "Off Day",
    },
    {
      date: "29-06-2023",
      checkin: "9:30AM",
      checkout: "9:30PM",
      status: "Present",
    },
  ];
  return (
    <>
      <Card sx={{ p: 1, mt: 1 }}>
        <Card sx={{ p: 1 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={2.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Timelapse></Timelapse>
              <Typography>08:00</Typography>
              <Typography>Average Work Hours</Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid
              item
              xs={12}
              md={2.4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Timelapse></Timelapse>
              <Typography>08:00</Typography>
              <Typography>Average Work Hours</Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Timelapse></Timelapse>
              <Typography>08:00</Typography>
              <Typography>Average Work Hours</Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Timelapse></Timelapse>
              <Typography>08:00</Typography>
              <Typography>Average Work Hours</Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item xs={12} md={3} container spacing={0.1}>
              <Grid item md={8}>
                Annual Leave
              </Grid>
              <Grid item md={4}>
                12
              </Grid>
              <Grid item md={8}>
                Brithday Leave
              </Grid>
              <Grid item md={4}>
                12
              </Grid>
              <Grid item md={8}>
                Family care
              </Grid>
              <Grid item md={4}>
                12
              </Grid>
              <Grid item md={8}>
                MC
              </Grid>
              <Grid item md={4}>
                12
              </Grid>
              <Grid item md={8}>
                Emergency Leave
              </Grid>
              <Grid item md={4}>
                12
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ mt: 1, p: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Check In</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((staff)=>(
              <TableRow>
                <TableCell>{staff.date}</TableCell>
                <TableCell>{staff.checkin}</TableCell>
                <TableCell>{staff.checkout}</TableCell>
                <TableCell><Button variant="contained">{staff.status}</Button></TableCell>
              </TableRow>
             )) }
            </TableBody>
          </Table>
        </Card>
      </Card>
    </>
  );
};

export default StaffStatus;
