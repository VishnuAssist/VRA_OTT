import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './pageheader';
import { Container, Grid, } from '@mui/material';
import TaskTable from './table';

function Index() {
  return (
    <>
   
      <PageTitleWrapper>
      <PageHeader/>
   </PageTitleWrapper>
   <Container maxWidth="lg">
    <TaskTable/>
    
    
   
    </Container>
    </>
   
  )
}

export default Index