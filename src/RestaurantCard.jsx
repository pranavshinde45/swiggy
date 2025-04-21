import { image } from "../utils/constants";
function RestaurantCard(props){
    const {resinfo}=props;
    return(
      <div className="res-card w-[330px] m-5 h-[450px] bg-white rounded-md hover:bg-slate-100" style={{padding:"10px"}}>
        <img src={image + resinfo.info.cloudinaryImageId} alt="foods" style={{height:"210px",width:"250px",margin:"29px"}}/>
        <h3>{resinfo.info.name}</h3>
        <h4>{resinfo.info.cuisines.join(", ")}</h4>
        <h3>{resinfo.info.avgRatingString} star</h3>
        <h3>{resinfo.info.costForTwo}</h3>
        <p>{resinfo.info.sla.deliveryTime} minutes</p>
      </div>
    )
  }

function withPromotedLabel(RestaurantCard){
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white rounded-lg mx-5 p-2">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export {RestaurantCard,withPromotedLabel} ;