import { useState } from "react"
import { logo } from "../utils/constants"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header(){
  let [btn,setBtn]=useState("Login")
  let onlineStatus=useOnlineStatus();

    return(
      <div className="header flex justify-between bg-orange-300 shadow-sm">
        <div className="logoContainer">
          <img className="logo max-h-[100px] m-1" src={logo} alt="logo"></img>
        </div>
        <div className="nav-items flex m-4 p-4 justify-center items-center">
          <ul className="flex">
            <li className="status px-4 font-bold text-lg"> {onlineStatus ? "✅" : "🔴"}</li>
            <li  className="px-4 font-bold text-lg"><Link to="/">Home</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/contact">Contact us</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/about">About us</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/cart">Cart</Link></li>
            <button className="btn font-bold text-lg" onClick={()=>{
              btn==="Login"? setBtn("Logout"):setBtn("Login")
            }
            }>{btn}</button>
          </ul>
        </div>
      </div>
    )
  }