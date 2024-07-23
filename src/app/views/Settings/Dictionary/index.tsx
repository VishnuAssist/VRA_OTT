// import { Box, Container } from '@mui/material'
import Store from './TableStore'
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './pageHeader';
import { Container, } from '@mui/material';

function Index() {
  return (
    <>
   
      <PageTitleWrapper>
      <PageHeader/>
   </PageTitleWrapper>
   <Container maxWidth="lg">
    <Store/>
    </Container>
    </>
   
  )
}

export default Index