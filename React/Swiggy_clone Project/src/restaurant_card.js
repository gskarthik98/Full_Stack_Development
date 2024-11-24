import React from "react";
import { Shimmer } from "./ShimmerUI";
export const Card = (restaurant) => {
    const res = restaurant?.props?.info;
    return (<div className="w-96  m-4  p-4 hover:border  hover:rounded-lg">
        <img  className="rounded-lg h-44 w-80 m-4 hover:h-48 hover:opacity-75" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.cloudinaryImageId}/>
        <div className="text-center font-bold m-3 text-3xl">{res.name}</div>
        <div className="font-bold text-lg m-2 text-center"><span className="font-bold text-lg text-center"> 🌟 {res.avgRating} • </span> <span className=" text-center font-bold text-lg">{res?.sla?.slaString}</span> </div>
        <div className=" text-center  text-slate-600 text-lg">{res?.cuisines?.join(", ")}</div>
        <div className=" text-center  text-slate-600 text-lg">{res.costForTwo}</div>
        <div className="font-medium m-1 text-center text-slate-600 text-lg">{res.areaName}</div>
    </div>);

}