import {
  Avatar,
  Dialog,
  DialogContent,
  List,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  styled,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TaskType } from "../../../Models/TaskType";

interface Props {
  openprofile: boolean;
  closeprofile: () => void;
}
const StyledAvatar = styled(Avatar)(() => ({
  width: "32px !important",
  height: "32px !important",
}));

const Profile: FC<Props> = ({ openprofile, closeprofile }) => {
  const { taskList } = useSelector((state: any) => state.task);

  return (
    <>
      <Dialog open={openprofile} onClose={closeprofile} maxWidth="sm">
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography>Assignees</Typography>
          <Button>
            <CloseIcon color="error" />
          </Button>
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <List
            sx={{ width: "100%", minWidth: 280, bgcolor: "background.paper" }}
          >
           
            <ListItem disablePadding>
            {taskList?.map((Task: TaskType) => (

              <ListItemButton>
              {Array.isArray(Task.users) && Task.users.length > 0 ? (
                      Task.users.map((user: any) => (
                        <div key={user.id}>
                <ListItemAvatar>
                  <StyledAvatar src="/assets/images/face-4.jpg" />
                </ListItemAvatar>
                <ListItemText primary={user?.username} />
                </div>
                      ))
                    ) 
                    : ""
                    }
              </ListItemButton>

            ))}
            </ListItem>

            {/* <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <StyledAvatar src="/assets/images/face-4.jpg" />
                </ListItemAvatar>
                <ListItemText primary={`Andrew `} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <StyledAvatar src="/assets/images/face-4.jpg" />
                </ListItemAvatar>
                <ListItemText primary={`Stark `} />
              </ListItemButton>
            </ListItem> */}

          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;
