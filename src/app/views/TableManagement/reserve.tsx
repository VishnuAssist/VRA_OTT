// src/components/Reserve.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Paper } from '@mui/material';
import { removeReservation } from '../../Slices/reserve'; // Ensure the path is correct
import { Reserve } from '../../Models/reserve';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


 
const Reservation = () => {
    const dispatch = useDispatch();
    const { reservationList } = useSelector((state: any) => state.reserve);

    const handleDeleteClick = (id: any) => {
        console.log(id)
        dispatch(removeReservation({id}));
        
    };
    const [open, setOpen] = React.useState(false);
    const [id,setSelectedId]=  React.useState<null | number>(null);

    const handleClickOpen = (id_:number) => {
      setOpen(true);
      setSelectedId(id_)
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
       
        <TableContainer component={Paper} sx={{ overflow: 'auto' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>#</TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>Name</TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>Table Number</TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>Date&Time</TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>Notes</TableCell>
                        <TableCell sx={{ fontSize: '12px' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservationList && reservationList.map((detail: Reserve) => (
                        <TableRow key={detail.id}>
                            <TableCell></TableCell>
                            <TableCell>{detail.id}</TableCell>
                            <TableCell>{detail.name}</TableCell>
                            <TableCell>{detail.table}</TableCell>
                            <TableCell>{detail.date}</TableCell>
                            <TableCell>{detail.notes}</TableCell>
                            <TableCell>
                                <Button 
                                    color="error"
                                  onClick={() => handleClickOpen(detail.id)}
                                >
                                    Cancel
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog
        open={open}
        onClose={handleClose}
      >
        
        <DialogContent>
          <DialogContentText>
           Are you sure you want to cancel this Reservation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button color="error" onClick={() => handleDeleteClick(id)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </>
    );
};

export default Reservation;