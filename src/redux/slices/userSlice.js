import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action)=>{
           state.auth = true,
           state.user = action.payload
        },
        updateUser: (state,action) =>{
            state.auth = true,
            state.user = action.payload
        },
        resetUser: (state,action) =>{
           state.user = null,
           state.auth = false
        }
    }
})

export const { setUser,updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;


