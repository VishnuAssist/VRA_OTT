import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import EmployeePreview from "./EmployeePreview";
import { EmployeeProfile } from "../../Models/EmployeeModel";
import { removeEmployee } from "../../Slices/EmployeeSlice";
import BulkEmployeeUpload from "./BulkImportDetails";

const EmployeeDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state: any) => state.employee);

  
  const [isFormOpen, setFormOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<EmployeeProfile | null>(null);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<EmployeeProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [previewDetails, setPreviewDetails] = useState<EmployeeProfile | null>(null);

  const [bulk, setBulk] = useState(false);
  const openBulkImport = () => setBulk(true);
  const closeBulkImport =() => setBulk(false);
  const openForm = () => setFormOpen(true);
  
  const closeForm = () => {
    setFormOpen(false);
    setDataToEdit(null);
  };

  const openUpdate = (data: EmployeeProfile) => {
    setDataToEdit(data);
    setFormOpen(true);
  };

  const openPreviewDetails = (data: EmployeeProfile) => {
    setPreviewDetails(data);
    setPreviewOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete && userToDelete.employeeID) {
      dispatch(removeEmployee({ id: userToDelete.employeeID }));
      setDeleteOpen(false);
      setUserToDelete(null);
    }
  };

  const openDeleteConfirm = (user: EmployeeProfile) => {
    setUserToDelete(user);
    setDeleteOpen(true);
  };

  const filteredEmployees = userList.filter((employee: EmployeeProfile) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{ p: 2 }} >
        <Grid container spacing={2} alignItems="center" marginBottom={2}>
          <Grid item xs={12} sm={6} md={8}>
           <Typography fontSize={"24px"} fontWeight={700}>User Management</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2} textAlign="right">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openBulkImport}
            >
              Bulk Upload
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2} textAlign="right">
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
          <Grid container spacing={2} sx={{p:2}}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              variant="outlined"
              placeholder="Search employees"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          </Grid>
        
          <Table >
            
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee: EmployeeProfile) => (
                <TableRow key={employee.employeeID}>
                  <TableCell>
                    <Avatar src={employee.picture} alt={employee.firstName}>
                      {employee.firstName.charAt(0)}
                    </Avatar>
                  </TableCell>
                  <TableCell>{employee.employeeID}</TableCell>
                  <TableCell>{`${employee.firstName} ${employee.lastName}`}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.departmentOrStore}</TableCell>
                  <TableCell>{employee.grade}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="View"
                      onClick={() => openPreviewDetails(employee)}
                    >
                      <ViewIcon sx={{color:"blue"}}/>
                    </IconButton>
                    <IconButton
                      aria-label="Edit"
                      onClick={() => openUpdate(employee)}
                    >
                      <EditIcon sx={{color:"orange"}}/>
                    </IconButton>
                    {/* <IconButton
                      aria-label="Delete"
                      onClick={() => openDeleteConfirm(employee)}
                    >
                      <DeleteIcon sx={{color:"red"}}/>
                    </IconButton> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <EmployeeForm
        open={isFormOpen}
        closeForm={closeForm}
        initialEmployee={dataToEdit}
      />
<BulkEmployeeUpload open={bulk} onClose={closeBulkImport}/>
      <EmployeePreview
        preview={isPreviewOpen}
        closePreview={() => setPreviewOpen(false)}
        PreviewDetails={previewDetails}
      />

      <Dialog open={isDeleteOpen} onClose={() => setDeleteOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this employee?
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

export default EmployeeDetails;