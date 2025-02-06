import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "../types/Auth";

const initialState:LoginState = {
    username:     '',
    balance:      0,
    isLogged:     false,
    access_token: ''
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state, action){
            return action.payload
        }
    }
})
export default authSlice.reducer
export const {login} = authSlice.actions