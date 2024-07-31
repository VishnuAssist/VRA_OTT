import { Box, Card, Grid, MenuItem, TextField, Typography, Select, Divider, CardHeader, useTheme, styled, ListItem, ListItemAvatar, ListItemText, List, Button, Dialog, IconButton } from "@mui/material";

import Chart from "./chart";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import Mytable from "./table";
import DoughnutChart from "../../dashboard/shared/Doughnut";
import { useSelector } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";
import { useState } from "react";

import Edit from "../Staffmanagement/EditStaff";


const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" }
}));


const Heading = () => {
  const { userList } = useSelector((state: any) => state.staff);

  const [previewdialogOpen, setPreviewDialogOpen] = useState(false);

  const [previewdata, setPreviewData] = useState<Staff | null>(null);
  
  const previewClick = (data: Staff) => {        
    setPreviewData(data);                             //preview
    setPreviewDialogOpen(true);
  };
 
  const edithandleDialogClose = () => {
    setPreviewDialogOpen(false);
  };



  const { palette } = useTheme();
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>

              <StyledCard elevation={6} sx={{ backgroundColor: theme.colors.info.main }}>
                <Typography sx={{ fontSize: 18, color: "#FFFFFF" }}>Today's income</Typography>
                <Typography sx={{ fontSize: 20, color: "#FFFFFF", fontWeight: "bold" }}>$655.00</Typography>
              </StyledCard>


            </Grid>
            <Grid item xs={12} md={4}>

              <StyledCard elevation={6} sx={{ backgroundColor: theme.colors.success.main }} >
                <Typography sx={{ fontSize: 18, color: "#FFFFFF" }}>Product sold</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>22 Items sold</Typography>
              </StyledCard>



            </Grid>
            <Grid item xs={12} md={4}>

              <StyledCard elevation={6} sx={{ backgroundColor: theme.colors.secondary.main }}>
                <Typography sx={{ fontSize: 18, color: "#FFFFFF" }}>Today's Customer</Typography>
                <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}>77 Customers</Typography>
              </StyledCard>


            </Grid>
            <Grid item xs={12} md={12}>
              <Chart />
            </Grid>
            <Grid item xs={12} md={12}>
              <Mytable />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid item md={12} >

            <Card sx={{ px: 1, py: 2, mb: 1 }}>


              <CardHeader title="Sales Summary" />
              <Divider />






              <DoughnutChart
                height="300px"

                color={["#02B2AF", "#2E96FF", "#B800D8"]}
              />




            </Card>

          </Grid>
          <Grid item md={12}>
          {/* <Dialog open={user} onClose={handleDialogClose}  maxWidth="xs" fullWidth> */}
            <StyledCard elevation={6}>
              <Box sx={{ display: "flex", flexDirection: "column", alignSelf: 'flex-start' }}>
                <CardHeader title="Employees" />
                <Divider />

              </Box>
             {userList &&userList.map((staff:Staff)=>(

             
              <List disablePadding sx={{ width: "100%" }}>
                <ListItem
                  sx={{
                    py: 2
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src="/broken-image.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary={<Typography color="black">{staff.username}</Typography>} secondary={<Typography color="black">{staff.role}</Typography>} />
                  <IconButton onClick={() => previewClick(staff)} >
                  <InfoIcon fontSize="medium" />
                  </IconButton>
                </ListItem>
              </List> ))}
              <Divider />
           
            </StyledCard>
            {/* </Dialog> */}
          </Grid>
        </Grid>


      </Grid>

      <Edit
        editdialogOpen={previewdialogOpen}
        edithandleDialogClose={edithandleDialogClose}  
        edituserData={previewdata}
      />
    </>
  )
}
export default Heading;