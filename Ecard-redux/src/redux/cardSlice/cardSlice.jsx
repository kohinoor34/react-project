  import { createSlice } from "@reduxjs/toolkit";
  export const cardSlice = createSlice({
    name: "cart",

    initialState: {
      items: [],
      totalPrice: 0,
    },

    reducers: {
      addToCart: (state, action) => {
        const newItem = action.payload;
        state.items.push(newItem);
        state.totalPrice += newItem.price
      }, 
      clearCart:(state)=>{
        state.items = [],
        state.totalPrice = 0;
      }
    },
  });

  export const selectCartItems = (state)=>state.cart.items;

  

  export const selectCartTotalPrice = (state)=>state.cart.totalPrice;

  export const {addToCart,clearCart} = cardSlice.actions;

  export default cardSlice.reducer