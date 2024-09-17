import React from 'react';
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface Props {
  open: boolean;
  onClose: () => void;
}

const BrandPreview: React.FC<Props> = ({ open, onClose }) => {
  const selectedBrand = useSelector((state: any) => state.brand.selectedBrand);

  if (!selectedBrand) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Brand Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1"><strong>Brand ID:</strong> {selectedBrand.brandId}</Typography>
        <Typography variant="body1"><strong>Brand Name:</strong> {selectedBrand.brandName}</Typography>
        <Typography variant="body1"><strong>Location:</strong> {selectedBrand.location}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default BrandPreview;