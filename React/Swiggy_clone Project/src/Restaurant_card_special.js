import React from "react";


export const Spl_res_card = (Card) => {
    return (props) => {
        return (
            <div >
            <label className="absolute mx-4 font-bold rounded-lg p-4 bg-black text-white">Top Rated</label>
            <Card  {...props}/>
            </div>
        );
    }

};