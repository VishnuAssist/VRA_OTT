import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import image from "../../components/assest/logo.png";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledImage = styled("img")(({ theme }) => ({
  display: "block",
  // border:"5px solid black",
  // width: "100%",
  // height: "100%",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  filter: `
    drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))
    drop-shadow(0 20px 13px rgb(0 0 0 / 0.08))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.12))
    drop-shadow(0 30px 25px rgb(0 0 0 / 0.15))
    drop-shadow(0 50px 35px rgb(0 0 0 / 0.07))
  `,
  transition: "filter 0.3s ease-in-out",
  "&:hover": {
    filter: `
      drop-shadow(0 20px 13px rgb(0 0 0 / 0.08))
      drop-shadow(0 8px 5px rgb(0 0 0 / 0.12))
      drop-shadow(0 30px 25px rgb(0 0 0 / 0.15))
      drop-shadow(0 50px 35px rgb(0 0 0 / 0.1))
      drop-shadow(0 70px 50px rgb(0 0 0 / 0.18))
    `,
  },
}));

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/dashboard/ui");
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F0E6CB", // Background color of the entire page
      }}
    >
     <Box
      sx={{
        width: "900px",
        height: "500px",
        display: "flex",
        backgroundColor: "red",
        border:"2px solid #50472D",
        boxShadow:"0 0 5px 7px #50472D",
        borderRadius: "10px",
        position: "relative",
        animation: "colorChange 4s forwards, glowEffect 6s ease-in-out",
        "@keyframes colorChange": {
          "from": { backgroundColor: "red" },
          "to": { backgroundColor: "yellow" }
        },
        "@keyframes glowEffect": {
          "0%": { boxShadow: "0 0 0 rgba(255, 255, 0, 0)" },
          "100%": { boxShadow: "0 0 0 rgb(75,68,50)" },//i have change the rgb color here
          "50%": { boxShadow: "0 0 90px rgba(255, 255, 0, 0.7)" },//increase here sheik bro
          
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-5px",
          left: "-5px",
          right: "-5px",
          bottom: "-5px",
          borderRadius: "55px",
          background: "linear-gradient(45deg, #ff0000, #ffff00)",
          zIndex: -1,
          filter: "blur(15px)",
          opacity: 0,
          animation: "glowPulse 2s ease-in-out"
        },
        "@keyframes glowPulse": {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      }}
    >
        
        {/* Left Side - Welcome Text and Logo */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#CBBC92",
            // padding: '20px',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 6,
              color: "#fff",
              fontSize: "35px",
              fontWeight: "800",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
            }}
          >
            Welcome to IDBadge!
          </Typography>
          {/* Random image in place of the logo */}

          <StyledImage src={image} alt="Map with filter shadow" />
        </Box>

        {/* Right Side - Login Form */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            backgroundColor: "#4b4432",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              // display:"flex",
              // justifyContent:"start",
              // alignItems:"start",
              // textAlign:"start",
              color: "#fff",
              marginBottom: "20px",
              fontSize: "25px",
              fontWeight: "900",
            }}
          >
            Login
          </Typography>

          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#C0BDB3", // Light gray background for the text field
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
                "& .MuiInputAdornment-root": {
                  marginRight: 0,
                  height: "100%",
                  maxHeight: "none",
                  backgroundColor: "#E8E7E4", // Indigo background for the icon
                  borderTopLeftRadius: "4px",
                  borderBottomLeftRadius: "4px",
                  padding: "0 12px",
                },
              },
              "& .MuiInputBase-input": {
                paddingLeft: "16px",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#757575",
                fontWeight: "bold",
                opacity: 1,
              },
              "& .MuiSvgIcon-root": {
                color: "#50472D", // White color for the icon
              },
            }}
          />

          
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#C0BDB3", // Very light gray background for the text field
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
                "& .MuiInputAdornment-root": {
                  marginRight: 0,
                  height: "100%",
                  maxHeight: "none",
                  backgroundColor: "#E8E7E4", // Green background for the icon
                  borderBottomLeftRadius: "4px",
                  borderBottomRightRadius:"4px",
                  padding: "0 12px",
                },
              },
              "& .MuiInputBase-input": {
                paddingLeft: "16px",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#757575",
                fontWeight: "bold",
                opacity: 1,
              },
              "& .MuiSvgIcon-root": {
                color: "#50472D", // White color for the icon
              },
            }}
          />

          <Typography
            sx={{
              alignSelf: "flex-end",
              marginBottom: "10px",
              color: "#d3c4a7",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Typography>

          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#968A66",
              color: "#4b4432",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#b7a585",
              },
            }}
          >
            Login
          </Button>
        </Box>


      </Box>
    </Box>
  );
};

export default LoginPage;
