import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import SpeedIcon from '@mui/icons-material/Speed'
import { useNavigate } from 'react-router-dom'

// Single Card Component
const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: number; 
  bgColor: string;
  onClick?: () => void;
}> = ({
  icon,
  label,
  value,
  bgColor,
  onClick,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '12px',
        backgroundColor: '#fff',
        color: bgColor,
        height: 150,
        width:"90%",
        boxShadow: `inset 18px 18px 35px ${bgColor}99, inset -8px -8px 15px ${bgColor}99, 4px 4px 8px rgba(0, 0, 0, 0.1)`,
        borderTop: `4px solid ${bgColor}`,
        borderLeft: `4px solid ${bgColor}`,
        borderRight: `4px solid ${bgColor}`,
        borderBottom: `4px solid ${bgColor}`,
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': {
          opacity: onClick ? 0.9 : 1,
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Box sx={{ color: bgColor }}>{icon}</Box>
        <Box>
          <Typography variant="caption" sx={{ fontSize: '18px', fontWeight: 500, color: bgColor }}>
            {label.toUpperCase()}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 800, color: bgColor }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

// Main Component
export default function HeaderStats() {
  const navigate = useNavigate()

  const stats = [
    { 
      label: 'Dashborad', 
      value: 4, 
      icon: <SpeedIcon fontSize="large" />, 
      bgColor: '#09818C' ,
      onClick: () => navigate("/dashboard/ui")
    },
    { 
      label: 'Users', 
      value: 140, 
      icon: <PeopleIcon fontSize="large" />, 
      bgColor: '#60098C',
      onClick: () => navigate("/employee/employeeManagement")
    },
   
    { 
      label: 'Vouchers', 
      value: 10, 
      icon: <ConfirmationNumberIcon fontSize="large" />, 
      bgColor: '#DFA881',
      onClick: () => navigate("/voucher/voucherManagement")
      
    },
    { 
      label: 'Dictionary', 
      value: 40, 
      icon: <LocalMallIcon fontSize="large" />, 
      bgColor: '#AA467A' ,
      onClick: () => navigate("/Setting/Dictionary")

    },
    
  ]

  return (
    <Grid container spacing={1} justifyContent="center" sx={{ p: 2 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard 
            icon={stat.icon} 
            label={stat.label} 
            value={stat.value} 
            bgColor={stat.bgColor}
            onClick={stat.onClick}
          />
        </Grid>
      ))}
    </Grid>
  )
}