import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Card, CardContent, Grid, Dialog, DialogTitle, DialogContent, IconButton,
  Autocomplete
} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

const steps = [
  'Order confirmed, 22-08-2024',
  'Your food being prepared, 22-07-2024',
  'Your food is Ready, 22-08-2024',
];

interface OrderType {
  id: number;
  name: string;
  table: number;
  item: any[];
  quantity: number;
  notes: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [formValues, setFormValues] = useState({ name: '', table: '', item: '', quantity: 1, notes: '' });
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [editingOrderId, setEditingOrderId] = useState<number | null>(null);
  const [status, setStatus] = useState(false);
  const [userdata, setUserdata] = useState<any | null>(null);
  const [usersdata, setUsersdata] = useState<any[]>([]);

  const handleClickOpen = () => {
    setStatus(true);
  };

  const handleClose = () => {
    setStatus(false);
  };

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
        item: usersdata,
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

  const handleAddUser = () => {
    if (userdata) {
      setUsersdata([...usersdata, userdata]);
      setUserdata(null);
    }
  };

  const handleDeleteUser = (index: number) => {
    const updatedUsers = [...usersdata];
    updatedUsers.splice(index, 1);
    setUsersdata(updatedUsers);
  };

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
                <Typography variant="h6">Table: {order.table}</Typography>
                <Typography variant="h6">Item: {order.item.map((Item) => (
                <Card sx={{ p: 1, display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography sx={{ ml: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {Item.label}
                  </Typography>
                </Card>
              ))}</Typography>
                <Typography variant="h6">Quantity: {order.quantity}</Typography>
                <Typography variant="h6">Notes: {order.notes}</Typography>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <IconButton color="primary" onClick={() => handleEditClick(order)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteClick(order.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Button onClick={handleClickOpen} sx={{ display: "flex", justifyContent: "flex-start" }}
                    variant="contained"
                    color="primary">
                    View Status
                    <ArrowForwardIcon />
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
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Autocomplete
                  disablePortal
                  options={items}
                  getOptionLabel={(option) => option.label}
                  onChange={(_, selectedOption) => {
                    setFormValues({
                      ...formValues,
                      item: selectedOption?.label || '',
                    });
                    setUserdata(selectedOption);
                  }}
                  value={items.find(item => item.label === formValues.item) || null}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth label="Select Item" margin="normal" required />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={handleAddUser}>
                  <AddCircleTwoToneIcon fontSize="large" color="primary" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {usersdata.map((Item, index) => (
                <Card key={index} sx={{ p: 2, display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ ml: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {Item.label}
                  </Typography>
                  <IconButton onClick={() => handleDeleteUser(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Card>
              ))}
            </Grid>
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
      <Dialog
        open={status}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Order;
