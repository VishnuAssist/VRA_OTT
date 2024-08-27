import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";
import MenuReducer from "../Slices/MenuSlice"

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    shift:staffReducer,
    menu: MenuReducer,

  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
