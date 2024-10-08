
// import HeaderStats from '../HeaderStatus/HeaderStats'
import VoucherDetails from './VoucherDetails'

import Header from '../HeaderStatus/Header'
import { Box } from '@mui/material'

const index = () => {
  return (
    <div>

      <Header/>
      <Box sx={{background:"#e0914c", margin:"2px",borderRadius: "8px"}}>

      {/* <HeaderStats/> */}
      <Box px={5} py={2}>
      <VoucherDetails/>
      </Box>
      </Box>

    </div>
  )
}

export default index
