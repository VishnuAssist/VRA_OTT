// import React from 'react';

import { CalendarSlot } from "../../../Models/CalendarSlot";

const CustomEvent_ = ({ event }:{event:CalendarSlot}) => {
    console.log(event)
  return (
    <span>
      <strong>{event.title}</strong>
    </span>
  );
};

export default CustomEvent_;