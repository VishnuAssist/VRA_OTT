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
const TableView: React.FC = () => {
  const { taskList } = useSelector((state: any) => state.task);
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const StyledAvatar = styled(Avatar)(() => ({
    width: "32px !important",
    height: "32px !important",
  }));

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

  const deleteUser = (data: TaskType) => {
    dispatch(removeTask({ id: data.id }));
  };

  return (
    <>
      <Card sx={{ p: 2, height: "100%" }}>
        <TableContainer sx={{ overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "12px" }}>To Do</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Assigned By</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Task</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Description</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Assignees</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Due Date</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {taskList &&
              taskList.map((Task: TaskType) => (
              <TableRow>
                <TableCell>
                  <Tooltip title={<Box>Assigned</Box>} arrow>
                    <CircleRoundedIcon
                      sx={{ color: "#973FCF", fontSize: "6" }}
                    />
                  </Tooltip>
                </TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{Task.assigner}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{Task.task}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>
                {Task.description}
                </TableCell>
                <TableCell align="center" sx={{ textTransform: "capitalize" }}>
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

                <TableCell sx={{ fontSize: "12px" }}>{Task.date}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary" aria-label="edit">
                    <EditIcon />{" "}
                    <IconButton color="error" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>{" "}
                  </IconButton>
                </TableCell>
              </TableRow>
              // <TableRow>
              //   <TableCell>
              //     <Tooltip title={<Box>On progress</Box>} arrow>
              //       <CircleRoundedIcon
              //         sx={{ color: "#FFA500", fontSize: "6" }}
              //       />
              //     </Tooltip>
              //   </TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>Rizwan</TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>Task 02</TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>
              //     task assigned by staff
              //   </TableCell>
              //   <TableCell align="center" sx={{ textTransform: "capitalize" }}>
              //     <Box
              //       display="flex"
              //       alignItems="center"
              //       position="relative"
              //       marginLeft="-0.875rem !important"
              //     >
              //       <Tooltip title={<Box>James</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <Tooltip title={<Box>Kemy</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <Tooltip title={<Box>Emy</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <StyledAvatar
              //         onClick={handleProfileclick}
              //         sx={{ fontSize: "14px" }}
              //       >
              //         +3
              //       </StyledAvatar>
              //     </Box>
              //   </TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>AUG 01</TableCell>
              //   <TableCell>
              //     <IconButton size="small" color="primary" aria-label="edit">
              //       <EditIcon />{" "}
              //       <IconButton color="error" aria-label="delete">
              //         <DeleteIcon />
              //       </IconButton>{" "}
              //     </IconButton>
              //   </TableCell>
              // </TableRow>
              // <TableRow>
              //   <TableCell>
              //     <Tooltip title={<Box>Completed</Box>} arrow>
              //       <CircleRoundedIcon
              //         sx={{ color: "#68B266", fontSize: "6" }}
              //       />
              //     </Tooltip>
              //   </TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>Rizwan</TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>Task 02</TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>
              //     task assigned by staff
              //   </TableCell>
              //   <TableCell align="center" sx={{ textTransform: "capitalize" }}>
              //     <Box
              //       display="flex"
              //       alignItems="center"
              //       position="relative"
              //       marginLeft="-0.875rem !important"
              //     >
              //       <Tooltip title={<Box>James</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <Tooltip title={<Box>Emy</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <Tooltip title={<Box>Kemy</Box>} arrow>
              //         <StyledAvatar src="/assets/images/face-4.jpg" />
              //       </Tooltip>
              //       <StyledAvatar
              //         onClick={handleProfileclick}
              //         sx={{ fontSize: "14px" }}
              //       >
              //         +3
              //       </StyledAvatar>
              //     </Box>
              //   </TableCell>
              //   <TableCell sx={{ fontSize: "12px" }}>AUG 01</TableCell>
              //   <TableCell>
              //     <IconButton size="small" color="primary" aria-label="edit">
              //       <EditIcon />{" "}
              //       <IconButton color="error" aria-label="delete">
              //         <DeleteIcon />
              //       </IconButton>{" "}
              //     </IconButton>
              //   </TableCell>
              // </TableRow>
              ))}
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
    </>
  );
};

export default TableView;
