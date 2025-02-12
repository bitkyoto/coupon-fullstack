// src/redux/shopSlice.js
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            return state
        },
        removeFromCart(state, action) {
            console.log(action.payload)
            // const index = state.findIndex(action.payload)
            // return state.filter((_,_index) => index === _index)
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
