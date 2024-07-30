import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { TaskType } from "../../../Models/TaskType";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
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
  return (
    <>
      <Dialog open={preview} onClose={closePreview} maxWidth={"md"}>
        <DialogTitle sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography >Task Details</Typography>
        <IconButton
              color="error"
              aria-label="delete"
              onClick={closePreview}
            >
              <HighlightOffSharpIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
                <Grid container spacing={2}>
            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <RadioButtonCheckedOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Task Progress :
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.taskProgress}</Typography>
            </Grid>

            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <PersonOutlineOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Assigned By :
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.assigner}</Typography>
            </Grid>

            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <FormatListBulletedOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Task :
                </Typography>
              </Box>
              
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.task}</Typography>
            </Grid>
            <Grid item md={6}>
            <Box display="flex" alignItems="center">
                <DescriptionOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Description :
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.description}</Typography>
            </Grid>
            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <OutlinedFlagOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Priority :
                </Typography>
              </Box>
             
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.priority}</Typography>
            </Grid>
            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <PeopleAltOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Staff's:
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.staff}</Typography>
            </Grid>
            <Grid item md={6}>
              <Box display="flex" alignItems="center">
                <CalendarMonthOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  Due Date :
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography>{PreviewDetails?.date}</Typography>
            </Grid>

            </Grid>
            </Grid>
            <Grid item md={6}>
                <Grid container spacing={2}>
            
            <Grid item md={6}>
            <Box display="flex" alignItems="center">
                <AttachFileOutlinedIcon />
                <Typography variant="h5" ml={1}>
                  File :
                </Typography>
              </Box>
            </Grid>
            
            <Grid item md={6}>
              <Box sx={{px:6,py:6,border:'dashed'}}>File Preview</Box>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewTaskDetails;
