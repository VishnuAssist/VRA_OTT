import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Card, CardContent, Grid, Dialog, DialogTitle, DialogContent, IconButton,
  Autocomplete
} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, NavLink } from 'react-router-dom';

interface OrderType {
  id: number;
  name: string;
  table: number;
  item: string;
  quantity: number;
  notes: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [formValues, setFormValues] = useState({ name: '', table: '', item: '', quantity: 1, notes: '' });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingOrderId !== null) {
      const updatedOrders = orders.map(order =>
        order.id === editingOrderId
          ? { ...order, ...formValues, quantity: parseInt(formValues.quantity, 10) }
          : order
      );
      setOrders(updatedOrders);
      setEditingOrderId(null);
    } else {
      const newOrder = {
        id: orders.length + 1,
        name: formValues.name,
        table: parseInt(formValues.table, 10),
        item: formValues.item,
        quantity: parseInt(formValues.quantity, 10),
        notes: formValues.notes,
      };
      setOrders([...orders, newOrder]);
    }
    setFormValues({ name: '', table: '', item: '', quantity: 1, notes: '' });
    setDialogOpen(false);
    setEditDialogOpen(false);
  };

  const handleEditClick = (order: OrderType) => {
    setFormValues({ name: order.name, table: order.table.toString(), item: order.item, quantity: order.quantity, notes: order.notes });
    setEditingOrderId(order.id);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const items = [
    { label: "Pizza" },
    { label: "Burger" },
    { label: "Momos" },
    { label: "French fries" },
  ];

  return (
    <Box p={3}>
      <Typography variant="h3" mb={4} fontWeight="700" textAlign="center">
        Orders
      </Typography>

      <Button 
        variant="contained"
        color="primary"
        onClick={() => {
          setDialogOpen(true);
          setEditingOrderId(null);
        }}
      >
        New Order
      </Button>

      <Grid container spacing={3} mt={3}>
        {orders.map(order => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Customer: {order.name}</Typography>
                <Typography variant="body1">Table: {order.table}</Typography>
                <Typography variant="body1">Item: {order.item}</Typography>
                <Typography variant="body1">Quantity: {order.quantity}</Typography>
                <Typography variant="body2">Notes: {order.notes}</Typography>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEditClick(order)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteClick(order.id)}>
                    <DeleteIcon />
                  </IconButton>
                
                  <Button sx={{display:"flex",justifyContent:"flex-start"}}
                   variant="contained"
                   color="primary">
                    View Status
                    <ArrowForwardIcon/>
                    </Button>
                   
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={isDialogOpen || isEditDialogOpen} onClose={() => {
        setDialogOpen(false);
        setEditDialogOpen(false);
      }}>
        <DialogTitle>{editingOrderId ? 'Edit Order' : 'New Order'}</DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => {
            setDialogOpen(false);
            setEditDialogOpen(false);
          }}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CancelPresentationIcon />
        </IconButton>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Customer Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Table Number"
              name="table"
              
              value={formValues.table}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Autocomplete
              disablePortal
              options={items}
              getOptionLabel={(option) => option.label}
              onChange={(_, selectedOption) => {
                setFormValues({
                  ...formValues,
                  item: selectedOption?.label || '',
                });
              }}
              value={items.find(item => item.label === formValues.item) || null}
              renderInput={(params) => (
                <TextField {...params} fullWidth label="Select Item" margin="normal" required />
              )}
            />
            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              value={formValues.quantity}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Notes"
              name="notes"
              value={formValues.notes}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {editingOrderId ? 'Update Order' : 'Submit Order'}
            </Button>
            
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Order;
