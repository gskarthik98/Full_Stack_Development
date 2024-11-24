import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const HeaderP = () => {
    const [signin_out,Setsignin_out] = useState("Sign In");
    const handleSignInOut = () => {
        console.log("Here in toggle")
        Setsignin_out((prev) => (prev === "Sign In" ? "Sign Out" : "Sign In"));
      };
    return (  <div id="header" className="flex items-center justify-between m-5 p-5" >
        <div id="logo" >
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"/> <b><i>Clone app!</i></b>
        </div>

        <div id="nav" className="flex items-center justify-evenly">
            <div id="cart" className="m-4 p-4 text-xl">Cart</div>
            <Link to="/about"  className="m-4 p-4 text-xl">About</Link>
            <div id="contact" className="m-4 p-4 text-xl">Contact Us</div>
            <div id="signIn" className="m-4 p-4 text-xl cursor-pointer bg-orange-300 rounded-xl  italic font-bold" onClick={handleSignInOut} >{signin_out}</div>

        </div>

    </div>);
}