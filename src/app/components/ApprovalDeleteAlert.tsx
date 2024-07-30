import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

interface Props {
  approveAlert: boolean;
  closeApprovalAlert: () => void;
}
const ApprovalDeleteAlert: FC<Props> = ({
  approveAlert,
  closeApprovalAlert,
}) => {
  return (
    <>
      <Dialog open={approveAlert} onClose={closeApprovalAlert}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Typography variant="h5">
                Are you sure that you want to Delete this ?
              </Typography>
            </Grid>
            <Grid item md={12}>
              <TextField
                label="Reason"
                multiline
                rows={4}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={closeApprovalAlert}
          >
            Yes I Agree
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={closeApprovalAlert}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApprovalDeleteAlert;
