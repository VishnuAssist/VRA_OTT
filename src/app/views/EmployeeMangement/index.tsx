import StaffTables from './EmployeeDetails';
// import HeaderStats from '../HeaderStatus/HeaderStats';
// import Header from '../HeaderStatus/Header';
import { Box } from '@mui/material';
import PageHeader from './PageHeader';


const index = () => {
  return (
    <>
     
      {/* <Header/> */}
      {/* <Box sx={{background:"#bfb9a8",m:"2px",borderRadius: "8px"}}> */}
      {/* <HeaderStats/> */}
      <Box>
<PageHeader/>
      <StaffTables/>
      </Box>
      {/* </Box> */}
    </>
  )
}

export default index