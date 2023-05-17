import { createSlice } from "@reduxjs/toolkit";

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
  }, //функции
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
