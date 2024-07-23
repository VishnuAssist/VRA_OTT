import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import AddEditForm from "./addeditform"
function PageHeader() {
  const [openmodel, setOpenModel]=useState<boolean>(false)

  const openstoremodel = () =>{
    setOpenModel(true)
  }
  const closetaskmodel = () =>{
    setOpenModel(false)
  }
  return (
    <>
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Task</Typography>
    <Button variant="contained" onClick={openstoremodel}>Add</Button>
    </Box>
    <AddEditForm openmodel={openmodel} closetaskmodel={closetaskmodel}/>
    </>
  )
}

export default PageHeader