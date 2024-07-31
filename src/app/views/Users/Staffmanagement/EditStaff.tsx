import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { FC } from "react";
import { Staff } from "../../../Models/StaffMangement";
import { useDispatch } from "react-redux";
import { setSelectedStaff } from "../../../Slices/StaffManagementSlice";

interface CreateProps {
  editdialogOpen: boolean;
  edithandleDialogClose: () => void;
  edituserData?: Staff | null;
}
const Edit: FC<CreateProps> = ({
  editdialogOpen,
  edithandleDialogClose,
  edituserData,
}) => {
  console.log(edituserData)
  const dispatch=useDispatch()
  const setattendancedata=()=>{
dispatch(setSelectedStaff(edituserData))
  }
  return (
    <>
      <Dialog
        open={editdialogOpen}
        onClose={edithandleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">
              {edituserData ? "Update User" : ""}
            </Typography>
            <Button variant="contained" onClick={()=>setattendancedata()}>Attendance Status</Button>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={12}>
              <Paper
                square={false}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",

                  // backgroundColor: "#D5F0C1",
                  height: "100%",
                  border: " 1px solid",
                  // boxShadow:"1px 2px 1px 2pxblack"
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    cursor: "pointer",
                    bgcolor: blue,
                  }}
                  alt={edituserData?.username}
                  src={edituserData?.profilePicture ?? ""}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5">{edituserData?.username}</Typography>
                  <Typography variant="h6">{edituserData?.email}</Typography>
                </Box>
                <Typography variant="h6">{edituserData?.role}</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} lg={12} container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Employee ID
                </Typography>
              </Grid>
              <Grid
                item
                md={6}
                sx={{ diplay: "flex", justifyContent: "center" }}
              >
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.employeeID}
                </Typography>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Store
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.storecode}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Joining Date
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.joinDate}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Average Work Hours
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={{ fontSize: 13 }}>08:00</Typography>
              </Grid>
              <Grid
                item
                md={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    p: 1,
                    border: "1px solid #24665D",
                    display: "flex",
                    gap: 4,
                    borderRadius: 1,
                    m: 1,
                  }}
                >
                  <IconButton
                    size="large"
                    color="primary"
                    aria-label="PhoneInTalkIcon"
                  >
                    <PhoneInTalkIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    aria-label="EmailIcon"
                  >
                    <EmailIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              color="error"
              onClick={edithandleDialogClose}
            >
              Close
            </Button>
            {/* <Button type="submit" variant="contained" color="success" onClick={edit}>
              EDIT
            </Button> */}
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Edit;
