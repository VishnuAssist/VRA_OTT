import { Timelapse } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Attendance, Leaves } from "../../../Models/StaffMangement";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CircularProgressWithLabel from "../../../components/progresswithlabel/label";

const StaffStatus = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { selectedUser } = useSelector((state: any) => state.staff);
  console.log(selectedUser);

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
      <Dialog
        open={open}
        onClose={handleClose}>
        <DialogContent>
          <DialogTitle sx={{display:"flex",justifyContent:"center",fontSize:30}}>Preview</DialogTitle>
          <img style={{width:400}} src="https://templatesgo.com/templates/customizable-annual-request-letter-for-various-reasons_thumb_home.webp" alt="Preview" />
        </DialogContent>
      </Dialog>

      <Card sx={{ p: 1, mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Timelapse />
            <Typography>08:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
<<<<<<< HEAD

          <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Timelapse />
            <Typography>08:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>

          <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Timelapse />
            <Typography>08:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>

          <Grid item xs={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Timelapse />
            <Typography>08:00</Typography>
            <Typography>Average Work Hours</Typography>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ width: '100%', px: 2, py: 2, mt: 2 }}>
        <Typography variant="h6" gutterBottom>Leave Balances</Typography>
        <Divider sx={{ mb: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={<Box>{selectedUser?.leaves?.annualleave || '0'}</Box>} arrow>
              <CircularProgressWithLabel color="primary" size={60} value={selectedUser?.leaves?.annualleave || 0} />
            </Tooltip>
            <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="body2">Annual Leave</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={<Box>{selectedUser?.leaves?.casualleave || '0'}</Box>} arrow>
              <CircularProgressWithLabel color="success" size={60} value={selectedUser?.leaves?.casualleave || 0} />
            </Tooltip>
            <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="body2">Casual Leave</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={<Box>{selectedUser?.leaves?.familycare || '0'}</Box>} arrow>
              <CircularProgressWithLabel color="warning" size={60} value={selectedUser?.leaves?.familycare || 0} />
            </Tooltip>
            <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="body2">Family Care</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={<Box>{selectedUser?.leaves?.medicalleave || '0'}</Box>} arrow>
              <CircularProgressWithLabel color="primary" size={60} value={selectedUser?.leaves?.medicalleave || 0} />
            </Tooltip>
            <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="body2">Medical Leave</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={<Box>{selectedUser?.leaves?.emergencyleave || '0'}</Box>} arrow>
              <CircularProgressWithLabel color="error" size={60} value={selectedUser?.leaves?.emergencyleave || 0} />
            </Tooltip>
            <Typography sx={{ fontWeight: 'bold', mt: 1 }} variant="body2">Emergency Leave</Typography>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ mt: 2, p: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Files</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedUser?.attendance && selectedUser?.attendance.map((staff: Attendance) => (
              <TableRow key={staff.date}>
                <TableCell>{staff.date}</TableCell>
=======
        </Card>
        <Grid item md={12} xs={12}>
        <Card sx={{ mt: 2, p: 1 }}>
        <TableContainer sx={{ overflow: "auto" }}>
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
                <TableCell width={'100%'}>{staff.date}</TableCell>
>>>>>>> 6a0de3eb9ea10000634726f1308ed2d395684cc4
                <TableCell>{staff.checkin}</TableCell>
                <TableCell>{staff.checkout}</TableCell>
                <TableCell><Chip sx={{ backgroundColor: "#81C9BE" }} label={staff.status} /></TableCell>
                <TableCell><IconButton onClick={handleClickOpen}><FolderOutlinedIcon /></IconButton></TableCell>
              </TableRow>
<<<<<<< HEAD
            ))}
          </TableBody>
        </Table>
      </Card>
=======
             )) }
            </TableBody>
          </Table>
          </TableContainer>
        </Card>
        </Grid>
>>>>>>> 6a0de3eb9ea10000634726f1308ed2d395684cc4
    </>
  );
};

export default StaffStatus;
