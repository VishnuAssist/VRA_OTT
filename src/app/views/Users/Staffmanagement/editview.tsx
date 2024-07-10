import { Avatar, Box, Button, Card, Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material"
import { blue, deepOrange, red } from "@mui/material/colors"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import { FC } from 'react';
interface CreateProps{
    editdialogOpen: boolean;
    edithandleDialogClose: () => void;
    edituserData?:any | null;
}
const Edit:FC<CreateProps>=({ editdialogOpen, edithandleDialogClose, edituserData })=>{
    return(
        <>
        <Dialog open={editdialogOpen} onClose={edithandleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>{edituserData ? "Update User" :""}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} lg={6} sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
 <Avatar sx={{width: 200,height: 200, cursor: "pointer" , bgcolor: red[500] }}>MR</Avatar>
 <Typography variant="h5" sx={{textAlign:"center", fontWeight:"bold"}}>Mohamed Riyas</Typography>
 <Typography sx={{textAlign:"center"}}>Employee</Typography>
 </Grid>
<Grid item xs={12} lg={6} container spacing={2}>
 <Grid item xs={12} lg={8} sx={{ display: "flex", flexDirection: "column" }}>
    <Typography sx={{ fontSize: 18 ,fontWeight:"bold"}}>Employee ID</Typography>
    <Typography sx={{ fontSize: 13 }}>A36001</Typography>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ display: "flex", flexDirection: "column", }}>
    <Typography sx={{ fontSize: 18 ,fontWeight:"bold" }}>Store</Typography>
    <Typography sx={{ fontSize: 13 }}>BBW</Typography>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ display: "flex", flexDirection: "column",  }}>
    <Typography sx={{ fontSize: 18 ,fontWeight:"bold" }}>Joining Date</Typography>
    <Typography sx={{ fontSize: 13 }}>12 December 2015</Typography>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ display: "flex", flexDirection: "column" }}>
    <Typography sx={{ fontSize: 18 ,fontWeight:"bold" }}>Average Work Hours</Typography>
    <Typography sx={{ fontSize: 13 }}>08:00</Typography>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{p:1,border: '1px solid #24665D',display: "flex",gap:6, borderRadius:2,alignItems: "center",m:1}}>
                <IconButton size="large" color="primary" aria-label="PhoneInTalkIcon">
                    <PhoneInTalkIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" aria-label="EmailIcon">
                    <EmailIcon />
                  </IconButton>
                  </Box>
                  </Grid>
                  </Grid>
                  </Grid>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                color="error"
              >
                Close
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
              >EDIT
              </Button>
        
            </Box>
                 
                </DialogContent>
                </Dialog>
        </>
    )
}
export default Edit;