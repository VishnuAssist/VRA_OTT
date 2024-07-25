import {

  Card,
  Container,
  Grid,

} from "@mui/material";
// import LayersIcon from "@mui/icons-material/Layers";
import AssignOption from "./AssignOption";
import { FC, useState } from "react";
import { Calendar, dateFnsLocalizer, Event, Views } from "react-big-calendar";
import PreviewModel from "./PreviewModel";
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
import { CalendarSlot, removeSlot } from "../../../Slices/CalendarSlotManagement";
import { formatDate } from "../../../utils/utils";


// import CustomEvent_ from "./Envent";

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
  id: number;
  name: string;
  title: () => void;
}

const CalendarTable: FC = () => {
  const { userList } = useSelector((state: any) => state.staff);
  const dispatch = useDispatch()
  const users: User[] = userList.map((user: any) => ({
    id: user.id,
    name: user.username,
  }));
  const [editselectslot, setEditSelectslot] = useState<CalendarSlot | null>(null);
  const edithandleAddClick = (data: any) => {
    setEditSelectslot({
      ...data, start: formatDate(data.start),
      end: formatDate(data.end)
    });
    setAssign(true);
  };

  const { slots } = useSelector((state: any) => state.slot);

  const [_events, setEvents] = useState<Event[]>([
    {
      title: "Learn cool stuff",
      start,
      end,

      resource: 0,
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
  console.log(selectedUser, slots)
  const onSelectSlot = (slotInfo: any) => {

    if (selectedUser) {

      setEditSelectslot({
        title: '', start: formatDate(slotInfo.start),
        end: formatDate(slotInfo.end),
        resource: selectedUser?.id
      })
      setAssign(true)

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


  const [preview, setPreview] = useState(false)
  const [previewdata, setPreviewData] = useState<CalendarSlot | null>(null);

  const openPreview = (data: any) => {
    console.log(data)
    setPreview(true)
    setPreviewData(data);
  }
  const closePreview = () => {
    setPreview(false)
    setPreviewData(null)
  }





  const eventStyleGetter = (
    event: Event,
    _start: Date,
    _end: Date,
    _isSelected: boolean
  ) => {
    const backgroundColor =
      event.resource === selectedUser?.id ? "#ADD8E6" : "red";
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


  const closeAssign = () => {
    setAssign(false);
  };

  const deleteEvent = (id: number) => {
    dispatch(removeSlot({ id: id }))
    setPreview(false)
  }
  return (
    <>
      <Container >
        <Grid container spacing={2}>
          {/* <Grid item md={12} sx={{ display: "flex", alignItems: "center" ,flexDirection:'row-reverse'}}>
            <Button
              variant="contained"
              startIcon={<LayersIcon fontSize="small" />}
              onClick={openSchedule}
              sx={{ px: 10, py: 1.7 }}
            >
              Schedule
            </Button>
          </Grid> */}

        </Grid>
        <Card sx={{ mt: 1, p: 1 }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "200px", marginRight: "20px" }}>
              <h3>Users</h3>
              <ul style={{ listStyle: "none" }}>
                {users.map((user) => (
                  <Card sx={{ my: 1 }}>
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
      </Container>


{/* 
      <Dialog open={preview} onClose={closePreview}>
        <DialogTitle sx={{ color: 'darkblue' }}>Preview Slot Details</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={6}>
                <Typography>Title :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography> {previewdata?.option}   </Typography>
              </Grid>
              <Grid item md={6} xs={6}>
                <Typography>Shift :</Typography>
              </Grid>
              <Grid item md={6} xs={6}>
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
                <Button variant="outlined" onClick={() => edithandleAddClick(previewdata)} color="success">Edit</Button>
              </Grid>
              <Grid item md={6} xs={6}>
                <Button variant="outlined" onClick={() => deleteEvent(previewdata?.id || 0)} color="error">
                  Delete
                </Button>
              </Grid>


            </Grid>

          </Box>
        </DialogContent>
      </Dialog> */}
      <AssignOption assign={assign} closeAssign={closeAssign} initialUserData={editselectslot} />
      <PreviewModel preview={preview} closePreview={closePreview} previewdata={previewdata} edithandleAddClick={edithandleAddClick} deleteEvent={deleteEvent}  />
      <ToastContainer />
    </>
  );
};

export default CalendarTable;
