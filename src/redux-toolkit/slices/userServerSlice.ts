import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
};

export const getUsers: any = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("http://localhost:3000/users");
    dispatch(setUsers(res.data));
  }
);

export const userServerSlice = createSlice({
  name: "users", //имя редьюсера
  initialState, //состояние
  reducers: {
    setUsers: (state, action) => {
      console.log("+", action.payload);
      state.users = action.payload;
    },
  }, //функции
});

export const { setUsers } = userServerSlice.actions;

export default userServerSlice.reducer;
