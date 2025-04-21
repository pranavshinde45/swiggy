import { image } from "../utils/constants";
export default function Items({data}){
    console.log(data);
    return(
        <div className="flex border-b-2 border-black ">
            <div className="w-[800px]">
              <span className="font-bold">{data.name}</span>&nbsp;&nbsp;
              <span>-&#8377;{data.price/100||data.defaultPrice/100}</span>
              <p>{data.description}</p>
            </div>
            <div>
                <p className="absolute bg-black text-white">Add+</p>
                <img className="h-[100px] w-[200px]" src={image+data.imageId}/><br/>
            </div>
        </div>
    )
}