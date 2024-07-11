import {
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import React, { useMemo } from "react";

import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreatedEvent,
  MbscEventDeletedEvent,
  MbscEventDragEvent,
  MbscPageLoadingEvent,
  MbscResource,
  MbscSelectedDateChangeEvent,
  setOptions,
  Toast,
} from "@mobiscroll/react";
import { FC, useCallback, useRef, useState } from "react";
import AssignOption from "./AssignOption";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const bookings: MbscCalendarEvent[] = [
  {
    start: "2024-07-10T06:00",
    end: "2024-07-10T10:00",
    title: "Budapest - Ljubljana",
    resource: 1,
  },
  {
    start: "2024-07-10T15:00",
    end: "2024-07-10T18:00",
    title: "Ljubljana - Berlin",
    resource: 1,
  },
  {
    start: "2024-07-10T04:00",
    end: "2024-07-10T12:00",
    title: "Los Angeles - Dublin",
    resource: 2,
  },
  {
    start: "2024-07-10T18:00",
    end: "2024-07-10T23:00",
    title: "Dublin - Bucharest",
    resource: 2,
  },
  {
    start: "2024-07-10T06:00",
    end: "2024-07-10T14:00",
    title: "Chicago - Amsterdam",
    resource: 3,
  },
  {
    start: "2024-07-10T17:00",
    end: "2024-07-10T22:00",
    title: "Amsterdam - Cairo",
    resource: 3,
  },
  {
    start: "2024-07-10T10:00",
    end: "2024-07-10T14:00",
    title: "Hong Kong - Sydney",
    resource: 4,
  },
  {
    start: "2024-07-10T15:00",
    end: "2024-07-10T21:00",
    title: "Sydney - Tokyo",
    resource: 4,
  },
  {
    start: "2024-07-10T04:00",
    end: "2024-07-10T12:00",
    title: "Paris - Washington, D.C.",
    resource: 5,
  },
  {
    start: "2024-07-10T12:00",
    end: "2024-07-10T18:00",
    title: "Washington, D.C. - Los-Angeles",
    resource: 5,
  },
  {
    start: "2024-07-10T03:00",
    end: "2024-07-10T11:00",
    title: "Los Angeles - Dublin",
    resource: 6,
  },
  {
    start: "2024-07-10T13:00",
    end: "2024-07-10T18:00",
    title: "Dublin - Rome",
    resource: 6,
  },
  {
    start: "2024-07-10T05:00",
    end: "2024-07-10T12:00",
    title: "Barcelona - Dubai",
    resource: 7,
  },
  {
    start: "2024-07-10T13:00",
    end: "2024-07-10T20:00",
    title: "Dubai - Tokyo",
    resource: 7,
  },
  {
    start: "2024-07-10T03:30",
    end: "2024-07-10T13:00",
    title: "Rome - Toronto",
    resource: 8,
  },
  {
    start: "2024-07-10T16:00",
    end: "2024-07-10T19:00",
    title: "Toronto - New-York",
    resource: 8,
  },
  {
    start: "2024-07-10T03:00",
    end: "2024-07-10T14:00",
    title: "Vienna - Shanghai",
    resource: 9,
  },
  {
    start: "2024-07-10T16:00",
    end: "2024-07-10T23:30",
    title: "Shanghai - Moscow",
    resource: 9,
  },
  {
    start: "2024-07-10T08:00",
    end: "2024-07-10T13:00",
    title: "London - Cairo",
    resource: 10,
  },
  {
    start: "2024-07-10T15:30",
    end: "2024-07-10T19:30",
    title: "Cairo - Sofia",
    resource: 10,
  },
  {
    start: "2024-07-10T02:00",
    end: "2024-07-10T13:00",
    title: "Istanbul - New York",
    resource: 11,
  },
  {
    start: "2024-07-10T16:00",
    end: "2024-07-10T20:00",
    title: "New York - Montreal",
    resource: 11,
  },
  {
    start: "2024-07-10T05:00",
    end: "2024-07-10T11:00",
    title: "Seattle - Miami",
    resource: 12,
  },
  {
    start: "2024-07-10T12:00",
    end: "2024-07-10T21:00",
    title: "Miami - Buenos-Aires",
    resource: 12,
  },
  {
    start: "2024-07-11T04:00",
    end: "2024-07-11T16:00",
    title: "Hong Kong - Sydney",
    resource: 1,
  },
  {
    start: "2024-07-11T06:00",
    end: "2024-07-11T10:00",
    title: "Los Angeles - Dublin",
    resource: 2,
  },
  {
    start: "2024-07-11T03:00",
    end: "2024-07-11T11:00",
    title: "Budapest - Ljubljana",
    resource: 4,
  },
  {
    start: "2024-07-11T05:00",
    end: "2024-07-11T12:00",
    title: "Los Angeles - Dublin",
    resource: 6,
  },
  {
    start: "2024-07-11T13:00",
    end: "2024-07-11T23:00",
    title: "London - Cairo",
    resource: 7,
  },
  {
    start: "2024-07-11T03:00",
    end: "2024-07-11T14:00",
    title: "Miami - Buenos-Aires",
    resource: 9,
  },
  {
    start: "2024-07-11T06:00",
    end: "2024-07-11T12:00",
    title: "Barcelona - Dubai",
    resource: 10,
  },
  {
    start: "2024-07-11T08:00",
    end: "2024-07-11T22:00",
    title: "Istanbul - New York",
    resource: 11,
  },
  {
    start: "2024-07-11T05:00",
    end: "2024-07-11T11:00",
    title: "Vienna - Shanghai",
    resource: 12,
  },
];

const jets: MbscResource[] = [
  {
    id: "Op 1",
    name: "Prestige Air",
    eventCreation: false,
    children: [
      {
        id: 1,
        code: "#AF 7703",
        crew: 52,
        name: "Red Bolt",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-1.jpg",
      },
      {
        id: 2,
        code: "#BQ 4718",
        crew: 47,
        name: "Skyroar",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-2.jpg",
      },
      {
        id: 3,
        code: "#ZM 8430",
        crew: 24,
        name: "Agile Raven",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-3.jpg",
      },
    ],
  },
  {
    id: "Op 2",
    name: "Elite Wings",
    eventCreation: false,
    children: [
      {
        id: 4,
        code: "#XG 5500",
        crew: 43,
        name: "Monsterbolt",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-4.jpg",
      },
      {
        id: 5,
        code: "#FL 2531",
        crew: 22,
        name: "Airrise",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-5.jpg",
      },
      {
        id: 6,
        code: "#PA 6487",
        crew: 84,
        name: "Starblast",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-6.jpg",
      },
      {
        id: 7,
        code: "#PP 9812",
        crew: 28,
        name: "Ebonfire",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-7.jpg",
      },
    ],
  },
  {
    id: "Op 3",
    name: "Luxury Skies",
    eventCreation: false,
    children: [
      {
        id: 8,
        code: "#DN 3191",
        crew: 36,
        name: "Dark Bee",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-8.jpg",
      },
      {
        id: 9,
        code: "#ZW 2328",
        crew: 76,
        name: "Keen Sparrow",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-9.jpg",
      },
      {
        id: 10,
        code: "#RX 9898",
        crew: 37,
        name: "Jagged Bolt",
        color: "#1dab2f",
        img: "https://img.mobiscroll.com/demos/jet-10.jpg",
      },
    ],
  },
];

const Calendar: FC = () => {
  const reservations = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: "Alison Reyes",
      },
      {
        id: 2,
        name: "Shauna Perry",
      },
      {
        id: 3,
        name: "Jan Whitney",
      },
      {
        id: 4,
        name: "Freddie Durham",
      },
      {
        id: 5,
        name: "William Dillon",
      },
      {
        id: 6,
        name: "Tyrell Edwards",
      },
      {
        id: 7,
        name: "Caitlyn Riddle",
      },
      {
        id: 8,
        name: "Liam Mays",
      },
      {
        id: 9,
        name: "Frank Medina",
      },
      {
        id: 10,
        name: "Calvin Larsen",
      },
      {
        id: 11,
        name: "Heather Walsh",
      },
      {
        id: 12,
        name: "Conner Paul",
      },
    ],
    []
  );

  const [flights, setFlights] = useState<MbscCalendarEvent[]>([
    {
      start: "2024-07-10T10:00",
      end: "2024-07-10T17:00",
      title: "Barcelona - Dubai",
      resource: 4,
    },
    {
      start: "2024-07-10T07:30",
      end: "2024-07-10T16:00",
      title: "Toronto - Rome",
      resource: 8,
    },
    {
      start: "2024-07-10T04:00",
      end: "2024-07-10T08:00",
      title: "Ljubljana - Budapest",
      resource: 1,
    },
    {
      start: "2024-07-10T02:00",
      end: "2024-07-10T10:00",
      title: "Paris - Washington, D.C.",
      resource: 2,
    },
    {
      start: "2024-07-10T12:00",
      end: "2024-07-10T23:00",
      title: "New York - Istanbul",
      resource: 7,
    },
    {
      start: "2024-07-10T15:00",
      end: "2024-07-10T23:00",
      title: "Moscow - Tokyo",
      resource: 3,
    },
  ]);

  const [invalid, setInvalid] = useState<MbscCalendarEvent[]>();
  const firstCalCont = useRef<HTMLElement | null>(null);
  const secondCalCont = useRef<HTMLElement | null>(null);
  const skipScroll1 = useRef<boolean>(false);
  const skipScroll2 = useRef<boolean>(false);
  const [mySelectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isToastOpen, setToastOpen] = useState<boolean>(false);
  const [toastText, setToastText] = useState<string>("");

  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: "day",
        size: 1,
      },
    }),
    []
  );

  const renderMyResource = (resource: MbscResource) => {
    if (!resource.children) {
      return (
        <div className="mbsc-flex mbsc-align-items-center mbsc-justify-content-start">
          <img
            className="md-drag-drop-bw-inst-avatar"
            src={resource.img}
            alt="Avatar"
          />
          <div className="md-drag-drop-bw-inst-details mbsc-flex-col mbsc-flex-1-0">
            <div>{resource.name}</div>
            <div className="md-aircraft-code mbsc-flex mbsc-justify-content-between">
              <div>{resource.code}</div>
              <div>
                {"\u{1F9D1}\u{1F3FC}\u{200D}\u{2708}\u{FE0F}"} {resource.crew}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{resource.name}</div>;
  };

  const handleScroll1 = useCallback((ev: Event) => {
    if (secondCalCont.current && !skipScroll2.current) {
      skipScroll1.current = true;
      secondCalCont.current.scrollLeft = (
        ev.target as HTMLDivElement
      ).scrollLeft;
    }
    skipScroll1.current = false;
  }, []);

  const handleScroll2 = useCallback((ev: Event) => {
    if (firstCalCont.current && !skipScroll1.current) {
      skipScroll2.current = true;
      firstCalCont.current.scrollLeft = (
        ev.target as HTMLDivElement
      ).scrollLeft;
    }
    skipScroll2.current = false;
  }, []);

  const handleFirstScroll = useCallback(() => {
    if (!firstCalCont.current) {
      firstCalCont.current = document.querySelector(
        ".md-drag-drop-bw-inst-first .mbsc-timeline-grid-scroll"
      );
      firstCalCont.current!.addEventListener("scroll", handleScroll1);
    }
  }, [handleScroll1]);

  const handleSecondScroll = useCallback(() => {
    if (!secondCalCont.current) {
      secondCalCont.current = document.querySelector(
        ".md-drag-drop-bw-inst-second .mbsc-timeline-grid-scroll"
      );
      secondCalCont.current!.addEventListener("scroll", handleScroll2);
    }
  }, [handleScroll2]);

  const detachFirstScroll = useCallback(() => {
    if (firstCalCont.current) {
      firstCalCont.current.removeEventListener("scroll", handleScroll1);
    }
  }, [handleScroll1]);

  const detachSecondScroll = useCallback(() => {
    if (secondCalCont.current) {
      secondCalCont.current.removeEventListener("scroll", handleScroll2);
    }
  }, [handleScroll2]);

  const handlePageLoading = useCallback((args: MbscPageLoadingEvent) => {
    if (secondCalCont.current) {
      setTimeout(() => {
        setSelectedDate(args.firstDay);
      }, 100);
    }
  }, []);

  const handleSelectedDateChange = useCallback(
    (args: MbscSelectedDateChangeEvent) => {
      setSelectedDate(new Date(args.date as string));
    },
    []
  );

  const handleEventCreated = useCallback((args: MbscEventCreatedEvent) => {
    setFlights((current) => [...current, args.event]);
    setToastText("Flight scheduled");
    setToastOpen(true);
  }, []);

  const handleEventDeleted = useCallback((args: MbscEventDeletedEvent) => {
    setFlights((current) => [
      ...current.filter((flight) => flight.id !== args.event.id),
    ]);
  }, []);

  const handleEventCreateUpdateFailed = useCallback(() => {
    setToastText("There's already a flight on this date");
    setToastOpen(true);
  }, []);

  const handleEventDragStart = useCallback(
    (args: MbscEventDragEvent) => {
      const unavailable: { [key: string]: boolean } = {};
      const invalid: MbscCalendarEvent = {
        cssClass: "md-drag-drop-invalid",
        recurring: { repeat: "daily" },
        resource: [],
      };
      // Filter unavailable jets
      flights.forEach((flight) => {
        if (
          flight.id !== args.event.id &&
          new Date(flight.start as string) <
            new Date(args.event.end as string) &&
          new Date(flight.end as string) > new Date(args.event.start as string)
        ) {
          unavailable[flight.resource as string] = true;
        }
      });
      flights.forEach((flight) => {
        if (unavailable[flight.resource as string]) {
          flight.cssClass = "md-drag-drop-faded";
        }
      });
      jets.forEach((group) => {
        group.children!.forEach((jet: any) => {
          if (unavailable[jet.id]) {
            (invalid.resource as Array<number | string>).push(jet.id);
          }
        });
      });
      setInvalid([invalid]);
    },
    [flights]
  );

  const handleEventDragEnd = useCallback(() => {
    flights.forEach((flight) => {
      delete flight.cssClass;
    });
    setInvalid([]);
  }, [flights]);

  const handleCloseToast = useCallback(() => {
    setToastOpen(false);
  }, []);
  const data = {
    store: "UUWP",
    employee: "saler",
    task: "saler",
  };

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

  const [assign, setAssign] = useState(false);
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
          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Employee</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={employee}
                label="employee"
                onChange={handleChange}
              >
                <MenuItem value={10}>Rizwan</MenuItem>
                <MenuItem value={20}>Hari</MenuItem>
                <MenuItem value={30}>Sheik</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              startIcon={<LayersIcon fontSize="small" />}
              onClick={openSchedule}
              sx={{ px: 10, py: 1.7 }}
            >
              Schedule
            </Button>
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" onClick={openAssign}>calendar option</Button>
          </Grid>
        </Grid>

        <div className="mbsc-flex-col md-drag-drop-bw-inst-cont">
          <Eventcalendar
            className="md-drag-drop-bw-inst-first"
            data={bookings}
            resources={reservations}
            view={myView}
            dragToMove={false}
            dragToCreate={false}
            dragToResize={false}
            eventDelete={true}
            externalDrag={true}
            onPageLoading={handlePageLoading}
            onPageLoaded={handleFirstScroll}
            // onEventDelete={onEventDelete}
            onDestroy={detachFirstScroll}
          />
          <Eventcalendar
            className="md-drag-drop-bw-inst-second"
            invalid={invalid}
            data={flights}
            resources={jets}
            view={myView}
            showControls={false}
            dragToCreate={false}
            dragToMove={true}
            dragToResize={false}
            dragInTime={false}
            externalDrop={true}
            eventDelete={true}
            eventOverlap={false}
            renderResource={renderMyResource}
            selectedDate={mySelectedDate}
            onSelectedDateChange={handleSelectedDateChange}
            onEventCreated={handleEventCreated}
            onEventCreateFailed={handleEventCreateUpdateFailed}
            onEventDeleted={handleEventDeleted}
            onEventUpdateFailed={handleEventCreateUpdateFailed}
            onEventDragStart={handleEventDragStart}
            onEventDragEnd={handleEventDragEnd}
            onPageLoaded={handleSecondScroll}
            onDestroy={detachSecondScroll}
          />
          <Toast
            display="center"
            message={toastText}
            isOpen={isToastOpen}
            onClose={handleCloseToast}
          />
        </div>
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
                  // {...register("store")}
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
                  name=""
                  // {...register("store")}
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

      <AssignOption assign={assign} closeAssign={closeAssign}/>
    </>
  );
};

export default Calendar;
