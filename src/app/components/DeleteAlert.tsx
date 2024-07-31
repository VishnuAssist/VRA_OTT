import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import image from "./assest/deletesvg.svg";
interface Props {
  DeleteAlert: boolean;
  closeDelete: () => void;
  DeleteOption: () => void;
}
const DeleteAlert: FC<Props> = ({ DeleteAlert, closeDelete, DeleteOption }) => {
  return (
    <>
      <Dialog open={DeleteAlert} onClose={closeDelete} maxWidth="xs" fullWidth>
        <DialogContent>
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ fontSize: "22px" }}
          >
            Do you really want to<br/> delete this file ?
          </Typography>
          <Box sx={{textAlign:"center",p:2}}>
          <img src={image} alt="Delete File" width={"300px"} height={"200px"} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-between" ,px:4,py:2}}>
      
            <Button variant="contained" color="primary" onClick={closeDelete}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={DeleteOption}>
              Confirm
            </Button>
         
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAlert;
