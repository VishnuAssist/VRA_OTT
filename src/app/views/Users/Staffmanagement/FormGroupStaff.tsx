import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
<<<<<<< HEAD
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useDispatch } from "react-redux";
import { addGroup, updateGroup } from "../../../Slices/GroupStaff";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import { Staff } from "../../../Models/StaffManagement"; // Ensure the path is correct
=======
import { FC, useEffect } from "react";
import { GroupStaff } from "../../../Models/GroupStaff";
import { useDispatch } from "react-redux";
import { addGroup, updateGroup } from "../../../Slices/GroupStaff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import FormHelperText from "@mui/material/FormHelperText";
>>>>>>> 6a0de3eb9ea10000634726f1308ed2d395684cc4

const users = [
  { label: "John" },
  { label: "Kemy" },
  { label: "Emy" },
  { label: "Andrew" },
];

interface Props {
  openpGroup: boolean;
  closeGroup: () => void;
  initialStore: GroupStaff | null;
}

<<<<<<< HEAD
const Groupview: FC<Props> = ({ openpGroup, closeGroup, initialStore }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<GroupStaff>();

  const [userdata, setUserdata] = useState<Staff | null>(null);
  const [usersdata, setUsersdata] = useState<Staff[]>([]);

  useEffect(() => {
    if (initialStore) {
      reset(initialStore);
      setUsersdata(initialStore.staffs ? JSON.parse(initialStore.staffs) : []);
    } else {
      reset({
        groupname: "",
        description: "",
        staffs: [],
        id: 0,
      });
    }
  }, [initialStore, reset]);

  const submitValue = (data: GroupStaff) => {
    const updatedData = { ...data, staffs: usersdata };
    if (initialStore) {
      dispatch(updateGroup(updatedData));
    } else {
      dispatch(addGroup(updatedData));
    }
    reset();
    closeGroup();
  };

  const handleDeleteUser = (index: number) => {
    const updatedUsers = [...usersdata];
    updatedUsers.splice(index, 1);
    setUsersdata(updatedUsers);
  };

  return (
    <Dialog open={openpGroup} onClose={closeGroup} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ color: "darkblue" }}>
        {initialStore ? "Edit Group" : "Add Group"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitValue)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Group Name"
                placeholder="Group Name"
                {...register("groupname", { required: true })}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                placeholder="Description"
                {...register("description")}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={users}
                getOptionLabel={(option) => option.label}
                onChange={(_, selectedValue) => {
                  if (selectedValue) {
                    const newUser = { username: selectedValue.label }; // Adjust if `Staff` structure differs
                    setUserdata(newUser);
                  }
                }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Users" />
                )}
              />
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => {
                  if (userdata) {
                    setUsersdata((prev) => [...prev, userdata]);
                    setUserdata(null);
                  }
                }}
              >
                <AddCircleTwoToneIcon fontSize="large" color="primary" />
              </IconButton>
            </Grid>

            <Grid item xs={12}>
              {usersdata.map((user, index) => (
                <Card key={user?.username} sx={{p:2, display: "flex", justifyContent: "space-between", mb: 2 }}>
                  <Avatar>{user?.username.charAt(0)}</Avatar>
                  <Typography sx={{ ml: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {user?.username}
                  </Typography>
                  <IconButton
                    onClick={() => handleDeleteUser(index)}
                    sx={{ ml: "auto" }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Card>
              ))}
            </Grid>
          </Grid>

          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button onClick={closeGroup} variant="outlined" color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
=======
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
    staffs: "",
    id: 0,
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<GroupStaff>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitValue = (data: GroupStaff) => {
    if (initialStore) {
      dispatch(updateGroup(data));
    } else {
      dispatch(addGroup(data));
    }
    reset();
    closeGroup();
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
                  options={users}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      label="Users"
                      {...register("staffs")}
                      error={!!errors.staffs}
                      helperText={errors?.staffs?.message}
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
>>>>>>> 6a0de3eb9ea10000634726f1308ed2d395684cc4
  );
};

export default Groupview;
