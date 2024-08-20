import React, { useState } from 'react';
import {
  Box, Button, Grid, Typography, Modal, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import img1 from 'assets/img/table1/WhatsApp_Image_2024-08-14_at_12.10.57_2c8183c22-removebg-preview.png';
import img1 from '../../assets/table1/fourseater.png';
import img2 from '../../assets/img/table1/tableselect.png';
import img3 from "../../assets/img/table1/twoseat-removebg-preview (1).png";
import img4 from "../../assets/img/table1/threeseat-removebg-preview (1).png";
import towseatselected from "../../assets/img/table1/twoseat selected.png";
import threeseatselected from "../../assets/img/table1/threeseat selected.png";

const Table = () => {
  const [tables, setTables] = useState([]);
  const [formValues, setFormValues] = useState({
    Name: '',
    reservationTime: '',
    notes: '',
  });

  const [selectedImage, setSelectedImage] = useState(img1);
  const [form, setForm] = useState(false);

  const [openReserveModal, setOpenReserveModal] = useState(false);
  const [openSelectModal, setOpenSelectModal] = useState(false);

  const handleOpenReserveModal = () => setOpenReserveModal(true);
  const handleCloseReserveModal = () => setOpenReserveModal(false);
  const handleOpenSelectModal = () => setOpenSelectModal(true);
  const handleCloseSelectModal = () => setOpenSelectModal(false);

  const cardShadow = '0px 18px 40px rgba(112, 144, 176, 0.12)';

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const items = Array.from(tables);
    const [movedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedItem);

    setTables(items);
  };

  const handleTableClick = (index) => {
    const newTables = [...tables];
    newTables[index] = { ...newTables[index], img: img2 };
    setTables(newTables);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      setTables([...tables, { id: tables.length + 1, img: selectedImage }]);
      setForm(false);
    }
    console.log('Form submitted:', formValues);
    handleCloseReserveModal();
  };

  const handleClickOpen = () => {
    setForm(true);
  };

  const handleClose = () => {
    setForm(false);
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} px={{ base: '4', md: '8', xl: '16' }} position="relative">
      <Typography variant='h4' mb="4" fontWeight='700' textAlign='center'>
        Select a Table
      </Typography>

      <Box display="flex" flexDirection="column" minHeight="60vh">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <Grid
                ref={provided.innerRef}
                {...provided.droppableProps}
                container
                spacing={3}
                mb={6}
                alignItems="flex-start"
                style={{ flex: 1 }}
              >
                {tables.length === 0 && (
                  <Grid item xs={12}>
                    <Box
                      boxShadow={cardShadow}
                      borderRadius='8px'
                      overflow='hidden'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                      width='100%'
                      height='100px'
                      cursor='pointer'
                      bgcolor='grey.200'
                      textAlign='center'
                      onClick={handleOpenSelectModal}
                    >
                      <Typography color="textSecondary">Add a Table</Typography>
                    </Box>
                  </Grid>
                )}
                {tables.map((table, index) => (
                  <Draggable key={table.id} draggableId={`table-${table.id}`} index={index}>
                    {(provided) => (
                      <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Box
                          boxShadow={cardShadow}
                          borderRadius='8px'
                          overflow='hidden'
                          display='flex'
                          justifyContent='space-between'
                          alignItems='center'
                          style={{ ...provided.draggableProps.style, width: '100%', height: 'auto' }}
                          onClick={() => handleTableClick(index)}
                        >
                          <img src={table.img} alt={`Table ${table.id}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </Box>
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
            color="white"
            style={{ backgroundColor: 'red', fontSize: '22px', fontWeight: '700' }}
            onClick={handleOpenSelectModal}
          >
            Add Table
          </Button>
          <Button
            color="white"
            style={{ backgroundColor: 'red', fontSize: '22px', fontWeight: '700' }}
            onClick={handleOpenReserveModal}
          >
            Reserve
          </Button>
        </Box>
      </Box>

      <Modal open={openReserveModal} onClose={handleCloseReserveModal}>
        <Box
          bgcolor="background.paper"
          p={4}
          mx="auto"
          my={4}
          width="80%"
          maxWidth="600px"
          borderRadius="8px"
          boxShadow={3}
        >
          <Typography variant="h6" mb={2}>Reserve Table</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseReserveModal}
            style={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Name"
                name="Name"
                value={formValues.Name}
                onChange={handleFormChange}
                placeholder='Enter name'
                required
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Reservation Time"
                name="reservationTime"
                type='datetime-local'
                value={formValues.reservationTime}
                onChange={handleFormChange}
                required
                fullWidth
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Notes"
                name="notes"
                value={formValues.notes}
                onChange={handleFormChange}
                placeholder='Additional notes'
                multiline
                rows={4}
                fullWidth
              />
            </FormControl>
            <Button type='submit' color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal open={form} onClose={handleCloseSelectModal}>
        <Box
          bgcolor="background.paper"
          p={4}
          mx="auto"
          my={4}
          width="80%"
          maxWidth="600px"
          borderRadius="8px"
          boxShadow={3}
        >
          <Typography variant="h6" mb={2}>Select Table</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseSelectModal}
            style={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))"
            gap={2}
          >
            <img
              src={img3}
              alt="Image 3"
              style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img3)}
            />
            <img
              src={img4}
              alt="Image 4"
              style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img4)}
            />
            <img
              src={img1}
              alt="Image 1"
              style={{ width: '100%', height: 'auto', display: 'block', cursor: 'pointer' }}
              onClick={() => setSelectedImage(img1)}
            />
          </Box>
          <Button type='submit' color="primary" variant="contained" fullWidth mt={2}>
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Table;
