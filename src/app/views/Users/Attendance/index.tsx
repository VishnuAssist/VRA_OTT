
import StaffRole from './StaffRole'
import PageHeader from './PageHeader'
import PageTitleWrapper from '../../../components/PageTitleWrapper'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
// import StaffStatus from './StaffStatus'
import Staffui from './staffui'

const Index = () => {

  const {selectedUser } = useSelector((state: any) => state.staff);

  
  return (
    <>
    <PageTitleWrapper>
      <PageHeader/>
    </PageTitleWrapper>
    <Container>
      {selectedUser? <StaffRole/>:<><Staffui/></>}
      

    </Container>
    {/* <StaffStatus/> */}
    </>
  )
}

export default Index