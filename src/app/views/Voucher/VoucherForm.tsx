import { useEffect, useState } from 'react';
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
  Grid,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { VoucherType } from '../../Models/VoucherType';
import { addVoucher, updateVoucher } from '../../Slices/VoucherSlice';
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

interface Props {
  open: boolean;
  closeForm: () => void;
  initialVoucher: VoucherType | null;
}

export default function VoucherForm({ open, closeForm, initialVoucher }: Props) {
  const { control, handleSubmit, reset } = useForm<VoucherType>();
  const dispatch = useDispatch();

  const [voucherImage, setvoucherImage] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);
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
console.log("data",data)

    data.voucherImage = voucherImage  
    if (initialVoucher) {
      dispatch(updateVoucher(data));
    } else {
      const newVoucherId = data.voucherId || Math.random().toString(36).substr(2, 9);
      dispatch(addVoucher({ ...data, voucherId: newVoucherId }));
    }
    reset();
    setvoucherImage(null);
    closeForm();
  };

  const handleVoucherImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setvoucherImage(reader.result);
        }
      };
    }
  };
  return (
    <Dialog open={open} onClose={closeForm} maxWidth="md" fullWidth>
      <DialogTitle>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{p:2}}>
          <Typography variant="h6" sx={{fontSize:"18px",fontWeight:"700"}}>{initialVoucher ? 'Edit Voucher' : 'Add Voucher'}</Typography>
          <IconButton color="error" aria-label="close" onClick={closeForm}>
            <HighlightOffSharpIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
        
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  multiline
                  rows={3}
                />
              )}
            />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}display="flex" flexDirection="column" >
 
  <Button
    variant="contained"
    color="primary"
    onClick={() => document.getElementById('voucherInput').click()}
    // style={{ marginTop: '10px' }}
  >
    Upload Voucher
  </Button>
  <input
    type="file"
    accept="image/*"
    onChange={handleVoucherImageChange}
    style={{ display: "none" }}
    id="voucherInput"
  />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
{/* 
              <Controller
              name="isActive"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select {...field} label="Status">
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              )}
            /> */}

<FormControlLabel
                control={
                  <Switch
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    color="success"
                  />
                }
                label="Active"
              />
              </Grid>
            </Grid>
        
           
          
           
          
           
           
            {/* <Controller
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
            /> */}





      
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