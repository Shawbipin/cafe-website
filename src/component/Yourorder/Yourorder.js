import React from "react";
import "./yourorder.css";

import Navbarnew from "../navbar/Navbarnew";
import Footer from "../Footer/footer";
import Sidenavbar from "../navbar/Sidenavbar";

import image1 from "../../asset/order-cloud.png";
import image2 from "../../asset/burger.jpg";
import image3 from "../../asset/sandwich.jpg";
import image4 from "../../asset/sandwich 2.jpg";

const Yourorder = () => {
  return (
    <>
      <div className="yourorder-bg">
        <Navbarnew />

        <div className="order-sidenavbar">
          <Sidenavbar />
        </div>

        <div className="order-content-1">
          <p id="order-content-1-text1">Your Order</p>

          <p id="order-content-1-text2"></p>

          <div className="order-content-1-part1">
            <img src={image1} alt="" />
            <p id="order-content-1-text3">
              seems like you have yet to place an order
            </p>
          </div>

          <p id="order-content-1-text4">Order History</p>
          <p id="order-content-1-text5"> </p>

          <div className="order-content-3">
            <div className="order-content-3-part1">
              <img src={image2} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Bombay Masala Sandwich</p>
              <p id="order-content-3-part1-text2">Data: 02-01-24 12:14pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>

             <div className="order-content-3-part2">
              <img src={image3} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Burger</p>
              <p id="order-content-3-part1-text2">Data: 01-01-24 1:40pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>

           <div className="order-content-3-part3">
              <img src={image4} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Corn Sandwich</p>
              <p id="order-content-3-part1-text2">Data:20-12-23 1:04pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>
            <div className="order-content-3-part4">
              {" "}
              <img src={image2} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Bombay Masala Sandwich</p>
              <p id="order-content-3-part1-text2">Data: 02-01-24 12:14pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>
            <div className="order-content-3-part5">
              <img src={image3} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Bombay Masala Sandwich</p>
              <p id="order-content-3-part1-text2">Data: 02-01-24 12:14pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>
            <div className="order-content-3-part6">
              <img src={image4} alt="" id="order-content-3-part1-img1" />
              <p id="order-content-3-part1-text1">Bombay Masala Sandwich</p>
              <p id="order-content-3-part1-text2">Data: 02-01-24 12:14pm</p>
              <p id="order-content-3-part1-text3">Payment: UPI</p>
            </div>
          </div>
          
        </div>

        <div className="order-footer">
          <p id="order-footer-text1"></p>
          <p id="order-footer-text2">Let us reach you</p>
          <input
            type="text"
            placeholder="Your E-Mail ID"
            id="order-footer-input"
          />
          <button id="order-footer-button">SUBMIT</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Yourorder;
