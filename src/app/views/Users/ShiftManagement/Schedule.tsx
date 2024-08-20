import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Select,
  Typography,
  Paper,
  TextField,
} from '@mui/material';
import { FaSearch, FaEdit } from 'react-icons/fa';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleModel from './ScheduleModel';
import { useSelector } from 'react-redux';
import { Shift, Staff } from '../../../Models/StaffModel';
import { SelectChangeEvent } from '@mui/material';

const Schedule = () => {
  const { userList } = useSelector((state: any) => state.staff);
  const [schedule, setSchedule] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<string[]>([]);
  const [existingShiftData, setExistingShiftData] = useState<any>(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const openSchedule = () => {
    setExistingShiftData(null);
    setSchedule(true);
  };

  const openEditSchedule = (shiftData: any) => {
    setExistingShiftData(shiftData);
    setSchedule(true);
  };

  const closeSchedule = () => {
    setSchedule(false);
    setExistingShiftData(null);
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      setSelectedStaff(userList.map((staff: Staff) => staff.employeeID));
    } else {
      setSelectedStaff([]);
    }
  };

  const handleSelect = (staffId: string) => {
    if (selectedStaff.includes(staffId)) {
      setSelectedStaff(selectedStaff.filter((id) => id !== staffId));
    } else {
      setSelectedStaff([...selectedStaff, staffId]);
    }
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setSelectedRole(event.target.value as string);
  };

  const filteredUserList = selectedRole
    ? userList.filter(
        (staffDetails: Staff) => staffDetails.role === selectedRole,
      )
    : userList;

  return (
    <>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <Typography variant="h5" fontWeight="bold">
              Schedule the Shift
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <FaSearch style={{ color: 'gray', marginRight: 8 }} />
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Checkbox
              checked={selectAll}
              onChange={handleSelectAll}
              color="primary"
            />
            <Typography variant="body1" component="span">
              Select All
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={openSchedule}
              disabled={selectedStaff.length === 0}
            >
              Schedule Shift for Selected
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Select
              native
              value={selectedRole}
              onChange={handleRoleChange}
              fullWidth
            >
              <option value="">All Employees</option>
              <option value="chef">Chef</option>
              <option value="waiter">Waiter</option>
              <option value="manager">Manager</option>
              <option value="cashier">Cashier</option>
            </Select>
          </Grid>
        </Grid>

        {filteredUserList &&
          filteredUserList.map((staffDetails: Staff) => (
            <Paper
              key={staffDetails.employeeID}
              sx={{ p: 2, m: 2, border: '2px solid' }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                  <Checkbox
                    checked={selectedStaff.includes(staffDetails.employeeID || "")}
                    onChange={() => handleSelect(staffDetails.employeeID || "")}
                    color="primary"
                  />
                </Grid>
                <Grid item xs={1}>
                  <Avatar
                    alt={staffDetails?.username }
                    src="https://bit.ly/broken-link"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" fontSize="18px">
                    {staffDetails?.username}
                  </Typography>
                  <Typography variant="body2">{staffDetails?.employeeID}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2">{staffDetails.role}</Typography>
                </Grid>
                {staffDetails?.shiftDetails?.map((shift: Shift, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={3}>
                      <Box>
                        <Typography variant="body2">{shift.shift}</Typography>
                        <Typography variant="body2">
                          {shift.startTime} - {shift.endTime}
                        </Typography>
                        <Typography variant="body2">{shift.day}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={1}>
                      <IconButton
                        size="small"
                        onClick={() => openEditSchedule(shift)}
                        aria-label="Edit schedule"
                      >
                        <FaEdit />
                      </IconButton>
                    </Grid>
                  </React.Fragment>
                ))}
                <Grid item xs={1}>
                  <IconButton
                    size="small"
                    onClick={openSchedule}
                    aria-label="Open schedule"
                  >
                    <CalendarTodayIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Paper>
          ))}
      </Paper>
      <ScheduleModel
        schedule={schedule}
        closeSchedule={closeSchedule}
        selectedStaff={selectedStaff}
        existingShiftData={existingShiftData}
        // Update or remove props according to ScheduleModel's definition
        shift={''}
        startTime={''}
        endTime={''}
        mon={false}
        tue={false}
        wed={false}
        thu={false}
        fri={false}
        sat={false}
        sun={false}
      />
    </>
  );
};

export default Schedule;
