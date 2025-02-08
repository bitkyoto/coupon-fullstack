import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
    interval: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action){
            state.filter = action.payload
            return state
        }
    }
})

export default filterSlice.reducer
export const {setFilter} = filterSlice.actions