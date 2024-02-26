import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img src={APP_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Menu</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li>User</li>
          <button onClick={()=>{
            (btnNameReact==="Login")?setBtnNameReact("Logout"):setBtnNameReact("Login")
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );

  
};

function curry(a){
    function add(b){
        if(b){
            return curry(a+b);
        }else{
            return a;
        }
    }

    console.log(curry(2)(4)(6)());
    console.log("curring")
}

export default Header;
