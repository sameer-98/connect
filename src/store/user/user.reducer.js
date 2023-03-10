import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { emailSignInStart, googleSignInStart, signInFailed, signOutFailed } from "./user.actions";

// create type for initial stae 

// create initial state 
const initialState = {
    currentUser : null,
    isLoading: false,
    error: null
}

// use  the createSlice method to create reducers

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false
        },

        signInFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false
        },
        signOutSuccess: (state, action) => {
            state.currentUser = null;
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        return builder
        .addMatcher(
            isAnyOf(emailSignInStart, googleSignInStart),
            (state) => {
                state.isLoading = true
            }
        )
        .addMatcher(
            isAnyOf(signInFailed, signOutFailed),
            (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        )
    }
})

export const {signInSuccess, signOutSuccess} = userSlice.actions

export const userReducer = userSlice.reducer