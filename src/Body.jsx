import {RestaurantCard,withPromotedLabel} from "./RestaurantCard"
import { useState,useEffect } from "react"
import { resInformation } from "../utils/mockdata"
import Loader from "./Loader"
import ShimmerCards from "./ShimmerCards"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export default function Body(){
    const [resInfo,setResInfo]=useState([])
    const [filteredList,setFilteredList]=useState([])
    const [searchText,setSearchText]=useState("")
    let onlineStatus=useOnlineStatus();
    let Promoted=withPromotedLabel(RestaurantCard);

    function filtered(){
        let filterList=resInfo.filter((restaurant)=>restaurant.info.avgRating>4.5)
        console.log(filterList);
        setFilteredList(filterList)
    }

    useEffect(()=>{
      getresturants()
      console.log("the first useEffect")
    },[])
    
    useEffect(() => {
      if (searchText.trim() === "") {
        setFilteredList(resInfo);
      } else {
          const searched = resInfo.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(searched);
      }
    }, [searchText, resInfo]);    

    async function getresturants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json)
      
      async function allRestaurants(jsondata){
        for(let i=0;i<jsondata?.data?.cards.length;i++){
          let restaurants=json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          console.log(restaurants)
          if(restaurants!==undefined){
            return restaurants
          }
        }
      }
      let allData=await allRestaurants(json)
      console.log(allData)
      setResInfo(allData)
      setFilteredList(allData)
    }    
    if(onlineStatus===false)return <h1>Looks like you are offline!!please check your internet connection</h1>
    return resInfo.length===0 ? <ShimmerCards/> : (
      <div className="body bg-neutral-300">
        <div className="filter">
          <button className="filter-btn border border-solid border-black m-5 w-60 h-10 bg-yellow-100" onClick={filtered}>Top Rated Restaurant</button>
          <input type="text" className="border border-solid border-black h-8 w-60" placeholder="search here" id="search-input" value={searchText} onChange={(event)=>{
            setSearchText(event.target.value)
            console.log(event.target.value)
          }} 
          />
          <button className="btn-search border bg-black text-white border-solid border-black m-0.5 w-[100px] h-8">Search</button>
        </div>
        <div className="res-container flex flex-wrap">
          {
            filteredList.length===0?(<h2>No result found</h2>):(
            filteredList.map((restaurant)=>
              (
                <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                  {
                    restaurant.info.veg?(<Promoted resinfo={restaurant}/>):(<RestaurantCard resinfo={restaurant}/>)
                  }</Link>
              )
            ))
          }
        </div>
      </div>
    )
  }