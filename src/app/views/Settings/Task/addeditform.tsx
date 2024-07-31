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

import { useDispatch, useSelector } from "react-redux";
import { TaskType } from "../../../Models/TaskType";
import { addTask, updateTask } from "../../../Slices/TaskSlice";
import { Staff } from "../../../Models/StaffMangement";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormHelperText from "@mui/material/FormHelperText";
interface Props {
  openmodel: boolean;
  closetaskmodel: () => void;
  initialTask?: TaskType | null;
}

const schema = yup.object().shape({
  users: yup.string().required("user is mandatory"),
  taskProgress: yup.string().required("choose the TaskProgress"),
  assigner: yup.string().required("Assigner is mandatory"),
  staff: yup.string().required("Select the Staff"),
  task: yup.string().required("Select the Task"),
  description: yup.string().required("Description is mandatory"),
  priority: yup.string().required("Select the Priority"),
  date: yup.string().required(),
  id: yup.number().integer().positive().required(),
  status: yup.string().required(),
});

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
    status: "",
  };

  const { userList } = useSelector((state: any) => state.staff);
  console.log(userList);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<TaskType>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<Staff | null>(null);
  const [selectedFile, setSelectedFile] = useState<File[]>([]);

  const submitData = (data: TaskType) => {
    const taskData = {
      ...data,
      users: selectedUser ? selectedUser.username : "",
      file: selectedFile,
    };
    if (initialTask) {
      dispatch(updateTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }
    reset();
    setSelectedUser(null);
    // setSelectedFile([]);
    closetaskmodel();
    console.log("Submitted Data", selectedFile.length);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile((prevFiles) => [...prevFiles, file]);
      // if (selectedFile == null){
      //   setSelectedFile([file] );
      // }
      // else{
      //   setSelectedFile([...selectedFile,file])
      // }
    }
  };

  useEffect(() => {
    reset(initialTask || data);
  }, [initialTask, reset]);

  useEffect(() => {
    if (initialTask) {
      setValue("id", initialTask.id);
      setValue("taskProgress", initialTask.taskProgress);
      setValue("assigner", initialTask.assigner);
      setValue("staff", initialTask.staff);
      setValue("task", initialTask.task);
      setValue("description", initialTask.description);
      setValue("date", initialTask.date);
      setValue("priority", initialTask.priority);

      const initialSelectedUser = userList.find(
        (user: Staff) => user.username === initialTask.users
      );
      setSelectedUser(initialSelectedUser || null);
    }
  }, [initialTask, setValue, userList]);

  const task = watch("task");
  const priority = watch("priority");
  const taskProgress = watch("taskProgress");

  return (
    <>
      <Dialog open={openmodel} onClose={closetaskmodel} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit(submitData)}>
          <DialogTitle sx={{ color: "darkblue" }}>
            {initialTask ? "Update Task" : "New Task"}
          </DialogTitle>

          <DialogContent sx={{ display: "flex", flexDirection: "column",maxHeight:500,overflow:"auto" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <FormControl fullWidth>
                  <InputLabel id="taskProgress-select-label">
                    TaskProgress
                  </InputLabel>
                  <Select
                    labelId="taskProgress-select-label"
                    id="taskProgress-select"
                    value={taskProgress || ""}
                    {...register("taskProgress")}
                    label="TaskProgress"
                  >
                    <MenuItem value="1">To Do</MenuItem>
                    <MenuItem value="2">In Progress</MenuItem>
                    <MenuItem value="3">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12} sx={{ mt: 1 }}>
                <TextField
                  type="text"
                  id="assigned-by"
                  label="Assigned By"
                  {...register("assigner")}
                  fullWidth
                  error={!!errors.assigner}
                  helperText={errors?.assigner?.message}
                />
              </Grid>
              <Grid item xs={12} md={12} sx={{ mt: 1 }}>
                <Autocomplete
                  options={userList}
                  getOptionLabel={(option: Staff) => option.username}
                  value={selectedUser}
                  onChange={(_, value) => {
                    setSelectedUser(value);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Staff's" />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                    <MenuItem value="Development Phase">
                      Development Phase
                    </MenuItem>
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
                  error={!!errors.date}
                  helperText={errors?.date?.message}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  type="text"
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  fullWidth
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors?.description?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
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
                <input
                  type="file"
                  id="file"
                  {...register("file")}
                  onChange={handleFileChange}
                  // error={!!errors.file}
                  // helperText={errors?.file?.message}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type="submit" variant="contained" color="primary">
              {/* disabled={isDirty && !isValid} */}
              {initialTask ? "Update" : "Create Task"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddEditForm;
