/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type themestate = {
  dark: boolean;
};
const initialState: themestate = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.dark = !state.dark;
      localStorage.setItem("theme", state.dark + "");
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme , setTheme} = themeSlice.actions;
