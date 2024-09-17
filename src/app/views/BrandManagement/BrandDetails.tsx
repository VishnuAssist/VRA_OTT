import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Visibility as ViewIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { BrandType } from '../../Models/BrandModel';
import { removeBrand, setSelectedBrand } from '../../Slices/BrandSlice';
import BrandForm from './BrandForm';
import BrandPreview from './BrandPreview';


const BrandDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { brandList } = useSelector((state: any) => state.brand);

  const [isFormOpen, setFormOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<BrandType | null>(null);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [brandToDelete, setBrandToDelete] = useState<BrandType | null>(null);

  const openForm = () => setFormOpen(true);
  const closeForm = () => {
    setFormOpen(false);
    setDataToEdit(null);
  };

  const openUpdate = (data: BrandType) => {
    setDataToEdit(data);
    setFormOpen(true);
  };

  const openPreviewDetails = (data: BrandType) => {
    dispatch(setSelectedBrand(data));
    setPreviewOpen(true);
  };

  const confirmDelete = () => {
    if (brandToDelete) {
      dispatch(removeBrand({ id: brandToDelete.brandId }));
      setDeleteOpen(false);
      setBrandToDelete(null);
    }
  };

  const openDeleteConfirm = (brand: BrandType) => {
    setBrandToDelete(brand);
    setDeleteOpen(true);
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center" marginBottom={2}>
          <Grid item xs={12} sm={6} md={4}>
           <Typography fontSize={"24px"} fontWeight={700}>User Management</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={8} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openForm}
            >
              Add
            </Button>
          </Grid>
        </Grid>
       
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Brand ID</TableCell>
                <TableCell>Brand Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {brandList.map((brand: BrandType) => (
                <TableRow key={brand.brandId}>
                  <TableCell>{brand.brandId}</TableCell>
                  <TableCell>{brand.brandName}</TableCell>
                  <TableCell>{brand.location}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => openPreviewDetails(brand)}>
                    <ViewIcon sx={{color:"blue"}}/>
                    </IconButton>
                    <IconButton onClick={() => openUpdate(brand)}>
                      <EditIcon  sx={{color:"orange"}}/>
                    </IconButton>
                    <IconButton onClick={() => openDeleteConfirm(brand)}>
                      <DeleteIcon  sx={{color:"red"}}/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <BrandForm
        open={isFormOpen}
        closeForm={closeForm}
        initialBrand={dataToEdit}
      />

      <BrandPreview
        open={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
      />

      <Dialog open={isDeleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this brand?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BrandDetails;