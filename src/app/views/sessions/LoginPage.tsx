import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import image from "../../../../public/logo.png";
const LoginPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#d3c4a7', // Background color of the entire page
      }}
    >
      <Box
        sx={{
          width: '900px',
          height: '500px',
          display: 'flex',
          backgroundColor: '#f4e6cc',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Left Side - Welcome Text and Logo */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c1b094',
            padding: '20px',
          }}
        >
             <Typography variant="h4" sx={{  color: '#fff',fontSize:"35px", fontWeight: '800' }}>
            Welcome To IDBadge!
          </Typography>
          {/* Random image in place of the logo */}
          <img
            src={image}
            alt="Placeholder"
            // style={{ width: '650px', height: '600px' }}
          />
         
        </Box>

        {/* Right Side - Login Form */}
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '30px',
            backgroundColor: '#4b4432',
          }}
        >
          <Typography variant="h5" sx={{ color: '#fff', marginBottom: '20px' }}>
            Login
          </Typography>
          
          <TextField
            variant="filled"
            placeholder="Email"
            InputProps={{
              startAdornment: <EmailIcon sx={{ color: '#fff', marginRight: '10px' }} />,
              disableUnderline: true,
              sx: {
                backgroundColor: '#807760',
                color: '#fff',
                borderRadius: '4px',
                '&::placeholder': { color: '#fff' },
              },
            }}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          
          <TextField
            variant="filled"
            placeholder="Password"
            type="password"
            InputProps={{
              startAdornment: <LockIcon sx={{ color: '#fff', marginRight: '10px' }} />,
              disableUnderline: true,
              sx: {
                backgroundColor: '#807760',
                color: '#fff',
                borderRadius: '4px',
                '&::placeholder': { color: '#fff' },
              },
            }}
            sx={{ marginBottom: '20px', width: '100%' }}
          />
          
          <Typography
            sx={{
              alignSelf: 'flex-end',
              marginBottom: '10px',
              color: '#d3c4a7',
              cursor: 'pointer',
            }}
          >
            Forgot Password?
          </Typography>
          
          <Button
            variant="contained"
            sx={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#d3c4a7',
              color: '#4b4432',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#b7a585',
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