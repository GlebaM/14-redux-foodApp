import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import huiReducer from "./ui-slice";

const store = configureStore({
  reducer: { cart: cartReducer, ui: huiReducer },
});

export default store;
