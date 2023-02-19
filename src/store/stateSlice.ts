import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";



const initialState = {
    mode: 'light',
    currentUser: null
}

const stateSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark': 'light'
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        } 
    }
})

export const stateReducer = stateSlice.reducer;
export const {setMode, setCurrentUser} = stateSlice.actions; 