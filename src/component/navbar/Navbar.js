import React, { useState } from "react";
import "./Navbar.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import image1 from "../../asset/sunset-cafe-high-resolution-logo-transparent.png";
import { IoSearch } from "react-icons/io5";

import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [mobileview, showmobileview] = useState(false);

  const closeMobileMenu = () => {
    showmobileview(false);
  };
  
  return (
    <>

      <div className="navbar">
        <div className={mobileview ? "logo-block" : "nav-logo"}>
          <img src={image1} alt="img" />
        </div>

       
        <div className="searchicon">
          <span>
            {" "}
            <IoSearch />
            {" "}
          </span>
        </div>

        <div className={mobileview ? "mobile-navbar " : "nav-link"}>
          <div className="mobile-text-content">
          <p id="mobile-nav-text1">S U N S E T</p>
           <p id="mobile-nav-text2">CAFE</p>
          </div>

          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/mainmenu" onClick={closeMobileMenu}>
            Menu
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact Us
          </Link>
          <Link to="/mainblog" onClick={closeMobileMenu}>
            Blog
          </Link>

          <div className="mobile-extra-link">
            <Link to="/resitration">Sign in</Link>
            <Link to="/login">Login</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>

        <div className="login-section">
          <Link to="/resitration">Sign in</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="cart">
          <Link to="/cart">
            <span id="cart-icon">
              <BsCart3 />
            </span>
          </Link>
          <span id="cart-text">My cart</span>
        </div>

        <div className="hambarger-menu">
          <span onClick={() => showmobileview(!mobileview)}>
            <GrMenu />
          </span>
        </div>

        <div
          className={mobileview ? "hambarger-close" : "hambarger-close-block"}
        >
          <span onClick={() => showmobileview(!mobileview)}>
            <MdClose />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
