import {configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../fiture/counter/counterSlice";

export const store = configureStore({
    reducer: {
       counter: counterReducer,
    }
})