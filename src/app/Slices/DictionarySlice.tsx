import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DictionaryType } from "../Models/DictionaryType";

interface UserState {
DictionaryList: DictionaryType[];
  selectedUser: DictionaryType | null;
}

const initialState: UserState = {
    DictionaryList: [
    {
    category: "Task",
    entryname: "slote",
    countryname: "ind",
    code: "Ex232",
    description: 'testing',
    status:"Inactive",
    id: 0,
    },
  ],
  selectedUser: null,
};

const Dictionarylice = createSlice({
  name: "Dictionarylice",
  initialState,
  reducers: {
    addDictionaryList: (state, action: PayloadAction<DictionaryType>) => {
      const id = Math.random() * 100;
      const user = { ...action.payload, id };
      state.DictionaryList.push(user);
    },
    removeDictionaryList: (state, action: PayloadAction<{ id: number }>) => {
      state.DictionaryList = state.DictionaryList.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateDictionaryList: (state, action: PayloadAction<DictionaryType>) => {
      state.DictionaryList = state.DictionaryList.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    setSelectedDictionaryList: (state, action: PayloadAction<DictionaryType | null>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  addDictionaryList,
  removeDictionaryList,
  updateDictionaryList,
  setSelectedDictionaryList,
} = Dictionarylice.actions;

export default Dictionarylice.reducer;
export type { UserState };
