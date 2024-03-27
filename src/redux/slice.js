import { createSlice } from "@reduxjs/toolkit";
import task from "../helpers/dataTask.ts";

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    data: task,
    status: "init",
  },
  extraReducers: {
    [addTask.pending](state, action) {
      state.status = "pending";
    },
    [addTask.fulfilled](state, action) {
      state.data = action.payload;
    },
  },
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});
