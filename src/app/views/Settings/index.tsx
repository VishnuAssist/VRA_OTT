// import { Box, Container } from '@mui/material'
import Store from './TableStore'
import PageTitleWrapper from '../../components/PageTitleWrapper';
import PageHeader from './pageHeader';

function Index() {
  return (
    <>
    <PageTitleWrapper>
    <PageHeader />
  </PageTitleWrapper>
   
    <Store/>
    </>
   
  )
}

export default Index