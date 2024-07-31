import { useState } from "react";
import {
  Card,
  Divider,
  Grid,
  Typography,
  AvatarGroup,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PreviewTaskDetails from "./PreviewTaskDetails";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import * as React from "react";
import Box from "@mui/material/Box";
import DeleteAlert from "../../../components/DeleteAlert";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

interface Props {
  value: number;
  CustomTabPanel: (props: TabPanelProps) => JSX.Element;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};
const TaskTable: React.FC<Props> = ({ value, CustomTabPanel }) => {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state: any) => state.task);
  // console.log{"taskList",taskList}

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

  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<TaskType | null>(null);
  const openPreview = (data: TaskType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filterToDo = taskList.filter(
    (data: TaskType) => data.taskProgress === "To Do"
  );
  const filterInProgress = taskList.filter(
    (data: TaskType) => data.taskProgress === "In Progress"
  );
  const filterCompleted = taskList.filter(
    (data: TaskType) => data.taskProgress === "Completed"
  );

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
  return (
    <>
      <Card sx={{ p: 1, height: "100%" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          p={2}
        >
          <Typography variant="h3">Card View</Typography>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Card
                sx={{ p: 2, height: "100%", width: "100%" }}
                // key={taskDetail.id}
              >
                {filterToDo &&
                  filterToDo.map((taskDetail: TaskType) => (
                    <>
                      <Box sx={{ display: "flex", p: 1 }}>
                        <CircleIcon
                          sx={{
                            color: getProgressColor(taskDetail.taskProgress),
                            mr: 2,
                          }}
                        />
                        <Typography> {taskDetail.taskProgress}</Typography>
                      </Box>
                      <Divider
                        sx={{
                          backgroundColor: getProgressColor(
                            taskDetail.taskProgress
                          ),
                        }}
                      />
                      <Grid container spacing={2}>
                        <Grid item md={4}>
                          <Card
                            sx={{
                              p: 1,
                              mt: 1,
                              width: "100%",
                              backgroundColor: "#F1F5FA",
                            }}
                          >
                            <Grid
                              container
                              spacing={1}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                py: 1,
                                pr: 1,
                              }}
                            >
                              <Grid item md={8}>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    color: getProgressColor(
                                      taskDetail.taskProgress
                                    ),
                                  }}
                                >
                                  {taskDetail.assigner}
                                </Typography>
                              </Grid>

                              <Grid item md={2}>
                                <RemoveRedEyeIcon
                                  onClick={() => openPreview(taskDetail)}
                                />
                              </Grid>

                              <Grid item md={2}>
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
                                    onClick={() =>
                                      edithandleAddClick(taskDetail)
                                    }
                                  >
                                    <CreateOutlinedIcon />
                                    <Typography sx={{ ml: 1 }}>Edit</Typography>
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => openDelete(taskDetail)}
                                  >
                                    <DeleteOutlineOutlinedIcon />
                                    <Typography sx={{ ml: 1 }}>
                                      Delete
                                    </Typography>
                                  </MenuItem>
                                </Menu>
                              </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                              <Grid item md={12} sx={{ fontSize: "18px" }}>
                                <Typography variant="h5">
                                  {taskDetail.task}
                                </Typography>
                              </Grid>
                              <Grid item md={12}>
                                <Typography>
                                  {taskDetail.description}
                                </Typography>
                              </Grid>
                              <Grid item md={6}>
                                <Typography
                                  variant={"h5"}
                                  sx={{ color: "#8D6F64" }}
                                >
                                  {taskDetail.priority}
                                </Typography>
                              </Grid>
                              <Grid
                                item
                                md={6}
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
                                  <Typography sx={{ ml: 1 }}>
                                    Comments
                                  </Typography>
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
                                  <IconButton>
                                    <Badge
                                      badgeContent={taskDetail?.file?.length}
                                      color="secondary"
                                    >
                                      <DriveFolderUploadIcon />
                                    </Badge>
                                  </IconButton>
                                  <Typography sx={{ ml: 1 }}>Files</Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Card>
                        </Grid>
                      </Grid>
                    </>
                  ))}
              </Card>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              
                  <Card
                    sx={{ p: 2, height: "100%", width: "100%" }}
                    // key={taskDetail.id}
                  >
                    {filterInProgress &&
                filterInProgress.map((taskDetail: TaskType) => (
                  <>
                    <Box sx={{ display: "flex", p: 1 }}>
                      <CircleIcon
                        sx={{
                          color: getProgressColor(taskDetail.taskProgress),
                          mr: 2,
                        }}
                      />
                      <Typography> {taskDetail.taskProgress}</Typography>
                    </Box>
                    <Divider
                      sx={{
                        backgroundColor: getProgressColor(
                          taskDetail.taskProgress
                        ),
                      }}
                    />
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <Card
                          sx={{
                            p: 1,
                            mt: 1,
                            width: "100%",
                            backgroundColor: "#F1F5FA",
                          }}
                        >
                          <Grid
                            container
                            spacing={1}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: 1,
                              pr: 1,
                            }}
                          >
                            <Grid item md={8}>
                              <Typography
                                variant="h5"
                                sx={{
                                  color: getProgressColor(
                                    taskDetail.taskProgress
                                  ),
                                }}
                              >
                                {taskDetail.assigner}
                              </Typography>
                            </Grid>

                            <Grid item md={2}>
                              <RemoveRedEyeIcon
                                onClick={() => openPreview(taskDetail)}
                              />
                            </Grid>

                            <Grid item md={2}>
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
                                  <CreateOutlinedIcon />
                                  <Typography sx={{ ml: 1 }}>Edit</Typography>
                                </MenuItem>
                                <MenuItem
                                  onClick={() => openDelete(taskDetail)}
                                >
                                  <DeleteOutlineOutlinedIcon />
                                  <Typography sx={{ ml: 1 }}>Delete</Typography>
                                </MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item md={12} sx={{ fontSize: "18px" }}>
                              <Typography variant="h5">
                                {taskDetail.task}
                              </Typography>
                            </Grid>
                            <Grid item md={12}>
                              <Typography>{taskDetail.description}</Typography>
                            </Grid>
                            <Grid item md={6}>
                              <Typography
                                variant={"h5"}
                                sx={{ color: "#8D6F64" }}
                              >
                                {taskDetail.priority}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={6}
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
                                <IconButton>
                                  <Badge badgeContent={3} color="secondary">
                                    <DriveFolderUploadIcon />
                                  </Badge>
                                </IconButton>
                                <Typography sx={{ ml: 1 }}>Files</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    </Grid>
                    </>
                    ))}
                  </Card>
                
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              
                  <Card
                    sx={{ p: 2, height: "100%", width: "100%" }}
                    // key={taskDetail.id}
                  >
                    {filterCompleted &&
                filterCompleted.map((taskDetail: TaskType) => (
                  <>
                    <Box sx={{ display: "flex", p: 1 }}>
                      <CircleIcon
                        sx={{
                          color: getProgressColor(taskDetail.taskProgress),
                          mr: 2,
                        }}
                      />
                      <Typography> {taskDetail.taskProgress}</Typography>
                    </Box>
                    <Divider
                      sx={{
                        backgroundColor: getProgressColor(
                          taskDetail.taskProgress
                        ),
                      }}
                    />
                    <Grid container spacing={2}>
                      <Grid item md={4}>
                        <Card
                          sx={{
                            p: 1,
                            mt: 1,
                            width: "100%",
                            backgroundColor: "#F1F5FA",
                          }}
                        >
                          <Grid
                            container
                            spacing={1}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: 1,
                              pr: 1,
                            }}
                          >
                            <Grid item md={8}>
                              <Typography
                                variant="h5"
                                sx={{
                                  color: getProgressColor(
                                    taskDetail.taskProgress
                                  ),
                                }}
                              >
                                {taskDetail.assigner}
                              </Typography>
                            </Grid>

                            <Grid item md={2}>
                              <RemoveRedEyeIcon
                                onClick={() => openPreview(taskDetail)}
                              />
                            </Grid>

                            <Grid item md={2}>
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
                                  <CreateOutlinedIcon />
                                  <Typography sx={{ ml: 1 }}>Edit</Typography>
                                </MenuItem>
                                <MenuItem
                                  onClick={() => openDelete(taskDetail)}
                                >
                                  <DeleteOutlineOutlinedIcon />
                                  <Typography sx={{ ml: 1 }}>Delete</Typography>
                                </MenuItem>
                              </Menu>
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item md={12} sx={{ fontSize: "18px" }}>
                              <Typography variant="h5">
                                {taskDetail.task}
                              </Typography>
                            </Grid>
                            <Grid item md={12}>
                              <Typography>{taskDetail.description}</Typography>
                            </Grid>
                            <Grid item md={6}>
                              <Typography
                                variant={"h5"}
                                sx={{ color: "#8D6F64" }}
                              >
                                {taskDetail.priority}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={6}
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
                                <IconButton>
                                  <Badge badgeContent={3} color="secondary">
                                    <DriveFolderUploadIcon />
                                  </Badge>
                                </IconButton>
                                <Typography sx={{ ml: 1 }}>Files</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    </Grid>
                    </>
                  ))}
                  </Card>
             
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Card>

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
      <PreviewTaskDetails
        preview={preview}
        closePreview={closePreview}
        PreviewDetails={previewdata}
      />
      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />
    </>
  );
};

export default TaskTable;
