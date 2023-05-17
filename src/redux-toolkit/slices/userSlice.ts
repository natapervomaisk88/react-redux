import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/IUser";
const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users", //имя редьюсера
  initialState, //состояние
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const toogleUser = state.users.find((user) => user.id === action.payload);
      toogleUser.isActive = !toogleUser.isActive;
    },
  }, //функции
});
export const { addUser, removeUser, changeStatus } = userSlice.actions;
export default userSlice.reducer;
