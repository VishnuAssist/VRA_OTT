import StaffTables from './EmployeeDetails';
import HeaderStats from '../HeaderStatus/HeaderStats';
import Header from '../HeaderStatus/Header';


const index = () => {
  return (
    <div>
      <Header/>
      {/* <HeaderStats/> */}
      <StaffTables/>
      
    </div>
  )
}

export default index