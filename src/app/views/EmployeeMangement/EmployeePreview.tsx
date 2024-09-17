import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Grid,
  Box,
  Avatar,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import {
  Close as CloseIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Work as WorkIcon,
  Grade as GradeIcon,
  Cake as CakeIcon,
  LocationOn as LocationIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import { EmployeeProfile } from '../../Models/EmployeeModel';

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: EmployeeProfile | null;
}

const InfoItem: FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <Box sx={{ mr: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.light', borderRadius: '50%', width: 32, height: 32 }}>
      {React.cloneElement(icon as React.ReactElement, { style: { fontSize: 18 } })}
    </Box>
    <Box>
      <Typography variant="caption" color="text.secondary">{label}</Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  </Box>
);

const EmployeePreview: FC<Props> = ({ preview, closePreview, PreviewDetails }) => {
  if (!PreviewDetails) return null;

  return (
    <Dialog
      open={preview}
      onClose={closePreview}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ p: 0 }}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={closePreview}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'primary.contrastText',
            zIndex: 1
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{
        p: 0,
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none'
      }}>
        <Paper elevation={0} sx={{
          p: 2,
          mb: 2,
          background: theme => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
          color: 'primary.contrastText'
        }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                src={PreviewDetails.picture}
                alt={`${PreviewDetails.firstName} ${PreviewDetails.lastName}`}
                sx={{
                  width: 80,
                  height: 80,
                  border: theme => `3px solid ${theme.palette.background.paper}`,
                  boxShadow: 2
                }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h5" fontWeight="bold">{`${PreviewDetails.firstName} ${PreviewDetails.lastName}`}</Typography>
              <Typography variant="subtitle1">{PreviewDetails.designation}</Typography>
              <Chip 
                label={PreviewDetails.isActive ? 'Active' : 'Inactive'} 
                color={PreviewDetails.isActive ? 'success' : 'error'} 
                size="small"
                sx={{ mt: 0.5 }}
              />
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ px: 2, pb: 2 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<WorkIcon color="primary" />} label="Employee ID" value={PreviewDetails.employeeID} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<EmailIcon color="primary" />} label="Email" value={PreviewDetails.email} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<PhoneIcon color="primary" />} label="Mobile" value={PreviewDetails.mobile} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<BusinessIcon color="primary" />} label="Department" value={PreviewDetails.departmentOrStore} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<GradeIcon color="primary" />} label="Grade" value={PreviewDetails.grade} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<CakeIcon color="primary" />} label="Date of Birth" value={PreviewDetails.dateOfBirth} />
            </Grid>
            <Grid item xs={12}>
              <InfoItem icon={<LocationIcon color="primary" />} label="Address" value={`${PreviewDetails.addressLine1}, ${PreviewDetails.city}, ${PreviewDetails.country} ${PreviewDetails.postalCode}`} />
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          <Typography variant="subtitle1" gutterBottom fontWeight="bold">Immediate Manager</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<EmailIcon color="primary" />} label="Email" value={PreviewDetails.immediateManager.email} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InfoItem icon={<PhoneIcon color="primary" />} label="Phone" value={PreviewDetails.immediateManager.phone} />
            </Grid>
            <Grid item xs={12}>
              <InfoItem icon={<WorkIcon color="primary" />} label="Designation" value={PreviewDetails.immediateManager.designation} />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeePreview;