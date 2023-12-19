import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSize: (state, { payload }) => {
      state.data = { ...state.data, payload };
    },
    setColor: (state, { payload }) => {
      state.data = { ...state.data, payload };
    },
  },
});

export const { setColor, setSize } = filterSlice.actions;

export default filterSlice.reducer;
