import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart() {},
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartSlice;
