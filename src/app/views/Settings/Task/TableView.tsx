import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
  Avatar,
  Tooltip,
  styled,
  TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";
import Profile from "./profile";
import DeleteAlert from "../../../components/DeleteAlert";
import PreviewTaskDetails from "./PreviewTaskDetails";

const StyledAvatar = styled(Avatar)(() => ({
  width: "32px !important",
  height: "32px !important",
}));

const TableView: React.FC<{ value: number }> = ({ value }) => {
  const { taskList } = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<TaskType | null>(null);
  const [profile, setProfile] = useState(false);
  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<TaskType | null>(null);
  const [filtereddata, setfiltereddata] = useState<TaskType[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const filterToDo = taskList.filter(
      (data: TaskType) => data.taskProgress === "To Do"
    );
    const filterInProgress = taskList.filter(
      (data: TaskType) => data.taskProgress === "In Progress"
    );
    const filterCompleted = taskList.filter(
      (data: TaskType) => data.taskProgress === "Completed"
    );
    if (value === 0) {
      setfiltereddata(filterToDo);
    } else if (value === 1) {
      setfiltereddata(filterInProgress);
    } else if (value === 2) {
      setfiltereddata(filterCompleted);
    }
  }, [value, taskList]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getProgressColor = (progress: string) => {
    switch (progress.toLowerCase()) {
      case "to do":
        return "violet";
      case "in progress":
        return "orange";
      case "completed":
        return "green";
      default:
        return "grey";
    }
  };

  const openPreview = (data: TaskType) => {
    setPreview(true);
    setPreviewData(data);
  };

  const closePreview = () => {
    setPreview(false);
  };

  const handleProfileclick = () => {
    setProfile(true);
  };

  const handleProfileclose = () => {
    setProfile(false);
  };

  const edithandleAddClick = (data: TaskType) => {
    setSelectdata(data);
    setDialogOpen(true);
  };

  const closeEdit = () => {
    setDialogOpen(false);
  };

  const deleteStore = () => {
    if (userToDelete) {
      dispatch(removeTask({ id: userToDelete.id }));
      setAlertDeleteStore(false);
      setUserToDelete(null);
    }
  };

  const openDelete = (user: TaskType) => {
    setAlertDeleteStore(true);
    setUserToDelete(user);
  };

  const closeDelete = () => {
    setAlertDeleteStore(false);
    setUserToDelete(null);
  };

  return (
    <>
      <TableContainer sx={{ overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "12px" }}>Task Progress</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Assigned By</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Task</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Description</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Assignees</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Due Date</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtereddata
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((Task: TaskType) => (
                <TableRow key={Task.id}>
                  <TableCell>
                    <Tooltip title={<Box>Assigned</Box>} arrow>
                      <CircleRoundedIcon
                        sx={{
                          color: getProgressColor(Task.taskProgress),
                          mr: 2,
                        }}
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{Task.assigner}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{Task.task}</TableCell>
                  <TableCell
                    sx={{
                      width: "200px",
                      height: "100%",
                      fontSize: "12px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    <Tooltip title={Task.description} arrow>
                      <span>{Task.description}</span>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="center" sx={{ textTransform: "capitalize" }}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      position="relative"
                      marginLeft="-0.875rem !important"
                    >
                      {Array.isArray(Task.users) && Task.users.length > 0 ? (
                        <>
                          {Task.users.map((user: any) => (
                            <div key={user.id}>
                              <Tooltip title={<Box>{user?.username}</Box>} arrow>
                                <StyledAvatar src="/assets/images/face-4.jpg" />
                              </Tooltip>
                            </div>
                          ))}
                          {Task.users.length > 3 && (
                            <StyledAvatar
                              onClick={handleProfileclick}
                              sx={{ fontSize: "14px" }}
                            >
                              +{Task.users.length - 3}
                            </StyledAvatar>
                          )}
                        </>
                      ) : (
                        <p>No users available</p>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px", width: "100px" }}>
                    {Task.date}
                  </TableCell>
                  <TableCell sx={{ width: "150px" }}>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="view"
                      onClick={() => openPreview(Task)}
                    >
                      <RemoveRedEyeIcon />{" "}
                    </IconButton>
                    <IconButton
                      size="small"
                      color="primary"
                      aria-label="edit"
                      onClick={() => edithandleAddClick(Task)}
                    >
                      <EditIcon />{" "}
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => openDelete(Task)}
                    >
                      <DeleteIcon />
                    </IconButton>{" "}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filtereddata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <AddEditForm
        openmodel={dialogOpen}
        closetaskmodel={closeEdit}
        initialTask={selectdata}
      />
      <Profile openprofile={profile} closeprofile={handleProfileclose} />
      <PreviewTaskDetails
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewdata}
        edithandleAddClick={edithandleAddClick}
        openDelete={openDelete}
      />
      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />
    </>
  );
};

export default TableView;
