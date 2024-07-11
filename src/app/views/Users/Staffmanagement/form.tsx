import React, { FC, useEffect } from "react";
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
  SelectChangeEvent,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { addStaff ,updateStaff} from "../../Slices/StaffManagementSlice";
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
  const { register, handleSubmit, reset,setValue } = useForm<Staff>();
  useEffect(() => {
    reset(initialUserData || data);
  }, [initialUserData]);

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
      
      // setIsActive(initialUserData.isActive ?? true);
      // setProfilePic(initialUserData.profilePicture || null);
    }
  }, [initialUserData, setValue]);
  const submitData = (data: Staff) => {
    if (initialUserData && initialUserData.id) {
       dispatch(updateStaff(data));
    } else {
       dispatch(addStaff(data));
    }
    reset();
    console.log(data);
    dispatch(addStaff(data));
  };
  

  const [role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
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
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "row", mb: 2 }}
                >
                  <TextField
                    type="text"
                    id="empolyeid"
                    label="Employee ID"
                    {...register("employeeID")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "row", mb: 2 }}
                >
                  <TextField
                    type="text"
                    id="username"
                    label="UserName"
                    {...register("username")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <TextField
                    type="number"
                    id="phonenumber"
                    label="Phone Number"
                    {...register("phone")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                    {...register("email")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <TextField
                    type="position"
                    id="position"
                    label="position"
                    {...register("position")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <TextField
                    type="date"
                    id="joining date"
                    label=""
                    {...register("joinDate")}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" {...register("store")}>Store</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="store"
                      onChange={handleChange}
                      
                    >
                      <MenuItem value={10}>TWG001</MenuItem>
                      <MenuItem value={20}>TWG002</MenuItem>
                      <MenuItem value={30}>TWG003</MenuItem>
                      <MenuItem value={40}>TWG004</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", flexDirection: "column", mb: 2 }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" {...register("role")}>Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Age"
                      onChange={handleChange}
                      
                    >
                      <MenuItem value={10}>Admin</MenuItem>
                      <MenuItem value={20}>Mobile</MenuItem>
                      <MenuItem value={30}>SuperUser</MenuItem>
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
