// import React, { FC, useState } from 'react';
// import { Calendar, dateFnsLocalizer, Event, Views } from 'react-big-calendar';
// import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
// import { format, parse, startOfWeek, getDay, addHours, startOfHour } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const locales = {
//   'en-US': enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
// const now = new Date();
// const start = endOfHour(now);
// const end = addHours(start, 2);

// const DnDCalendar = withDragAndDrop(Calendar);

// interface User {
//   id: string;
//   name: string;
// }

// const users: User[] = [
//   { id: 'u1', name: 'User 1' },
//   { id: 'u2', name: 'User 2' },
//   { id: 'u3', name: 'User 3' },
// ];

// const App: FC = () => {
//   const [events, setEvents] = useState<Event[]>([
//     {
//       title: 'Learn cool stuff',
//       start,
//       end,
//       resourceId: 'u1',
//     },
//   ]);
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);

//   const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
//     const { start, end } = data;

//     setEvents((currentEvents) =>
//       currentEvents.map((event) =>
//         event.start === data.event.start && event.end === data.event.end
//           ? { ...event, start: new Date(start), end: new Date(end) }
//           : event
//       )
//     );
//   };

//   const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
//     const { start, end, event } = data;

//     setEvents((currentEvents) =>
//       currentEvents.map((evt) =>
//         evt === event ? { ...evt, start: new Date(start), end: new Date(end) } : evt
//       )
//     );
//   };

//   const onSelectSlot = (slotInfo: any) => {
//     if (selectedUser) {
//       const title = window.prompt('New Event name');
//       if (title) {
//         setEvents((currentEvents) => [
//           ...currentEvents,
//           {
//             title,
//             start: slotInfo.start,
//             end: slotInfo.end,
//             resourceId: selectedUser.id,
//           },
//         ]);
//       }
//     } else {
//       alert('Please select a user first');
//     }
//   };

//   const onSelectEvent = (event: Event) => {
//     const action = window.prompt('Edit or Delete? (e/d)');
//     if (action === 'e') {
//       const newTitle = window.prompt('New Event name', event.title);
//       if (newTitle) {
//         setEvents((currentEvents) =>
//           currentEvents.map((evt) => (evt === event ? { ...evt, title: newTitle } : evt))
//         );
//       }
//     } else if (action === 'd') {
//       setEvents((currentEvents) => currentEvents.filter((evt) => evt !== event));
//     }
//   };

//   const eventStyleGetter = (event: Event, start: Date, end: Date, isSelected: boolean) => {
//     const backgroundColor = event.resourceId === selectedUser?.id ? '#ADD8E6' : '#3174ad';
//     const style = {
//       backgroundColor,
//       borderRadius: '5px',
//       opacity: 0.8,
//       color: 'black',
//       border: '0px',
//       display: 'block',
//     };
//     return {
//       style,
//     };
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ width: '200px', marginRight: '20px' }}>
//         <h3>Users</h3>
//         <ul>
//           {users.map((user) => (
//             <li
//               key={user.id}
//               style={{
//                 cursor: 'pointer',
//                 backgroundColor: selectedUser?.id === user.id ? 'lightblue' : 'white',
//                 padding: '5px',
//                 marginBottom: '5px',
//                 borderRadius: '5px',
//               }}
//               onClick={() => setSelectedUser(user)}
//             >
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={{ flex: 1 }}>
//         <DnDCalendar
//           selectable
//           defaultView={Views.WEEK}
//           events={events}
//           localizer={localizer}
//           onEventDrop={onEventDrop}
//           onEventResize={onEventResize}
//           onSelectSlot={onSelectSlot}
//           onSelectEvent={onSelectEvent}
//           eventPropGetter={eventStyleGetter}
//           resizable
//           style={{ height: '100vh' }}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;