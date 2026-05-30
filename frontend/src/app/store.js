import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

/* Store Structure
Now your Redux state becomes:
state = {
  products: {
    products: [],
    loading: false,
    error: null

  }}
  
  state = {
    cart: {
     cartItems:[],

  }}
    
  */
