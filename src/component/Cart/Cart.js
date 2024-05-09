import React from "react";
import "./cart.css";

import Footer from "../Footer/footer";
import Navbarnew from "../navbar/Navbarnew";

import image1 from "../../asset/sandwich.jpg";
import image2 from "../../asset/Seekh.jpg";
import image3 from "../../asset/Vadapav.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";

import CartProduct from "./CartProduct";
import { CartproductData, Cartresponsive, Cartresponsive1 } from "./Cartdata";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Cart = () => {
  
  const cartproduct = CartproductData.map((item) => (
    <CartProduct name={item.name} url={item.imageurl} />
  ));


  return (

    <div className="cart-bg">
      <Navbarnew />

      <div className="cart-content-1">

        <div className="cart-content-1-left">
          <p id="cart-content-1-left-heading1">
             3 Items selected
          </p>

          <p id="cart-content-1-left-heading2">
            Explore Menu
          </p>

          <div className="left-content-1">
            <img src={image1} alt="" />
            <p id="left-content-1-text1">Bombay Masala Grilled Cheese</p>
            <p id="left-content-1-text2">
              A delightful plant-based option with a savory patty crafted from
              vegetables and onions, promising a deliciously satisfying bite.
            </p>

            <div className="left-content-1-right-part">
              <p id="left-content-1-right-part-text1">Rs. 40</p>

              <div className="left-content-1-right-part-icons">
                <p id="left-content-1-right-part-icons-text1">
                  {" "}
                  <RiDeleteBin6Line />
                </p>
                <p id="left-content-1-right-part-icons-text2">1</p>
                <p id="left-content-1-right-part-icons-text3">
                  <IoIosAddCircleOutline />
                </p>
              </div>
            </div>
          </div>

          <div className="left-content-2">
            <img src={image2} alt="" />
            <p id="left-content-2-text1">Chicken Seekh Kebab SANDWICH</p>
            <p id="left-content-2-text2">
              A classic favorite featuring tender slices of turkey nestled
              between soft bread, offering a comforting and fulfilling meal
              option.
            </p>
            <div className="left-content-1-right-part">
              <p id="left-content-1-right-part-text1">Rs. 40</p>

              <div className="left-content-2-right-part-icons">
                <p id="left-content-2-right-part-icons-text1">
                  {" "}
                  <RiDeleteBin6Line />
                </p>
                <p id="left-content-2-right-part-icons-text2">1</p>
                <p id="left-content-2-right-part-icons-text3">
                  <IoIosAddCircleOutline />
                </p>
              </div>
            </div>
          </div>

          <div className="left-content-3">
            <img src={image3} alt="" />
            <p id="left-content-3-text1">Chicken Seekh Kebab SANDWICH</p>
            <p id="left-content-3-text2">
              A classic favorite featuring tender slices of turkey nestled
              between soft bread, offering a comforting and fulfilling meal
              option.
            </p>

            <div className="left-content-1-right-part">
              <p id="left-content-1-right-part-text1">Rs. 40</p>
              <div className="left-content-1-right-part-icons">
                <p id="left-content-1-right-part-icons-text1">
                  {" "}
                  <RiDeleteBin6Line />
                </p>
                <p id="left-content-1-right-part-icons-text2">1</p>
                <p id="left-content-1-right-part-icons-text3">
                  <IoIosAddCircleOutline />
                </p>
              </div>
            </div>
          </div>

          <div className="cart-content-1-left-carousel">
            <p>Complete your meal with </p>

            <Carousel responsive={Cartresponsive1}>{cartproduct}</Carousel>
          </div>
        </div>

        <div className="cart-content-1-right">
          <p id="cart-content-1-right-heading">Choose a delivery address</p>
          <div className="right-content-1">
            <p id="right-content-1-text1">Current Address</p>
            <p id="right-content-1-text2">Samta Colony, Raipur</p>
            <p id="right-content-1-text3"> Change</p>

            <p id="right-content-1-text4"></p>

            <p id="right-content-1-text5">Login to use your saved addresses</p>
            <p id="right-content-1-text6">My Address</p>
          </div>

          <p id="right-content-middle-text1">Offers</p>
          <div className="right-content-2">
            <p id="right-content-2-text1">Select offer / Apply coupon</p>
            <p id="right-content-2-text2">Get discount with your order</p>
            <p id="right-content-2-text3">
              <FaGreaterThan />
            </p>
          </div>

          <p id="right-content-middle1-text1">Price Details</p>

          <div className="right-content-3">
            <p id="right-content-3-text1">Sub Total &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 190</p>
            <p id="right-content-3-text2">Discount &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -</p>
            <p id="right-content-3-text3">Taxes and Charges &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 32.2</p>
            <p id="right-content-3-text4"> </p>
            <p id="right-content-3-text5">Grand Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 222.2</p>
            <button>Place Order</button>         
          </div>


        </div>

      </div>

      <div className="cart-content-3">
        <p>Recently ordered</p>

        <Carousel responsive={Cartresponsive}>{cartproduct}</Carousel>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
