import { PayloadAction, createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { Task } from "../types";
import { RootState } from "./store";
import axios from "axios";

const API = import.meta.env.VITE_BACKEND_BASE_API;

const initialState: { tasks: Task[]; loading: "idle" | "pending" | "succeeded" } = {
  tasks: [],
  loading: "idle",
};

export const getAllTasks = createAsyncThunk("tasks/getAll", async () => {
  const response = await axios.get<Task[]>(API);
  return response.data;
});

const newTaskHTTP = async (title: string) => {
  await axios.post(API, { title });
};
const removeTaskHTTP = async (taskId: string) => {
  await axios.delete(`${API}/${taskId}`);
};
const changeTaskStateHTTP = async (taskId: string, newState: boolean) => {
  await axios.patch(`${API}/${taskId}`, { newState });
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        title: action.payload,
        _id: nanoid(),
        isCompleted: false,
      });
      newTaskHTTP(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      removeTaskHTTP(action.payload);
      const newState = state.tasks.filter((task) => task._id !== action.payload);
      state.tasks = newState;
    },
    changeTaskState: (state, action: PayloadAction<{ taskId: string; newState: boolean }>) => {
      const releventTask = state.tasks.find((task) => task._id === action.payload.taskId);
      if (releventTask) {
        releventTask.isCompleted = action.payload.newState;
      }
      changeTaskStateHTTP(action.payload.taskId, action.payload.newState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getAllTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
      state.loading = "succeeded";
      state.tasks = action.payload;
    });
  },
});

export const allTasksSelector = (store: RootState) => store.tasks.tasks;
export const tasksStateSelector = (store: RootState) => store.tasks.loading;

export const { newTask, changeTaskState, removeTask } = tasksSlice.actions;

const tasksReducer = tasksSlice.reducer;
export default tasksReducer;
