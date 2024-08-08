import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"


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
    <Typography variant='h2'>Log</Typography>
    <Button variant="contained" onClick={openstoremodel}>Add</Button>
    </Box>
   
    </>
  )
}

export default PageHeader