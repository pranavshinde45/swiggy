import { useState } from "react"
export default function User({name}){
    let [count,setCount]=useState(0)
    return(
        <div style={{border:"1px solid black",width:"1000px",margin:"10px",padding:"10px"}}>
            <h1>Username:{name}</h1>
            <h2>Location</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>increase count</button>
        </div>
    )
}