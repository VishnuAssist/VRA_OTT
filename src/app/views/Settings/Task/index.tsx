import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './pageheader';
import { Container, } from '@mui/material';
import TaskTable from './table';
import FooterForUretail from "./footer";
import { Box } from '@mui/system';

function Index() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box>
        <PageTitleWrapper>
          <PageHeader/>
        </PageTitleWrapper>
        <Container maxWidth="lg">
          <TaskTable/>
        </Container>
      </Box>
      <Box mt="auto">
        <FooterForUretail/>
      </Box>
    </Box>
  );
}

export default Index;
