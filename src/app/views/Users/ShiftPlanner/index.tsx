
import { Container } from '@mui/material'
import Calender from './Calender'
import PageTitleWrapper from '../../../components/PageTitleWrapper'
import PageHeader from './PageHeader'

const ShiftIndex = () => {
  return (
    <>
    <PageTitleWrapper>
      <PageHeader/>
    </PageTitleWrapper>
    <Container>
    <Calender/>
    </Container>
    </>
  )
}

export default ShiftIndex