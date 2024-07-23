import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import FormStore from "./FormStore"

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
    <Typography variant='h2'>Dictionary Entries</Typography>
    <Button variant="contained" onClick={openstoremodel}>Add</Button>
    </Box>
    <FormStore openmodel={openmodel} closestoremodel={closestoremodel}/>
    </>
  )
}

export default PageHeader