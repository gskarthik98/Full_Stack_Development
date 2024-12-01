import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { User_Context } from "./UserContext";
import { useSelector } from "react-redux";
export const HeaderP = () => {
    const user = useContext(User_Context);
    const [signin_out,Setsignin_out] = useState("Sign In");
    const cart = useSelector((store) => store.cart.items);
    console.log(cart);
    const handleSignInOut = () => {
        Setsignin_out(signin_out === "Sign In" ? "Sign Out" : "Sign In");
       
      };
      
    return (  <div id="header" className="flex items-center justify-between m-5 p-5" >
        <div id="logo" >
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"/> <b><i>Clone app!</i></b>
        </div>
        <div className="text-xl font-bold">{"Hello "+ user.loggerdInUser + "!"}</div>
        
        <div id="nav" className="flex items-center justify-evenly">
            <Link to="/"  className="m-4 p-4 text-xl">Home</Link>
            <Link to="/about"  className="m-4 p-4 text-xl">About</Link>           
            <div id="contact" className="m-4 p-4 text-xl">Contact Us</div>
            <Link to="/cart"  className="m-4 p-4 text-xl">Cart {"("+cart.length + " items)"}</Link>
            <div id="signIn" className="m-4 p-4 text-xl cursor-pointer bg-orange-300 rounded-xl  italic font-bold" onClick={handleSignInOut} >{signin_out}</div>

        </div>

    </div>
    );
}