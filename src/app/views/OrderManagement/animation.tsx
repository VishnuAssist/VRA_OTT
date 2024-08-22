import React from 'react';
import { Box, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const FoodAnimation: React.FC = () => {
  return (
    <Box textAlign="center" mt={4}>
      <FastfoodIcon className="food-animation food-icon" />
      <Typography variant="h6" mt={2}>Preparing your food...</Typography>
    </Box>
  );
};

export default FoodAnimation;
