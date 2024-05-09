import React, { useState } from "react";
import image1 from "../../asset/sunset-cafe-high-resolution-logo-transparent.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import "./Newnavbar.css";


const Newnavbar = ({ customClassName }) => {
  const [newnavmobilebview, setnewnavmobilebview] = useState(false);

  return (
    <div>
      <div className="newnavbar">
        <div
          className={newnavmobilebview ? "newnav-logo-block" : "newnav-logo"}
        >
          <img src={image1} alt="" />
        </div>

        <div class={newnavmobilebview ? "mobilenewnav" : "newnav-link"}>
         
          <div className="mobile-text-content">
            <p id="mobile-nav-text1">S U N S E T</p>
            <p id="mobile-nav-text2">CAFE</p>
          </div>

          <Link to="/">Home</Link>
          <Link to="/mainmenu">Menu</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/mainblog">Blog</Link>

          <div className="newnav-mobile-extra-link">
            <Link to="/resitration">Sign in</Link>
            <Link to="/login">Login</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search Items..." />
          <span>
            <FaMagnifyingGlass />
          </span>
        </div>

        <div className="newnav-searchicon">
          <span>
            {" "}
            <IoSearch />{" "}
          </span>
        </div>

        <div
          className="hamgernewnav"
          onClick={() => setnewnavmobilebview(!newnavmobilebview)}
        >
          <span>
            <GrMenu />
          </span>
        </div>

        <div
          className="hamgernewnav-close"
          onClick={() => {
            setnewnavmobilebview(!newnavmobilebview);
          }}
        >
          <span className={newnavmobilebview ? "" : "newnavshow-block"}>
            {" "}
            <MdClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Newnavbar;
