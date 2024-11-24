import React from "react";
import ReactDOM from "react-dom/client";
import { Res_cards } from "./Restaurant_cards";
import { AboutL } from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HeaderP } from "./Header";
import { MenuItems } from "./Menu";

// Layout component to include shared elements like Header
const AppLayout = () => {
    return (
        <div>
            <HeaderP />
            <Outlet /> {/* This is where nested routes will render */}
        </div>
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
            },
        ],
    },
]);

// Root render
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
