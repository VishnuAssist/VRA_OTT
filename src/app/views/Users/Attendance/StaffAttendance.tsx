import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, TextField, InputAdornment, MenuItem, Select, Card, CardContent, Typography, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SelectChangeEvent } from '@mui/material'; // Import SelectChangeEvent
import AttendanceDetails from './AttendanceDetails';
import { Staff } from '../../../Models/StaffModel';

const StaffAttendance = () => {
  const { userList } = useSelector((state: any) => state.staff);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>('');

  // Update the event type to SelectChangeEvent<string>
  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value as string);
  };

  const filteredUserList = selectedRole
    ? userList.filter(
        (staffDetails: Staff) => staffDetails.role === selectedRole,
      )
    : userList;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Typography variant="h6">Employees List</Typography>
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          style={{ marginTop: 16, width: '240px' }}
        />
        <Select
          value={selectedRole}
          onChange={handleRoleChange}
          displayEmpty
          fullWidth
          variant="outlined"
          style={{ marginTop: 16 }}
        >
          <MenuItem value="">All Employees</MenuItem>
          <MenuItem value="chef">Chef</MenuItem>
          <MenuItem value="waiter">Waiter</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="cashier">Cashier</MenuItem>
        </Select>
        {filteredUserList &&
          filteredUserList.map((staffDetails: Staff) => (
            <Card
              key={staffDetails.id}
              style={{ marginTop: 16, cursor: 'pointer' }}
              onClick={() => setSelectedStaff(staffDetails)}
            >
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3} container alignItems="center">
                  <Avatar
                    alt={staffDetails?.username }
                    src="https://bit.ly/broken-link"
                  />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="body1" component="div">
                      <strong>{staffDetails.username}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {staffDetails.role}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
      </Grid>
      <Grid item xs={12} md={9}>
        <AttendanceDetails selectedStaff={selectedStaff} />
      </Grid>
    </Grid>
  );
};

export default StaffAttendance;
