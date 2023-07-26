import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "types/Product";
import { cart, cartProduct } from "types/cart";



const initialState: cart = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    //add to cart function
    addCart(state: cart, action: PayloadAction<{ product: Product; quantity: number }>) {
      const newObj = action.payload.product;
      const existingObj = state.cartItems.find(val => val._id === newObj._id)

      state.totalQuantity = state.totalQuantity + action.payload.quantity
      state.totalAmount = state.totalAmount + action.payload.quantity * action.payload.product.price
      if (existingObj) {
        ++existingObj.quantity

        const newState = state.cartItems.filter(val => val._id !== existingObj._id)
        state.cartItems = [...newState, existingObj]
        return
      }
      state.cartItems.push({ ...newObj, quantity: action.payload.quantity });
    },
    //delete from cart function
    deleteCart(state: cart, action: PayloadAction<{ product: Product, quantity: number }>) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload.product._id)
      state.totalQuantity = state.totalQuantity - action.payload.quantity
      state.totalAmount = state.totalAmount - action.payload.quantity * action.payload.product.price
    },
    // quantity increment funciton
    increment(state: cart, action: PayloadAction<{ product: Product; quantity: number }>) {
      const existingObj = state.cartItems.find(item => item._id === action.payload.product._id)
      state.totalQuantity = state.totalQuantity + action.payload.quantity
      state.totalAmount = state.totalAmount + action.payload.quantity * action.payload.product.price
      if (existingObj) {
        ++existingObj.quantity
      }
    },
    //qunatity  decrement funciton
    decrement(state: cart, action: PayloadAction<{ product: Product; quantity: number }>) {
      const existingObj = state.cartItems.find(item => item._id === action.payload.product._id)
      state.totalQuantity = state.totalQuantity - action.payload.quantity
      state.totalAmount = state.totalAmount - action.payload.quantity * action.payload.product.price
      if (existingObj) {
        existingObj.quantity--
      }
    }
  },
});

export const { addCart, increment, decrement, deleteCart } = CartSlice.actions;

export default CartSlice.reducer;