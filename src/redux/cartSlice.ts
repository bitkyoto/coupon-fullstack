// src/redux/shopSlice.js
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'shops',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            return state
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
