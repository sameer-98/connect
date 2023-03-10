import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    mode: 'light',
}

const stateSlice = createSlice({
    name:'app',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark': 'light'
        },
        
    }
})

export const stateReducer = stateSlice.reducer;
export const {setMode} = stateSlice.actions; 