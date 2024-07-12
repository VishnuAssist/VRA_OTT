import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import { FC } from "react";
import { Staff } from "../../../Models/StaffMangement";

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
            <Button variant="contained">Attendance Status</Button>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                sx={{
                  width: 160,
                  height: 160,
                  cursor: "pointer",
                  bgcolor: blue,
                }}
                alt={edituserData?.username}
                src={edituserData?.profilePicture ?? ""}
              />

              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                {edituserData?.username}
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {edituserData?.role}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6} container spacing={2}>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Employee ID
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.employeeID}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Store
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.store}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Joining Date
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  {edituserData?.joinDate}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  Average Work Hours
                </Typography>
                <Typography sx={{ fontSize: 13 }}>08:00</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={8}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    p: 1,
                    border: "1px solid #24665D",
                    display: "flex",
                    gap: 6,
                    borderRadius: 2,
                    alignItems: "center",
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Edit;
