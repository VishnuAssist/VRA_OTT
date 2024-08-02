import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { ApprovalsLeave } from "../../Models/Approvals";
import PreviewApproval from "./PreviewApproval";
import ApprovalAlert from "../../components/ApprovalAlert";
import ApprovalDeleteAlert from "../../components/ApprovalDeleteAlert";
import { useSelector } from "react-redux";
interface PageheadingProps {
  Type: string;
}

const Pageheading: React.FC<PageheadingProps> = ({ Type }) => {
  const {  approvalList} = useSelector((state: any) => state.approval);
const pendingList=approvalList.filter((data:ApprovalsLeave)=>data.status==="Pending")

  const theme = useTheme();

  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<ApprovalsLeave | null>(null);

  const openPreview = (data: ApprovalsLeave) => {
    
    setPreviewData(data);
    
    setPreview(true);
  };
  const closePreview = () => {
    setPreview(false);
  };

  const [approveAlert, setApproveAlert] = useState(false);
  const openApproveAlert = () => {
    setApproveAlert(true);
  };
  const closeApproveAlert = () => {
    setApproveAlert(false);
  };

  const [deleteAlert, setDeleteAlert] = useState(false);
  const openDeleteAlert = () => {
    setDeleteAlert(true);
  };
  const closeDeleteAlert = () => {
    setDeleteAlert(false);
  };

  // delete function
  return (
    <>
    
      <Grid container spacing={2}>
        {pendingList.map((d:ApprovalsLeave) => (
          <>
            {Type == "Leave Request" && d.type == "Leave Request" && (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: theme.colors.secondary.dark,
                      color: "#FAFAFA",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography sx={{display:"flex",justifyContent:"center",alignItems:"center"}} variant="h6">Leave Request</Typography>
                    {/* <RemoveRedEyeOutlinedIcon
                      onClick={() => openPreview(d)}
                      sx={{ ml: 20 }}
                    /> */}

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
                    <Button
                      variant="contained"
                      color="success"
                      onClick={openApproveAlert}
                    >
                      Approved
                    </Button>
                    <RemoveRedEyeOutlinedIcon
                      onClick={() => openPreview(d)}
                      sx={{ fontSize:35  }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={openDeleteAlert}
                    >
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
                      justifyContent: "center",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography variant="h6">Medical Leave</Typography>
                    
                  </Box>
                  <CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={12} container spacing={2}>
                      <Grid item xs={3} md={3} sm={3} >
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={9} md={9} sm={9}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {" "}
                          {d.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Fromdate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} md={7} sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Fromdate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Todate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} md={7} sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Todate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} md={3} sm={3}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Reason:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} md={7} sm={7}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Reason}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>

                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                     <Button
                      variant="contained"
                      color="success"
                      onClick={openApproveAlert}
                    >
                      Approved
                    </Button>
                    <RemoveRedEyeOutlinedIcon
                      onClick={() => openPreview(d)}
                      sx={{ fontSize:35  }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={openDeleteAlert}
                    >
                      Reject
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
            {Type == "Commision" && d.type == "Commision" && (
              <Grid item xs={12} sm={4} md={4} >
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: theme.colors.warning.dark,
                      color: "#FAFAFA",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 1,
                      width: "100%",
                      height: 80,
                    }}
                  >
                    <Typography variant="h6">Commission</Typography>
                    
                  </Box>
                  <CardContent>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={12} md={12}  container spacing={2}>
                      <Grid item xs={3}  sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Name:
                        </Typography>
                      </Grid>
                      <Grid item xs={9}  sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {" "}
                          {d.Name}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}  sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          Fromdate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Fromdate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Todate:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Todate}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sm={4}>
                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                          {" "}
                          Reason:
                        </Typography>
                      </Grid>
                      <Grid item xs={7} sm={8}>
                        <Typography sx={{ fontSize: 20, marginLeft: "20px" }}>
                          {d.Reason}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                     <Button
                      variant="contained"
                      color="success"
                      onClick={openApproveAlert}
                    >
                      Approved
                    </Button>
                    <RemoveRedEyeOutlinedIcon
                      onClick={() => openPreview(d)}
                      sx={{ fontSize:35  }}
                    />
                    <Button
                      variant="contained"
                      color="error"
                      onClick={openDeleteAlert}
                    >
                      Reject
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )}
          </>
        ))}
      </Grid>

      <PreviewApproval
        preview={preview}
        closePreview={closePreview}
        previewdata={previewdata}
      />
      <ApprovalAlert
        approveAlert={approveAlert}
        closeApproveAlert={closeApproveAlert}
      />
      <ApprovalDeleteAlert
        approveAlert={deleteAlert}
        closeApprovalAlert={closeDeleteAlert}
      />
    </>
  );
};
export default Pageheading;
