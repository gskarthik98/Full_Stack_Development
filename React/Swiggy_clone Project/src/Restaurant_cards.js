import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card } from "./restaurant_card";
import { Shimmer } from "./ShimmerUI";
import { Link } from "react-router-dom";
import { Spl_res_card } from "./Restaurant_card_special";
export const Res_cards=()=> 
    {   
        //Hooks
        const [loaded, setloaded] = useState(false);
        const [restaurants,setRestaurants] = useState([]);
        const [filtered_restaurants,setFilteredRestaurants] = useState([]);
        const [query_text, setQueryText] = useState("");
        //Api Call to fetch restaurants
        useEffect(()=>{
            const controller = new AbortController();
            console.log("Here in UseEffect, fetching restaurants...")
           
            const fetch_Restaurants = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const restaurants = await data.json();
           console.log(restaurants?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]);    
            setRestaurants(restaurants?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants((restaurants?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
            setloaded(true);

        }
        fetch_Restaurants();
        return  () => controller.abort();;
        },[]);
    
        //ShimmerUI
        if(!loaded) {return (<Shimmer/>)}

        //Filtered Logic
        const filtered = () => {
            setFilteredRestaurants(restaurants.filter((rest)=> rest?.info.avgRating > 4.3));        
        };
        const clear_filter = () => {
            setFilteredRestaurants(restaurants);  
            setQueryText("");      
        };

        //Search logic

    const search=(e)=>{
        const query = e.target.value.toLowerCase();
        setQueryText(query);
        setFilteredRestaurants(
            restaurants.filter((rest) =>
                rest?.info.name?.toLowerCase().includes(query)
            )
        );

    };

    //spl res card
    const SplCard = Spl_res_card(Card);
        
        //Full UI (Restaurant cards, Search, Clear and top rated restaurants)
        return ( 
        <div className="">
            <h1 className=" font-bold m-5 p-5 text-3xl"> Restaurants with online food delivery in Hyderabad </h1>
            
            <div className="flex justify-evenly"><input className="w-9/12 h-14 text-center focus:text-left flex justify-evenly my-4 border border-gray-700 rounded-xl" type="text" placeholder="What Restaurant is in your mind?" value={query_text} onChange={search}/></div>
            <button className=" p-4 m-2 mx-16 my-4 inline-block rounded-md border border-transparent px-8 py-3 text-center font-medium text-white bg-orange-500 hover:font-bold" onClick={filtered}>Top Rated Restaurants</button>
            <button className="rounded-full my-4 align-text-top text-sm hover:h-6 hover:text-gray-600" onClick={clear_filter}><img className="h-5 w-5" src="https://img.icons8.com/?size=100&id=31470&format=png&color=000000"/></button>
            <div className="flex bg-slate-50 justify-evenly flex-wrap my-5">
                {filtered_restaurants.map((res) => {return (
                    res?.info?.avgRating>4.3?<Link key={res?.info.id} to={"/restaurant/"+res?.info.id}><SplCard  props={res}/></Link>:<Link key={res?.info.id} to={"/restaurant/"+res?.info.id}><Card  props={res}/></Link>);
                })}
            </div>

        </div>
        
    );
};
