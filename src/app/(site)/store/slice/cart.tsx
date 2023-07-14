import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "types/Product";
import { cart } from "types/cart";



const initialState: Product[] = [
  
];
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart(state, action:PayloadAction<Product>){
      const obj = state.find(val => val._id === action.payload._id)
      
      if (obj) {
        ++obj.price
        const newState = state.filter(val => val._id !== obj._id)
        state = [...newState, obj]
        return
      }
      state.push(action.payload);
    },
    deleteCart(state, action) {
      return state.filter(val => val._id !== action.payload._id)
    },
  },
});

export const { addCart, deleteCart } = CartSlice.actions;

export default CartSlice.reducer;