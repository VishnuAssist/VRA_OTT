import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";
import reserveReducer from "../Slices/reserve";

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    shift:staffReducer,
   reserve:reserveReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
