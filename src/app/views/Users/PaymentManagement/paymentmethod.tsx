import React, { useState } from "react";
import { Container, Grid, TextField, Typography, Paper, IconButton, Tooltip, Box, Checkbox, Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GoogleIcon from '@mui/icons-material/Google';
import WalletIcon from "@mui/icons-material/Wallet";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import QRCodeIcon from "@mui/icons-material/QRCode"; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface PaymentMethod {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const paymentMethods: PaymentMethod[] = [
  { id: 1, name: "Card", icon: <CreditCardIcon /> },
  { id: 2, name: "Cash", icon: <AttachMoneyIcon /> },
  { id: 3, name: " Pay", icon: <GoogleIcon /> },
];

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedMethod(id);
  };

  return (
    <Box sx={{ padding: 2,mx:20 }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Typography variant="h4" sx={{mb:2}}>Order ID</Typography>
          <TextField id="orderID" placeholder="Order ID" fullWidth />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4" sx={{mb:2}}>Table Number</Typography>
          <TextField id="tableID" placeholder="Table Number" fullWidth />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h3" sx={{mb:2}}>Payment</Typography>
          <Paper style={{ padding: "26px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            {paymentMethods.map((method) => (
              <Tooltip key={method.id} title={method.name} sx={{p:2}}>
                <IconButton
                  onClick={() => handleSelect(method.id)}
                  color={selectedMethod === method.id ? "primary" : "default"}
                  style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "0 8px" }}
                >
                  {selectedMethod === method.id && <CheckCircleIcon style={{ marginBottom: "4px" }} />}
                  {method.icon}
                  <Typography variant="caption" style={{ marginTop: "4px" }}>
                    {method.name}
                  </Typography>
                </IconButton>
              </Tooltip>
            ))}
          </Paper>
        </Grid>
        <Grid item md={12}>
          {selectedMethod === 1 && ( // Card Payment
            <div>
              <Typography variant="h5">Enter Card Details</Typography>
              <TextField label="Card Number" placeholder="1234 5678 9012 3456" fullWidth margin="normal" />
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <TextField label="Expiry Date" placeholder="MM/YY" fullWidth margin="normal" />
                </Grid>
                <Grid item md={6}>
                  <TextField label="CVC" placeholder="123" fullWidth margin="normal" />
                </Grid>
                <Grid item md={1}>
                <Checkbox  defaultChecked />
                </Grid>
                <Grid item md={11} sx={{display:"flex",alignItems:"center"}}>
                    <Typography>Billing is same as Shipping information</Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography>By providing your card information ,you allow Name Shop to change your card for future payments in accordance with their terms.</Typography>
                </Grid>
              </Grid>
            </div>
          )}
          {selectedMethod === 2 && ( // Cash Payment
          <>
            <Typography variant="h5" sx={{mb:2}}>
              Bill Amount: $100.00 (including GST)
            </Typography>
            <TextField id="orderID" placeholder="Customer Payed" fullWidth sx={{mb:2}} />
            <Button variant="contained" color="primary" sx={{textAlign:"center",mb:2}}>Confirm to Pay</Button>
            <Typography variant="h5" >
              Balance Amount: $23.00 
            </Typography>
            </>
          )}
          {selectedMethod === 3 && ( // Google Pay
            <div>
              <Typography variant="h5">Scan QR Code</Typography>
              <QRCodeIcon style={{ fontSize: 50, margin: 20 }} />
              <Typography variant="caption">Scan this QR code with Google Pay</Typography>
            </div>
          )}
        </Grid>
        <Grid item md={12}>
            <Box display={"flex"} justifyContent={"space-between"}>
            <Button variant="contained" color="warning">cancel</Button>
            <Button variant="contained" color="primary">Submit</Button>
            </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default PaymentMethod;
