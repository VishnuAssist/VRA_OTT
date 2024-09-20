import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, { EmployeeState } from "../Slices/EmployeeSlice";
import brandReducer, { BrandState } from "../Slices/BrandSlice";
import voucherReducher,{VoucherState} from "../Slices/VoucherSlice"
import dictionaryReducer from '../Slices/DictionarySlice';


export interface RootState {
  employee: EmployeeState;
  brand: BrandState;
  voucher:VoucherState;
}

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    brand: brandReducer,
    dictionary: dictionaryReducer,
    voucher:voucherReducher
  },
});

export type AppDispatch = typeof store.dispatch;