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
import { FC, useEffect, useState } from "react";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useDispatch, useSelector } from "react-redux";
import { addGroup, updateGroup } from "../../../Slices/GroupStaff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Staff } from "../../../Models/StaffMangement";
// import FormHelperText from "@mui/material/FormHelperText";

// const users = [
//   { label: "John" },
//   { label: "Kemy" },
//   { label: "emy" },
//   { label: "Andrew" },
// ];

interface Props {
  openpGroup: boolean;
  closeGroup: () => void;
  initialStore: GroupStaff | null;
}

const schema = yup.object().shape({
  groupname: yup.string().required("GroupName is mandatory"),
  staffs: yup.string(),
  description: yup.string().required("Description is mandatory"),

  id: yup.number().integer().positive().required(),
});

const Groupview: FC<Props> = ({ openpGroup, closeGroup, initialStore }) => {
  const data: GroupStaff = {
    groupname: "",
    description: "",
    staffs:"",
    id: 0,
  };

  const { userList } = useSelector((state: any) => state.staff);

  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<Staff[] | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<GroupStaff>();
  // ({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });

  const submitValue = (data: GroupStaff) => {
    const taskData = {
      ...data,
      users: selectedUser ? selectedUser:[]
    };
    if (initialStore) {
      dispatch(updateGroup(taskData));
    } else {
      dispatch(addGroup(taskData));
    }
    reset();
    setSelectedUser(null);
    closeGroup();
    console.log("data",taskData)
  };
  useEffect(() => {
    reset(initialStore || data);
  }, [initialStore, reset]);

  useEffect(() => {
    if (initialStore) {
      setValue("groupname", initialStore.groupname);
      setValue("description", initialStore.description);
      setValue("staffs", initialStore.staffs);
      setValue("id", initialStore.id);

      const initialSelectedUser = userList.find(
        (user: Staff) => user.username === initialStore.users
      );
      setSelectedUser(initialSelectedUser || null);
    }
  }, [initialStore, setValue, userList]);

  return (
    <>
      <Dialog open={openpGroup} onClose={closeGroup} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "darkblue" }}>Group</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <form onSubmit={handleSubmit(submitValue)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Group Name"
                  {...register("groupname")}
                  error={!!errors.groupname}
                  helperText={errors?.groupname?.message}
                />
              </Grid>
              <Grid item xs={12} md={12}>
               
                <Autocomplete
                  multiple
                  disablePortal
                  id="combo-box-demo"
                  options={userList}
                  getOptionLabel={(option: Staff) => option.username}
                  // value={selectedUser}
                  onChange={(_, value) => {
                    setSelectedUser(value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Staff's"
                      {...register("staffs")}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Description"
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors?.description?.message}
                />
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
