import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { ApprovalsLeave } from "../../Models/Approvals";
import { removeApproval } from "../../Slices/ApprovalsSlice";
interface PageheadingProps {
  Type: string;
}

const Pageheading: React.FC<PageheadingProps> = ({ Type }) => {
  const dummy = [
    {
      id: 1,
      type: "Leave Request",
      Fromdate: "10-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Fever",
    },
    {
      id: 2,
      type: "MC",
      Fromdate: "01-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Fever",
    },
    {
      id: 3,
      type: "Leave Request",
      Fromdate: "11-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Fever",
    },
    {
      id: 4,
      type: "MC",
      Fromdate: "10-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Fever",
    },
    {
      id: 5,
      type: "Commision",
      Fromdate: "10-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Over Time work",
    },
    {
      id: 6,
      type: "Commision",
      Fromdate: "10-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Over Time work",
    },
    {
      id: 7,
      type: "Commision",
      Fromdate: "10-07-2024",
      Todate: "11-07-2024",
      Name: "Riyas",
      Reason: "Over Time work",
    },
  ];
  const theme = useTheme();

  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<ApprovalsLeave | null>(null);

  const openPreview = (data: ApprovalsLeave) => {
    // console.log("data", data);
    setPreviewData(data);
    // console.log("previewdata", previewdata);
    setPreview(true);
  };
  const closePreview = () => {
    setPreview(false);
  };


  // this is for delete
  // const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  // const [userToDelete, setUserToDelete] = useState<ApprovalsLeave | null>(null);

  // const deleteStore = () => {
  //   if (userToDelete) {
  //     dispatch(removeApproval({ id: userToDelete.id }));
  //     setAlertDeleteStore(false);
  //     setUserToDelete(null);
  //   }
  // };
  // const openDelete = (user: ApprovalsLeave) => {
  //   setAlertDeleteStore(true);
  //   setUserToDelete(user);
  // };
  // const closeDelete = () => {
  //   setAlertDeleteStore(false);
  //   setUserToDelete(null);
  // };
  return (
    <>
      {/* <Box display={'flex'} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Typography variant="h5" component="h3" gutterBottom>
            Approvals
          </Typography>
          <ToggleButtonGroup
            value={Tabs}
            exclusive
          >
            <ToggleButton
              disableRipple
              value="watch_list_columns"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={()=>setType("Leave Request")} >Leave</Button>
              <Button variant="contained" onClick={()=>setType("MC")} sx={{bgcolor:"#754CB9"}}>MC</Button>
              <Button variant="contained" onClick={()=>setType("Commision")}sx={{bgcolor:"#94810A"}}>Commision</Button>
              </Stack>
            </ToggleButton>
          </ToggleButtonGroup>
        
       </Box> */}
      <Grid container spacing={2}>
        {dummy.map((d) => (
          <>
            {Type == "Leave Request" && d.type == "Leave Request" && (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: theme.colors.secondary.dark,
                      color: "#FAFAFA",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography variant="h6">Leave Request</Typography>
                    <RemoveRedEyeOutlinedIcon onClick={() => openPreview(d)} />

                    <Divider />
                  </Box>
                  <CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={12} container spacing={2}>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {" "}
                          {d.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Fromdate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Fromdate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Todate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Todate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Reason:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Reason}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="contained" color="success">
                      Approved
                    </Button>
                    <Button variant="contained" color="error">
                      Reject
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
            {Type == "MC" && d.type == "MC" && (
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: theme.colors.info.dark,
                      color: "#FAFAFA",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography variant="h6">Medical Leave</Typography>
                    <RemoveRedEyeOutlinedIcon onClick={() => openPreview(d)} />
                  </Box>
                  <CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={12} container spacing={2}>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {" "}
                          {d.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Fromdate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Fromdate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Todate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Todate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Reason:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Reason}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="contained" color="success">
                      Approved
                    </Button>
                    <Button variant="contained" color="error">
                      Reject
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
            {Type == "Commision" && d.type == "Commision" && (
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: theme.colors.warning.dark,
                      color: "#FAFAFA",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography variant="h6">Commission</Typography>
                    <RemoveRedEyeOutlinedIcon onClick={() => openPreview(d)} />
                  </Box>
                  <CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={12} container spacing={2}>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {" "}
                          {d.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Fromdate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Fromdate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Todate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Todate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Reason:
                        </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Reason}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="contained" color="success">
                      Approved
                    </Button>
                    <Button variant="contained" color="error">
                      Reject
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </>
        ))}
      </Grid>

      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle>
          <Typography variant="h5" sx={{color:"darkblue"}}>Details</Typography>
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
      </Dialog>
    </>
  );
};
export default Pageheading;
