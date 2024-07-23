import { Button, Checkbox, Dialog, DialogActions, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface Props {
  schedule: boolean;
  closeSchedule: () => void;
}

const ScheduleModel: FC<Props> = ({ schedule, closeSchedule }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      store: '',
      task: '',
      fromTime: '',
      toTime: '',
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: true,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <Dialog open={schedule} onClose={closeSchedule} maxWidth="xs" fullWidth>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={0.5}>
              <Grid item md={12} sx={{ mb: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="store-select-label">Store</InputLabel>
                  <Select
                    labelId="store-select-label"
                    id="store-select"
                    {...register('store')}
                    label="Store"
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
                  <InputLabel id="task-select-label">Task</InputLabel>
                  <Select
                    labelId="task-select-label"
                    id="task-select"
                    {...register('task')}
                    label="Task"
                  >
                    <MenuItem value={11}>Cashier</MenuItem>
                    <MenuItem value={12}>Store keeper</MenuItem>
                    <MenuItem value={13}>Customer service representative</MenuItem>
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
                  {...register('fromTime')}
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
                  {...register('toTime')}
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
              {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day:any) => (
                <Grid key={day} item md={4} sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    {...register(day)}
                  />
                  <Typography>{day.charAt(0).toUpperCase() + day.slice(1)}</Typography>
                </Grid>
              ))}
            </Grid>

            <DialogActions>
              <Button type="submit" variant="contained">
                Schedule
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleModel;
