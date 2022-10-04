import counterReducer from './reducer/counterReducer.js';
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}