import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApprovalsLeave } from "../Models/Approvals"; 

interface ApprovalState {
  approvalList: ApprovalsLeave[];
  selectedApproval: ApprovalsLeave | null;
}

const initialState: ApprovalState = {
  approvalList: [{
    id: 1,
    type: "Leave Request",
    Fromdate: "10-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Fever",
    status:"Pending"
  },
  {
    id: 2,
    type: "MC",
    Fromdate: "01-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Fever",
    status: "Pending"
  },
  {
    id: 3,
    type: "Leave Request",
    Fromdate: "11-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Fever",
    status: "Pending"
  },
  {
    id: 4,
    type: "MC",
    Fromdate: "10-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Fever",
    status: "Pending"
  },
  {
    id: 5,
    type: "Commision",
    Fromdate: "10-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Over Time work",
    status: "Pending"
  },
  {
    id: 6,
    type: "Commision",
    Fromdate: "10-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Over Time work",
    status: "Pending"
  },
  {
    id: 7,
    type: "Commision",
    Fromdate: "10-07-2024",
    Todate: "11-07-2024",
    Name: "Riyas",
    Reason: "Over Time work",
    status: "Pending"
  }],
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
