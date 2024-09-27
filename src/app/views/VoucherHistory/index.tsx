
import VoucherDetailsAndHistory from './Voucher-History'
import { Card, Paper } from '@mui/material'

const index = () => {
  return (
    <>
    <Card sx={{height:"750",m:2,p:2,ml:35,mr:35,bgcolor:"#E9E9E9",mb:2}} component={Paper}>
    <VoucherDetailsAndHistory/>
    </Card>
    </>
  )
}

export default index
