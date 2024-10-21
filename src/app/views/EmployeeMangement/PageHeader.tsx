import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Add as AddIcon,} from "@mui/icons-material";
import BulkEmployeeUpload from "./BulkImportDetails";
import ApprovalIcon from '@mui/icons-material/Approval';
import { useNavigate } from "react-router-dom";
import ApprovalPage from "./Approval/ApprovalPage";

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

// const navigate=useNavigate();
// const handleClick = ()=>{
//   navigate('/employee/Approval');
// }

const[approval,setApproval]=useState(false)
const openApproval=()=>{
  setApproval(true)
}
const closeApproval=()=>{
  setApproval(false)
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
          <Grid item xs={12} sm={7} md={8} lg={7} >
            <Typography fontSize={"24px"} fontWeight={700} fontFamily={"monospace"}>
                User Management
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1} lg={2}  >
          <Button
              variant="contained"
              color="info"
              startIcon={<ApprovalIcon />}
              onClick={openApproval}
            >
             Approval
            </Button>
          </Grid>
          <Grid item xs={6} sm={3} md={1} lg={2}  >
          <Button
              variant="contained"
              color="info"
              startIcon={<FileUploadIcon />}
              onClick={openBulkImport}
            >
             Upload
            </Button>
          </Grid>
          <Grid item xs={6} sm={2} md={2} lg={1}  textAlign="right">
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
         
        </Box>
        <EmployeeForm open={open} closeForm={closeForm}/>
        <BulkEmployeeUpload open={bulk} onClose={closeBulkImport}/>
<ApprovalPage open={approval} onClose={closeApproval}/>
   </>
  )
}
