import React, { useState } from 'react';
import {
  Box, Button, Grid, GridItem, Text, useColorModeValue,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  FormControl, FormLabel, Input, Textarea, useDisclosure
} from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import img1 from 'assets/img/table1/WhatsApp_Image_2024-08-14_at_12.10.57_2c8183c22-removebg-preview.png';
import img2 from 'assets/img/table1/tableselect.png';
import img3 from "assets/img/table1/twoseat-removebg-preview (1).png";
import img4 from "assets/img/table1/threeseat-removebg-preview (1).png";
import towseatselected from "assets/img/table1/twoseat selected.png";
import threeseatselected from "assets/img/table1/threeseat selected.png";


const Table = () => {
  const [tables, setTables] = useState([]);
  const [formValues, setFormValues] = useState({
    Name: '',
    reservationTime: '',
    notes: '',
  });

  const [selectedImage, setSelectedImage] = useState(img1); 
  const [form, setForm] = useState(false); 

  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');

  const onDragEnd = (result:any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const items = Array.from(tables);
    const [movedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, movedItem);

    setTables(items);
  };

  const handleTableClick = (index:any) => {
    const newTables = [...tables];
    newTables[index] = { ...newTables[index], img: img2 };
    setTables(newTables);
  };

  const handleFormChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (form) {
      setTables([...tables, { id: tables.length + 1, img: selectedImage }]);
      setForm(false); 
    }
    console.log('Form submitted:', formValues);
    onClose(); 
  };

  const handleClickOpen = () => {
    setForm(true);
  };

  const handleClose = () => {
    setForm(false);
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }} px={{ base: '4', md: '8', xl: '16' }} position="relative">
      <Text fontSize='22px' mb="4" fontWeight='700' lineHeight='100%' textAlign='center'>
        Select a Table
      </Text>

      <Box display="flex" flexDirection="column" minHeight="60vh">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <Grid
                ref={provided.innerRef}
                {...provided.droppableProps}
                templateColumns='repeat(auto-fit, minmax(200px, 1fr))'
                gap={6}
                mb={6}
                alignItems="start"
                flex="1"
              >
                {tables.length === 0 && (
                  <GridItem
                    boxShadow={cardShadow}
                    borderRadius='md'
                    overflow='hidden'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100px', 
                      cursor: 'pointer',
                      backgroundColor: 'gray.200',
                      textAlign: 'center'
                    }}
                    onClick={handleClickOpen}
                  >
                    <Text color="gray.600">Add a Table</Text>
                  </GridItem>
                )}
                {tables.map((table, index) => (
                  <Draggable key={table.id} draggableId={`table-${table.id}`} index={index}>
                    {(provided) => (
                      <GridItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        boxShadow={cardShadow}
                        borderRadius='md'
                        overflow='hidden'
                        style={{
                          ...provided.draggableProps.style,
                          width: '100%',
                          height: 'auto',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onClick={() => handleTableClick(index)}
                      >
                        <img src={table.img} alt={`Table ${table.id}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </GridItem>
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
            backgroundColor="red" 
            fontSize='22px' 
            mb="4" 
            fontWeight='700' 
            onClick={handleClickOpen}
          >
            Add Table
          </Button>
          <Button 
            color="white" 
            backgroundColor="red" 
            fontSize='22px' 
            mb="4" 
            fontWeight='700' 
            onClick={onOpen}
          >
            Reserve
          </Button>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reserve Table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb="4">
                <FormLabel htmlFor='Name'>Name</FormLabel>
                <Input
                  id='Name'
                  name='Name'
                  value={formValues.Name}
                  onChange={handleFormChange}
                  placeholder='Enter name'
                  required
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel htmlFor='reservationTime'>Reservation Time</FormLabel>
                <Input
                  id='reservationTime'
                  name='reservationTime'
                  type='datetime-local'
                  value={formValues.reservationTime}
                  onChange={handleFormChange}
                  required
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel htmlFor='notes'>Notes</FormLabel>
                <Textarea
                  id='notes'
                  name='notes'
                  value={formValues.notes}
                  onChange={handleFormChange}
                  placeholder='Additional notes'
                />
              </FormControl>
              <Button type='submit' colorScheme='blue'>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={form} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb="4">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '10px'
                }}>
                  <img
                    src={img3}
                    alt="Image 3"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onClick={() => setSelectedImage(img3)}
                  />
                  <img
                    src={img4}
                    alt="Image 4"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onClick={() => setSelectedImage(img4)}
                  />
                  <img
                    src={img1}
                    alt="Image 1"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onClick={() => setSelectedImage(img1)}
                  />
                </div>
              </FormControl>
              <Button type='submit' colorScheme='blue'>
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Table;
