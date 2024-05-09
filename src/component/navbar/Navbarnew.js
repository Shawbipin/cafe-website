import React,{ useState } from "react";
import "./Navbarnew.css";

import image1 from "../../asset/sunset-cafe-high-resolution-logo-transparent.png";

import { CgProfile } from "react-icons/cg";

import { MdClose } from "react-icons/md";
import { GrMenu } from "react-icons/gr";


// import { FaMagnifyingGlass } from "react-icons/fa6";


import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";


const Navbarnew = () => {

  const [navnewmobilebview , setnavnewmobilebview] = useState(false)

  return (
    <div>

      <div className="navbarnew">

        <div className={navnewmobilebview ? "navnew-logo-block" : "navnew-logo"}>
          <img src={image1} alt="" />
        </div>

        <div className= { navnewmobilebview ?  "mobilenewnav": "navnew-link"}>
         
        <div className="mobile-text-content">
          <p id="mobile-nav-text1">S U N S E T</p>
           <p id="mobile-nav-text2">CAFE</p>
          </div>
         
          <Link to="/">Home</Link>
          <Link to="/mainmenu">Menu</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/mainblog">Blog</Link>
      
          <div className="navnew-mobile-extra-link">
            <Link to="/resitration">Sign in</Link>
            <Link to="/login">Login</Link>
            <Link to="/account">Account</Link>
          </div>
      
        </div>

       

        <div className="cart-profile">
           <Link to="/account"> <CgProfile /></Link> 
        </div>

        <div className="navbarnew-cart">
          <Link to="/cart">
            <span id="cart-icon">
              <BsCart3 />
            </span>
          </Link>

          <span id="cart-text">My cart</span>
        </div>


        <div className="hamgernewnav1"
          onClick={()=>setnavnewmobilebview(!navnewmobilebview)}>
          <span><GrMenu /></span>
        </div>


        <div className="hamgernewnav-close"
          onClick={()=>{setnavnewmobilebview(!navnewmobilebview)}}>
          <span className= {navnewmobilebview ? "" : "newnavshow-block" }>  <MdClose /></span>
        </div>


      </div>

    </div>
  );
};

export default Navbarnew;
