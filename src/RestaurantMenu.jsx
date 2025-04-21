import { useState } from "react";
import useRestaurants from "../utils/useRestaurants";
import ShimmerCards from "./ShimmerCards"
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

export default function RestaurantMenu(){
    let [showItems,setShowItems]=useState()
    let {id}=useParams()
    let restaurant=useRestaurants(id)//this is a custom hook that created to follow single responsibility principle:and this principle is not like other its on us how to define it.
                                    //generally it means that a single component should have single responsibility

    let restaurantsInfo=restaurant?.data?.cards[2]?.card?.card?.info
    // console.log(restaurantsInfo)
    let items = restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards||restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    let categories=restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let category=categories?.filter((category) =>category.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(category)

    if(restaurant===null)return <ShimmerCards/>
    return(
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl text-center mt-6 mb-6">{restaurantsInfo.name.toUpperCase()}</h1>
        {
          category.map((category,index)=>(
            <RestaurantCategory key={category.card.card.title} category={category} showItems={index===showItems && true} setShowItems={()=>setShowItems(index)}/>
        ))}
      </div>
)}