import CounterReducer from "./reducer/CounterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const createReduxStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}