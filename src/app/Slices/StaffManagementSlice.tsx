import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../Models/StaffMangement";

interface UserState {
  userList: Staff[];
  selectedUser: Staff | null;
}

const initialState: UserState = {
  userList: [
    {
      id: 1,
      username: "Rizwan",
      employeeID: "ASSIST123",
      phone: "9856742321",
      email: "rizwan@gmail.com",
      position: "Project Manager",
      storecode: "TWG001",
      status: "pending",
      joinDate: "12-6-2023",
      role: "admin",
      store: undefined
    },
    {
      id: 2,
      username: "sheik",
      employeeID: "001",
      phone: "9856742321",
      email: "rizwan@gmail.com",
      position: "Project Manager",
      storecode: "TWG001",
      status: "pending",
      joinDate: "12-6-2023",
      role: "admin",
      store: undefined
    },
    {
      id: 1,
      username: "Hari",
      employeeID: "002",
      phone: "9856742321",
      email: "rizwan@gmail.com",
      position: "Project Manager",
      storecode: "TWG001",
      status: "pending",
      joinDate: "12-6-2023",
      role: "admin",
      store: undefined
    },
    {
      id: 1,
      username: "Riyas",
      employeeID: "003",
      phone: "9856742321",
      email: "rizwan@gmail.com",
      position: "Project Manager",
      storecode: "TWG001",
      status: "pending",
      joinDate: "12-6-2023",
      role: "admin",
      store: undefined
    },
  ],
  selectedUser: null,
};

const StaffManagementSlice = createSlice({
  name: "StaffSlice",
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<Staff>) => {
      const id = Math.random() * 100;
      const user = { ...action.payload, id };
      state.userList.push(user);
    },
    removeStaff: (state, action: PayloadAction<{ id: number }>) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateStaff: (state, action: PayloadAction<Staff>) => {
      state.userList = state.userList.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    setSelectedStaff: (state, action: PayloadAction<Staff | null>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  addStaff,
  removeStaff,
  updateStaff,
  setSelectedStaff,
} = StaffManagementSlice.actions;

export default StaffManagementSlice.reducer;
export type { UserState };
