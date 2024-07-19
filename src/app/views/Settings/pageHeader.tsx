import { Box, Button, Typography } from "@mui/material"

function PageHeader() {
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Store</Typography>
    <Button variant="contained">Add</Button>
    </Box>
  )
}

export default PageHeader