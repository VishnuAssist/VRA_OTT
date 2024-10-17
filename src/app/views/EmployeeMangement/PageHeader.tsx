import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Add as AddIcon,} from "@mui/icons-material";
import BulkEmployeeUpload from "./BulkImportDetails";


export default function PageHeader() {


 const [bulk, setBulk] = useState(false);
const openBulkImport = () => setBulk(true);
const closeBulkImport =() => setBulk(false);

const [open , setOpen]= useState(false)

const openModel = () =>{
    setOpen(true)
}

const closeForm = () =>{
    setOpen(false)
}
  return (
   <>
   <Box>
   <Grid
          container
          spacing={0}
          alignItems="center"
          marginBottom={2}
          component={Paper}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} sm={7} md={9} lg={9} >
            <Typography fontSize={"24px"} fontWeight={700}>
                User Management
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={2}  >
          <Button
              variant="contained"
              color="info"
              startIcon={<FileUploadIcon />}
              onClick={openBulkImport}
            >
             Upload
            </Button>
          </Grid>
          <Grid item xs={6} sm={2} md={1} lg={1} >
          <Button
              variant="contained"
              color="info"
              startIcon={<AddIcon />}
              onClick={openModel}
            >
              Add
            </Button>
          </Grid>
        </Grid>
         {/* <Grid
          container
          spacing={0}
          alignItems="center"
          marginBottom={2}
          component={Paper}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={9}>
            <Typography fontSize={"24px"} fontWeight={700}>
                User Management
            </Typography>
          </Grid>
          <Grid item xs={6} sm={12} md={8} lg={2} textAlign="right">
          <Button
              variant="contained"
              color="info"
              startIcon={<FileUploadIcon />}
              onClick={openBulkImport}
            >
             Upload
            </Button>
          </Grid>
          <Grid item xs={6} sm={12} md={8} lg={1} textAlign="right">
          <Button
              variant="contained"
              color="info"
              startIcon={<AddIcon />}
              onClick={openModel}
            >
              Add
            </Button>
          </Grid>
        </Grid> */}
        </Box>
        <EmployeeForm open={open} closeForm={closeForm}/>
        <BulkEmployeeUpload open={bulk} onClose={closeBulkImport}/>

   </>
  )
}
