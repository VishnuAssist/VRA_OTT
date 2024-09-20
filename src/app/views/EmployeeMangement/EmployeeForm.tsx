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
  Autocomplete,
} from "@mui/material";
import {
  Close as CloseIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import { EmployeeProfile } from "../../Models/EmployeeModel";
import {
  addEmployee,
  updateEmployee,
  updateEmployeeImage,
} from "../../Slices/EmployeeSlice";
import { useSelector } from "react-redux";
import { DictionaryType } from "../../Models/DictionaryType";

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

  const [brandNameData, setBrandNameData] = useState<DictionaryType | null>(
    null
  );
  const [gradeData, setGradeData] = useState<DictionaryType | null>(null);
  const { DictionaryList } = useSelector((state: any) => state.dictionary);

  const brand = DictionaryList.filter(
    (data: DictionaryType) => data.category === "brandName"
  );
  const grade = DictionaryList.filter(
    (data: DictionaryType) => data.category === "grade"
  );

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
        setValue("picture", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitData = (data: EmployeeProfile) => {
    const updatedData = { ...data, isActive };
    if (initialEmployee) {
      dispatch(updateEmployee(updatedData));
      if (imagePreview !== initialEmployee.picture) {
        dispatch(
          updateEmployeeImage({
            id: initialEmployee.employeeID,
            imageUrl: imagePreview || "",
          })
        );
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
            <Grid
              item
              xs={10}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
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
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    color="success"
                  />
                }
                label="Active"
              />
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
                    label={
                      <span>
                        First Name <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        Last Name <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    // label="Email"
                    label={
                      <span>
                        Email <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        Mobile <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        Department/Store <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        Designation <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            {/* <Grid item xs={12} md={6}>
              <InputLabel htmlFor="brandName" sx={labelStyles}>
                Brand
              </InputLabel>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={brand}
                getOptionLabel={(option: DictionaryType) =>
                  option?.entryname || ""
                }
                value={brandNameData}
                onChange={(_, selectedOption: DictionaryType | null) => {
                  setBrandNameData(selectedOption);
                  setValue("brandName", selectedOption?.id || undefined);
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField {...params} label="" />}
              />{" "}
            </Grid> */}

<Grid item xs={12} md={6}>
  <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={brand}
    getOptionLabel={(option: DictionaryType) =>
      option?.entryname || ""
    }
    value={brandNameData}
    onChange={(_, selectedOption: DictionaryType | null) => {
      setBrandNameData(selectedOption);
      setValue("brandName", selectedOption?.id || undefined);
    }}
    isOptionEqualToValue={(option, value) => option.id === value.id}
    renderInput={(params) => (
      <TextField
        {...params}
        label={
          <span>
            Brand <span style={{ color: 'red',fontSize:"large" }}>*</span>
          </span>
        }
        fullWidth
      />
    )}
  />
</Grid>

            <Grid item xs={12} md={6}>
              
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={grade}
                getOptionLabel={(option: DictionaryType) =>
                  option?.entryname || ""
                }
                value={gradeData}
                onChange={(_, selectedOption: DictionaryType | null) => {
                  setGradeData(selectedOption);
                  setValue("grade", selectedOption?.id || undefined);
                }}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => <TextField
                  {...params}
                  label={
                    <span>
                      Grade <span style={{ color: 'red',fontSize:"large" }}>*</span>
                    </span>
                  }
                  fullWidth
                />}
              />{" "}
            </Grid>

            {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
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
                    label={
                      <span>
                        Employee type <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        City <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
                    label={
                      <span>
                        Country <span style={{ color: 'red',fontSize:"large" }}>*</span>
                      </span>
                    }
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
