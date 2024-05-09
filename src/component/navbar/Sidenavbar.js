import React from 'react';
import "./sidenavbar.css";
import { Link } from "react-router-dom";


const Sidenavbar = () => {

  return (
    <div>
      <div className="side-navbar">
          <Link to=" "> My Account</Link>
          <Link to="/accountinfo"> Account Information</Link>
          <Link to="/account">Address Book</Link>
          <Link to="/yourorder">Your Order</Link>
        </div>
    </div>
  )
}

export default Sidenavbar;



