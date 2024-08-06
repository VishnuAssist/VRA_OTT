import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { TaskType } from "../../../Models/TaskType";
import { addTask, updateTask } from "../../../Slices/TaskSlice";
import { Staff } from "../../../Models/StaffMangement";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormHelperText from "@mui/material/FormHelperText";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


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
    taskProgress: "To Do",
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
    formState: { errors },
  } = useForm<TaskType>();
  // ({
  //   resolver: yupResolver(schema),
  //   mode: "onChange",
  // });
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<Staff[] | null>(null);

  const submitData = (data: TaskType) => {
    const taskData = {
      ...data,
      users: selectedUser ? selectedUser : [],
      file: selectedFiles,
    };
    if (initialTask) {
      dispatch(updateTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }
    reset();
    setSelectedUser(null);
    setSelectedFiles([]);
    closetaskmodel();
    // console.log("Submitted Data", selectedFile.length);
    console.log("task data ", taskData);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  // const maxFiles = 5;
  // const conversiontostring = (e: File) => {
  //   console.log("e", e);

  //   if (e) {
  //     const file = e;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       if (typeof reader.result === "string") {
  //         return reader.result;
  //       } else {
  //         return "";
  //       }
  //     };
  //   }
  // };
  // const handleFileChange = (event: any) => {
  //   console.log("data", event.target.files);

  //   const files = Array.from(event.target.files)?.map((inputfile) => {
  //     console.log("files", inputfile);
  //     console.log(conversiontostring(inputfile));

  //     return conversiontostring(inputfile);
  //   });

  //   // if (files.length > maxFiles) {

  //   //   toast.error(`You can only select up to ${maxFiles} files.`, {
  //   //     position: "top-right",
  //   //     autoClose: 5000,
  //   //     hideProgressBar: false,
  //   //     closeOnClick: true,
  //   //     pauseOnHover: true,
  //   //     draggable: true,
  //   //     progress: undefined,
  //   //     theme: "light",
  //   //     transition: Bounce,
  //   //   });
  //   //   return;
  //   // }
  //   setSelectedFiles(files);
  // };

  const handleFileChange = (event:any) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setValue('file', files); 
  };

  const handleDeleteFile = (fileToDelete:any) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToDelete);
    setSelectedFiles(updatedFiles);
    setValue('file', updatedFiles); 
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

  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <Dialog open={openmodel} onClose={closetaskmodel} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit(submitData)}>
          <DialogTitle sx={{display:"flex",justifyContent:"space-between",alignItems:"center", color: "darkblue" }}>
            <Typography variant="h4">
            {initialTask ? "Update Task" : "New Task"}</Typography>

            <IconButton
                color="error"
                aria-label="delete"
                onClick={closetaskmodel}
              >
                <HighlightOffSharpIcon />
              </IconButton>
          </DialogTitle>

          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: 400,
              overflow: "auto",
            }}
          >
            <Grid container spacing={2}>
              {initialTask ? (
                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
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
                      <MenuItem value="To Do">To Do</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              ) : (
                ""
              )}
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
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
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 1 }}>
               
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
                      {...register("staff")}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
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
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  type="date"
                  id="date"
                  label=""
                  {...register("date", {
                    validate: (value) =>
                      new Date(value) >= new Date(today) ||
                      "Please select a future date",
                  })}
                  fullWidth
                  InputProps={{ inputProps: { min: today } }} 
                  error={!!errors.date}
                  helperText={errors?.date?.message}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
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
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  type="text"
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  fullWidth
                  // value={'hello'}
                  {...register("description")}
                  error={!!errors.description}
                  helperText={errors?.description?.message}
                />
              </Grid>
              
              <Grid item xs={12} sm={12} md={12} lg={12} >
                <input
                  {...register("file")}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  multiple
                  onChange={handleFileChange}

                />
                <Button
                  variant="contained"
                  onClick={() => document.getElementById("file").click()}
                  sx={{width:"100%"}}
                  startIcon={<DriveFolderUploadOutlinedIcon fontSize="small" />}
                >
                  Upload Files
                </Button>
                <div>
                  {selectedFiles.map((file:any, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <span>{file.name}</span>
                      <IconButton
                        onClick={() => handleDeleteFile(file)}
                        aria-label="delete"
                        size="small"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}
                </div>
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
      <ToastContainer />
    </>
  );
};

export default AddEditForm;
