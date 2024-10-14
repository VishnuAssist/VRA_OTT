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
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
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
  initialEmployee?: EmployeeProfile | null;
}   

const managerOptions = [
  { email: 'manager1@example.com', phone: '123-456-7890', designation: 'Manager' },
  { email: 'manager2@example.com', phone: '234-567-8901', designation: 'Senior Manager' },
  { email: 'manager3@example.com', phone: '345-678-9012', designation: 'Director' },
  { email: 'manager4@example.com', phone: '456-789-0123', designation: 'VP of Operations' },
];

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
    console.log("updatedData",updatedData)
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

  const [selectedManager, setSelectedManager] = useState<{
  email: string;
  phone: string;
  designation: string;
} | null>(null); 

  return (
    <Dialog open={open} onClose={closeForm} maxWidth="md" fullWidth>
       <form onSubmit={handleSubmit(submitData)}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          
          <Box display={"flex"}
               justifyContent="center"
              alignItems="center">
          <Typography variant="h6" sx={{fontSize: "18px", fontWeight: "700", mr:4}}>
            {initialEmployee ? "Update Employee" : "Add New Employee"}
          </Typography>
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
              </Box>
          <IconButton color="error" aria-label="close" onClick={closeForm}>
            <HighlightOffSharpIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
       
          <Grid container spacing={2}>
            <Grid
              item
              xs={4}
             
            >
              <Box display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column" sx={{px:2}}>
              <Avatar
                src={imagePreview || undefined}
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Button
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
              </Box>
             
            </Grid>
            <Grid item xs={8} sm={8} container spacing={1}>
            <Grid item xs={6} sm={6}>
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
            <Grid item xs={6} sm={6}>
              <Controller
                name="middleName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Middle Name" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
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
            <Grid item xs={6} sm={6}>
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
            {/* <Grid item xs={12} sm={4}>
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
            </Grid> */}
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

<Grid item xs={12} md={4}>
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
      setValue("brand", selectedOption?.id || undefined);
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

            <Grid item xs={12} md={4}>
              
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
             <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={6}>
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
                    multiline
                    rows={2} 
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="addressLine2"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} label="Address Line 2" fullWidth    multiline
                  rows={2} />
                )}
              />
            </Grid>
            {/* <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3}>
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
            </Grid>*/}
            <Grid item xs={12} sm={12}>
            <Typography variant="h6">
            Immediate Manager
          </Typography>
            </Grid> 
             
       
        {/* Email Autocomplete */}
        <Grid item xs={12} md={4}>
          <Autocomplete
            disablePortal
            id="email-autocomplete"
            options={managerOptions}
            getOptionLabel={(option) => option.email}
            value={selectedManager}
            onChange={(_, selectedOption) => {
              setSelectedManager(selectedOption);
              // Update form field value using setValue if using React Hook Form
              // setValue("immediateManager.email", selectedOption?.email || "");
            }}
            isOptionEqualToValue={(option, value) => option.email === value.email}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  <span>
                    Email <span style={{ color: 'red', fontSize: 'large' }}>*</span>
                  </span>
                }
                fullWidth
              />
            )}
          />
        </Grid>

        {/* Phone Autocomplete */}
        <Grid item xs={12} md={4}>
          <Autocomplete
            disablePortal
            id="phone-autocomplete"
            options={managerOptions}
            getOptionLabel={(option) => option.phone}
            value={selectedManager}
            onChange={(_, selectedOption) => {
              setSelectedManager(selectedOption);
              // setValue("immediateManager.phone", selectedOption?.phone || "");
            }}
            isOptionEqualToValue={(option, value) => option.phone === value.phone}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  <span>
                    Phone <span style={{ color: 'red', fontSize: 'large' }}>*</span>
                  </span>
                }
                fullWidth
              />
            )}
          />
        </Grid>

        {/* Designation Autocomplete */}
        <Grid item xs={12} md={4}>
          <Autocomplete
            disablePortal
            id="designation-autocomplete"
            options={managerOptions}
            getOptionLabel={(option) => option.designation}
            value={selectedManager}
            onChange={(_, selectedOption) => {
              setSelectedManager(selectedOption || null);
              // setValue("immediateManager.designation", selectedOption?.designation || "");
            }}
            isOptionEqualToValue={(option, value) => option.designation === value.designation}
            renderInput={(params) => (
              <TextField
                {...params}
                label={
                  <span>
                    Designation <span style={{ color: 'red', fontSize: 'large' }}>*</span>
                  </span>
                }
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
      
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm} color="error"   variant="contained">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(submitData)}
          color="info"
          variant="contained"
        >
          {initialEmployee ? "Update" : "Create"}
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  );
};

export default EmployeeForm;
