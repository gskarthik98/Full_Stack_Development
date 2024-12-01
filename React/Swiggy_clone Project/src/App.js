import React from "react";
import ReactDOM from "react-dom/client";
import { Res_cards } from "./Restaurant_cards";
import { AboutL } from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HeaderP } from "./Header";
import { MenuItems } from "./Menu";
import { Cart_page } from "./Cart";
import {Provider} from "react-redux"
import { App_store } from "./Appstore";

// Layout component to include shared elements like Header
const AppLayout = () => {
    return (
        <Provider store={App_store}>
        <div className="bg-slate-50">
            <HeaderP />
            <Outlet /> {/* This is where nested routes will render */}
        </div>
        </Provider>
    );
};

// Browser Router Configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/", // Default route
                element: <Res_cards />,
            },
            {
                path: "about", // Nested route
                element: <AboutL />,
            },
            {
                path: "restaurant/:resId", // Nested route with dynamic parameter
                element: <MenuItems />,
            },{
                path: "cart", // Nested route with dynamic parameter
                element: <Cart_page />,
            }
        ],
    },
]);

// Root render
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
