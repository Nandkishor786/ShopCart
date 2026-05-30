import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //addtocart
    addToCart: (state, action) => {
      const item = state.cartItems.find((product) => {
        return product.id === action.payload.id;
      });

      //if item already exits in cart
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //removeItem
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload,
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //clearCart
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },

    //increaseQuntity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //decreaseQuantity
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
