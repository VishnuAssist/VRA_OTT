import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { FC } from "react";

interface Props {
    openAddMenu: boolean;
    closeAddMenu: () => void;
    
  }
  
  const AddMenuFromDictionary: FC<Props> = ({ openAddMenu, closeAddMenu }) => {

  return (
    <>
      <Dialog open={openAddMenu} onClose={closeAddMenu}>
        <DialogTitle>

        </DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddMenuFromDictionary
