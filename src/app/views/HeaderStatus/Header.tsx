


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, Typography, Box, Grid, Badge } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const userCount = 80;  
  const voucherCount = 59; 

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  const isActive = (path: string) => location.pathname === path;

  // Function to determine active color based on route
  // const getActiveColor = () => {
  //   if (isActive("/dashboard/ui")) return "#20b2aa";
  //   if (isActive("/employee/employeeManagement")) return "#8e44ad";
  //   if (isActive("/voucher/voucherManagement")) return "#e67e22";
  //   if (isActive("/Setting/Dictionary")) return "#c71585";
  //   return "#ccc"; 
  // };

  return (
    <Box sx={{ pt: 2}}> {/* Apply active background color */}
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} md={3} >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: `${isActive("/dashboard/ui") ? "20px" : "4px"} solid ${
                isActive("/dashboard/ui") ? "#20b2aa" : "#ECEFF4"}`,   
                borderRadius: isActive("/dashboard/ui") ? "30px 30px 0 0" : "",
                cursor: "pointer",
              "&:hover": { opacity: 0.9 },
              boxShadow: isActive("/dashboard/ui") ? "0px 4px 12px rgba(0, 0, 0, 0.2)" : "none",

            }}
            onClick={() => handleCardClick("/dashboard/ui")}
          >
            <CardContent>
              <SpeedIcon sx={{ fontSize: 48, color: isActive("/dashboard/ui") ? "#20b2aa" : "#ccc" }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                DASHBOARD
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#20b2aa", height: "10px", width: "100%"}} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>

          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: `${isActive("/employee/employeeManagement") ? "20px" : "4px"} solid ${
                isActive("/employee/employeeManagement") ? "#ae65ce" : "#ECEFF4"}`,             
               borderRadius: isActive("/employee/employeeManagement") ? "30px 30px 0 0" : "",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
              boxShadow:  "none",
            }}
            onClick={() => handleCardClick("/employee/employeeManagement")}
          >
            <CardContent>
              <Badge badgeContent={userCount} color="secondary">
                <PersonIcon sx={{ fontSize: 48, color: isActive("/employee/employeeManagement") ? "#8e44ad" : "#ccc" }} />
              </Badge>
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                USERS
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#ae65ce", height: "10px", width: "100%" }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: `${isActive("/voucher/voucherManagement") ? "20px" : "4px"} solid ${
                isActive("/voucher/voucherManagement") ? "#e0914c" : "#ECEFF4"}`,   
                borderRadius: isActive("/voucher/voucherManagement") ? "30px 30px 0 0" : "",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/voucher/voucherManagement")}
          >
            <CardContent>
              <Badge badgeContent={voucherCount} color="secondary">
                <ConfirmationNumberIcon sx={{ fontSize: 48, color: isActive("/voucher/voucherManagement") ? "#e67e22" : "#ccc" }} />
              </Badge>
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                VOUCHERS
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#e0914c", height: "10px", width: "100%"}} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: `${isActive("/Setting/Dictionary") ? "20px" : "4px"} solid ${
                isActive("/Setting/Dictionary") ? "#c64595" : "#ECEFF4"}`,   
                borderRadius: isActive("/Setting/Dictionary") ? "30px 30px 0 0" : "",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/Setting/Dictionary")}
          >
            <CardContent>
              <SettingsIcon sx={{ fontSize: 48, color: isActive("/Setting/Dictionary") ? "#c71585" : "#ccc" }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                DICTIONARY
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#c64595", height: "10px", width: "100%"}} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
