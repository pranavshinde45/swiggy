import { logo } from "../utils/constants"
export default function Header(){
    return(
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }