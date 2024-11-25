import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Categories } from "./Category";

export const MenuItems = () => {
    const {resId} = useParams();
    const [menus,setMenus]=useState([]);
    const [rest,setrest]=useState("");
    const [showIndex,setShowIndex]=useState(null);
    const [showflag,setshowflag]=useState(false);
    
    
    useEffect(()=>{
        const fetchMenu=async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
            const menu = await data.json();
            //console.log(menu?.data?.cards[2].card?.card?.info);
            setMenus(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1,-2));
            setrest(menu?.data?.cards[2].card?.card?.info);
        }
        fetchMenu();
    },[]);

return (
<div>
    <div className="flex justify-center flex-wrap items-end">
    <img  className="rounded-lg h-80 w-9/12 m-4 opacity-80" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+rest.cloudinaryImageId}/>
        <div className="text-5xl font-bold mx-96 text-slate-900 ">{rest.name}</div>
    </div>
    <div className="mx-56 my-32">{menus.map((category,index)=> <Categories props={category} showItem={index==showIndex?true:false} setIndex={()=>setShowIndex(index)}/>)
        }</div>
</div>   
);
    }