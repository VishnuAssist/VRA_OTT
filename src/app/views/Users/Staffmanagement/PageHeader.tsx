import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import Create from "./form"

function PageHeader() {
    const [openmodel, setOpenModel]=useState<boolean>(false)

    const openstoremodel = () =>{
      setOpenModel(true)
    }
    const closestoremodel = () =>{
      setOpenModel(false)
    }
  return (
    <>
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Staff Management</Typography>
    <Button variant="contained" onClick={openstoremodel}>Add User</Button>
    </Box>
    <Create dialogOpen={openmodel} handleDialogClose={closestoremodel }/>
    </>
  )
}

export default PageHeader