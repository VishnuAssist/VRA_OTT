import React, { useState } from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  AvatarGroup,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/Circle";

const TaskTable: React.FC = () => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state: any) => state.task);

  //   const [addnewuser, setAddnewuser] = useState(false);
  //   const handleAddClick = () => {
  //     setAddnewuser(true);
  //   };

  //   const handleDialogClose = () => {
  //     setAddnewuser(false);
  //   };

  //   const [previewdialogOpen, setPreviewDialogOpen] = useState(false);
  // const [selectdata, setSelectdata] = useState<Staff | null>(null);

  // the menu of task edit and delete
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);
  const edithandleAddClick = (data: TaskType) => {
    setSelectdata(data);
    setDialogOpen(true);
  };

  const closeEdit = () => {
    setDialogOpen(false);
  };

  // this is delete

  const [alertdeleteStore, setAlertDeleteStore] = useState(false);
  const [userToDelete, setUserToDelete] = useState<TaskType | null>(null);

  const deleteStore = () => {
    const hello = userToDelete?.id;
    console.log("sdfsdf", hello);
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
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card sx={{ p: 2, height: "100%", width: "100%" }}>
            <Box sx={{ display: "flex", p: 1 }}>
              <CircleIcon sx={{ color: "violet", mr: 2 }} />
              <Typography> To Do</Typography>
            </Box>
            <Divider sx={{ backgroundColor: "violet" }} />
            {taskList &&
              taskList.map((taskDetail: TaskType) => (
                <Card
                  sx={{
                    p: 1,
                    mt: 1,
                    width: "100%",
                    backgroundColor: "#F1F5FA",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5" sx={{ color: "violet" }}>
                      {taskDetail.assigner}
                    </Typography>
                    <>
                      <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={() => edithandleAddClick(taskDetail)}
                        >
                          edit
                        </MenuItem>
                        {/* <MenuItem >edit</MenuItem> */}
                        <MenuItem onClick={() => openDelete(taskDetail)}>
                          delete
                        </MenuItem>
                      </Menu>
                    </>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item md={12} sx={{ fontSize: "18px" }}>
                      <Typography variant="h5">{taskDetail.task}</Typography>
                    </Grid>
                    <Grid item md={12}>
                      <Typography>{taskDetail.description}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant={"h5"} sx={{ color: "#8D6F64" }}>
                        {taskDetail.priority}
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant={"h5"} sx={{ color: "#FC0F0F" }}>
                        Completed
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography>{taskDetail.date}</Typography>
                    </Grid>
                    <Grid item md={5}>
                      <AvatarGroup max={20}>
                        <Avatar
                          alt={taskDetail.staff}
                          src="/static/images/avatar/1.jpg"
                        />
                        <Avatar
                          alt={taskDetail.staff}
                          src="/static/images/avatar/2.jpg"
                        />
                        <Avatar
                          alt={taskDetail.staff}
                          src="/static/images/avatar/3.jpg"
                        />
                      </AvatarGroup>
                    </Grid>

                    <Grid item md={3.5}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <CommentIcon />
                        <Typography sx={{ ml: 1 }}>Comments</Typography>
                      </Box>
                    </Grid>
                    <Grid item md={3.5}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <DriveFolderUploadIcon />
                        <Typography sx={{ ml: 1 }}>Files</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              ))}
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ p: 2, height: "100%", width: "100%" }}>
            <Box sx={{ display: "flex", p: 1 }}>
              <CircleIcon sx={{ color: "orange", mr: 2 }} />
              <Typography> In Progess</Typography>
            </Box>
            <Divider sx={{ backgroundColor: "orange" }} />
            <Card
              sx={{ p: 1, mt: 1, width: "100%", backgroundColor: "#F1F5FA" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ color: "orange" }}>
                  Hari
                </Typography>
              </Box>

              <Grid container spacing={2}>
                <Grid item md={12} sx={{ fontSize: "18px" }}>
                  <Typography variant="h5">To make a Dashboard UI</Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography>
                    The Dashboard should contains user details, user working
                    graph and pie chart for the yearly task .
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant={"h5"} sx={{ color: "#8D6F64" }}>
                    Low
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant={"h5"} sx={{ color: "#FC0F0F" }}>
                    Completed
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>12-6-2023</Typography>
                </Grid>
                <Grid item md={5}>
                  <AvatarGroup max={20}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </AvatarGroup>
                </Grid>

                <Grid item md={3.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <CommentIcon />
                    <Typography sx={{ ml: 1 }}>Comments</Typography>
                  </Box>
                </Grid>
                <Grid item md={3.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <DriveFolderUploadIcon />
                    <Typography sx={{ ml: 1 }}>Files</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ p: 2, height: "100%", width: "100%" }}>
            <Box sx={{ display: "flex", p: 1 }}>
              <CircleIcon sx={{ color: "green", mr: 2 }} />
              <Typography> Completed</Typography>
            </Box>
            <Divider sx={{ backgroundColor: "green" }} />
            <Card
              sx={{ p: 1, mt: 1, width: "100%", backgroundColor: "#F1F5FA" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" sx={{ color: "green" }}>
                  Sheik
                </Typography>
                <MoreHorizIcon />
              </Box>

              <Grid container spacing={2}>
                <Grid item md={12} sx={{ fontSize: "18px" }}>
                  <Typography variant="h5">To make a Dashboard UI</Typography>
                </Grid>
                <Grid item md={12}>
                  <Typography>
                    The Dashboard should contains user details, user working
                    graph and pie chart for the yearly task .
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant={"h5"} sx={{ color: "#8D6F64" }}>
                    Low
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant={"h5"} sx={{ color: "blue" }}>
                    Pending
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={4}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>12-6-2023</Typography>
                </Grid>
                <Grid item md={5}>
                  <AvatarGroup max={20}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </AvatarGroup>
                </Grid>

                <Grid item md={3.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <CommentIcon />
                    <Typography sx={{ ml: 1 }}>Comments</Typography>
                  </Box>
                </Grid>
                <Grid item md={3.5}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <DriveFolderUploadIcon />
                    <Typography sx={{ ml: 1 }}>Files</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={alertdeleteStore}
        onClose={closeDelete}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          Are you sure you want to delete this store ?
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button color="error" onClick={deleteStore}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <AddEditForm
        openmodel={dialogOpen}
        closetaskmodel={closeEdit}
        initialTask={null}
      />
      <AddEditForm
        openmodel={dialogOpen}
        closetaskmodel={closeEdit}
        initialTask={selectdata}
      />
    </>
  );
};

export default TaskTable;
