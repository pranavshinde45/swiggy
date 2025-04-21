import Items from "./Items"
import { useState } from "react"
export default function RestaurantCategory({category,showItems,setShowItems}){
    function show(){
        setShowItems()
    }
    return(
        <div style={{marginTop: "2px",width:"800px",padding:"1px"}}>
            <div className="header flex justify-between h-[50px] bg-slate-300 p-3 mt-5 text-center rounded-md" style={{boxShadow:"0px 5px 7px black"}} onClick={show}>
                <span>{category.card.card.title}[{category.card.card.itemCards.length}]</span>
                <span className="cursor-pointer">⬇️</span>
            </div>
            <div className="details">
                <ul>
                    {category.card.card.itemCards.map((item)=>{
                      let items=item.card.info
                      return(
                        <li className="m-2">{showItems && <Items data={items}/>}</li>
                      )
                    }
                    )}
                </ul>
            </div>
       </div>
    )
}