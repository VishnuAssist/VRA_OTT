import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { ApprovalsLeave } from "../../Models/Approvals";
import ApprovalAlert from "../../components/ApprovalAlert";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  preview: boolean;
  closePreview: () => void;
  previewdata: ApprovalsLeave | null;
}
const PreviewApproval: FC<Props> = ({ preview, closePreview, previewdata }) => {

  const [approveAlert, setApproveAlert] = useState(false);
  const openApproveAlert = () => {
    setApproveAlert(true);
    
  };
  const closeApproveAlert = () => {
    setApproveAlert(false);
  };
  return (
    <>
      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h7" sx={{ color: "darkblue" }}>
            Details
          </Typography>
          <IconButton onClick={closePreview}><CloseIcon color="error"/></IconButton>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <>
              <Grid item md={6}>
                <Typography variant="h5">Name :</Typography>
              </Grid>

              <Grid item md={6}>
                {previewdata?.Name}
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5">FromDate :</Typography>
              </Grid>
              <Grid item md={6}>
                {previewdata?.Fromdate}
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5">To Date :</Typography>
              </Grid>
              <Grid item md={6}>
                {previewdata?.Todate}
              </Grid>
              <Grid item md={6}>
                <Typography variant="h5">Reason :</Typography>
              </Grid>
              <Grid item md={6}>
                {previewdata?.Reason}
              </Grid>
            </>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={openApproveAlert}>
            Approved
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
      <ApprovalAlert
        approveAlert={approveAlert}
        closeApproveAlert={closeApproveAlert}
      />
    </>
  );
};

export default PreviewApproval;
