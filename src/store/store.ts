import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { stateReducer } from "./stateSlice";
import { rootSaga } from "./root-saga";
import { userReducer } from "./user/user.reducer";

const sagaMiddleWare = createSagaMiddleware()
const saga = [sagaMiddleWare]

export const store = configureStore({
    reducer: {
        user: userReducer,
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(saga)
})

sagaMiddleWare.run(rootSaga);