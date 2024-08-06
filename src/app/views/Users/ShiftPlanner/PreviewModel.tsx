import { Box, Button, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import { FC } from 'react';
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

interface Props{
    preview : boolean;
    closePreview: () => void;
    previewdata: any | null;
    edithandleAddClick: (data:any) => void;
    deleteEvent: (data:any) => void
}
 const PreviewModel:FC<Props>  = ({preview, closePreview, previewdata, edithandleAddClick, deleteEvent }) => {
  return (
   <>
   <Container>
   <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{ color: 'darkblue' }}>
          
       
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Preview Slot Details</Typography>

            <IconButton
              color="error"
              aria-label="delete"
              onClick={closePreview}
            >
              <HighlightOffSharpIcon />
            </IconButton>
          </Box>
          </DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={6}>
                <Typography>Title :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography> {previewdata?.option}   </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography>Shift :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography>  {previewdata?.shift}  </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography>From :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography> {previewdata?.start?.toLocaleString()}  </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography>To :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography> {previewdata?.end?.toLocaleString()}  </Typography>
              </Grid>

              <Grid item md={6} xs={6}>
                <Button variant="outlined" onClick={() => edithandleAddClick(previewdata)} color="success">Edit</Button>
              </Grid>
              <Grid item md={6} xs={6}>
                {/* <Button variant="outlined"  color="error"> */}
                <Button variant="outlined" onClick={() => deleteEvent(previewdata?.id || 0)} color="error">
                  Delete
                </Button>
              </Grid>


            </Grid>

          </Box>
        </DialogContent>
      </Dialog>
   </Container>
   </>
  )
}
export default  PreviewModel