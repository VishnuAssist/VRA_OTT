import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, { EmployeeState } from "../Slices/EmployeeSlice";
import brandReducer, { BrandState } from "../Slices/BrandSlice";

export interface RootState {
  employee: EmployeeState;
  brand: BrandState;
}

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    brand: brandReducer
  },
});

export type AppDispatch = typeof store.dispatch;