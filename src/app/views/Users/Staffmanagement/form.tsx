import { FC, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, Grid, TextField, Box, Avatar, Tooltip, Radio, Select, MenuItem } from '@mui/material';


interface CreateProps {
  dialogOpen: boolean;
  handleDialogClose: () => void;
  initialUserData?: any | null; // Replace 'User' with your actual type for user data
}

const Create: FC<CreateProps> = ({ dialogOpen, handleDialogClose, initialUserData }) => {


  return (
    <>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>{initialUserData ? "Update User" : " New User"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Tooltip
                  title={"Click to Deactivate"}
                  arrow
                >
                  <Radio
                    sx={{
                      color: "#4caf50",
                      '&.Mui-checked': {
                        color: "#4caf50",
                      },
                      '&::after': {
                        content: '""',
                        display: 'block',
                        width: '11px',
                        height: '11px',
                        borderRadius: '50%',
                        backgroundColor: "#4caf50",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }
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
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
                  <TextField
                    type="text"
                    id="empolyeid"
                    label="Employee ID"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
                  <TextField
                    type="text"
                    id="username"
                    label="UserName"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <TextField
                    type="number"
                    id="phonenumber"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <TextField
                    type="email"
                    id="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <TextField
                    type="position"
                    id="position"
                    label="position"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <TextField
                    type="number"
                    id="joining date"
                    label="joining date"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <TextField
                    type="store"
                    id="store"
                    label="store"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                  <Select label="Role">
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                    <MenuItem value="Manager">Manager</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
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
