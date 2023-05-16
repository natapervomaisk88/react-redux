import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  surname: "",
};

export const userSlice = createSlice({
  name: "user", //имя редьюсера
  initialState, //состояние
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSname: (state, action) => {
      state.surname = action.payload;
    },
  }, //функции
});
export const { setName, setSname } = userSlice.actions;
export default userSlice.reducer;
