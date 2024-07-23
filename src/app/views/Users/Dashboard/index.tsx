
import Heading from './heading'

import { Container } from '@mui/material'
 import PageTitleWrapper from '../../../components/PageTitleWrapper'   
 import PageHeader from './pageHeader'

const index = () => {
  return (
    <>
    
    <PageTitleWrapper>
      <PageHeader/>
      </PageTitleWrapper>            
           
    <Container maxWidth={"lg"} >
   <Heading/>
   </Container>
  
    </>
  )
}

export default index