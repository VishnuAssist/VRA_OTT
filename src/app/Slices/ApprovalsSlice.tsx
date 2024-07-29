import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApprovalsLeave } from "../Models/Approvals"; 

interface ApprovalState {
  approvalList: ApprovalsLeave[];
  selectedApproval: ApprovalsLeave | null;
}

const initialState: ApprovalState = {
  approvalList: [],
  selectedApproval: null,
};

const ApprovalSlice = createSlice({
  name: "ApprovalSlice",
  initialState,
  reducers: {
    addApproval: (state, action: PayloadAction<ApprovalsLeave>) => {
      const id = Math.random() * 100; 
      const approval = { ...action.payload, id };
      state.approvalList.push(approval);
    },
    removeApproval: (state, action: PayloadAction<{ id: number }>) => {
      state.approvalList = state.approvalList.filter(
        (approval) => approval.id !== action.payload.id
      );
    },
    updateApproval: (state, action: PayloadAction<ApprovalsLeave>) => {
      state.approvalList = state.approvalList.map((approval) =>
        approval.id === action.payload.id ? action.payload : approval
      );
    },
    setSelectedApproval: (state, action: PayloadAction<ApprovalsLeave | null>) => {
      state.selectedApproval = action.payload;
    },
  },
});

// Export the actions for use in components
export const {
  addApproval,
  removeApproval,
  updateApproval,
  setSelectedApproval,
} = ApprovalSlice.actions;

// Export the reducer for the store
export default ApprovalSlice.reducer;

// Export the ApprovalState type for use in selectors or other components
export type { ApprovalState };
