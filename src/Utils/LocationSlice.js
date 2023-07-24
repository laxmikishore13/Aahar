import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.location.push(action);
    },
    clearLocation: (state, action) => {
      state.location = [];
    },
  },
});

export const { addLocation, clearLocation } = locationSlice.actions;

export default locationSlice.reducer;
