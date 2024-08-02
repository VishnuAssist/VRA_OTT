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
  Tooltip,
  styled,
} from "@mui/material";

import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PreviewTaskDetails from "./PreviewTaskDetails";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import * as React from "react";
import Box from "@mui/material/Box";
import DeleteAlert from "../../../components/DeleteAlert";
import { getProgressColor, taskProgressName } from "./utile";

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
  console.log("taskList", taskList);

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

  // const [searchQuery, setSearchQuery] = useState("");

  // const filterToDo = taskList.filter(
  //   (data: TaskType) => data.taskProgress === "To Do"
  // );
  // const filterInProgress = taskList.filter(
  //   (data: TaskType) => data.taskProgress === "In Progress"
  // );
  // const filterCompleted = taskList.filter(
  //   (data: TaskType) => data.taskProgress === "Completed"
  // );
  const [filtereddata, setfiltereddata] = useState([]);
  React.useEffect(() => {
    const filterToDo = taskList.filter(
      (data: TaskType) => data.taskProgress === "To Do"
    );
    const filterInProgress = taskList.filter(
      (data: TaskType) => data.taskProgress === "In Progress"
    );
    const filterCompleted = taskList.filter(
      (data: TaskType) => data.taskProgress === "Completed"
    );
    if (value == 0) {
      setfiltereddata(filterToDo);
    } else if (value == 1) {
      setfiltereddata(filterInProgress);
    } else if (value == 2) {
      setfiltereddata(filterCompleted);
    }
    // setfiltereddata(filterbystatus(taskList,value))
  }, [value]);

  const StyledAvatar = styled(Avatar)(() => ({
    width: "32px !important",
    height: "32px !important",
  }));
  const [profile, setProfile] = useState(false);
  const handleProfileclick = () => {
    setProfile(true);
  };

  const handleProfileclose = () => {
    setProfile(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        {/* <CustomTabPanel value={value} index={0}> */}
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Box sx={{ p: 2, height: "100%", width: "100%" }}>
              <>
                <Box sx={{ display: "flex", p: 1 }}>
                  <CircleIcon
                    sx={{
                      color: getProgressColor(value),
                      mr: 2,
                    }}
                  />
                  <Typography> {taskProgressName(value)}</Typography>
                </Box>
                <Divider
                  sx={{
                    backgroundColor: getProgressColor(value),
                  }}
                />

                <Grid container spacing={2}>
                  {filtereddata?.map((taskDetail: TaskType) => (
                    <Grid
                      item
                      md={4}
                      sx={{ display: "flex" }}
                      key={taskDetail.id}
                    >
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
                          <Grid item md={10}>
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
                              <MenuItem onClick={() => openPreview(taskDetail)}>
                                <RemoveRedEyeIcon />
                                <Typography sx={{ ml: 1 }}>Preview</Typography>
                              </MenuItem>
                              <MenuItem
                                onClick={() => edithandleAddClick(taskDetail)}
                              >
                                <CreateOutlinedIcon />
                                <Typography sx={{ ml: 1 }}>Edit</Typography>
                              </MenuItem>
                              <MenuItem onClick={() => openDelete(taskDetail)}>
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
                            <Typography
                              sx={{
                                height: "40px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
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
                          <Grid item md={5} sx={{ ml: 1 }}>
                            {/* <Typography>{taskDetail?.users?.length}</Typography> */}
                            <Box
                              display="flex"
                              flexDirection="row"
                              position="relative"
                              marginLeft="-0.875rem !important"
                            >
                              {Array.isArray(taskDetail.users) &&
                              taskDetail.users.length > 0 ? (
                                <>
                                  {taskDetail.users.map((user: any) => (
                                    <div key={user.id}>
                                      <Tooltip
                                        title={<Box>{user?.username}</Box>}
                                        arrow
                                      >
                                        <StyledAvatar src="/assets/images/face-4.jpg" />
                                      </Tooltip>
                                    </div>
                                  ))}
                                  {taskDetail.users.length > 3 && (
                                    <StyledAvatar
                                      onClick={handleProfileclick}
                                      sx={{ fontSize: "14px" }}
                                    >
                                      +{taskDetail.users.length - 3}
                                    </StyledAvatar>
                                  )}
                                </>
                              ) : (
                                <p>No users available</p>
                              )}
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
                  ))}
                </Grid>
              </>
            </Box>
          </Grid>
        </Grid>
        {/* </CustomTabPanel> */}
      </Grid>

      <Profile openprofile={profile} closeprofile={handleProfileclose} />
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
        edithandleAddClick={undefined}      />
      <DeleteAlert
        DeleteAlert={alertdeleteStore}
        closeDelete={closeDelete}
        DeleteOption={deleteStore}
      />
    </>
  );
};

export default TaskTable;
