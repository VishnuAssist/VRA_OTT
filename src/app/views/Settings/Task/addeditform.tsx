import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { FC, useEffect, useState } from "react";
  import { useForm } from "react-hook-form";
  import { useDispatch, useSelector } from "react-redux";
  import { TaskType } from "../../../Models/TaskType";
  import { addTask, updateTask } from "../../../Slices/TaskSlice";
  import { Staff } from "../../../Models/StaffMangement";
  
  interface Props {
    openmodel: boolean;
    closetaskmodel: () => void;
    initialTask?: TaskType | null;
  }
  
  const AddEditForm: FC<Props> = ({ openmodel, closetaskmodel, initialTask }) => {
    const data: TaskType = {
      users: "",
      task: "",
      date: "",
      id: 0,
    };
  
    const { userList } = useSelector((state: any) => state.staff);
    console.log(userList);
  
    const { register, handleSubmit, reset, setValue, watch } = useForm<TaskType>();
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<Staff | null>(null);
  
    const submitData = (data: TaskType) => {
      const taskData = {
        ...data,
        users: selectedUser ? selectedUser.username : "",
      };
      console.log("statusss", taskData);
      if (initialTask) {
        dispatch(updateTask(taskData));
      } else {
        dispatch(addTask(taskData));
      }
      reset();
      setSelectedUser(null);
      closetaskmodel();
    };
  
    useEffect(() => {
      reset(initialTask || data);
    }, [initialTask, reset]);
  
    useEffect(() => {
      if (initialTask) {
        setValue("users", initialTask.users);
        setValue("task", initialTask.task);
        setValue("id", initialTask.id);
        // Assuming initialTask.users is a single username
        const initialSelectedUser = userList.find((user:Staff )=> user.username === initialTask.users
        );
        setSelectedUser(initialSelectedUser || null);
      }
    }, [initialTask, setValue, userList]);
  
    const task = watch("task");
  
    return (
      <>
        <Dialog open={openmodel} onClose={closetaskmodel} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ color: "darkblue" }}>
            {initialTask ? "Update Task" : "New Task"}
          </DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <form onSubmit={handleSubmit(submitData)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                  <Autocomplete
                    options={userList}
                    getOptionLabel={(option: Staff) => option.username}
                    value={selectedUser}
                    onChange={(_, value) => {
                      setSelectedUser(value);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select User" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="task-select-label">Task</InputLabel>
                    <Select
                      labelId="task-select-label"
                      id="task-select"
                      value={task || ""}
                      {...register("task")}
                      label="Task"
                    >
                      <MenuItem value="TWG001">Design Phase</MenuItem>
                      <MenuItem value="TWG002">Development Phase</MenuItem>
                      <MenuItem value="TWG003">Testing Phase</MenuItem>
                      <MenuItem value="TWG004">Deployment Phase</MenuItem>
                      <MenuItem value="TWG005">Maintenance Phase</MenuItem>
                      <MenuItem value="TWG006">Documentation Phase</MenuItem>
                      <MenuItem value="TWG007">Review Phase</MenuItem>
                      <MenuItem value="TWG008">Planning Phase</MenuItem>
                      <MenuItem value="TWG009">Bug Fixing Phase</MenuItem>
                      <MenuItem value="TWG010">Closure Phase</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
  
                <Grid item xs={12} md={12}>
                  <TextField
                    type="date"
                    id="date"
                    label="Date"
                    {...register("date")}
                    fullWidth
                  />
                </Grid>
              </Grid>
  
              <DialogActions>
                <Button type="submit" variant="contained" color="primary">
                  {initialTask ? "Update" : "Save"}
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  
  export default AddEditForm;
  