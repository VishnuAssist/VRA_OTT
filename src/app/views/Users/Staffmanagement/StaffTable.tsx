import  { useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  IconButton,
  Input,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import StaffForm from './StaffForm';
import StaffPreview from './StaffPreview';
import { Staff } from '../../../Models/StaffModel';
import { removeStaff } from '../../../Slices/StaffManagementSlice';
import { SiCodechef } from 'react-icons/si';
import {  FaUserTie } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';

const StaffTables = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state: any) => state.staff);

  // Form state
  const [isFormOpen, setFormOpen] = useState(false);
  const [datatoedit, setDataToEdit] = useState<Staff | null>(null);

  // Preview state
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [previewdata, setPreviewData] = useState<Staff | null>(null);

  // Delete state
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Staff | null>(null);

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  const openUpdate = (data: Staff) => {
    setDataToEdit(data);
    setFormOpen(true);
  };

  const openPreviewDetails = (data: Staff) => {
    setPreviewData(data);
    setPreviewOpen(true);
  };

  
  const confirmDelete = () => {
    if (userToDelete && userToDelete.id !== undefined) {
      dispatch(removeStaff({ id: userToDelete.id }));
      setDeleteOpen(false);
      setUserToDelete(null);
    }
  };

  const openDeleteConfirm = (user: Staff) => {
    setUserToDelete(user);
    setDeleteOpen(true);
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'chef':
        return <SiCodechef style={{ marginRight: 8 }} />;
      case 'manager':
        return <FaUserTie style={{ marginRight: 8 }} />;
      case 'cashier':
        return <FaUserTie style={{ marginRight: 8 }} />;
      case 'waiter':
        return <IoRestaurant style={{ marginRight: 8 }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ p: 4, m: 4 }} component={Paper}>
        
          <Box display="flex" justifyContent="space-between" mb={4}>
            <Input placeholder="Search" sx={{ width: 240 }} />
            <IconButton
              aria-label="Add staff"
              color="primary"
              onClick={openForm}
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 4 }} />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Profile</TableCell>
                  <TableCell>Staff Name</TableCell>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userList?.length > 0 ? (
                  userList.map((staffDetails: Staff) => (
                    <TableRow key={staffDetails?.id}>
                      <TableCell>
                        <Badge variant="dot">
                          <Avatar>{staffDetails.username?.charAt(0) || 'U'}</Avatar>
                        </Badge>
                      </TableCell>
                      <TableCell>{staffDetails.username}</TableCell>
                      <TableCell>{staffDetails.employeeID}</TableCell>
                      <TableCell>
                        {getRoleIcon(staffDetails?.role || '')}
                        {staffDetails.role}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="Preview staff"
                          onClick={() => openPreviewDetails(staffDetails)}
                        >
                          <ViewIcon />
                        </IconButton>
                        <IconButton
                          aria-label="Edit staff"
                          onClick={() => openUpdate(staffDetails)}
                          sx={{ mx: 1 }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="Delete staff"
                          color="error"
                          onClick={() => openDeleteConfirm(staffDetails)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        
      </Box >

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this staff?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button color="error" onClick={confirmDelete}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Staff Form Dialog */}
      <StaffForm
        open={isFormOpen}
        closeForm={closeForm}
        initialStore={datatoedit}
      />

      {/* Staff Preview Dialog */}
      <StaffPreview
        preview={isPreviewOpen}
        closePreview={() => setPreviewOpen(false)}
        PreviewDetails={previewdata}
      />
    </>
  );
};

export default StaffTables;
