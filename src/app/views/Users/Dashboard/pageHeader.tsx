import { Box, Button, Typography } from "@mui/material"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function PageHeader() {
  return (
    <Box sx={{ m: 1, py: 2 }}>
                <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>Dashboard</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date" />
      </DemoContainer>
    </LocalizationProvider>
            </Box>
  )
}

export default PageHeader