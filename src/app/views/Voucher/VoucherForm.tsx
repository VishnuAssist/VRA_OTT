import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { VoucherType } from '../../Models/VoucherType';
import { addVoucher, updateVoucher } from '../../Slices/VoucherSlice';

interface Props {
  open: boolean;
  closeForm: () => void;
  initialVoucher: VoucherType | null;
}

export default function VoucherForm({ open, closeForm, initialVoucher }: Props) {
  const { control, handleSubmit, reset } = useForm<VoucherType>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialVoucher) {
      reset(initialVoucher);
    } else {
      reset({
        voucherId: '',
        voucherName: '',
        voucherDescription: '',
        voucherStartDate: '',
        voucherEndDate: '',
        voucherBrand: '',
        voucherType: 'Multi-Use',
        voucherImage: '',
        isActive: true,
      });
    }
  }, [initialVoucher, reset]);

  const onSubmit = (data: VoucherType) => {
    if (initialVoucher) {
      dispatch(updateVoucher(data));
    } else {
      const newVoucherId = data.voucherId || Math.random().toString(36).substr(2, 9);
      dispatch(addVoucher({ ...data, voucherId: newVoucherId }));
    }
    closeForm();
  };

  return (
    <Dialog open={open} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle>{initialVoucher ? 'Edit Voucher' : 'Add Voucher'}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Controller
              name="voucherName"
              control={control}
              defaultValue=""
              rules={{ required: 'Voucher name is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Voucher Name"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="voucherDescription"
              control={control}
              defaultValue=""
              rules={{ required: 'Description is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Description"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="voucherStartDate"
              control={control}
              defaultValue=""
              rules={{ required: 'Start date is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Start Date"
                  type="date"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
            <Controller
              name="voucherEndDate"
              control={control}
              defaultValue=""
              rules={{ required: 'End date is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="End Date"
                  type="date"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
            <Controller
              name="voucherBrand"
              control={control}
              defaultValue=""
              rules={{ required: 'Brand is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Brand"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="voucherType"
              control={control}
              defaultValue="Multi-Use"
              rules={{ required: 'Voucher type is required' }}
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth error={!!error}>
                  <InputLabel>Voucher Type</InputLabel>
                  <Select {...field} label="Voucher Type">
                    <MenuItem value="Multi-Use">Multi-Use</MenuItem>
                    <MenuItem value="Single-Use">Single-Use</MenuItem>
                    <MenuItem value="Expiry Date">Expiry Date</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="voucherImage"
              control={control}
              defaultValue=""
              rules={{ required: 'Image URL is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Image URL"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="isActive"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select {...field} label="Status">
                    {/* <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem> */}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialVoucher ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}