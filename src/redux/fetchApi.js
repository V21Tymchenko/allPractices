import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTask = createAsyncThunk(
  "addTask/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/tasks");
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getCakes = createAsyncThunk(
//   "desert/types",
//   async (type: string, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/desert/deserts-of-type/${type}`, {
//         params: { type },
//       });
//       return data;
//     } catch (err) {
//       const hasErrResponse = (err as { message: { [key: string]: string } })
//         .message;
//       if (!hasErrResponse) {
//         throw err;
//       }
//       Notify.failure(`${hasErrResponse}`);
//       return thunkAPI.rejectWithValue(hasErrResponse);
//     }
//   }
// );

// const deleteID = createAsyncThunk("delete/task", async (task, thunkAPI) => {
//     const response = await axios.delete("/djd", id);
//     // setToken(response.data.token);
//     return response;
// })
