// import { legacy_createStore as createStore } from "redux"

import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import productSaga from './middleware/productSaga'
import createSagaMiddleware from "@redux-saga/core"

// const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
)

sagaMiddleware.run(productSaga)
export default store