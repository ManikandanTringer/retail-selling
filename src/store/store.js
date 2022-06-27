import { configureStore } from "@reduxjs/toolkit";
import productReducer from './index'

export const store=configureStore({
    reducer:{
        retial: productReducer,
    },
})