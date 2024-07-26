import { Box,  Grid,  TextField,  Typography } from "@mui/material"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function PageHeader() {
  return (
   
    <Box sx={{display:"flex" , justifyContent:"space-between"}}>
      <Grid container spacing={1}>
      <Grid item xs={12} md={7}>
      
                <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>Dashboard</Typography>
                </Grid>
                
                
      <Grid item xs={6} md={2}>
      
        <DatePicker label="Date" />
        </Grid>
       
        <Grid item xs={6} md={2}>
        
        <TextField  label="Store Name" />
        </Grid>
        </Grid>
       
    
            </Box>
           
  )
}

export default PageHeader