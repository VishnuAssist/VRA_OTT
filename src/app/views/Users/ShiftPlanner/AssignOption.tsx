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
} from "@mui/material";
import React, { FC, useState } from "react";

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
    console.log(age);
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
      <Dialog open={assign} onClose={closeAssign} maxWidth={"sm"} fullWidth>
        <form>
          <DialogContent>
            <Grid container spacing={2}>
              {age !== "offDay" && (
                <Grid item md={12}>
                  <TextField type="datetime-local" defaultValue={dateTime} />
                </Grid>
              )}
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
                    <MenuItem value="shift">Shift</MenuItem>
                    <MenuItem value="offDay">Off Day</MenuItem>
                    <MenuItem value="overtime">Overtime</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {age !== "offDay" && (
                <>
                  <Grid item md={12}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="morning"
                      name="radio-buttons-group"
                    >
                      <Grid container>
                        <Grid
                          item
                          md={6}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <FormControlLabel
                            value="morning"
                            control={<Radio />}
                            label="Morning Shift"
                          />
                        </Grid>
                        <Grid
                          item
                          md={6}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <FormControlLabel
                            value="evening"
                            control={<Radio />}
                            label="Evening Shift"
                          />
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
                </>
              )}
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "green" }}
              fullWidth
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AssignOption;
