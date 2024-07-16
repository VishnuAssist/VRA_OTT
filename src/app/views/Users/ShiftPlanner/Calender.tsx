import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import AssignOption from "./AssignOption";
import React, { FC, useState } from "react";
import { Calendar, dateFnsLocalizer, Event, Views } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addHours,
  startOfHour,
} from "date-fns";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";



import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CalendarSlot, removeSlot, selectSlot } from "../../Slices/CalendarSlotManagement";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);
const DnDCalendar = withDragAndDrop(Calendar);

interface User {
  id: string;
  name: string;
  title:()=>void;
}

const CalendarTable: FC = () => {
  const { userList} = useSelector((state: any) => state.staff);

  const users: User[] = userList.map((user: any) => ({
    id: user.id,
    name: user.username,
  }));
const [editselectslot,setEditSelectslot]=useState<CalendarSlot | null>(null);
  const edithandleAddClick = (data: any) => {
    setEditSelectslot(data);
    setAssign(true);
  };

  const { slots } = useSelector((state: any) => state.slot);
 
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Learn cool stuff",
      start,
      end,
    
      resource: users[0]?.id || "",
    },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) =>
      currentEvents.map((event) =>
        event.start === data.event.start && event.end === data.event.end
          ? { ...event, start: new Date(start), end: new Date(end) }
          : event
      )
    );
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    const { start, end, event } = data;

    setEvents((currentEvents) =>
      currentEvents.map((evt) =>
        evt === event
          ? { ...evt, start: new Date(start), end: new Date(end) }
          : evt
      )
    );
  };
  const [assign, setAssign] = useState(false);
  
  const onSelectSlot = (slotInfo: any) => {
    if (selectedUser) {
      
      const title = setAssign(true);
      if (title) {
        setEvents((currentEvents) => [
          ...currentEvents,                                                                        
          {
            title,
            start: slotInfo.start,
            end: slotInfo.end,
            

            
            resourceId: selectedUser.id,
          },
        ]);
      }
    } else {
      toast.error("Please select a user first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };


  const [preview,setPreview]=useState(false)
  const [previewdata, setPreviewData] = useState<CalendarSlot | null>(null);

  const openPreview=(data: CalendarSlot)=>{
    setPreview(true)
    setPreviewData(data);
  }
  const closePreview=()=>{
    setPreview(false)
  }
  
  
  const dispatch = useDispatch();
  const deleteUser = (data: CalendarSlot) => {
    dispatch(removeSlot({ id: data.resource }));
  };
    
    
  

  const onSelectEvent = (event: Event) => {
    console.log("heeee",event);
    
    const action = window.prompt("Edit or Delete? (e/d)");
    if (action === "e") {
      const newTitle = window.prompt("New Event name", event.resource);
      if (newTitle) {
        setEvents((currentEvents) =>
          currentEvents.map((evt) =>
            evt === event ? { ...evt, title: newTitle } : evt
          )
        );
      }
    } else if (action === "d") {
      setEvents((currentEvents) =>
        currentEvents.filter((evt) => evt !== event)
      );
    }
  };
  

  const eventStyleGetter = (
    event: Event,
    _start: Date,
    _end: Date,
    _isSelected: boolean
  ) => {
    const backgroundColor =
      event.resource === selectedUser?.id ? "#ADD8E6" : "#3174ad";
    const style = {
      backgroundColor,
      borderRadius: "5px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style,
    };
  };

  // this is normal content
  const [schedule, setSchedule] = useState(false);
  const openSchedule = () => {
    setSchedule(true);
  };
  const closeSchedule = () => {
    setSchedule(false);
  };

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleFromTimeChange = (event: any) => {
    setFromTime(event.target.value);
  };

  const handleToTimeChange = (event: any) => {
    setToTime(event.target.value);
  };

  const [checked, setChecked] = React.useState({
    mon: true,
    tue: true,
    wed: true,
    thu: true,
    fri: true,
    sat: true,
    sun: true,
  });
  const [employee, setEmployee] = React.useState("");
  const [store, setStore] = React.useState("");
  const [task, settask] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEmployee(event.target.value as string);
    setStore(event.target.value as string);
    settask(event.target.value as string);
  };

  
  const openAssign = () => {
    setAssign(true);
  };
  const closeAssign = () => {
    setAssign(false);
  };

  
  return (
    <>
      <Card sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={12} sx={{ display: "flex", alignItems: "center" ,flexDirection:'row-reverse'}}>
            <Button
              variant="contained"
              startIcon={<LayersIcon fontSize="small" />}
              onClick={openSchedule}
              sx={{ px: 10, py: 1.7 }}
            >
              Schedule
            </Button>
          </Grid>
          {/* <Grid item md={2}>
            <Button variant="contained" onClick={openAssign}>
              calendar option
            </Button>
          </Grid> */}
          
        </Grid>
        <Card sx={{ mt: 1,p:1 }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "200px", marginRight: "20px" }}>
              <h3>Users</h3>
              <ul style={{ listStyle: "none" }}>
                {users.map((user) => (
                  <Card sx={{ my: 1}}>
                    <li
                      key={user.id}
                      style={{
                        cursor: "pointer",
                        backgroundColor:
                          selectedUser?.id === user.id ? "lightblue" : "white",
                        padding: "5px",

                        borderRadius: "5px",
                      }}
                      onClick={() => setSelectedUser(user)}
                    >
                      {user.name}
                    </li>
                  </Card>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1 }}>
              <DnDCalendar
                selectable
                defaultView={Views.WEEK}
                events={slots}
                localizer={localizer}
                onEventDrop={onEventDrop}
                onEventResize={onEventResize}
                onSelectSlot={onSelectSlot}
                onSelectEvent={openPreview}
                eventPropGetter={eventStyleGetter}
                resizable
                style={{ height: "100vh" }}
              />
            </div>
          </div>
        </Card>
      </Card>

      <Dialog open={schedule} onClose={closeSchedule} maxWidth="xs" fullWidth>
        <DialogContent>
          <Grid container spacing={0.5}>
            <Grid item md={12} sx={{ mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Store</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={store}
                  label="store"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>TWG001</MenuItem>
                  <MenuItem value={2}>TWG002</MenuItem>
                  <MenuItem value={3}>TWG003</MenuItem>
                  <MenuItem value={4}>TWG004</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} sx={{ mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Task</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={task}
                  label="store"
                  onChange={handleChange}
                >
                  <MenuItem value={11}>Cashier</MenuItem>
                  <MenuItem value={12}>Store keeper</MenuItem>
                  <MenuItem value={13}>
                    Customer service representative
                  </MenuItem>
                  <MenuItem value={14}>Shop Assistant</MenuItem>
                  <MenuItem value={15}>Organizes product displays</MenuItem>
                  <MenuItem value={16}>Unloading delivery trucks</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} sx={{ mb: 1 }}>
              <TextField
                fullWidth
                label="From Time"
                type="time"
                value={fromTime}
                onChange={handleFromTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="To Time"
                type="time"
                value={toTime}
                onChange={handleToTimeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 minutes
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.mon}
                onClick={() => setChecked({ ...checked, mon: !checked.mon })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Monday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.tue}
                onClick={() => setChecked({ ...checked, tue: !checked.tue })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Tuesday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.wed}
                onClick={() => setChecked({ ...checked, wed: !checked.wed })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Wednesday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.thu}
                onClick={() => setChecked({ ...checked, thu: !checked.thu })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Thursday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.fri}
                onClick={() => setChecked({ ...checked, fri: !checked.fri })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Friday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.sat}
                onClick={() => setChecked({ ...checked, sat: !checked.sat })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Saturday</Typography>
            </Grid>
            <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={checked.sun}
                onClick={() => setChecked({ ...checked, sun: !checked.sun })}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Sunday</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" sx={{}}>
            Schedule
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{color:'darkblue'}}>Preview Slot Details</DialogTitle>
          <DialogContent>
            <Box sx={{p:2}}>
              <Grid container spacing={1}>
                <Grid item md={6} xs={6}>
                <Typography>Title :</Typography>
                </Grid>
                <Grid item md={6}  xs={6}>
                <Typography> {previewdata?.option}   </Typography>
                </Grid>
                <Grid item md={6}  xs={6}>
                <Typography>Shift :</Typography>
                </Grid>
                <Grid item md={6}  xs={6}>
                <Typography>  {previewdata?.shift}  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                <Typography>From :</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                <Typography> {previewdata?.start?.toLocaleString()}  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                <Typography>To :</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                <Typography> {previewdata?.end?.toLocaleString()}  </Typography>
                </Grid>

                <Grid item md={6} xs={6}>
                <Button variant="outlined" onClick={edithandleAddClick} color="success">Edit</Button>
                </Grid>
                <Grid item md={6} xs={6}>
                <Button variant="outlined" onClick={ deleteUser}  color="error">Delete</Button>
                </Grid>
                
                
              </Grid>
              
            </Box>
          </DialogContent>
      </Dialog>
      <AssignOption assign={assign} closeAssign={closeAssign} />
      <AssignOption assign={assign} closeAssign={closeAssign} initialUserData={editselectslot}  />
      <ToastContainer/>
    </>
  );
};

export default CalendarTable;
