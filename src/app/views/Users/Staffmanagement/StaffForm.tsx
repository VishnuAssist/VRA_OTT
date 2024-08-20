import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  Grid,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Close as CloseIcon } from "@mui/icons-material";

import { Staff } from "../../../Models/StaffModel";
import { addStaff, updateStaff } from "../../../Slices/StaffManagementSlice";
interface Props {
  open: boolean;
  closeForm: () => void;
  initialStore: Staff | null;
}

const StaffForm: FC<Props> = ({ open, closeForm, initialStore }) => {
  const data: Staff = {
    phone: "",
    age: 0,
  };

  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(true);

  const submitData = (data: any) => {
    data.isActive = isActive;
    console.log("statusss", data);
    if (initialStore) {
      dispatch(updateStaff(data));
    } else {
      dispatch(addStaff(data));
    }
    reset();
    closeForm();
  };

  useEffect(() => {
    reset(initialStore || data);
  }, [initialStore, reset]);

  useEffect(() => {
    if (initialStore) {
      setValue("username", initialStore.username);
      setValue("employeeID", initialStore.employeeID);
      setValue("role", initialStore.role);
      setValue("email", initialStore.email);
      setValue("joinDate", initialStore.joinDate);
      setValue("phone", initialStore.phone);
      setValue("age", initialStore.age);
      setValue("id", initialStore.id);
    }
  }, [initialStore, setValue]);

  const role = watch("role");

  const handleRadioChange = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const onDrop = (acceptedFiles: any) => {
    setValue("fileUpload", acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <Dialog open={open} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {initialStore ? "Update User" : "New User"}
          </Typography>
          <IconButton
            aria-label="Close"
            onClick={closeForm}
            sx={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitData)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                type="text"
                id="username"
                placeholder="User Name"
                {...register("username")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                type="text"
                id="employeeID"
                placeholder="Employee ID"
                {...register("employeeID")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="email"
                placeholder="Email"
                {...register("email")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="phone"
                placeholder="Phone"
                {...register("phone")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                id="joinDate"
                placeholder="Join Date"
                {...register("joinDate")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            
             
                <TextField
                  id="role"
                  value={role || ""}
                  placeholder="Role"
                  {...register("role")}
                  select
                  fullWidth
                  
                >
                  <MenuItem value="waiter">Waiter</MenuItem>
                  <MenuItem value="chef">Chef</MenuItem>
                  <MenuItem value="cashier">Cashier</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                </TextField>
             
            </Grid>
            <Grid item xs={12}>
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #ccc",
                  padding: 2,
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <input {...getInputProps()} {...register("fileUpload")} />
                <Typography>
                  Drag & drop a file here, or click to select a file
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm} color="primary">
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit(submitData)}
        >
          {initialStore ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StaffForm;
