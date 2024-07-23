import { Box, TextField, Typography } from "@mui/material"
import { useState } from "react";

function PageHeader() {
    const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Attendance</Typography>
    {/* <Button variant="contained" >Add User</Button> */}
    <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              style={{ marginBottom: "1px" }}
            />
    </Box>
    </>
  )
}

export default PageHeader