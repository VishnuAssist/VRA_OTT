import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Grid,
  Box,
  Avatar,
  // Chip,
  // Divider,
  Paper,
  Card,
  // Button,
} from "@mui/material";
import {
  // Close as CloseIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Work as WorkIcon,
  Grade as GradeIcon,
  Cake as CakeIcon,
  LocationOn as LocationIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import { EmployeeProfile } from "../../Models/EmployeeModel";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: EmployeeProfile | null;
}

const InfoItem: FC<{ icon: React.ReactNode; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
    <Box
      sx={{
        mr: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
        borderRadius: "50%",
        width: 32,
        height: 32,
      }}
    >
      {React.cloneElement(icon as React.ReactElement, {
        style: { fontSize: 18 },
      })}
    </Box>
    <Box>
      <Typography
        variant="caption"
        color="#fff"
        sx={{ fontSize: "15px", fontWeight: "600" }}
      >
        {label}
      </Typography>
      <Typography
        variant="body2"
        color="#ebedee"
        sx={{ fontSize: "14px", fontWeight: "600" }}
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

const EmployeePreview: FC<Props> = ({
  preview,
  closePreview,
  PreviewDetails,
}) => {
  if (!PreviewDetails) return null;

  return (
    <Dialog open={preview} onClose={closePreview} maxWidth="md" fullWidth>
      <DialogTitle sx={{ p: 0 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: "700" }}>
            User Details
          </Typography>
          <IconButton color="error" aria-label="close" onClick={closePreview}>
            <HighlightOffSharpIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          p: 0,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        <Card sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={4}
              container
              component={Paper}
              sx={{ p: 2, bgcolor: "#E5DEC9" }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={PreviewDetails.picture}
                  alt={`${PreviewDetails.firstName} ${PreviewDetails.lastName}`}
                  sx={{
                    width: 80,
                    height: 80,
                    border: (theme) =>
                      `3px solid ${
                        PreviewDetails.isActive
                          ? theme.palette.success.main
                          : theme.palette.error.main
                      }`,
                    // border: theme => `3px solid ${theme.palette.background.paper}`,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", fontWeight: "800" }}
                >{`${PreviewDetails.firstName} ${PreviewDetails.lastName}`}</Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "14px", fontWeight: "600" }}
                >
                  {PreviewDetails.designation}
                </Typography>
                {/* <Chip 
                label={PreviewDetails.isActive ? 'Active' : 'Inactive'} 
                color={PreviewDetails.isActive ? 'success' : 'error'} 
                size="small"
                sx={{ mt: 0.5 }}
              /> */}
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={7.5}
              container
              component={Paper}
              sx={{ p: 2, bgcolor: "#CBBC92", ml: 4 }}
            >
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<WorkIcon color="primary" />}
                  label="Employee ID"
                  value={PreviewDetails.employeeID}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<EmailIcon color="primary" />}
                  label="Email"
                  value={PreviewDetails.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<PhoneIcon color="primary" />}
                  label="Mobile"
                  value={PreviewDetails.mobile}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<BusinessIcon color="primary" />}
                  label="Department"
                  value={PreviewDetails.departmentOrStore}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<GradeIcon color="primary" />}
                  label="Grade"
                  value={PreviewDetails.grade}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InfoItem
                  icon={<CakeIcon color="primary" />}
                  label="Date of Birth"
                  value={PreviewDetails.dateOfBirth}
                />
              </Grid>
              <Grid item xs={12}>
                <InfoItem
                  icon={<LocationIcon color="primary" />}
                  label="Address"
                  value={`${PreviewDetails.addressLine1}, ${PreviewDetails.city}, ${PreviewDetails.country} ${PreviewDetails.postalCode}`}
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              container
              component={Paper}
              sx={{ p: 2, bgcolor: "#968A66", mt: 2 }}
            >
              <Grid item xs={12} sm={12} sx={{ py: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}
                >
                  Immediate Manager
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem
                  icon={<EmailIcon color="primary" />}
                  label="Email"
                  value={PreviewDetails.immediateManager.email}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem
                  icon={<PhoneIcon color="primary" />}
                  label="Phone"
                  value={PreviewDetails.immediateManager.phone}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem
                  icon={<WorkIcon color="primary" />}
                  label="Designation"
                  value={PreviewDetails.immediateManager.designation}
                />
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeePreview;
