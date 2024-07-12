import {
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import React, { FC, useState } from "react";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import AssignOption from "./AssignOption";



const Calendar: FC = () => {
 
  const [schedule, setSchedule] = useState(false);
  const openSchedule = () => {
    setSchedule(true);
  };
  const closeSchedule = () => {
    setSchedule(false);
  };

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleFromTimeChange = (event: any) => {
    setFromTime(event.target.value);
  };

  const handleToTimeChange = (event: any) => {
    setToTime(event.target.value);
  };

  const [checked, setChecked] = React.useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  });
  const [employee, setEmployee] = React.useState("");
  const [store, setStore] = React.useState("");
  const [task, settask] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEmployee(event.target.value as string);
    setStore(event.target.value as string);
    settask(event.target.value as string);
  };

  const [assign, setAssign] = useState(false);
  const openAssign = () => {
    setAssign(true);
  };
  const closeAssign = () => {
    setAssign(false);
  };
  return (
    <>
      <Card sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Employee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={employee}
                label="employee"
                onChange={handleChange}
              >
                <MenuItem value={10}>Rizwan</MenuItem>
                <MenuItem value={20}>Hari</MenuItem>
                <MenuItem value={30}>Sheik</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              startIcon={<LayersIcon fontSize="small" />}
              onClick={openSchedule}
              sx={{ px: 10, py: 1.7 }}
            >
              Schedule
            </Button>
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" onClick={openAssign}>calendar option</Button>
          </Grid>
        </Grid>

        
      </Card>

      <Dialog open={schedule} onClose={closeSchedule} maxWidth="xs" fullWidth>
        <DialogContent>
          <Grid container spacing={0.5}>
            <Grid item md={12} sx={{ mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Store</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={store}
                  label="store"
                  onChange={handleChange}
                  // {...register("store")}
                >
                  <MenuItem value={1}>TWG001</MenuItem>
                  <MenuItem value={2}>TWG002</MenuItem>
                  <MenuItem value={3}>TWG003</MenuItem>
                  <MenuItem value={4}>TWG004</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sx={{ mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Task</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={task}
                  label="store"
                  onChange={handleChange}
                  name=""
                  // {...register("store")}
                >
                  <MenuItem value={11}>Cashier</MenuItem>
                  <MenuItem value={12}>Store keeper</MenuItem>
                  <MenuItem value={13}>
                    Customer service representative
                  </MenuItem>
                  <MenuItem value={14}>Shop Assistant</MenuItem>
                  <MenuItem value={15}>Organizes product displays</MenuItem>
                  <MenuItem value={16}>Unloading delivery trucks</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} sx={{ mb: 1 }}>
              <TextField
                fullWidth
                label="From Time"
                type="time"
                value={fromTime}
                onChange={handleFromTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="To Time"
                type="time"
                value={toTime}
                onChange={handleToTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.mon}
                onClick={() => setChecked({ ...checked, mon: !checked.mon })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Monday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.tue}
                onClick={() => setChecked({ ...checked, tue: !checked.tue })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Tuesday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.wed}
                onClick={() => setChecked({ ...checked, wed: !checked.wed })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Wednesday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.thu}
                onClick={() => setChecked({ ...checked, thu: !checked.thu })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Thursday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.fri}
                onClick={() => setChecked({ ...checked, fri: !checked.fri })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Friday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.sat}
                onClick={() => setChecked({ ...checked, sat: !checked.sat })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Saturday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.sun}
                onClick={() => setChecked({ ...checked, sun: !checked.sun })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Sunday</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{}}>
            Schedule
          </Button>
        </DialogActions>
      </Dialog>

      <AssignOption assign={assign} closeAssign={closeAssign}/>
    </>
  );
};

export default Calendar;
