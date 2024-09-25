import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonIcon from "@mui/icons-material/Person";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{ p: 2, bgcolor: "#f0ece3" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              border: "4px solid #20b2aa",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/dashboard/ui")}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", fontWeight: "800" }}
              >
                DASHBOARD
              </Typography>
              <SpeedIcon
                sx={{
                  p: 1,
                  fontSize: 64,
                  color: "#fff",
                  backgroundColor: "#20b2aa",
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              />
            </CardContent>
            <Box
              sx={{
                height: "20px",
                bgcolor: "#20b2aa",
                width: "100%",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              border: "4px solid #8e44ad",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/employee/employeeManagement")}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", fontWeight: "800" }}
              >
                USERS
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: 0,
                  right: 0,
                  height: "10px",
                  bgcolor: "#8e44ad",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pr: 1,
                }}
              >
                <PersonIcon
                  sx={{
                    p: 1,
                    fontSize: 64,
                    color: "#fff",
                    backgroundColor: "#8e44ad",
                    border: "2px solid #fff",
                    borderRadius: "20px",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "28px", fontWeight: "700", mt: 2 }}
              >
                140
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              border: "4px solid #e67e22",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/voucher/voucherManagement")}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", fontWeight: "800" }}
              >
                VOUCHERS
              </Typography>

              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: 0,
                  right: 0,
                  height: "10px",
                  bgcolor: "#e67e22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  pr: 1,
                }}
              >
                <ConfirmationNumberIcon
                  sx={{
                    p: 1,
                    fontSize: 64,
                    color: "#fff",
                    backgroundColor: "#e67e22",
                    border: "2px solid #fff",
                    borderRadius: "20px",
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "28px", fontWeight: "700", mt: 2 }}
              >
                059
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card
            sx={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              overflow: "visible",
              border: "4px solid #c71585",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => handleCardClick("/Setting/Dictionary")}
          >
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ fontSize: "30px", fontWeight: "800" }}
              >
                DICTIONARY
              </Typography>
              <SettingsIcon
                sx={{
                  p: 1,
                  fontSize: 64,
                  color: "#fff",
                  backgroundColor: "#c71585",
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              />
            </CardContent>
            <Box
              sx={{
                height: "20px",
                bgcolor: "#c71585",
                width: "100%",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
