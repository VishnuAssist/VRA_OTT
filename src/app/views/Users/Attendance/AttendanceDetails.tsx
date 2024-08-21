import React from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Staff } from '../../../Models/StaffModel';

interface AttendanceDetailsProps {
  selectedStaff: Staff | null;
}

const AttendanceDetails: React.FC<AttendanceDetailsProps> = ({ selectedStaff }) => {
  const dummySummary = {
    scheduledHours: '208 hr 30 min',
    workedHours: '215 hr 8 min',
    difference: '+7 hr 30 min',
    incompleteRecords: '2',
    totalDelay: '3 hr 30 min',
    missedShifts: '3',
    absences: '2',
    approvedOT: '+2 hr 20 min',
  };

  return (
    <>
    
      <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              placeholder="January 2023"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon color="action" />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Summary for {selectedStaff?.username || 'No staff selected'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.scheduledHours}</Typography>
              <Typography variant="caption">Scheduled</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.workedHours}</Typography>
              <Typography variant="caption">Worked</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.difference}</Typography>
              <Typography variant="caption">Difference</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.incompleteRecords}</Typography>
              <Typography variant="caption">Incomplete records</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.totalDelay}</Typography>
              <Typography variant="caption">Total delay</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.missedShifts}</Typography>
              <Typography variant="caption">Missed shift</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.absences}</Typography>
              <Typography variant="caption">Absence</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper style={{ padding: 16, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: 8 }}>
              <Typography variant="body1">{dummySummary.approvedOT}</Typography>
              <Typography variant="caption">Approved OT</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

     
        <TableContainer component={Paper} sx={{mt:2}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Scheduled</TableCell>
                <TableCell>Check in</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell>Worked</TableCell>
                <TableCell>Difference</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>01/01/2022</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>9:00 AM</TableCell>
                <TableCell>9:30 AM</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>0:30</TableCell>
                <TableCell>0:30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
     
    </>
  );
};

export default AttendanceDetails;
