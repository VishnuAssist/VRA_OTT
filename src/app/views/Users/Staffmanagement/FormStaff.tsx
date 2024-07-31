import { FC, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  Box,
  Avatar,
  Tooltip,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  DialogActions,
  IconButton,
} from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

import { addStaff, updateStaff } from "../../../Slices/StaffManagementSlice";
import { useDispatch } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";

import {  useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormHelperText from '@mui/material/FormHelperText';

interface CreateProps {
  dialogOpen: boolean;
  handleDialogClose: () => void;
  initialUserData?: Staff | null; // Replace 'User' with your actual type for user data
}

const schema = yup.object().shape({
  username: yup.string().required("Username is mandatory"),
  phone: yup.string().required("Phone number is mandatory").min(10),
  employeeID: yup.string().required(),
  email: yup
    .string()
    .email("Please enter the valid Email")
    .required("Enter Email"),
  role: yup.string().required("Select the Role"),
  storecode: yup.string().required("select the store code"),
  joinDate: yup.string().required("Select the Joining Date"),
  position: yup.string().required("Select the position"),
  status: yup.string().required(),
  id: yup.number().integer().positive().required(),
});



const Create: FC<CreateProps> = ({
  dialogOpen,
  handleDialogClose,
  initialUserData,
}) => {
  const data: Staff = {
    username: "",
    phone: "",
    employeeID: "",
    email: "",
    role: "",
    storecode: "",
    joinDate: "",
    position: "",
    status: "",
    id: 0,
    store: undefined,
  };

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<Staff>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // console.log("this is the error on the form",errors)

  const [isActive, setIsActive] = useState(true);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  useEffect(() => {
    reset(initialUserData || data);
  }, [initialUserData, reset]);

  useEffect(() => {
    if (initialUserData) {
      setValue("employeeID", initialUserData.employeeID);
      setValue("username", initialUserData.username);
      setValue("phone", initialUserData.phone);
      setValue("email", initialUserData.email);
      setValue("position", initialUserData.position);
      setValue("joinDate", initialUserData.joinDate);
      setValue("storecode", initialUserData.storecode);
      setValue("role", initialUserData.role);
      setValue("id", initialUserData.id);
      setIsActive(initialUserData.isActive ?? true);
      setProfilePic(initialUserData.profilePicture || null);
    }
  }, [initialUserData, setValue]);

  const storecode = watch("storecode");
  const role = watch("role");

  const submitData = (data: Staff) => {
    data.isActive = isActive;
    if (profilePic) {
      data.profilePicture = profilePic;
    } else if (initialUserData?.profilePicture) {
      data.profilePicture = initialUserData.profilePicture;
    }

    if (initialUserData && initialUserData.id) {
      dispatch(updateStaff(data));
    } else {
      dispatch(addStaff(data));
    }
    reset();
    setProfilePic(null);
    handleDialogClose();
    console.log(data);
  };

  const handleRadioChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setProfilePic(reader.result);
        }
      };
    }
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {initialUserData ? "Update User" : " New User"}

            <IconButton
              color="error"
              aria-label="delete"
              onClick={handleDialogClose}
            >
              <HighlightOffSharpIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sm={6} lg={5}  >
                <Tooltip
                  title={isActive ? "Click to Deactivate" : "Click to Activate"}
                  arrow
                >
                  <Radio
                    checked={isActive}
                    onClick={handleRadioChange}
                    sx={{
                      color: isActive ? "#4caf50" : "#f44336",
                      "&.Mui-checked": {
                        color: isActive ? "#4caf50" : "#f44336",
                      },
                      "&::after": {
                        content: '""',
                        display: "block",
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#4caf50" : "#f44336",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      },
                    }}
                  />
                </Tooltip>
                <label htmlFor="profilePicInput">
                  <Avatar
                    alt="Profile Picture"
                    src={
                      profilePic
                        ? profilePic
                        : initialUserData?.profilePicture
                        ? initialUserData.profilePicture
                        : "/static/images/avatar/1.jpg"
                    }
                    sx={{ width: 150, height: 150, cursor: "pointer" }}
                  />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                  id="profilePicInput"
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={7} container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ mt: 1 }}>
                  <TextField
                    type="text"
                    id="username"
                    label="Name"
                    {...register("username", {
                      required: "UserName is required",
                    })}
                    fullWidth
                    error={!!errors.username}
                    helperText={errors?.username?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} sx={{ mt: 1 }}>
                  <TextField
                    type="text"
                    id="employeeID"
                    label="Employee ID"
                    {...register("employeeID")}
                    fullWidth
                    error={!!errors.employeeID}
                    helperText={errors?.employeeID?.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    type="number"
                    id="phone"
                    label="Phone Number"
                    {...register("phone")}
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    {...register("email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    type="date"
                    id="joinDate"
                    {...register("joinDate")}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.joinDate}
                    helperText={errors?.joinDate?.message}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="store-select-label">Store</InputLabel>
                    <Select
                      labelId="store-select-label"
                      id="store-select"
                      value={storecode || ""}
                      {...register("storecode")}
                      label="storecode"
                      error={!!errors.storecode}
                    >
                    
                      <MenuItem value="TWG001">TWG001</MenuItem>
                      <MenuItem value="TWG002">TWG002</MenuItem>
                      <MenuItem value="TWG003">TWG003</MenuItem>
                      <MenuItem value="TWG004">TWG004</MenuItem>
                    </Select>
                    <FormHelperText>{errors?.storecode?.message}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                    type="text"
                    id="position"
                    label="Position"
                    {...register("position")}
                    fullWidth
                    error={!!errors.position}
                    helperText={errors?.position?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl fullWidth>
                    <InputLabel id="role-select-label">Role</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={role || ""}
                      {...register("role")}
                      label="Role"
                    >
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="mobile">Mobile</MenuItem>
                      <MenuItem value="superuser">SuperUser</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <DialogActions>
              <Box
                sx={{
                  display: "flex",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isDirty && !isValid}
                >
                  {initialUserData ? "Update" : "Save"}
                </Button>
              </Box>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
