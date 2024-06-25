import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
  },
  reducers: {
    changeTextInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeTextInput } = filterSlice.actions;

export const selectTextFilter = (state) => state.filters.text;
