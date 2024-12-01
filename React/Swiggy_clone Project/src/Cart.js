import React from "react"
import { Items } from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "./CartSlice";
export const Cart_page = () => {
    const items_list= useSelector((store) => store.cart.items);
    //console.log(cart);
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(clearCart());
    }

    return (
    <div>
        <h1 className="m-4 p-4 text-3xl text-center shadow-lg font-bold">Cart Items</h1>
        <button  className="mx-24 m-2 p-2 border-collapse text-lg text-center font-bold shadow-lg bg-amber-400 rounded-lg" onClick={handleClick}>Clear Cart</button>
        <div>{items_list.map((item)=>(<Items {...item}/>))}</div>
    </div>
);
};