import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  MenuItem,
  Button,
  Typography,
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import { Close as CloseIcon, CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { EmployeeProfile } from "../../Models/EmployeeModel";
import { addEmployee, updateEmployee, updateEmployeeImage } from "../../Slices/EmployeeSlice";

interface Props {
  open: boolean;
  closeForm: () => void;
  initialEmployee: EmployeeProfile | null;
}

const EmployeeForm: FC<Props> = ({ open, closeForm, initialEmployee }) => {
  const { control, handleSubmit, reset, setValue } = useForm<EmployeeProfile>();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialEmployee) {
      Object.entries(initialEmployee).forEach(([key, value]) => {
        setValue(key as keyof EmployeeProfile, value);
      });
      setIsActive(initialEmployee.isActive);
      setImagePreview(initialEmployee.picture);
    } else {
      reset({} as EmployeeProfile);
      setIsActive(true);
      setImagePreview(null);
    }
  }, [initialEmployee, setValue, reset]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue('picture', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitData = (data: EmployeeProfile) => {
    const updatedData = { ...data, isActive };
    if (initialEmployee) {
      dispatch(updateEmployee(updatedData));
      if (imagePreview !== initialEmployee.picture) {
        dispatch(updateEmployeeImage({ id: initialEmployee.employeeID, imageUrl: imagePreview || '' }));
      }
    } else {
      dispatch(addEmployee(updatedData));
    }
    closeForm();
  };

  return (
    <Dialog open={open} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {initialEmployee ? "Update Employee" : "New Employee"}
          </Typography>
          <IconButton onClick={closeForm}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Avatar
                src={imagePreview || undefined}
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: "First name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="middleName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Middle Name" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: "Last name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{ required: "Mobile number is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Mobile"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="departmentOrStore"
                control={control}
                defaultValue=""
                rules={{ required: "Department or Store is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Department/Store"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="designation"
                control={control}
                defaultValue=""
                rules={{ required: "Designation is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Designation"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="grade"
                control={control}
                defaultValue=""
                rules={{ required: "Grade is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Grade"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="employeeType"
                control={control}
                defaultValue="Regular"
                rules={{ required: "Employee type is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    select
                    label="Employee Type"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  >
                    <MenuItem value="Regular">Regular</MenuItem>
                    <MenuItem value="Part-time">Part-time</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="joinDate"
                control={control}
                defaultValue=""
                rules={{ required: "Join date is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Join Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue=""
                rules={{ required: "Date of birth is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Date of Birth"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="addressLine1"
                control={control}
                defaultValue=""
                rules={{ required: "Address is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Address Line 1"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="addressLine2"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Address Line 2" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{ required: "City is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="City"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: "Country is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Country"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                rules={{ required: "Postal code is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Postal Code"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="company"
                control={control}
                defaultValue=""
                rules={{ required: "Company is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Company"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    color="primary"
                  />
                }
                label="Active"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(submitData)}
          color="primary"
          variant="contained"
        >
          {initialEmployee ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeeForm;