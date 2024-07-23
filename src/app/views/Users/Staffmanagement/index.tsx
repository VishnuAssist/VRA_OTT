import { Container, Grid } from '@mui/material';
import React from 'react';
import Form from './Heading';
import Viewtable from './table';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';

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
          <Viewtable />
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Index;
