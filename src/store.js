import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import sideNavReducer from "./features/sideNav/sideNavSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    sideNav: sideNavReducer,
  },
});
