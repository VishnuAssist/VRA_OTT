import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab, Box, Tooltip, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "100%",display: "flex", alignItems: "center", justifyContent: "flex-start", py: 0}}>
      <Box sx={{ width: "85%" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
        >
          
          <Tab
            value="/dashboard/ui"
            label={
              <Tooltip title="Dashboard" arrow>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SpeedIcon sx={{ marginRight: 1 ,color:"#4B4432"}} />
                  {/* <Box sx={{ display: { xs: "none", sm: "block" ,color:"#4B4432"} }}>Dashboard</Box> */}
                  <Typography sx={{fontSize:"15px",fontWeight:"600", color:"#4B4432" }}>Dashboard</Typography>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/employee/employeeManagement"
            label={
              <Tooltip title="Users" arrow>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                  <PersonIcon sx={{ marginRight: 1,color:"#4B4432" }} />
                  {/* <Box sx={{ display: { xs: "none", sm: "block" ,color:"#4B4432"} }}>Users</Box> */}
                  <Typography sx={{fontSize:"15px",fontWeight:"600", color:"#4B4432" }}>Users</Typography>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/voucher/voucherManagement"
            label={
              <Tooltip title="Vouchers" arrow>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                  <ConfirmationNumberIcon sx={{ marginRight: 1 ,color:"#4B4432"}} />
                  {/* <Box sx={{ display: { xs: "none", sm: "block" ,color:"#4B4432"} }}>Vouchers</Box> */}
                  <Typography sx={{fontSize:"15px",fontWeight:"600", color:"#4B4432" }}>Vouchers</Typography>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/Setting/Dictionary"
            label={
              <Tooltip title="Dictionary" arrow>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SettingsIcon sx={{ marginRight: 1 , color:"#4B4432"}} />
                  {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>Dictionary</Box> */}
                  <Typography sx={{fontSize:"15px",fontWeight:"600", color:"#4B4432" }}>Dictionary</Typography>
                </Box>
              </Tooltip>
            }
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;
