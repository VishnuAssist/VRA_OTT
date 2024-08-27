import React, { useState } from 'react';
import {
  Button, Grid, Typography, Dialog, DialogTitle, DialogContent, TextField,
  IconButton, Box, Card, CardContent, CardMedia, useMediaQuery, useTheme
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import img1 from '../../views/assets/image/fourseat.png';
import img2 from '../../views/assets/image/threeseat.png';
import img3 from "../../views/assets/image/twoseatre.png";
import img4 from "../../views/assets/image/fourseatselect.png";
import img5 from "../../views/assets/image/threeseatselect.png";
import img6 from "../../views/assets/image/twoseatselect.png";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../Slices/reserve';
import { Reserve } from '../../Models/reserve';

interface TableType {
  id: number;
  img?: string;
  selectedImg?: string;
}

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const [tables, setTables] = useState<TableType[]>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ]);
  const [selectedImage, setSelectedImage] = useState(img1);
  const [isReserveOpen, setReserveOpen] = useState(false);
  const [isSelectOpen, setSelectOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<Reserve>();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getSelectedImage = (img: string) => {
    switch (img) {
      case img1:
        return img4;
      case img2:
        return img5;
      case img3:
        return img6;
      default:
        return img;
    }
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    // Reordering the tables array
    const items = Array.from(tables);
    const [movedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedItem);

    setTables(items);
  };

  const handleTableClick = (index: number) => {
    if (index === tables.length) {
      setSelectOpen(true);
    } else {
      const newTables = [...tables];
      const table = newTables[index];
      table.img = table.img === table.selectedImg ? table.img : table.selectedImg;
      setTables(newTables);
    }
  };

  const handleRemoveTable = (index: number) => {
    const newTables = tables.filter((_, idx) => idx !== index);
    setTables(newTables);
  };

  const onSubmit = (data: Reserve) => {
    const newReservation: Reserve = {
      ...data,
      id: tables.length + 1,
      date: new Date().toISOString().split('T')[0],
    };

    dispatch(addReservation(newReservation));
    setReserveOpen(false);
    reset();
    alert("Reservation successful. The table has been reserved.");
  };

  const generateEmptyCards = () => {
    const numberOfEmptyCards = 4;
    const emptyCards = [];
    for (let i = 0; i < numberOfEmptyCards; i++) {
      if (tables.length < 4 || i >= tables.length) {
        emptyCards.push(
          <Grid item xs={12} sm={6} md={3} key={`empty-${i}`}>
            <Card
              sx={{
                boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)',
                cursor: 'pointer',
                height: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onClick={() => handleTableClick(tables.length)}
            >
              <CardContent>
                <Typography color="textSecondary" align="center">
                  Add a Table
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      }
    }
    return emptyCards;
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
                direction="row"
              >
                {tables.map((table, index) => (
                  <Draggable key={table.id} draggableId={`table-${table.id}`} index={index}>
                    {(provided) => (
                      <Grid item xs={12} sm={6} md={3} key={index} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card
                          sx={{
                            boxShadow: '0px 18px 40px rgba(112, 144, 176, 0.12)',
                            cursor: 'pointer',
                            height: '150px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                          }}
                          onClick={() => handleTableClick(index)}
                        >
                          {table.img && (
                            <CardMedia
                              component="img"
                              src={table.img}
                              alt={`Table ${table.id}`}
                              sx={{ width: '100%', height: 'auto' }}
                            />
                          )}
                          <IconButton
                            onClick={(event) => {
                              event.stopPropagation();
                              handleRemoveTable(index);
                            }}
                            sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              color: 'red'
                            }}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Card>
                      </Grid>
                    )}
                  </Draggable>
                ))}
                {generateEmptyCards()}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>

        <Box mt="auto" display="flex" justifyContent="center" alignItems="center" gap="4">
          <Button sx={{ marginRight: 2 }}
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
          <CancelPresentationIcon />
        </IconButton>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              {...register("name", { required: true })}
            />
            <TextField
              label="Table Number"
              name="table"
              type="number"
              fullWidth
              margin="normal"
              {...register("table", { required: true })}
            />
            <TextField
              label="Reservation Time"
              name="time"
              type="datetime-local"
              fullWidth
              margin="normal"
              {...register("time", { required: true })}
            />
            <TextField
              label="Notes"
              name="notes"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              {...register("notes")}
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
          <CancelPresentationIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={2}>
            {[img3, img2, img1].map((img, idx) => (
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
              setTables([...tables, { id: tables.length + 1, img: selectedImage, selectedImg: getSelectedImage(selectedImage) }]);
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
