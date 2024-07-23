import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarSlot } from "../../Models/CalendarSlot";

interface CalendarState {
  slots: CalendarSlot[];
  selectedSlot: CalendarSlot | null;
}

const initialState: CalendarState = {
  slots: [
    // {
    //     id:1,
    //     resource: 1,
    //     title: "overtime",
    //     option: "overtime",
    //     shift: "Morning Shift",
    //     start:"23-4-2023",
    //     end: "24-4-2023" ,
    //     color:"green",
       
    // }
  ],
  selectedSlot: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addSlot: (state, action: PayloadAction<Omit<CalendarSlot, "id">>) => {
      const newSlot = { ...action.payload, id: Math.random() * 1000 };
      state.slots.push(newSlot);
    },
    updateSlot: (state, action: PayloadAction<CalendarSlot>) => {
      state.slots = state.slots.map((slot) =>
        slot.id === action.payload.id ? action.payload : slot
      );
    },
    removeSlot: (state, action: PayloadAction<{ id: number }>) => {
      state.slots = state.slots.filter((slot) => slot.id !== action.payload.id);
    },
    selectSlot: (state, action: PayloadAction<CalendarSlot | null>) => {
      state.selectedSlot = action.payload;
    },
  },
});

export const { addSlot, updateSlot, removeSlot, selectSlot } =
  calendarSlice.actions;

export default calendarSlice.reducer;
export type { CalendarSlot, CalendarState };
