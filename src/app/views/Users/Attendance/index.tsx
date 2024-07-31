
import StaffRole from './StaffRole'
import PageHeader from './PageHeader'
import PageTitleWrapper from '../../../components/PageTitleWrapper'
import { Container } from '@mui/material'
// import StaffStatus from './StaffStatus'

const Index = () => {

  
  return (
    <>
    <PageTitleWrapper>
      <PageHeader/>
    </PageTitleWrapper>
    <Container>
    <StaffRole/>

    </Container>
    {/* <StaffStatus/> */}
    </>
  )
}

export default Index