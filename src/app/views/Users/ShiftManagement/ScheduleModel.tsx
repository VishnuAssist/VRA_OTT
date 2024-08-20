import  { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { addStaff, updateStaff } from '../../../Slices/StaffManagementSlice';
import { Shift } from '../../../Models/StaffModel';

interface Props {
  schedule: boolean;
  closeSchedule: () => void;
  selectedStaff: string[];
  existingShiftData?: Shift;
}
interface Props {
  shift: string;
  startTime: string;
  endTime: string;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
}

const ScheduleModel: FC<Props> = ({
  schedule,
  closeSchedule,
  selectedStaff,
  existingShiftData,
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<Shift>();

  useEffect(() => {
    if (existingShiftData) {
      setValue('shift', existingShiftData.shift);
      setValue('startTime', existingShiftData.startTime);
      setValue('endTime', existingShiftData.endTime);
      setValue('mon', existingShiftData.mon ?? false);
      setValue('tue', existingShiftData.tue ?? false);
      setValue('wed', existingShiftData.wed ?? false);
      setValue('thu', existingShiftData.thu ?? false);
      setValue('fri', existingShiftData.fri ?? false);
      setValue('sat', existingShiftData.sat ?? false);
      setValue('sun', existingShiftData.sun ?? false);
    }
  }, [existingShiftData, setValue]);

  const onSubmit = (scheduleData: Shift) => {
    console.log('Submitted data:', scheduleData);
    const finalData = {
      ...scheduleData,
      selectedStaff,
    };

    if (existingShiftData) {
      dispatch(updateStaff(finalData));
    } else {
      dispatch(addStaff(finalData));
    }

    reset();
    closeSchedule();
  };

  return (
    <Dialog
      open={schedule}
      onClose={closeSchedule}
      fullWidth
      maxWidth="sm"
      aria-labelledby="schedule-dialog-title"
    >
      <DialogTitle id="schedule-dialog-title">
        {existingShiftData ? 'Edit Shift' : 'Schedule Time'}
        <IconButton
          edge="end"
          color="inherit"
          onClick={closeSchedule}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="shift-select-label">Shift</InputLabel>
                <Select
                  labelId="shift-select-label"
                  {...register('shift', { required: true })}
                  label="Shift"
                >
                  <MenuItem value="Morning">Morning</MenuItem>
                  <MenuItem value="Afternoon">Afternoon</MenuItem>
                  <MenuItem value="Evening">Evening</MenuItem>
                  <MenuItem value="Flexible">Flexible</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <TextField
                  type="time"
                  label="From Time"
                  {...register('startTime', { required: true })}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <TextField
                  type="time"
                  label="To Time"
                  {...register('endTime', { required: true })}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
              <Grid item xs={4} key={day}>
                <Box display="flex" alignItems="center">
                  <Checkbox
                    {...register(day as keyof Shift)}  // Cast day to keyof Shift
                  />
                  <Typography variant="body2">{day.charAt(0).toUpperCase() + day.slice(1)}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeSchedule} color="primary">
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          {existingShiftData ? 'Update Shift' : 'Schedule'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleModel;
