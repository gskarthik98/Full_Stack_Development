import React, { useState } from "react";
import { Items } from "./Item";
export const Categories = ({props, showItem ,setIndex})=>{
    const menu=props.card.card;
    const [showflag,setshowflag]=useState(false);
  
   //console.log(showItem);
    const items_list = (menu?.itemCards || menu?.carousel || [] );
    //console.log(items_list);
    const clickhandler = ()=>{
        console.log(showItem+" showflag "+ showflag);
        setIndex();
        setshowflag(!showflag);
        console.log("2."+showItem+" showflag "+ showflag);
    }
    return (
        <div className="border border-slate-600 shadow-md my-4 bg-slate-50">
        <div className=" shadow-md my-4 flex justify-between hover:cursor-pointer" onClick={clickhandler}>
        <div className="m-4 p-4 text-2xl font-bold" >{menu.title +" (" + (menu?.itemCards?.length || menu?.carousel?.length || 0)+")"} </div>
        <div className="m-4 p-4 text-4xl font-bold">↓</div>
        </div>
        <div className="">{showItem &&  showflag && items_list.map((item)=>(<Items props={item}/>)) }</div>
        </div>
    );
};