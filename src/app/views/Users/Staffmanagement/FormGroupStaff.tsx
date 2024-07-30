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
import { FC, useEffect } from "react";

import { useForm } from "react-hook-form";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useDispatch } from "react-redux";
import { addGroup, updateGroup } from "../../../Slices/GroupStaff";

const users = [
  { label: "John" },
  { label: "Kemy" },
  { label: "emy" },
  { label: "Andrew" },
];

interface Props {
  openpGroup: boolean;
  closeGroup: () => void;
  initialStore: GroupStaff | null;
}

const Groupview: FC<Props> = ({ openpGroup, closeGroup,initialStore }) => {
  const data:GroupStaff={
  groupname:"",
  description:"",
  staffs:"",
  id:0,
  }
  const dispatch = useDispatch();
  const { register, handleSubmit,reset,setValue } = useForm<GroupStaff>();


 
  const submitValue=(data:GroupStaff)=>{
    if(initialStore){
      dispatch(updateGroup(data))
        
      }else{
        dispatch(addGroup(data))
      }
      reset();
      closeGroup();
    }
    useEffect(() => {
      reset(initialStore || data);
    }, [initialStore, reset]);
  
    useEffect(() => {
      if (initialStore) {
        setValue("groupname", initialStore.groupname);
        setValue("description", initialStore.description);
        setValue("staffs", initialStore.staffs);
        setValue("id", initialStore.id);
      }
    }, [initialStore, setValue]);
    
  

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
