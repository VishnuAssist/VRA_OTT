
import Heading from './heading'

import { Box, Container, Typography } from '@mui/material'
 import PageTitleWrapper from '../../../components/PageTitleWrapper'   
 import PageHeader from './pageHeader'

const index = () => {
  return (
    <>
    
    <PageTitleWrapper>
      <PageHeader/>
      </PageTitleWrapper>            
           
    <Container maxWidth={"lg"} sx={{mt:1}}>
   <Heading/>
   </Container>
  
    </>
  )
}

export default index