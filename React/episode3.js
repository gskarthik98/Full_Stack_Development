import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
   return (<div id="header_container">
        <img id="logo" src="https://www.logodee.com/wp-content/uploads/2020/10/LD-C-58.jpg"/>
        <div id="other_links">
            
            <div id="cart">Cart</div>
            <div id="signIn">SignIn</div>
            <div id="about">About</div>
            <div id="contact">Contact Us</div>
        </div>

    </div>)
}
const root=ReactDOM.createRoot(document.getElementById("parent"));
root.render(<Header/>);