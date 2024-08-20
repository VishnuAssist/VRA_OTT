import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Staff,Shift } from '../Models/StaffModel';

interface UserState {
  userList: Staff[];

  selectedUser: Staff | null;
}

const initialState: UserState = {
  userList: [
    {
      id: 1,
      username: 'Rizwan',
      employeeID: 'ASSIST123',
      phone: '9856742321',
      email: 'rizwan@gmail.com',
      joinDate: '12-6-2023',
      role: 'manager',
      age: 23,
      shiftDetails: [
        {
          shift: 'morning',
          startTime: '01.39 pm',
          endTime: '12.12 am',
          day: 'sunday',
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        },
      ],
    },
    {
      id: 2,
      username: 'Sara',
      employeeID: 'ASSIST124',
      phone: '9856742322',
      email: 'sara@gmail.com',
      joinDate: '15-6-2023',
      role: 'chef',
      age: 28,
      shiftDetails: [
        {
          shift: 'afternoon',
          startTime: '02.00 pm',
          endTime: '10.00 pm',
          day: 'monday',
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        },
      ],
    },
    {
      id: 3,
      username: 'Ali',
      employeeID: 'ASSIST125',
      phone: '9856742323',
      email: 'ali@gmail.com',
      joinDate: '18-6-2023',
      role: 'waiter',
      age: 21,
      shiftDetails: [
        {
          shift: 'evening',
          startTime: '04.00 pm',
          endTime: '11.00 pm',
          day: 'wednesday',
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        },
      ],
    },
    {
      id: 4,
      username: 'Mina',
      employeeID: 'ASSIST126',
      phone: '9856742324',
      email: 'mina@gmail.com',
      joinDate: '20-6-2023',
      role: 'cashier',
      age: 26,
      shiftDetails: [
        {
          shift: 'morning',
          startTime: '09.00 am',
          endTime: '05.00 pm',
          day: 'friday',
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false
        },
      ],
    },
  ],

  selectedUser: null,
};

const StaffManagementSlice = createSlice({
  name: 'StaffSlice',
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<Staff>) => {
      const id = Math.random() * 100;
      const user = { ...action.payload, id };
      state.userList.push(user);
    },
    removeStaff: (state, action: PayloadAction<{ id: number }>) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id,
      );
    },
    updateStaff: (state, action: PayloadAction<Staff>) => {
      state.userList = state.userList.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
    setSelectedStaff: (state, action: PayloadAction<Staff | null>) => {
      state.selectedUser = action.payload;
    },

    // addShift: (state, action: PayloadAction<Staff>) => {
    //   const shiftID = Math.random() * 1000;
    //   const shift = { ...action.payload, shiftID };
    //   state.shiftList.push(shift);
    // },
    // removeShift: (state, action: PayloadAction<{ shiftID: number }>) => {
    //   state.shiftList = state.shiftList.filter(
    //     (shift) => shift.shiftID !== action.payload.shiftID
    //   );
    // },
    // updateShift: (state, action: PayloadAction<Staff>) => {
    //   state.shiftList = state.shiftList.map((shift) =>
    //     shift.shiftID === action.payload.shiftID ? action.payload : shift
    //   );
    // },
  },
});

export const {
  addStaff,
  removeStaff,
  updateStaff,
  setSelectedStaff,
  // addShift, removeShift, updateShift
} = StaffManagementSlice.actions;

export default StaffManagementSlice.reducer;
export type { UserState };
