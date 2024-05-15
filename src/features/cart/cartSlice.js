import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: false,
  items: 0,
  cartItems: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.cart = !state.cart;
    },
    increment: (state) => {
      state.items += 1;
    },
    decrement: (state) => {
      state.items -= 1;
    },
    addItems(state) {
      localStorage.setItem("items", JSON.stringify(state.items));
      const itemsStorage = JSON.parse(localStorage.getItem("items"));
      state.cartItems = itemsStorage;
      state.items = 0;
    },
    getItems(state) {
      const itemsStorage = JSON.parse(localStorage.getItem("items"));
      state.cartItems = itemsStorage;
    },
    removeItems(state) {
      const deleteItemsStorage = localStorage.removeItem("items");
      state.cartItems = deleteItemsStorage;
    },
  },
});

export const {
  toggleCart,
  increment,
  decrement,
  addItems,
  getItems,
  removeItems,
} = cartSlice.actions;

export default cartSlice.reducer;
