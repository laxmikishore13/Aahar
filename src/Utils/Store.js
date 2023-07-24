import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Utils/CartSlice";
import RestaurantSlice from "./RestaurantSlice";
import UserInfoSlice from "./UserInfoSlice";
import locationSlice from "./LocationSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: RestaurantSlice,
    userInfo: UserInfoSlice,
    location: locationSlice,
  },
});

export default store;
