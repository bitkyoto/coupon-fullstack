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
        },
        setInterval(state, action){
            console.log(action)
            state.interval = action.payload
            return state
        }
    }
})

export default filterSlice.reducer
export const {setFilter, setInterval} = filterSlice.actions