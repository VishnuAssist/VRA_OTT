import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GroupStaff {
  id: number;
  groupname: string;
  staffs: string;
  description: string;
}

interface GroupStaffState {
  groupList: GroupStaff[];
  selectedGroup: GroupStaff | null;
}

const initialState: GroupStaffState = {
  groupList: [
    {
      id:1,
      groupname:"Store Keeping",
      staffs:"john",
      description:"To keep the store neat and clean"
    },
    {
      id:2,
      groupname:"Keeping",
      staffs:"kemy",
      description:"make store clean"
    },
    {
      id:3,
      groupname:"Bill Counter",
      staffs:"john",
      description:"make a bill for customer"
    },
  ],
  selectedGroup: null,
};

const GroupStaffSlice = createSlice({
  name: "GroupStaffSlice",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<GroupStaff>) => {
      const id = Math.random() * 100; // Generate a random ID (consider a better ID generation strategy)
      const group = { ...action.payload, id };
      state.groupList.push(group);
    },
    removeGroup: (state, action: PayloadAction<{ id: number }>) => {
      state.groupList = state.groupList.filter(
        (group) => group.id !== action.payload.id
      );
    },
    updateGroup: (state, action: PayloadAction<GroupStaff>) => {
      state.groupList = state.groupList.map((group) =>
        group.id === action.payload.id ? action.payload : group
      );
    },
    setSelectedGroup: (state, action: PayloadAction<GroupStaff | null>) => {
      state.selectedGroup = action.payload;
    },
  },
});

// Export the actions for use in components
export const {
  addGroup,
  removeGroup,
  updateGroup,
  setSelectedGroup,
} = GroupStaffSlice.actions;

// Export the reducer for the store
export default GroupStaffSlice.reducer;

// Export the GroupStaffState type for use in selectors or other components
export type { GroupStaffState };
