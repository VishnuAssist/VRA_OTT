import { Box,  Tab,  ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react"
import Create from "./form"
import Groupview from "./groupview";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
function PageHeader() {
    const [openmodel, setOpenModel]=useState<boolean>(false)
    const [group,setGroup]=useState(false)

    const handleGroupclick = ()=>{
      setGroup(true);
     };
  
     const handleGroupclose = ()=>{
      setGroup(false);
     };

    const openstoremodel = () =>{
      setOpenModel(true)
    }
    const closestoremodel = () =>{
      setOpenModel(false)
    }
  return (
    <>
    {/* <Box display="flex" justifyContent="space-between" flexWrap="wrap" >
    <Typography variant='h2'>Staff Management</Typography>
    <Button variant="contained" onClick={openstoremodel}>Add User</Button>
    <ToggleButtonGroup
            value={Tabs}
            exclusive
            onChange={openstoremodel}
          >
            <ToggleButton
             
              disableRipple
              value="watch_list_columns"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <PersonAddIcon /> <Typography sx={{ pl: 1 }}>User</Typography>
            </ToggleButton>
    <ToggleButton
              
              disableRipple
              value="watch_list_rows"
            >
              <GroupAddIcon /> <Typography sx={{ pl: 1 }}>Group</Typography>
            </ToggleButton>
    </Box>
    <Create dialogOpen={openmodel} handleDialogClose={closestoremodel }/> */}
    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Typography variant="h2">Staff Management</Typography>
        <ToggleButtonGroup
          value={Tab}
          exclusive
          onChange={openstoremodel}
        >
          <ToggleButton
          
            value="user"
            disableRipple
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <PersonAddIcon /> <Typography sx={{ pl: 1 }}>User</Typography>
          </ToggleButton>
          <ToggleButton onClick={handleGroupclick} value="group" disableRipple>
            <GroupAddIcon  /> <Typography sx={{ pl: 1 }}>Group</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Create dialogOpen={openmodel} handleDialogClose={closestoremodel} />
      <Groupview openpGroup={group} closeGroup={handleGroupclose} />
    </>
  );
}

export default PageHeader