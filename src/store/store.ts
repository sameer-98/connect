import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import { stateReducer } from "./stateSlice";
import { rootSaga } from "./root-saga";

const sagaMiddleWare = createSagaMiddleware()
const saga = [sagaMiddleWare]

export const store = configureStore({
    reducer: stateReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

sagaMiddleWare.run(rootSaga);