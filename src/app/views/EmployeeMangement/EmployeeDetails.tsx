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
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  // Typography,
} from "@mui/material";
import {
  // Add as AddIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
  // Delete as DeleteIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useDispatch, useSelector } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import EmployeePreview from "./EmployeePreview";
import { EmployeeProfile } from "../../Models/EmployeeModel";
import { removeEmployee } from "../../Slices/EmployeeSlice";
// import BulkEmployeeUpload from "./BulkImportDetails";
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';
// import FileUploadIcon from '@mui/icons-material/FileUpload';

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

  // const [bulk, setBulk] = useState(false);
  // const openBulkImport = () => setBulk(true);
  // const closeBulkImport =() => setBulk(false);
  // const openForm = () => setFormOpen(true);
  
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

  // const openDeleteConfirm = (user: EmployeeProfile) => {
  //   setUserToDelete(user);
  //   setDeleteOpen(true);
  // };

  const filteredEmployees = userList.filter((employee: EmployeeProfile) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [status, setStatus] = useState<string>('');
  const [department, setDepartment] = useState<string>('');

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value as string);
  };

  const handleDepartmentChange = (event: SelectChangeEvent<string> ) => {
    setDepartment(event.target.value as string);
  };
  
  return (
    <>
      <Box  >
        <TableContainer component={Paper} sx={{p:1}}>
        <Box sx={{ width: "100%", py: 2 }}>
    <Grid container spacing={2} >
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <TextField
          variant="outlined"
          placeholder="Search employees"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{width:"250px"}}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={3} lg={3}>
        <FormControl fullWidth size="small">
          <InputLabel id="status-label">Filter by Status</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={handleStatusChange}
            label="Filter by Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="active">
              <CheckCircle style={{ marginRight: 8 }} />
              Active Users
            </MenuItem>
            <MenuItem value="inactive">
              <Cancel style={{ marginRight: 8 }} />
              Inactive Users
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <FormControl sx={{width:"200px" }} size="small">
          <InputLabel id="department-label">Filter by Department</InputLabel>
          <Select
            labelId="department-label"
            value={department}
            onChange={handleDepartmentChange}
            label="Filter by Department"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="hr">Human Resources</MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      
    </Grid>
  </Box>
        
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
                    {/* <Avatar src={employee.picture} alt={employee.firstName}>
                      {employee.firstName.charAt(0)}
                    </Avatar> */}
                    <Avatar
                src={employee.picture}
                alt={`${employee.firstName} ${employee.lastName}`}
                sx={{
                  width: 60,
                  height: 60,
                  border: theme => `3px solid ${employee.isActive ? theme.palette.success.main : theme.palette.error.main}`,
                  // border: theme => `3px solid ${theme.palette.background.paper}`,
                  boxShadow: 2
                }}
              />
                  </TableCell>
                  <TableCell>{employee.employeeID}</TableCell>
                  {/* <TableCell>{`${employee.firstName} ${employee.lastName}`}</TableCell> */}
                  <TableCell>
  
  {`${employee.firstName} ${employee.lastName}`}
  <VerifiedIcon style={{ verticalAlign: 'middle', marginLeft: '5px' ,color:"#1DA1F2"}} />
</TableCell>
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
{/* <BulkEmployeeUpload open={bulk} onClose={closeBulkImport}/> */}
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