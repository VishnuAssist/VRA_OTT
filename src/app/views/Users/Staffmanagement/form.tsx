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
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addStaff, updateStaff } from "../../Slices/StaffManagementSlice";
import { useDispatch } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";

interface CreateProps {
  dialogOpen: boolean;
  handleDialogClose: () => void;
  initialUserData?: Staff | null; // Replace 'User' with your actual type for user data
}

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
    store: "",
    joinDate: "",
    position: "",
    status: "",
    id: 0,
  };

  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<Staff>();
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
      setValue("store", initialUserData.store);
      setValue("role", initialUserData.role);
      setValue("id", initialUserData.id);
      setIsActive(initialUserData.isActive ?? true);
      setProfilePic(initialUserData.profilePicture || null);
    }
  }, [initialUserData, setValue]);

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
          {initialUserData ? "Update User" : " New User"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(submitData)}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
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

              <Grid item xs={8} container spacing={1}>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="text"
                    id="employeeID"
                    label="Employee ID"
                    {...register("employeeID")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="text"
                    id="username"
                    label="Username"
                    {...register("username")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="number"
                    id="phone"
                    label="Phone Number"
                    {...register("phone")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    {...register("email")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="text"
                    id="position"
                    label="Position"
                    {...register("position")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <TextField
                    type="date"
                    id="joinDate"
                    {...register("joinDate")}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="store-select-label">Store</InputLabel>
                    <Select
                      labelId="store-select-label"
                      id="store-select"
                      value={initialUserData ? initialUserData.store : ""}
                      {...register("store")}
                      label="Store"
                    >
                      <MenuItem value="twg001">TWG001</MenuItem>
                      <MenuItem value="twg002">TWG002</MenuItem>
                      <MenuItem value="twg003">TWG003</MenuItem>
                      <MenuItem value="twg004">TWG004</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel id="role-select-label">Role</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={initialUserData ? initialUserData.role : ""}
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

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                {initialUserData ? "Update" : "Save"}
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
