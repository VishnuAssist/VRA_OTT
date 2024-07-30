import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";
import slotReducer from "../Slices/CalendarSlotManagement";
import storeReducer from "../Slices/StoreManagement";
import taskReducer from "../Slices/TaskSlice"
import DictionaryReducer from "../Slices/DictionarySlice"
import groupStaffReducer from "../Slices/GroupStaff"
import ApprovalReducer from "../Slices/ApprovalsSlice"
export const store = configureStore({
  reducer: {
    staff: staffReducer,
    groupStaff: groupStaffReducer,
    slot:slotReducer,
    store:storeReducer,
    task:taskReducer,
    dictionary:DictionaryReducer,
    approval:ApprovalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
