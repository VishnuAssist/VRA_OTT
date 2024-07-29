import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './pageheader';
import { Container, Grid, } from '@mui/material';
import TaskTable from './table';
import FooterForUretail from "./footer";
import { Box } from '@mui/system';
import TableView from './TableView';
import ToggleOption from './ToggleOption';

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
          <ToggleOption/>
          {/* <TaskTable/> */}
        </Container>
      </Box>





      <Box mt="auto">
        {/* <FooterForUretail/> */}
      </Box>


      {/* <TableView/> */}
    </Box>
  );
}

export default Index;
