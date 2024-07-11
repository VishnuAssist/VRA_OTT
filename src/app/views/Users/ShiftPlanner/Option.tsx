import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
  } from "@mui/material";
  import React, { FC, useState } from "react";
  
  interface Props {
    option: boolean;
    closeOption: () => void;
    overtime:boolean;
    closeOvertime:()=>void;
  }
  
  const Option: FC<Props> = ({ option, closeOption,overtime,closeOvertime }) => {
    
  
    const dateTime = new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60_000
      )
        .toISOString()
        .slice(0, 16);
    
      const [age, setAge] = React.useState("");
    
      const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
      const [fromTime, setFromTime] = useState("");
      const [toTime, setToTime] = useState("");
    
      const handleFromTimeChange = (event: any) => {
        setFromTime(event.target.value);
      };
    
      const handleToTimeChange = (event: any) => {
        setToTime(event.target.value);
      };
    return (
      <>
        <Dialog open={option} onClose={closeOption} maxWidth="sm" fullWidth>
          <DialogTitle>Choose an Option</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Off Day</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Shift"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Shift</MenuItem>
                    <MenuItem value={20}>Off Day</MenuItem>
                    <MenuItem value={30}>Overtime</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', m: 1 }}>
              <Button variant="contained" sx={{ backgroundColor: 'green' }} fullWidth onClick={closeOption}>
                Submit
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
        <Dialog open={overtime} onClose={closeOvertime} maxWidth={"sm"} fullWidth>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField type="datetime-local" defaultValue={dateTime} />
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">OverTime</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Shift</MenuItem>
                    <MenuItem value={20} >Off Day</MenuItem>
                    <MenuItem value={30}>Overtime</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="morning"
                  name="radio-buttons-group"
                >
                  <Grid container>
                    <Grid item md={6} sx={{ display: "flex", alignItems: "center" }}>
                      <FormControlLabel value="morning" control={<Radio />} label="Morning Shift" />
                    </Grid>
                    <Grid item md={6} sx={{ display: "flex", alignItems: "center" }}>
                      <FormControlLabel value="evening" control={<Radio />} label="Evening Shift" />
                    </Grid>
                  </Grid>
                </RadioGroup>
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
          </DialogContent>
          <DialogActions>
            <Box  >
            <Button variant="contained" sx={{backgroundColor:'green'}} fullWidth>Submit</Button>
            </Box>
            </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default Option;
  