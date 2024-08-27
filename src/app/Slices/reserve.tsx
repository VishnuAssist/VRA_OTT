import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reserve } from '../Models/reserve'

interface ReservationState {
  reservationList: Reserve[];
  selectedReservation: Reserve | null;
}

const initialState: ReservationState = {
  reservationList: [
    {
        id: 1,
        name: "john",
        table: 111,
        date: "23-08-2024",
        notes:"What do you need"
    },
    {
        
        id: 2,
        name: "Andrew",
        table: 112,
        date: "25-08-2024",
        notes:"What do you need"
    },
    {
        
        id: 3,
        name: "Stark",
        table: 113,
        date: "26-08-2024",
        notes:"What do you need"
    },
  ],
  selectedReservation: null,
};

const ReservationSlice = createSlice({
  name: 'ReservationSlice',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Reserve>) => {
      const id = Math.floor(Math.random() * 1000); 
      const reservation = { ...action.payload, id };
      state.reservationList.push(reservation);
    },
    removeReservation: (state, action: PayloadAction<{ id: number }>) => {
        console.log(action.payload)
      state.reservationList = state.reservationList.filter(
        (reservation:Reserve) => reservation.id !== action.payload.id,
      );

    },
    updateReservation: (state, action: PayloadAction<Reserve>) => {
      state.reservationList = state.reservationList.map((reservation:Reserve) =>
        reservation.id === action.payload.id ? action.payload : reservation,
      );
    },
    setSelectedReservation: (state, action: PayloadAction<Reserve | null>) => {
      state.selectedReservation = action.payload;
    },
  },
});

export const {
  addReservation,
  removeReservation,
  updateReservation,
  setSelectedReservation,
} = ReservationSlice.actions;

export default ReservationSlice.reducer;
export type { ReservationState };
