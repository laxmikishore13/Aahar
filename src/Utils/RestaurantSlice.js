import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    addRestaurant: (state, action) => {
      state.restaurant.push(action);
    },
    clearRestaurant: (state, action) => {
      state.restaurant = [];
    },
  },
});

export const { addRestaurant, clearRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
