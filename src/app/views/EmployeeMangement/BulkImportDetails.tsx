'use client'

import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';
import {
  Close as CloseIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { addEmployee } from '../../Slices/EmployeeSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

interface EmployeeProfile {
  firstName: string;
  middleName?: string;
  lastName: string;
  departmentOrStore: string;
  designation: string;
  country: string;
  city: string;
  email: string;
  mobile: string;
  picture: string;
  grade: string;
  brand: string;
  employeeType: 'Regular' | 'Part-time';
  joinDate: string;
  lastWorkingDate?: string;
  isActive: boolean;
  firstLogin?: string;
  lastLogin?: string;
  company: string;
  dateOfBirth: string;
  employeeID: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  immediateManager: {
    email: string;
    phone: string;
    designation: string;
  };
}

interface Props {
  open: boolean;
  onClose: () => void;
}

const BulkEmployeeImportDialog: React.FC<Props> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState<EmployeeProfile[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const { handleSubmit } = useForm<EmployeeProfile>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet) as EmployeeProfile[];
      setEmployees(parsedData);
    };

    reader.readAsBinaryString(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'text/csv': ['.csv']
    }
  });

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  const handleSave = (index: number) => {
    console.log(index)
    setEditingIndex(null);
  };

  const handleDelete = (index: number) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof EmployeeProfile) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = { ...updatedEmployees[index], [field]: event.target.value };
    setEmployees(updatedEmployees);
  };

  const onSubmit = handleSubmit(() => {
    employees.forEach(employee => {
      dispatch(addEmployee(employee));
    });
    onClose();
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ p: 0 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{p:2}}>
          <Typography variant="h6" sx={{fontSize:"18px",fontWeight:"700"}}>Bulk Employee Import</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{
        p: 3,
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none'
      }}>
        <Box {...getRootProps()}   sx={{
    border: '8px dashed gray', 
    padding: 4,              
    marginBottom: 4,        
    textAlign: 'center',     
    cursor: 'pointer',       
  }}>
        
          <input {...getInputProps()} />
          <Typography>Drag 'n' drop user files here, or click to select files</Typography>
          <Typography variant="caption">(Only *.xlsx and *.csv files will be accepted)</Typography>
        </Box>

        {employees.length > 0 && (
          <TableContainer component={Paper} className="mb-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {editingIndex === index ? (
                        <TextField
                          value={employee.firstName}
                          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, index, 'firstName')}
                        />
                      ) : (
                        employee.firstName
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <TextField
                          value={employee.lastName}
                          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, index, 'lastName')}
                        />
                      ) : (
                        employee.lastName
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <TextField
                          value={employee.email}
                          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, index, 'email')}
                        />
                      ) : (
                        employee.email
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <TextField
                          value={employee.departmentOrStore}
                          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, index, 'departmentOrStore')}
                        />
                      ) : (
                        employee.departmentOrStore
                      )}
                    </TableCell>
                    <TableCell>
                      {editingIndex === index ? (
                        <IconButton onClick={() => handleSave(index)}>
                          <SaveIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => handleEdit(index)}>
                          <EditIcon />
                        </IconButton>
                      )}
                      <IconButton onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {employees.length > 0 && (
          <Box display="flex" justifyContent="flex-end" sx={{py:2}}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit Employees
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BulkEmployeeImportDialog;