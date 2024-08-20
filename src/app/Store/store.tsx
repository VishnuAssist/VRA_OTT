import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    shift:staffReducer,
   
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
