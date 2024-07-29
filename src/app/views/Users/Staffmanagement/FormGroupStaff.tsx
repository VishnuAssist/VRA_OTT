import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { FC } from "react";

import { useForm } from "react-hook-form";
import { GroupStaff } from "../../../Models/GroupStaff";

const users = [
  { label: "John" },
  { label: "Kemy" },
  { label: "emy" },
  { label: "Andrew" },
];

interface Props {
  openpGroup: boolean;
  closeGroup: () => void;
}

const Groupview: FC<Props> = ({ openpGroup, closeGroup }) => {

  const { register, handleSubmit } = useForm<GroupStaff>();

  const submitValue=(data:GroupStaff)=>{
    console.log("data",data)
  }

  return (
    <>
      <Dialog open={openpGroup} onClose={closeGroup} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "darkblue" }}>Group</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(submitValue)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField fullWidth label="Group Name" {...register("groupname")}/>
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  multiple
                  disablePortal
                  id="combo-box-demo"
                  options={users}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth label="Users" {...register("staffs")}/>
                  )}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField fullWidth label="Description" {...register("description")}/>
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
  );
};

export default Groupview;
