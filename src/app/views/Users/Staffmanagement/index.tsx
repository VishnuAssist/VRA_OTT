import { Container, Grid } from '@mui/material';
import React from 'react';
import Form from './Heading';
import Viewtable from './table';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import GroupTable from './TableGroupStaff';
import ToggleOptions from './ToggleOption';

const Index: React.FC = () => {
  return (
    <>
    <PageTitleWrapper>
<PageHeader/>
    </PageTitleWrapper>
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Form />
        </Grid>
        <Grid item xs={12}>
          <ToggleOptions/>
          {/* <Viewtable /> */}
        </Grid>
      </Grid>
    </Container>

    {/* <GroupTable/> */}
    </>
  );
};

export default Index;
