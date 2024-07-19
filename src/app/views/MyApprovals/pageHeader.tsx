import { Box, Typography } from "@mui/material"

function PageHeader() {
  return (
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Approvals</Typography>
    {/* <Button variant="contained">Add</Button> */}
    </Box>
  )
}

export default PageHeader