import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";
import slotReducer from "../Slices/CalendarSlotManagement"
import storeReducer from "../Slices/StoreManagement"
export const store = configureStore({
  reducer: {
    staff: staffReducer,
    slot:slotReducer,
    store:storeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
