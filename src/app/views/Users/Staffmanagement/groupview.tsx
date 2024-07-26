import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Checkbox, TextField } from "@mui/material";
import { FC } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";

const users = [
  { label: 'John' },
  { label: 'Kemy' },
  { label: 'emy' },
  { label: 'Andrew' },]

interface Props {
    openpGroup: boolean;
    closeGroup: () => void;
  }

const Groupview :FC<Props> = ({ openpGroup, closeGroup }) => {
  return (
    <>
<Dialog open={openpGroup} onClose={closeGroup} maxWidth="sm" fullWidth>
<DialogTitle sx={{ color: "darkblue" }}>Group</DialogTitle>
<DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <form >
              
                <Grid container spacing={2}>
                <Grid item xs={12} md={12} >
                  <TextField fullWidth label="Group Name" />
                  
                </Grid>
                <Grid item xs={12} md={12} >
                
                <Autocomplete multiple
      disablePortal
      id="combo-box-demo"
      options={users}
      
      renderInput={(params) => <TextField {...params} fullWidth label="Users" />}
    />
                
                  
                  </Grid>
                  
                
                
  
                <Grid item xs={12} md={12}>
                  <TextField
        
                    fullWidth label="Description"
                  />
                </Grid>
              </Grid>
              {/* </Grid> */}
              {/* </Grid> */}
              <DialogActions>
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </DialogActions>
              
              
            </form>
          </DialogContent>
</Dialog>
    </>
  )
}

export default Groupview