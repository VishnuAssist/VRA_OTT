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


  const [addnewuser, setAddnewuser] = useState(false);      //add new user
  const handleAddClick = () => {
    setAddnewuser(true);
  };

  const handleDialogClose = () => {
    setAddnewuser(false);
  };

  const [previewdialogOpen, setPreviewDialogOpen] = useState(false);      //edit
  // const [selectdata, setSelectdata] = useState<Staff | null>(null);
  const edithandleAddClick = (data: Staff) => {
    setSelectdata(data);
    setDialogOpen(true);
  };
  
  const closeEdit=()=>{
    setDialogOpen(false)
  }

  const edithandleDialogClose = () => {
    setPreviewDialogOpen(false);
  };

  const [previewdata, setPreviewData] = useState<Staff | null>(null);
  
  const previewClick = (data: Staff) => {        
    setPreviewData(data);                             //preview
    setPreviewDialogOpen(true);
  };

  

  // const deleteUser = (data: Staff) => {
  //   dispatch(removeStaff({ id: data.id }));
  // };


  const [alertdeleteStaff, setAlertDeleteStaff] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Staff | null>(null);

  const deleteUser=()=>{

    if (userToDelete){
      dispatch(removeStaff({ id: userToDelete.id }));
      setAlertDeleteStaff(false);
      setUserToDelete(null);
    }
  }
  const openDelete = (user:Staff) => {
    setAlertDeleteStaff(true);
    setUserToDelete(user);
  };
  const closeDelete = () => {
    setAlertDeleteStaff(false);
    setUserToDelete(null);
  };

  return (
    <>
    
    
      
        
        <TableContainer sx={{overflow:"auto"}} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <FormGroup>
                    <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell>
              
                <TableCell sx={{fontSize:'12px'}}>Picture</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Name</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Position</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Store</TableCell>
                {/* <TableCell sx={{fontSize:'12px'}}>Status</TableCell> */}
                <TableCell sx={{fontSize:'12px'}}>Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {userList &&
                userList.map((user: Staff) => (
                  <TableRow key={user.id}>
                      <TableCell>
                      <FormGroup>
                        <Checkbox defaultChecked />
                      </FormGroup>
                    </TableCell>
                   <TableCell>
                    <Badge color={user.isActive ? 'success' : 'error'}  variant="dot">
                      <Avatar alt={user.username} src={user?.profilePicture ?? ""} />
                    </Badge>
                  </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.employeeID}</TableCell>
                    <TableCell>{user.storecode}</TableCell>
                    {/* <TableCell>{user.status}</TableCell> */}
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
        </TableContainer>
        
     
      <Dialog open={alertdeleteStaff} onClose={closeDelete}  maxWidth="xs" fullWidth>
        <DialogContent>
          Are you sure you want to delete this store ?
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
      <Create dialogOpen={addnewuser} handleDialogClose={handleDialogClose} //addnewuser
 /> 
      <Edit
        editdialogOpen={previewdialogOpen}
        edithandleDialogClose={edithandleDialogClose}   //preview
        edituserData={previewdata}
      />

      <Create
        dialogOpen={dialogOpen}
        handleDialogClose={closeEdit}
        initialUserData={selectdata}            //edit
      />
      
    
    </>
  );
};

export default Viewtable;
