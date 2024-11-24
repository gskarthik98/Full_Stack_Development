import React from "react";
export const Categories = (category)=>{
    const menu=category.props.card.card;
    return (
        <div>
        <div className="m-4 p-4 text-2xl font-bold">{menu.title +" "} </div>
        
        </div>
    );
};