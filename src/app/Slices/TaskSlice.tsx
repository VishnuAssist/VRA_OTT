import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "../Models/TaskType";

interface UserState {
  taskList: TaskType[];
  selectedUser: TaskType | null;
}

const initialState: UserState = {
  taskList: [
    {
      id: 1,
      task: "ReviewPhase",
      users: "Rizwan",
      date: "22-02-2024",
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
