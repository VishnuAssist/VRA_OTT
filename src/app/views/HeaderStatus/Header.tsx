import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab, Box, Tooltip } from "@mui/material";
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
    <Box sx={{ width: "100%", py: 2, backgroundColor: "#ffff" }}>
      <Box>
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
                  <SpeedIcon sx={{ marginRight: 1 }} />
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>Dashboard</Box>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/employee/employeeManagement"
            label={
              <Tooltip title="Users" arrow>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PersonIcon sx={{ marginRight: 1 }} />
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>Users</Box>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/voucher/voucherManagement"
            label={
              <Tooltip title="Vouchers" arrow>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ConfirmationNumberIcon sx={{ marginRight: 1 }} />
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>Vouchers</Box>
                </Box>
              </Tooltip>
            }
          />
          <Tab
            value="/Setting/Dictionary"
            label={
              <Tooltip title="Dictionary" arrow>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SettingsIcon sx={{ marginRight: 1 }} />
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>Dictionary</Box>
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
