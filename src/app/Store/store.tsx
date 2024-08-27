import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../Slices/StaffManagementSlice";
<<<<<<< HEAD
import reserveReducer from "../Slices/reserve";
=======
import MenuReducer from "../Slices/MenuSlice"
>>>>>>> b067bc98d7d53651e1ee7994989dadf610f7c95c

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    shift:staffReducer,
<<<<<<< HEAD
   reserve:reserveReducer,
=======
    menu: MenuReducer,

>>>>>>> b067bc98d7d53651e1ee7994989dadf610f7c95c
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
