// src/redux/shopSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Shop } from "../types/Shop";

const initialState: Shop[] = [];

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShops(state, action) {
            return action.payload;
        }
    }
});

export const { setShops } = shopsSlice.actions;
export default shopsSlice.reducer;
