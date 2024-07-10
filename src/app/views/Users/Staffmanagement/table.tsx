import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Paper,
  Box,
  TextField,
  Fab,
  Card,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Icon } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Create from './form';

const Viewtable: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAddClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ p: 4, height: "100%", border: '1px solid black' }}>
        <Box display={'flex'} justifyContent={"space-between"} flexWrap={"wrap"} p={2}>
          <TextField label="Search" />

          <Fab onClick={handleAddClick} size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>

        </Box>


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
              <TableRow>
                <TableCell>
                  <FormGroup>
                  <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell>
                <TableCell>John</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Nothing</TableCell>
                <TableCell>Nothing</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" aria-label="VisibilityIcon">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <FormGroup>
                  <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell>
                <TableCell>John</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>Nothing</TableCell>
                <TableCell>Nothing</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" aria-label="VisibilityIcon">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Create dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
    </>
  );
};

export default Viewtable;
