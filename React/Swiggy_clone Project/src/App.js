import React from "react";
import ReactDOM from "react-dom";
import { Res_cards } from "./Restaurant_cards";
import { AboutL } from "./About";
import { createBrowserRouter, Link , RouterProvider} from "react-router-dom";
const AppLayout = () => {
    return (
        <div>
            <div id="header" className="flex items-center justify-between m-5 p-5" >
                <div id="logo" >
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"/> <b><i>Clone app!</i></b>
                </div>

                <div id="nav" className="flex items-center justify-evenly">
                    <div id="cart" className="m-4 p-4 text-xl">Cart</div>
                    <div id="signIn" className="m-4 p-4 text-xl">SignIn</div>
                    <Link to="/about"  className="m-4 p-4 text-xl">About</Link>
                    <div id="contact" className="m-4 p-4 text-xl">Contact Us</div>
                </div>

            </div>
            <Res_cards/>
            
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
    },{
    path:"/about",
    element:<AboutL/>
}
]);
const root=ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
