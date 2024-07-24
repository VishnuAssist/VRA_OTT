import {  Button, Grid, Typography } from "@mui/material"
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
    <Grid container spacing={2}  >
      <Grid item md={10}>
      <Typography variant='h2'>Staff Management</Typography>
      </Grid>
    <Grid item md={2}>
    <Button variant="contained" onClick={openstoremodel}>Add User</Button>
    </Grid>
   
    </Grid>
    <Create dialogOpen={openmodel} handleDialogClose={closestoremodel }/>
    </>
  )
}

export default PageHeader