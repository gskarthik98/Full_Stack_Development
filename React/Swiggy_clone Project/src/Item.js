import React from "react";

export const Items = (item) => {

    const data = item?.props?.card?.info || item?.props?.dish?.info;
   // console.log(item);
   return ( <div className="m-4 p-4 border border-slate-600  shadow-md flex flex-wrap justify-between">
    <div className="w-11/12">
    <div className="font-bold text-2xl text-slate-600">{data?.name}</div>
    <div className="font-bold text-xl my-2 py-2 text-slate-700">{"₹"+(data?.defaultPrice || data?.price)/100.00}</div>
    <div className=" text-xl text-slate-700">{data?.description}</div>
    </div>
    <div className="relative w-28 h-25">
    <img className="relative w-28 h-25 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/"+data?.imageId}/>
    <button className="absolute bottom-1  mx-4 tex-green-300 bg-slate-400 px-4 py-2 rounded-lg hover:font-bold">Add +</button>
    </div>
   </div>

   );

}