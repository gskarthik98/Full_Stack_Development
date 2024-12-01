import { createSlice } from "@reduxjs/toolkit";

const cart_slice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();

        },
        clearCart : (state)=>{
            state.items.length=0;
        }
    }
});
export const {addItem,removeItem,clearCart} = cart_slice.actions;
export default cart_slice.reducer;