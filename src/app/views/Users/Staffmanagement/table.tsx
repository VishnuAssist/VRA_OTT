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
  Box,
  TextField,
  // Fab,
  Card,
  IconButton,
  Divider,
  Badge,
  Avatar,
} from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Create from "./form";
import Edit from "./editview";
import { useDispatch, useSelector } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";
import { removeStaff } from "../../../Slices/StaffManagementSlice";

const Viewtable: React.FC = () => {
  const { userList } = useSelector((state: any) => state.staff);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<Staff | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);


  const [addnewuser, setAddnewuser] = useState(false);      //add new user
  // const handleAddClick = () => {
  //   setAddnewuser(true);
  // };

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

  

  const deleteUser = (data: Staff) => {
    dispatch(removeStaff({ id: data.id }));
  };

  return (
    <>
    
    
      <Card sx={{ p: 4, height: "100%", border: "1px solid #24665D" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <TextField label="Search" />

          {/* <Fab
            onClick={handleAddClick}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab> */}
        </Box>
        <Divider />
        
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
                <TableCell sx={{fontSize:'12px'}}>Status</TableCell>
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
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.status}</TableCell>
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
                        onClick={() => deleteUser(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Card>

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
