import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { REHYDRATE } from "redux-persist/es/constants";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    [REHYDRATE]: {
      reducer: () => {},
      prepare() {
        console.log("PREPARED");
        return { payload: null };
      },
    },
    switchTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    checkDarkTheme(state, action) {
      state.darkTheme = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state) => {
      return state;
    },
  },
});

export const { switchTheme, checkDarkTheme } = appSlice.actions;

export const selectDarkTheme = (state: RootState) => state.app.darkTheme;

export default appSlice.reducer;
