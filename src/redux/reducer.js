import { createAction, createReducer } from "@reduxjs/toolkit";

const overState = {
  token: null,
};

const addTaskAction = createAction("addTask");
const deleteTaskAction = createAction("deleteTask");

const addtask = () => {
  console.log("hmbfsfjkh");
};
const deleteTask = id => {
  console.log(id);
};

export const reduceTask = createReducer(overState, builder => {
  builder.addCase(addTaskAction, addtask).addCase(deleteTaskAction, deleteTask);
});

