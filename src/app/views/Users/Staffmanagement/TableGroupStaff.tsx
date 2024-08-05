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
  DialogTitle,
  DialogContent,
  Dialog,
  Grid,
  Typography,
  AvatarGroup,
  Avatar,
  Box,
  Tooltip,
  styled,
  TablePagination, 
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useState } from "react";
import { removeGroup } from "../../../Slices/GroupStaff";
import DeleteAlert from "../../../components/DeleteAlert";
import Groupview from "./FormGroupStaff";

const GroupTable = () => {
  const { groupList } = useSelector((state: any) => state.groupStaff);
  const { userList } = useSelector((state: any) => state.staff);
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<GroupStaff | null>(null);
  const openPreview = (data: GroupStaff) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  // Edit function
  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<GroupStaff | null>(null);
  const openUpdate = (data: GroupStaff) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpdate = () => {
    setUpdate(false);
  };

  // Delete Function
  const dispatch = useDispatch();
  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<GroupStaff | null>(null);

  const deleteStore = () => {
    if (userToDelete) {
      dispatch(removeGroup({ id: userToDelete.id }));
      setAlertDeleteStore(false);
      setUserToDelete(null);
    }
  };
  const openDelete = (user: GroupStaff) => {
    setAlertDeleteStore(true);
    setUserToDelete(user);
  };
  const closeDelete = () => {
    setAlertDeleteStore(false);
    setUserToDelete(null);
  };

  const StyledAvatar = styled(Avatar)(() => ({
    width: "32px !important",
    height: "32px !important",
  }));

 
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  return (
    <>
      <TableContainer sx={{ overflow: "auto" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <FormGroup>
                  <Checkbox defaultChecked />
                </FormGroup>
              </TableCell>
              <TableCell sx={{ fontSize: "12px" }}>GroupName</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Staff's</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Description</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groupList && groupList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((groupDetails) => (
                <TableRow key={groupDetails.id}>
                  <TableCell>
                    <FormGroup>
                      <Checkbox defaultChecked />
                    </FormGroup>
                  </TableCell>
                  <TableCell>{groupDetails.groupname}</TableCell>
                  <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      position="relative"
                      marginLeft="-0.875rem !important"
                    >
                      {Array.isArray(groupDetails.staffs) && groupDetails.staffs.length > 0 ? (
                        <>
                          {groupDetails.staffs?.map((user: any) => (
                            <div key={user.id}>
                              <Tooltip title={<Box>{user?.username}</Box>} arrow>
                                <StyledAvatar src="/assets/images/face-4.jpg" />
                              </Tooltip>
                            </div>
                          ))}
                          {groupDetails.staffs?.length > 3 && (
                            <StyledAvatar sx={{ fontSize: "14px" }}>
                              +{groupDetails.staffs?.length - 3}
                            </StyledAvatar>
                          )}
                        </>
                      ) : (
                        <p>No users available</p>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>{groupDetails.description}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="VisibilityIcon"
                      onClick={() => openPreview(groupDetails)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => openUpdate(groupDetails)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => openDelete(groupDetails)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} 
          component="div"
          count={groupList.length}
          rowsPerPage={rowsPerPage}
          page={page} 
          onPageChange={handleChangePage} 
          onRowsPerPageChange={handleChangeRowsPerPage} 
        />
      </TableContainer>

      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} variant="h5">
          Group of Staff Members
          <IconButton onClick={closePreview}>
            <CloseIcon color="error" />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography variant="h5">Group Name :</Typography>
            </Grid>
            <Grid item md={6}>
              {previewdata?.groupname}
            </Grid>
            <Grid item md={6}>
              <Typography variant="h5">Description :</Typography>
            </Grid>
            <Grid item md={6}>
              {previewdata?.description}
            </Grid>
            <Grid item md={6}>
              <Typography variant="h5">Staff's :</Typography>
            </Grid>
            <Grid item md={6}>
              {previewdata?.staffs?.map(name => (
                <Typography key={name.id}>{name?.username}</Typography>
              ))}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />

      <Groupview
        openpGroup={update}
        closeGroup={closeUpdate}
        initialStore={datatoedit}
      />
    </>
  );
};

export default GroupTable;
