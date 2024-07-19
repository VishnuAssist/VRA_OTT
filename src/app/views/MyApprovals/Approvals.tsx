import { Container } from '@mui/material'
import Pageheading from './pageheading'
import PageHeader from './pageHeader'
import PageTitleWrapper from '../../components/PageTitleWrapper'


function Index() {
  return (
    <>

      <PageTitleWrapper>
   <PageHeader/>
   </PageTitleWrapper>    <Container>
   <Pageheading/>
    
    </Container>
    </>
  )
}

export default Index