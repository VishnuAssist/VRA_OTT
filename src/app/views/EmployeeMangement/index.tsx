import StaffTables from './EmployeeDetails';
// import HeaderStats from '../HeaderStatus/HeaderStats';
import Header from '../HeaderStatus/Header';
import { Box } from '@mui/material';


const index = () => {
  return (
    <>
     
      <Header/>
      <Box sx={{background:"#ae65ce",m:"2px",borderRadius: "8px"}}>
      {/* <HeaderStats/> */}
      <Box px={5} py={2}>

      <StaffTables/>
      </Box>
      </Box>
    </>
  )
}

export default index