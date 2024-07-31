import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Card,
  IconButton,
  Avatar,
  Tooltip,
  styled,
} from "@mui/material";
import Profile from "./profile";
import EditIcon from "@mui/icons-material/Edit";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../../Slices/TaskSlice";
import { TaskType } from "../../../Models/TaskType";
import AddEditForm from "./addeditform";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteAlert from "../../../components/DeleteAlert";
import PreviewTaskDetails from "./PreviewTaskDetails";

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
const TableView: React.FC<Props> = ({ value, CustomTabPanel }) => {
  const { taskList } = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);

  const StyledAvatar = styled(Avatar)(() => ({
    width: "32px !important",
    height: "32px !important",
  }));
  // preview function
  const [preview, setPreview] = useState(false);
  const [previewdata, setPreviewData] = useState<TaskType | null>(null);
  const openPreview = (data: TaskType) => {
    setPreview(true);
    setPreviewData(data);
  };
  const closePreview = () => {
    setPreview(false);
  };

  const [profile, setProfile] = useState(false);
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
  // delete FUction

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
      <Card sx={{ p: 2, height: "100%" }}>
        <TableContainer sx={{ overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "12px" }}>TaskProgress</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Assigned By</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Task</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Description</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Assignees</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Due Date</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <CustomTabPanel value={value} index={0}> */}
                {filterToDo &&
                  filterToDo.map((Task: TaskType) => (
                    <TableRow>
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
                      <TableCell sx={{ fontSize: "12px" }}>{"vsdv"}</TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.task}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.description}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ textTransform: "capitalize" }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          position="relative"
                          marginLeft="-0.875rem !important"
                        >
                          <Tooltip title={<Box>James</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>kemy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>emy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>

                          <StyledAvatar
                            onClick={handleProfileclick}
                            sx={{ fontSize: "14px" }}
                          >
                            +3
                          </StyledAvatar>
                        </Box>
                      </TableCell>

                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.date}
                      </TableCell>
                      <TableCell>
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
              {/* </CustomTabPanel> */}
              <CustomTabPanel value={value} index={1}>
                {filterInProgress &&
                  filterInProgress.map((Task: TaskType) => (
                    <TableRow>
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
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.assigner}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.task}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.description}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ textTransform: "capitalize" }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          position="relative"
                          marginLeft="-0.875rem !important"
                        >
                          <Tooltip title={<Box>James</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>kemy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>emy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>

                          <StyledAvatar
                            onClick={handleProfileclick}
                            sx={{ fontSize: "14px" }}
                          >
                            +3
                          </StyledAvatar>
                        </Box>
                      </TableCell>

                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.date}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="primary"
                          aria-label="edit"
                          onClick={() => openPreview(Task)}
                        >
                          <RemoveRedEyeIcon />
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
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {filterCompleted &&
                  filterCompleted.map((Task: TaskType) => (
                    <TableRow>
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
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.assigner}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.task}
                      </TableCell>
                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.description}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ textTransform: "capitalize" }}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          position="relative"
                          marginLeft="-0.875rem !important"
                        >
                          <Tooltip title={<Box>James</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>kemy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>
                          <Tooltip title={<Box>emy</Box>} arrow>
                            <StyledAvatar src="/assets/images/face-4.jpg" />
                          </Tooltip>

                          <StyledAvatar
                            onClick={handleProfileclick}
                            sx={{ fontSize: "14px" }}
                          >
                            +3
                          </StyledAvatar>
                        </Box>
                      </TableCell>

                      <TableCell sx={{ fontSize: "12px" }}>
                        {Task.date}
                      </TableCell>
                      <TableCell>
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
              </CustomTabPanel>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

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
      />
      <AddEditForm
        openmodel={dialogOpen}
        closetaskmodel={closeEdit}
        initialTask={selectdata}
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
