import { Container } from '@mui/material';
import { useState } from 'react';
import Pageheading from './pageheading';
import PageHeader from './pageHeader';
import PageTitleWrapper from '../../components/PageTitleWrapper';

function Index() {
  const [Type, setType] = useState<string>("Leave Request");

  return (
    <>
      <PageTitleWrapper>
        <PageHeader  setType={setType} Type={Type}  />
      </PageTitleWrapper> 

      <Container sx={{marginTop:"20px"}}>
        <Pageheading Type={Type} />
      </Container>
    </>
  );
}

export default Index;
