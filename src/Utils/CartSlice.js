import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const itemCart = state.items?.find(
        (item) => item.id === action.payload.id
      );
      if (itemCart) {
        itemCart.cart++;
        itemCart.price = itemCart.cart * itemCart.price;
      } else {
        state.items?.push({ ...action.payload, cart: 1 });
      }
    },
    deleteItem: (state, action) => {
      const item = state.items.filter((item) => item?.id !== action.payload.id);
      state.items = item;
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
