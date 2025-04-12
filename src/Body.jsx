import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react"
import { resInformation } from "../utils/mockdata"
export default function Body(){
    let [resInfo,setResInfo]=useState(resInformation)
    function filtered(){
        let filterList=resInfo.filter((restaurant)=>restaurant.info.avgRating>4)
        console.log(filterList);
        setResInfo(filterList)
    }
    useEffect(()=>{
      getresturants()
    },[])
    async function getresturants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING7");
      const json = await data.json();
      console.log(json)
    }    
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={filtered}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
            resInfo.map((restaurant)=>
              (
                <RestaurantCard key={restaurant.info.id} resinfo={restaurant}/>
              )
            )
          }
        </div>
      </div>
    )
  }