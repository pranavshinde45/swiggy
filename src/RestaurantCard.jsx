import { image } from "../utils/constants";
export default function RestaurantCard(props){
    const {resinfo}=props;
    return(
      <div className="res-card">
        <img src={image + resinfo.info.cloudinaryImageId} alt="foods"/>
        <h3>{resinfo.info.name}</h3>
        <h4>{resinfo.info.cuisines.join(", ")}</h4>
        <h3>{resinfo.info.avgRatingString} star</h3>
        <h3>{resinfo.info.costForTwo}</h3>
        <p>{resinfo.info.sla.deliveryTime} minutes</p>
      </div>
    )
  }