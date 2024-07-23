import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
//   Checkbox,
//   FormGroup,
  Box,
  TextField,
  Card,
  IconButton,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";

const TaskTable: React.FC = () => {
  const { taskList } = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);


//   const [addnewuser, setAddnewuser] = useState(false);      
//   const handleAddClick = () => {
//     setAddnewuser(true);
//   };

//   const handleDialogClose = () => {
//     setAddnewuser(false);
//   };

//   const [previewdialogOpen, setPreviewDialogOpen] = useState(false);      
  // const [selectdata, setSelectdata] = useState<Staff | null>(null);

  const edithandleAddClick = (data: TaskType) => {
    setSelectdata(data);
    setDialogOpen(true);
  };
  
  const closeEdit=()=>{
    setDialogOpen(false)
  }

//   const edithandleDialogClose = () => {
//     setPreviewDialogOpen(false);
//   };

//   const [previewdata, setPreviewData] = useState<TaskType | null>(null);
  
//   const previewClick = (data: TaskType) => {        
//     setPreviewData(data);                             //preview
//     setPreviewDialogOpen(true);
//   };

  

  const deleteUser = (data: TaskType) => {
    dispatch(removeTask({ id: data.id }));
  };

  return (
    <>
    
    
      <Card sx={{ p: 2, height: "100%" }}>
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
        
        <TableContainer sx={{overflow:"auto"}} >
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>
                  <FormGroup>
                    <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell> */}
              
                <TableCell sx={{fontSize:'12px'}}>#Id</TableCell>
                <TableCell sx={{fontSize:'12px'}}>User Name</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Task</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Date</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {taskList &&
                taskList.map((task: TaskType,index:number) => (
                  <TableRow key={task.id}>
                      <TableCell>
                     {index+1}
                    </TableCell>
                   {/* <TableCell>
                    <Badge color={user.isActive ? 'success' : 'error'}  variant="dot">
                      <Avatar alt={user.username} src={user?.profilePicture ?? ""} />
                    </Badge>
                  </TableCell> */}
                    <TableCell>{task.users}</TableCell>
                    <TableCell>{task.task}</TableCell>
                    <TableCell>{task.date}</TableCell>
                    <TableCell>
                      {/* <IconButton
                        size="small"
                        color="primary"
                        aria-label="VisibilityIcon"
                        onClick={() => previewClick(task)}
                      >
                        <VisibilityIcon />
                      </IconButton> */}
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                        onClick={() => edithandleAddClick(task)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="delete"
                        onClick={() => deleteUser(task)}
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

 
    <AddEditForm openmodel={dialogOpen} closetaskmodel={closeEdit} initialTask={selectdata}/>
      
    
    </>
  );
};

export default TaskTable;
