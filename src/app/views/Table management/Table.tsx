import React, { useState } from 'react';
import {
  Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, 
  IconButton, Box, Card, CardContent, CardMedia, useMediaQuery, useTheme
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
<<<<<<< HEAD
import CloseIcon from '@mui/icons-material/Close';
=======
// import img1 from 'assets/img/table1/WhatsApp_Image_2024-08-14_at_12.10.57_2c8183c22-removebg-preview.png';
import img1 from '../../assets/table1/fourseater.png';
import img2 from '../../assets/img/table1/tableselect.png';
import img3 from "../../assets/img/table1/twoseat-removebg-preview (1).png";
import img4 from "../../assets/img/table1/threeseat-removebg-preview (1).png";
>>>>>>> cca8946abd18362ab94c77f3ef3478db41d19079

import img1 from "../../views/assets/image/fourseat.png";
// import img2 from '../../assets/img/table1/tableselect.png';
// import img3 from "../../assets/img/table1/twoseat-removebg-preview (1).png";
// import img4 from "../../assets/img/table1/threeseat-removebg-preview (1).png";

interface TableType {
  id: number;
  img: string;
}

const Table: React.FC = () => {
  const [tables, setTables] = useState<TableType[]>([]);
  const [formValues, setFormValues] = useState({
    Name: '',
    reservationTime: '',
    notes: '',
  });
  const [selectedImage, setSelectedImage] = useState(img1);
  const [isReserveOpen, setReserveOpen] = useState(false);
  const [isSelectOpen, setSelectOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const items = Array.from(tables);
    const [movedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedItem);

    setTables(items);
  };

  const handleTableClick = (index: number) => {
    const newTables = [...tables];
    newTables[index] = { ...newTables[index], img: img2 };
    setTables(newTables);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTables([...tables, { id: tables.length + 1, img: selectedImage }]);
    setReserveOpen(false);
    alert("Reservation successful. The table has been reserved.");
  };

  return (
    <Box pt={{ xs: '130px', md: '80px', xl: '80px' }} px={{ xs: '4', md: '8', xl: '16' }} position="relative">
      <Typography variant="h4" mb={4} fontWeight="700" textAlign="center">
        Select a Table
      </Typography>

      <Box display="flex" flexDirection="column" minHeight="60vh">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <Grid
                container
                ref={provided.innerRef}
                {...provided.droppableProps}
                spacing={3}
                mb={6}
                alignItems="flex-start"
              >
                {tables.length === 0 && (
                  <Grid item xs={12}>
                    <Card
                      sx={{
                        boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setSelectOpen(true)}
                    >
                      <CardContent>
                        <Typography color="textSecondary" align="center">
                          Add a Table
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )}
                {tables.map((table, index) => (
                  <Draggable key={table.id} draggableId={`table-${table.id}`} index={index}>
                    {(provided) => (
                      <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card
                          sx={{
                            boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                          onClick={() => handleTableClick(index)}
                        >
                          <CardMedia
                            component="img"
                            src={table.img}
                            alt={`Table ${table.id}`}
                            sx={{ width: '100%', height: 'auto' }}
                          />
                        </Card>
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>

        <Box mt="auto" display="flex" justifyContent="center" alignItems="center" gap="4">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSelectOpen(true)}
          >
            Add Table
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setReserveOpen(true)}
          >
            Reserve
          </Button>
        </Box>
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={isReserveOpen}
        onClose={() => setReserveOpen(false)}
      >
        <DialogTitle>Reserve Table</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setReserveOpen(false)}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="Name"
              value={formValues.Name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Reservation Time"
              name="reservationTime"
              type="datetime-local"
              value={formValues.reservationTime}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Notes"
              name="notes"
              value={formValues.notes}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={isSelectOpen}
        onClose={() => setSelectOpen(false)}
      >
        <DialogTitle>Select Table</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setSelectOpen(false)}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={2}>
            {[img3, img4, img1].map((img, idx) => (
              <Grid item key={idx}>
                <Card
                  sx={{ width: 120, height: 120, cursor: 'pointer' }}
                  onClick={() => setSelectedImage(img)}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Table Option ${idx}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              setTables([...tables, { id: tables.length + 1, img: selectedImage }]);
              setSelectOpen(false);
            }}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Table;
