import { Box, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { FC } from "react";




interface Props {
    openpGroup: boolean;
    closeGroup: () => void;
  }

const Groupview :FC<Props> = ({ openpGroup, closeGroup }) => {
  return (
    <>
<Dialog open={openpGroup} onClose={closeGroup} maxWidth="sm" >
<DialogTitle sx={{ color: "darkblue" }}>Group</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
      </DialogContent>
</Dialog>
    </>
  )
}

export default Groupview