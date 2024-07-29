import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    FormGroup,
    Paper,
    IconButton,
  } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const GroupTable = () => {
  return (
    <>
     
        
        <TableContainer sx={{overflow:"auto"}} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <FormGroup>
                    <Checkbox defaultChecked />
                  </FormGroup>
                </TableCell>
              
                <TableCell sx={{fontSize:'12px'}}>GroupName</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Staff's</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Description</TableCell>
                <TableCell sx={{fontSize:'12px'}}>Action</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {userList &&
                userList.map((user: Staff) => ( */}
                  <TableRow >
                      <TableCell>
                      <FormGroup>
                        <Checkbox defaultChecked />
                      </FormGroup>
                    </TableCell>
                    <TableCell>he</TableCell>
                    <TableCell>he</TableCell>
                    <TableCell>he</TableCell>
                    {/* <TableCell>{user.username}</TableCell>
                    <TableCell>{user.employeeID}</TableCell>
                    <TableCell>{user.storecode}</TableCell> */}
                   
                    <TableCell>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="VisibilityIcon"
                        // onClick={() => previewClick(user)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="primary"
                        aria-label="edit"
                        // onClick={() => edithandleAddClick(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="delete"
                        // onClick={() => openDelete(user)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
        
    </>
  )
}

export default GroupTable