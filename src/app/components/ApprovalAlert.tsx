import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material'


interface Props{
    approveAlert:boolean,
    closeApproveAlert:()=>void
}
const ApprovalAlert:FC<Props> = ({approveAlert,closeApproveAlert}) => {
  return (
    <>
    <Dialog open={approveAlert} onClose={closeApproveAlert}>
        <DialogTitle>Approval</DialogTitle>
        <DialogContent>
           <Grid container spacing={2}>
            <Grid item md={12}>
            <Typography variant='h5'>Are you sure that you want to Approve ?</Typography>
            </Grid>
            <Grid item md={12} > 
            <TextField label='Reason' multiline rows={4} sx={{width:'100%'}}></TextField>
            </Grid>
           </Grid>
            
            
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color="success" onClick={closeApproveAlert}>
            Yes I Agree
          </Button>
          <Button variant="contained" color="error" onClick={closeApproveAlert}>
            Cancel
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default ApprovalAlert