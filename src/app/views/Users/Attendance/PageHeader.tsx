import { Box, TextField, Typography } from "@mui/material"
import { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { setSelectedStaff } from "../../../Slices/StaffManagementSlice";
import { useDispatch, useSelector } from "react-redux";
import { Staff } from "../../../Models/StaffMangement";

function PageHeader() {
    const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const { userList } = useSelector((state: any) => state.staff);
   
    const dispatch=useDispatch()
    const setattendancedata=(data:Staff)=>{
      if (data){dispatch(setSelectedStaff(data))}
    
    }
  return (
    <>
    <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Attendance</Typography>
    
    {/* <Button variant="contained" >Add User</Button> */}
    {/* <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              style={{ marginBottom: "1px" }}
            /> */}
             <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={userList}
      getOptionLabel={(option) => option?.username}
      onChange={(_,selectedoption:Staff)=>setattendancedata(selectedoption)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
    </Box>
    <TextField  label="Store"/>
    </>
  )
}

export default PageHeader