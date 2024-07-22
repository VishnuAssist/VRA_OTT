import { Box, Button, Typography } from "@mui/material"

function PageHeader() {
  return (
    <Box sx={{ m: 1, py: 2 }}>
                <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>Dashboard</Typography>
                <Typography sx={{ fontSize: 15, }}>Wednesday 17,july 2024</Typography>
            </Box>
  )
}

export default PageHeader