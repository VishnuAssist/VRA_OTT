import  { FC, useEffect } from "react";
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
    }
  }, [initialUserData, setValue]);

  const submitData = (data: Staff) => {
    if (initialUserData && initialUserData.id) {
      dispatch(updateStaff(data));
    } else {
      dispatch(addStaff(data));
    }
    reset();
    handleDialogClose();
    console.log(data);
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
                <Tooltip title={"Click to Deactivate"} arrow>
                  <Radio
                    sx={{
                      color: "#4caf50",
                      "&.Mui-checked": {
                        color: "#4caf50",
                      },
                      "&::after": {
                        content: '""',
                        display: "block",
                        width: "11px",
                        height: "11px",
                        borderRadius: "50%",
                        backgroundColor: "#4caf50",
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
                    sx={{ width: 150, height: 150, cursor: "pointer" }}
                  />
                </label>
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
                      defaultValue={initialUserData ? initialUserData.store : ""}
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
                      defaultValue={initialUserData ? initialUserData.role : ""}
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
