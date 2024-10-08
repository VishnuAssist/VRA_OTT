
// import HeaderStats from '../HeaderStatus/HeaderStats'
import Analytics1 from './Analytics1'
import Header from '../HeaderStatus/Header'
import { Box } from '@mui/material'

const index = () => {
  return (
    <>
      <Header/>
      
      <Box sx={{ background: "#20b2aa", m: "2px", borderRadius: "8px" }}>
      {/* <HeaderStats/> */}
      <Box px={5} py={2}>

      <Analytics1/>
      </Box>
      </Box>
      </>
  )
}

export default index
