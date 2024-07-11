import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
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
    Typography,
  } from "@mui/material";
  import React, { FC, useState } from "react";
import Option from "./Option";
  
  interface Props {
    assign: boolean;
    closeAssign: () => void;
  }
  
  const AssignOption: FC<Props> = ({ assign, closeAssign }) => {
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

    const [option,setOption]=useState(false)
    const openOption=()=>{
        setOption(true)
    }
    const closeOption=()=>{
        setOption(false)
    }

    const [overtime,setOvertime]=useState(false)
    const openOvertime=()=>{
        setOvertime(true)
    }
    const closeOvertime=()=>{
        setOvertime(false)
    }
    return (
      <>
        <Dialog open={assign} onClose={closeAssign} maxWidth={"sm"} fullWidth>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField type="datetime-local" defaultValue={dateTime} />
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Shift</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Shift</MenuItem>
                    <MenuItem value={20} onClick={openOption}>Off Day</MenuItem>
                    <MenuItem value={30} onClick={openOvertime}>Overtime</MenuItem>
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

        <Option option={option} closeOption={closeOption} overtime={overtime} closeOvertime={closeOvertime}/>
      </>
    );
  };
  
  export default AssignOption;
  