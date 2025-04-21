import { useState,useEffect } from "react"

export default function useRestaurants(id){
    let [restaurant,setRestaurant]=useState(null)
    useEffect(()=>{
    restaurants()
    console.log("the 2nd use effect")
    },[])
    const restaurants=async()=>{
        let res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        let data=await res.json()
        setRestaurant(data)
    }
    return restaurant;
}