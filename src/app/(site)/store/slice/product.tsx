import { createSlice } from "@reduxjs/toolkit";

interface Productstate {
  productName: string;
  category: string;
  quantity: number;
}

const initialState: Productstate[] = [
  { productName: "Black", category: "bata", quantity: 2 },
  { productName: "Brown", category: "Starlet", quantity: 3 },
  { productName: "Pink", category: "Service", quantity: 5 },
];

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    deleteProduct(state, action) {},
  },
});

export const { addProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;