import React, { useEffect } from 'react';
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
} from '@mui/material';
import { BrandType } from '../../Models/BrandModel';
import { addBrand, updateBrand } from '../../Slices/BrandSlice';

interface Props {
  open: boolean;
  closeForm: () => void;
  initialBrand: BrandType | null;
}

const BrandForm: React.FC<Props> = ({ open, closeForm, initialBrand }) => {
  const { control, handleSubmit, reset } = useForm<BrandType>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialBrand) {
      reset(initialBrand);
    } else {
      reset({
        brandId: '',
        brandName: '',
        location: '',
      });
    }
  }, [initialBrand, reset]);

  const onSubmit = (data: BrandType) => {
    if (initialBrand) {
      // If we're updating an existing brand, use the new data
      dispatch(updateBrand(data));
    } else {
      // If it's a new brand, generate an ID if not provided
      const newBrandId = data.brandId || Math.random().toString(36).substr(2, 9);
      dispatch(addBrand({ ...data, brandId: newBrandId }));
    }
    closeForm();
  };

  return (
    <Dialog open={open} onClose={closeForm}>
      <DialogTitle>{initialBrand ? 'Edit Brand' : 'Add Brand'}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name="brandId"
              control={control}
              defaultValue=""
              rules={{ required: 'Brand ID is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Brand ID"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="brandName"
              control={control}
              defaultValue=""
              rules={{ required: 'Brand name is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Brand Name"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="location"
              control={control}
              defaultValue=""
              rules={{ required: 'Location is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Location"
                  error={!!error}
                  helperText={error?.message}
                  fullWidth
                />
              )}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeForm}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initialBrand ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BrandForm;