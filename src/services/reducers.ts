import { combineReducers } from "@reduxjs/toolkit";
// import { counterSlice } from "./CounterSlice";
import counterReducer from "./CounterSlice"; 

const rootReducer=combineReducers({
    counter:counterReducer,
})

export default rootReducer;