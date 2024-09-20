import React from 'react';
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Grid,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function VoucherPreview({ open, onClose }: Props) {
  const selectedVoucher = useSelector((state: any) => state.voucher.selectedVoucher);

  if (!selectedVoucher) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Voucher Details</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={selectedVoucher.voucherImage} alt={selectedVoucher.voucherName} style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{selectedVoucher.voucherName}</Typography>
            <Typography variant="body1" gutterBottom><strong>Description:</strong> {selectedVoucher.voucherDescription}</Typography>
            <Typography variant="body1" gutterBottom><strong>Start Date:</strong> {selectedVoucher.voucherStartDate}</Typography>
            <Typography variant="body1" gutterBottom><strong>End Date:</strong> {selectedVoucher.voucherEndDate}</Typography>
            <Typography variant="body1" gutterBottom><strong>Brand:</strong> {selectedVoucher.voucherBrand}</Typography>
            <Typography variant="body1" gutterBottom><strong>Type:</strong> {selectedVoucher.voucherType}</Typography>
            <Typography variant="body1" gutterBottom><strong>Status:</strong> {selectedVoucher.isActive ? 'Active' : 'Inactive'}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}