
// import HeaderStats from '../HeaderStatus/HeaderStats'
import VoucherDetails from './VoucherDetails'

import Header from '../HeaderStatus/Header'
import { Box } from '@mui/material'

const index = () => {
  return (
    <div>
      
      <Header/>
      {/* <HeaderStats/> */}
      <Box px={5} py={2}>
      <VoucherDetails/>
      </Box>
    </div>
  )
}

export default index
