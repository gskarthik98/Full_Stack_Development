import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "./Category";

export const MenuItems = () => {
    const {resId} = useParams();
    const [menus,setMenus]=useState([]);
    
    
    useEffect(()=>{
        const fetchMenu=async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const menu = await data.json();
            console.log(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1));
            setMenus(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1,-2));
        }
        fetchMenu();
    },[]);

return (
<div>
    <div>{menus.map((category)=> <Categories props={category}/>)
        }</div>
</div>   
);
    }