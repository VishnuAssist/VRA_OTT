import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../Models/TaskType";

interface UserState {
  taskList: TaskType[];
  selectedUser: TaskType | null;
}

const initialState: UserState = {
  taskList: [
    {
      users:"Hari",
      id: 1,
      taskProgress:"To Do",
      assigner:"Rizwan",
      task: "To make a Dashboard UI",
      description:"The Dashboard should contains user details, user working graph and pie chart for the yearly task .",
      priority:"Low",
      staff:["Rizwan","sheik","Hari","Riyas"],
      date: "2024-07-12",
      status:"0",
    },
    {
      users:"Rizwan",
      id: 2,
      taskProgress:"In Progress",
      assigner:"Manoj",
      task: "To make a Dashboard UI",
      description:"The Dashboard should contains user details, user working graph and pie chart for the yearly task .",
      priority:"Low",
      staff:["Rizwan","sheik","Hari","Riyas"],
      date: "2024-07-12",
      status:"1"
    },
    {
      users:"Riyas",
      id: 3,
      taskProgress:"Completed",
      assigner:"Rizwan",
      task: "To make a Dashboard UI",
      description:"The Dashboard should contains user details, user working graph and pie chart for the yearly task .",
      priority:"Low",
      staff:["Rizwan","sheik","Hari","Riyas"],
      date: "2024-07-12",
      status:"2"
    },
  ],
  selectedUser: null,
};

const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      const id = Math.random() * 100;
      const user = { ...action.payload, id };
      state.taskList.push(user);
    },
    removeTask: (state, action: PayloadAction<{ id: number }>) => {
      state.taskList = state.taskList.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateTask: (state, action: PayloadAction<TaskType>) => {
      state.taskList = state.taskList.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    setSelectedTask: (state, action: PayloadAction<TaskType | null>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {
  addTask,
  removeTask,
  updateTask,
  setSelectedTask,
} = TaskSlice.actions;

export default TaskSlice.reducer;
export type { UserState };
