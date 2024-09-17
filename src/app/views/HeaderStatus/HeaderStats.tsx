import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SpeedIcon from '@mui/icons-material/Speed';

// Single Card Component
const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: number; bgColor: string }> = ({
  icon,
  label,
  value,
  bgColor,
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
        backgroundColor: '#fff', // it was a neutral 
        color: bgColor, // this is for icon and text
        height: 120, // height of card
        boxShadow: `inset 8px 8px 15px ${bgColor}33, inset -8px -8px 15px ${bgColor}33, 4px 4px 8px rgba(0, 0, 0, 0.1)`,
        // Inset shadows for right/bottom color emission
        borderTop: `4px solid ${bgColor}`,
        borderLeft: `4px solid ${bgColor}`,
        borderRight: `4px solid ${bgColor}`,
        borderBottom: `4px solid ${bgColor}`,
        
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Apply color to the icon */}
        <Box sx={{ color: bgColor }}>{icon}</Box>
        <Box>
          {/* Typography styled with bgColor */}
          <Typography variant="caption" sx={{ fontSize: '18px', fontWeight: 500, color: bgColor }}>
            {label.toUpperCase()}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 800, color: bgColor }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

// Main Component
const HeaderStats: React.FC = () => {
  const stats = [
    { label: 'Users', value: 140, icon: <PeopleIcon fontSize="large" />, bgColor: '#60098C' },
    { label: 'Brands', value: 40, icon: <LocalMallIcon fontSize="large" />, bgColor: '#AA467A' },
    { label: 'Vouchers', value: 10, icon: <ConfirmationNumberIcon fontSize="large" />, bgColor: '#DFA881' },
    { label: 'Grades', value: 4, icon: <SpeedIcon fontSize="large" />, bgColor: '#09818C' },
  ];

  return (
    <Grid container spacing={1} justifyContent="center" sx={{ p: 2 }}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatCard icon={stat.icon} label={stat.label} value={stat.value} bgColor={stat.bgColor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HeaderStats;
