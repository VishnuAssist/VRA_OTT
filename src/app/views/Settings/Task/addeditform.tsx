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
    Typography,
  } from "@mui/material";
  import { FC, useEffect, useState } from "react";
  import { useForm } from "react-hook-form";
  import { useDispatch, useSelector } from "react-redux";
  import { TaskType } from "../../../Models/TaskType";
  import { addTask, updateTask } from "../../../Slices/TaskSlice";
  import { Staff } from "../../../Models/StaffMangement";

  
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';

  interface Props {
    openmodel: boolean;
    closetaskmodel: () => void;
    initialTask?: TaskType | null;
  }
  
  const AddEditForm: FC<Props> = ({ openmodel, closetaskmodel, initialTask }) => {
    const data: TaskType = {
      users: "",
      taskProgress: "",
      assigner: "",
      staff: "",
      task: "",
      description: "",
      priority: "",
      date: "",
      id: 0,
      status: ""
    };
  
    const { userList } = useSelector((state: any) => state.staff);
    console.log(userList);
  
    const { register, handleSubmit, reset, setValue, watch } = useForm<TaskType>();
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<Staff | null>(null);
  
    const submitData = (data: TaskType) => {
      console.log("data",data)
      console.log("selectedUser",selectedUser)
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
      console.log("tttttttttttttt",data)
    };
  
    useEffect(() => {
      reset(initialTask || data);
    }, [initialTask, reset]);
  
    useEffect(() => {
      if (initialTask) {
        setValue("id", initialTask.id);
        setValue("taskProgress",initialTask.taskProgress);
        setValue("assigner",initialTask.assigner);
        setValue("staff", initialTask.staff);
        setValue("task", initialTask.task);
        setValue("description",initialTask.description);
        setValue("date",initialTask.date);
        setValue("priority", initialTask.priority);

        
        // Assuming initialTask.users is a single username
        const initialSelectedUser = userList.find((user:Staff )=> user.username === initialTask.users
        );
        setSelectedUser(initialSelectedUser || null);
      }
    }, [initialTask, setValue, userList]);
  
    const task = watch("task");
    const priority = watch("priority");
    const TaskProgress = watch("taskProgress");
  
    
    return (
      <>
        <Dialog open={openmodel} onClose={closetaskmodel} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ color: "darkblue" }}>
            {initialTask ? "Update Task" : "New Task"}
          </DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <form onSubmit={handleSubmit(submitData)}>
              <Grid container spacing={2}>
              <Grid item xs={12} md={12} >
                  <FormControl fullWidth>
                    <InputLabel id="TaskProgress-select-label">TaskProgress</InputLabel>
                    <Select
                      labelId="TaskProgress-select-label"
                      id="TaskProgress-select"
                      value={TaskProgress || ""}
                      {...register("taskProgress")}
                      label="TaskProgress"
                    >
                      <MenuItem value="To Do">To Do</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              <Grid item md={12} sx={{mt:1}}>
                  <TextField
                    type="text"
                    id="Assigned by"
                    label="Assigned By"
                    {...register("assigner")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                  <Autocomplete
                    options={userList}
                    getOptionLabel={(option: Staff) => option.username}
                    value={selectedUser}
                    {...register("staff")}
                    onChange={(_, value) => {
                      setSelectedUser(value);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Staff's" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <FormControl fullWidth>
                    <InputLabel id="task-select-label">Task</InputLabel>
                    <Select
                      labelId="task-select-label"
                      id="task-select"
                      value={task || ""}
                      {...register("task")}
                      label="Task"
                    >
                      <MenuItem value="Design Phase">Design Phase</MenuItem>
                      <MenuItem value="Development Phase">Development Phase</MenuItem>
                     
                    </Select>
                  </FormControl>
                </Grid>
                
  
                <Grid item xs={12} md={6}>
                  <TextField
                    type="date"
                    id="date"
                    label=""
                    {...register("date")}
                    fullWidth
                  />
                </Grid>
                <Grid item md={12}>
                <TextField
                    type="text"
                    id="Description"
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    {...register("description")}
                  />
                </Grid>
                <Grid item xs={12} md={6} >
                  <FormControl fullWidth>
                    <InputLabel id="priority-select-label">Priority</InputLabel>
                    <Select
                      labelId="priority-select-label"
                      id="priority-select"
                      value={priority || ""}
                      {...register("priority")}
                      label="priority"
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Normal">Normal</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Urgent">Urgent</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6}>
               
            </Grid>
            
            
              </Grid>
  
              <DialogActions>
                <Button type="submit" variant="contained" color="primary">
                  {initialTask ? "Update" : "Create Task"}
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  
  export default AddEditForm;
  