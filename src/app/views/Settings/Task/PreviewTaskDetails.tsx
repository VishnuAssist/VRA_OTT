import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { TaskType } from "../../../Models/TaskType";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteAlert from "../../../components/DeleteAlert";
import AddEditForm from "./addeditform";
import { removeTask } from "../../../Slices/TaskSlice";
import { useDispatch } from "react-redux";
// import FilePreviewer from "react-file-previewer";
// import DocViewer from "react-doc-viewer";

interface Props {
  preview: boolean;
  closePreview: () => void;
  PreviewDetails: TaskType | null;
}

const PreviewTaskDetails: FC<Props> = ({
  preview,
  closePreview,
  PreviewDetails,
}) => {
  const dispatch = useDispatch();
  const [selectdata, setSelectdata] = useState<TaskType | null>(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const edithandleAddClick = (data: TaskType) => {
    setSelectdata(data);
    setDialogOpen(true);
  };

  const closeEdit = () => {
    setDialogOpen(false);
  };
  // delete function

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


const images = [
  { thumbnail: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600', full: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { thumbnail: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600', full: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { thumbnail: 'https://4kwallpapers.com/images/walls/thumbs/17548.png', full: 'https://4kwallpapers.com/images/walls/thumbs/17548.png' },
  { thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQ4M70Vx97A63nbxXXEPRjGdGUVled8AbV1eDxvgDObXFGGGu&s', full: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQ4M70Vx97A63nbxXXEPRjGdGUVled8AbV1eDxvgDObXFGGGu&s' },
  { thumbnail: 'https://4kwallpapers.com/images/walls/thumbs/1455.jpg', full: 'https://4kwallpapers.com/images/walls/thumbs/1455.jpg' },
  { thumbnail: 'https://4kwallpapers.com/images/walls/thumbs/3773.jpg', full: 'https://4kwallpapers.com/images/walls/thumbs/3773.jpg' },
  
];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (images:any) => {
    setSelectedImage(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <Dialog open={preview} onClose={closePreview} maxWidth={"sm"}>
        <DialogTitle>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={9} sm={9} md={9} lg={9}>
              <Typography variant="h4" color={"darkblue"}>
                Task Details
              </Typography>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                size="small"
                color="primary"
                aria-label="edit"
                onClick={() => edithandleAddClick(PreviewDetails)}
              >
                <EditIcon />{" "}
              </IconButton>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                color="error"
                aria-label="delete"
                onClick={() => openDelete(PreviewDetails)}
              >
                <DeleteIcon />
              </IconButton>{" "}
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <IconButton
                color="error"
                aria-label="delete"
                onClick={closePreview}
              >
                <HighlightOffSharpIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <RadioButtonCheckedOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Task Progress :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.taskProgress}</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <PersonOutlineOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Assigned By :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.assigner}</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <FormatListBulletedOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Task :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.task}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <DescriptionOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Description :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.description}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <OutlinedFlagOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Priority :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.priority}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <PeopleAltOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Staff's:
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  {/* {Array.isArray(PreviewDetails.users) &&
                            PreviewDetails.users.length > 0 ? (
                              <>
                                {PreviewDetails.users.map((user: any) => (
                                  <div key={user.id}>
                                   
                                      <Tooltip
                                        title={<Box>{user?.username}</Box>}
                                        arrow
                                      >
                                        <StyledAvatar src="/assets/images/face-4.jpg" />
                                      </Tooltip>
                                 
                                  </div>
                                ))}
                               
                              </>
                            ) : (
                              <p>No users available</p>
                            )} */}
                  {/* {Array.isArray(PreviewDetails?.users) && PreviewDetails?.users.length > 0 ? (
                    PreviewDetails?.users.map((user: any) => (
                      <div key={user.id}>
                        <p>{user.username}</p>
                      </div>
                    ))
                  ) : (
                    <p>No users available</p>
                  )} */}
                  {/* <Typography>{PreviewDetails?.users}</Typography> */}
                </Grid>
                <Grid item xs={8} sm={6} md={6} lg={6}>
                  <Box display="flex" alignItems="center">
                    <CalendarMonthOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      Due Date :
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sm={6} md={6} lg={6}>
                  <Typography>{PreviewDetails?.date}</Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <AttachFileOutlinedIcon />
                    <Typography variant="h5" ml={1}>
                      File
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  
                  <Grid container spacing={2}>
                    {images.map((image, index) => (
                      <Grid item xs={4} key={index}>
                        <img
                          src={image.thumbnail}
                          alt={`Thumbnail ${index + 1}`}
                          style={{ width: "100%",height:"120px", cursor: "pointer" }}
                          onClick={() => handleClickOpen(image.full)}
                          
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>


      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent style={{ padding: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size"
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </DialogContent>
      </Dialog>


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

export default PreviewTaskDetails;
