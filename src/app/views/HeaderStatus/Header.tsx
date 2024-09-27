import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Box, Grid, Badge } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  
  const userCount = 80;  
  const voucherCount = 59; 

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{ p: 2, bgcolor: "#f0ece3" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "4px solid #20b2aa",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/dashboard/ui")}
          >
            <CardContent>
              <SpeedIcon sx={{ fontSize: 48, color: "#20b2aa" }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                DASHBOARD
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#20b2aa", height: "10px", width: "100%", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "4px solid #8e44ad",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/employee/employeeManagement")}
          >
            <CardContent>
              <Badge badgeContent={userCount} color="secondary">
                <PersonIcon sx={{ fontSize: 48, color: "#8e44ad" }} />
              </Badge>
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                USERS
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#8e44ad", height: "10px", width: "100%", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "4px solid #e67e22",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/voucher/voucherManagement")}
          >
            <CardContent>
              <Badge badgeContent={voucherCount} color="secondary">
                <ConfirmationNumberIcon sx={{ fontSize: 48, color: "#e67e22" }} />
              </Badge>
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                VOUCHERS
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#e67e22", height: "10px", width: "100%", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "4px solid #c71585",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/Setting/Dictionary")}
          >
            <CardContent>
              <SettingsIcon sx={{ fontSize: 48, color: "#c71585" }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
                DICTIONARY
              </Typography>
            </CardContent>
            <Box sx={{ bgcolor: "#c71585", height: "10px", width: "100%", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px" }} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
