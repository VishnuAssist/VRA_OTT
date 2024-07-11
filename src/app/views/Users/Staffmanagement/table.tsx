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
  Fab,
  Card,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Create from "./form";
import Edit from "./editview";
import { useSelector } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";

const Viewtable: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { userList } = useSelector((state: any) => state.staff);
  const [selectdata,setSelectdata]=useState<Staff | null>(null)

  const handleAddClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const [editdialogOpen, seteditDialogOpen] = useState(false);

  const edithandleAddClick = (data:Staff) => {
    setSelectdata(data)
    seteditDialogOpen(true);
  };
  const edithandleDialogClose = () => {
    seteditDialogOpen(false);
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

          <Fab
            onClick={handleAddClick}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
        <Divider />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <FormGroup>
                    <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Store</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {userList && userList.map((user: Staff) => (
              <TableRow key={user.id}>
                <TableCell>
                  <FormGroup>
                    <Checkbox defaultChecked />
                  </FormGroup>
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
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={()=>edithandleAddClick(user)}
                    size="small"
                    color="primary"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            
               ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Create dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      <Edit
        editdialogOpen={editdialogOpen}
        edithandleDialogClose={edithandleDialogClose}
        edituserData={selectdata}
      />
    </>
  );
};

export default Viewtable;
