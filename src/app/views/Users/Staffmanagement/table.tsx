import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  FormGroup,
  Paper,
  IconButton,
  Badge,
  Avatar,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "./FormStaff";
import Edit from "./EditStaff";
import { useDispatch, useSelector } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";
import { removeStaff } from "../../../Slices/StaffManagementSlice";

const Viewtable: React.FC = () => {
  const { userList } = useSelector((state: any) => state.staff);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<Staff | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [addnewuser, setAddnewuser] = useState(false); 
  const handleAddClick = () => {
    setAddnewuser(true);
  };
  const handleDialogClose = () => {
    setAddnewuser(false);
  };
  const [previewdialogOpen, setPreviewDialogOpen] = useState(false); // Edit dialog state
  const edithandleAddClick = (data: Staff) => {
    setSelectdata(data);
    setDialogOpen(true);
  };
  const closeEdit = () => {
    setDialogOpen(false);
  };
  const edithandleDialogClose = () => {
    setPreviewDialogOpen(false);
  };
  const [previewdata, setPreviewData] = useState<Staff | null>(null);
  const previewClick = (data: Staff) => {
    setPreviewData(data); // Preview data
    setPreviewDialogOpen(true);
  };
  const [alertdeleteStaff, setAlertDeleteStaff] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Staff | null>(null);
  const deleteUser = () => {
    if (userToDelete) {
      dispatch(removeStaff({ id: userToDelete.id }));
      setAlertDeleteStaff(false);
      setUserToDelete(null);
    }
  };
  const openDelete = (user: Staff) => {
    setAlertDeleteStaff(true);
    setUserToDelete(user);
  };
  const closeDelete = () => {
    setAlertDeleteStaff(false);
    setUserToDelete(null);
  };

  
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  return (
    <>
      <TableContainer sx={{ overflow: "auto" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <FormGroup>
                  <Checkbox defaultChecked />
                </FormGroup>
              </TableCell>
              <TableCell sx={{ fontSize: '12px' }}>Picture</TableCell>
              <TableCell sx={{ fontSize: '12px' }}>Name</TableCell>
              <TableCell sx={{ fontSize: '12px' }}>Position</TableCell>
              <TableCell sx={{ fontSize: '12px' }}>Store</TableCell>
              <TableCell sx={{ fontSize: '12px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user: Staff) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <FormGroup>
                        <Checkbox defaultChecked />
                      </FormGroup>
                    </TableCell>
                    <TableCell>
                      <Badge color={user.isActive ? 'success' : 'error'} variant="dot">
                        <Avatar alt={user.username} src={user?.profilePicture ?? ""} />
                      </Badge>
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.employeeID}</TableCell>
                    <TableCell>{user.storecode}</TableCell>
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="VisibilityIcon"
                        onClick={() => previewClick(user)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                        onClick={() => edithandleAddClick(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="delete"
                        onClick={() => openDelete(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} 
          component="div"
          count={userList.length} 
          rowsPerPage={rowsPerPage} 
          page={page} 
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage} 
        />
      </TableContainer>

      <Dialog open={alertdeleteStaff} onClose={closeDelete} maxWidth="xs" fullWidth>
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button color="error" onClick={deleteUser}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Create dialogOpen={addnewuser} handleDialogClose={handleDialogClose} /> 
      <Edit
        editdialogOpen={previewdialogOpen}
        edithandleDialogClose={edithandleDialogClose}
        edituserData={previewdata}
      />
      <Create
        dialogOpen={dialogOpen}
        handleDialogClose={closeEdit}
        initialUserData={selectdata}
      />
    </>
  );
};

export default Viewtable;
