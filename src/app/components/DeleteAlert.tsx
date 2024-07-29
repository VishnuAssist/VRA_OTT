import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { FC } from "react";

interface Props{
    DeleteAlert:boolean,
    closeDelete:()=>void,
    DeleteOption:()=>void
}
const DeleteAlert:FC<Props> = ({DeleteAlert,closeDelete,DeleteOption}) => {
  return (
    <>
    <Dialog
        open={DeleteAlert}
        onClose={closeDelete}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          Are you sure you want to delete this store ?
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDelete}>
            Cancel
          </Button>
          <Button color="error" onClick={DeleteOption}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAlert;
