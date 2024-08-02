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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useState } from "react";
import { removeGroup } from "../../../Slices/GroupStaff";
import DeleteAlert from "../../../components/DeleteAlert";
import Groupview from "./FormGroupStaff";
import { Staff } from "../../../Models/StaffMangement";

const GroupTable = () => {
  const { groupList } = useSelector((state: any) => state.groupStaff);
  console.log("groupList", groupList);
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
  // edit function

  const [update, setUpdate] = useState(false);
  const [datatoedit, setDataToEdit] = useState<GroupStaff | null>(null);
  const openUpdate = (data: GroupStaff) => {
    setDataToEdit(data);
    setUpdate(true);
  };
  const closeUpadate = () => {
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
            {groupList &&
              groupList.map((groupDetails: any) => (
                <TableRow key={groupDetails.id}>
                  <TableCell>
                    <FormGroup>
                      <Checkbox defaultChecked />
                    </FormGroup>
                  </TableCell>

                  <TableCell>{groupDetails.groupname}</TableCell>
                  <TableCell>{groupDetails?.users?.length}
                    {/* {groupDetails.users && groupDetails.users.length > 0 ? (
                      groupDetails.users.map((user: any) => (
                        <div key={user.id}>
                          <p> {user.username.length}</p>
                        </div>
                      ))
                    ) : (
                      <p>No users available</p>
                    )} */}
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
      </TableContainer>

      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle variant="h5">Group of Staff Members</DialogTitle>
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
              {previewdata?.staffs}
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
        closeGroup={closeUpadate}
        initialStore={datatoedit}
      />
    </>
  );
};

export default GroupTable;
