import React from "react";
import "./accountinfo.css";

import Footer from "../Footer/footer";
import Navbarnew from "../navbar/Navbarnew";
import Sidenavbar from "../navbar/Sidenavbar";

const Accountinfo = () => {
  return (
    <>
      <div className="accountinfo-main">

        <Navbarnew />

        <div className="sidenavbar-accountinfo">
          <Sidenavbar />
        </div>

        <div className="accountinfo-content">
          <p id="accountinfo-content-text1">
            EDIT ACCOUNT INFORMATION
          </p>
          <p id="accountinfo-content-text2">ACCOUNT INFORMATION</p>
         
          <p id="accountinfo-content-text3"> </p>

          <label id="accountinfo-content-text4"> First Name *</label>
          <input type="text" id="accountinfo-content-text5" placeholder="ABC" />

          <label id="accountinfo-content-text6"> Last Name *</label>
          <input type="text" id="accountinfo-content-text5" placeholder="XYZ" />

          <label id="accountinfo-content-text7"> Phone Number *</label>
          <input type="text" id="accountinfo-content-text5" />

          <p id="accountinfo-content-text8">  ADDRESS</p>
          <p id="accountinfo-content-text9"></p>

          <label id="accountinfo-content-text10"> Street Address  *</label>
          <input type="text" id="accountinfo-content-text5" />
        
          <label id="accountinfo-content-text11"> City  *</label>
          <input type="text" id="accountinfo-content-text5" />
        

          <label id="accountinfo-content-text12"> State *</label>
          <input type="text" id="accountinfo-content-text5" />
         
          <label id="accountinfo-content-text13"> Zip Code  *</label>
          <input type="text" id="accountinfo-content-text5" />
      
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accountinfo;
