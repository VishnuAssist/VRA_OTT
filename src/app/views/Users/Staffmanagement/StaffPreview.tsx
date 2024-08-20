import  { FC } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Staff } from '../../../Models/StaffModel';

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: Staff | null;
}

const StaffPreview: FC<Props> = ({ preview, closePreview, PreviewDetails }) => {
  console.log('hello', PreviewDetails);

  return (
    <Dialog
      open={preview}
      onClose={closePreview}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary">
            Preview Staff
          </Typography>
          <Box>
            <Button variant="contained" color="primary">
              Attendance Status
            </Button>
            <IconButton
              edge="end"
              color="inherit"
              onClick={closePreview}
              sx={{ position: 'absolute', right: 16, top: 16 }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">Staff Name:</Typography>
            <Typography variant="body1">{PreviewDetails?.username}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">Employee ID:</Typography>
            <Typography variant="body1">{PreviewDetails?.employeeID}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">Email:</Typography>
            <Typography variant="body1">{PreviewDetails?.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">Contact Number:</Typography>
            <Typography variant="body1">{PreviewDetails?.phone}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" fontWeight="bold">Role:</Typography>
            <Typography variant="body1">{PreviewDetails?.role}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={closePreview} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StaffPreview;
