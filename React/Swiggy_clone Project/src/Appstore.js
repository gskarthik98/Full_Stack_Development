import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

export const App_store = configureStore({
    reducer:{
        cart: cartReducer
    }

});