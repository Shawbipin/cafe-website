import React from "react";

import Footer from "../Footer/footer";
import Navbarnew from "../navbar/Navbarnew";
import "./Account.css";


// import { Link } from "react-router-dom";

import Sidenavbar from "../navbar/Sidenavbar";


const Account = () => {

  return (
    <>
      <div className="account-main">
        <Navbarnew />

        <div className="sidenavbar-account">
          <Sidenavbar />
        </div>

        <div className="account-content">
          <p id="account-content-text1"> MY ACCOUNT</p>
          <p id="account-content-text2">ACCOUNT INFORMATION</p>
          <p id="account-content-text3"></p>
          <p id="account-content-text4">CONTACT INFORMATION</p>
          <p id="account-content-text5">abhilash subhash</p>
          <p id="account-content-text6">abhilashsubhash12345@gmail.com</p>
          <p id="account-content-text7">ADDRESS BOOK</p>
          <p id="account-content-text0"></p>

          <p id="account-content-text8">DEFAULT BILLING ADDRESS</p>
          <p id="account-content-text9">
            You have not set a default billing address.
          </p>
          <p id="account-content-text10">Edit Address</p>
          <p id="account-content-text11">DEFAULT SHIPPING ADDRESS</p>
          <p id="account-content-text12">
            You have not set a default shipping address.
          </p>

          <p id="account-content-text13">Edit Address</p>
          
        </div>

        <div className="account-footer">
          <p id="account-footer-text1"></p>
          <p id="account-footer-text2">Let us reach you</p>
          <input
            type="text"
            placeholder="Your E-Mail ID"
            id="account-footer-input"
          />
          <button id="account-footer-button">SUBMIT</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Account;
