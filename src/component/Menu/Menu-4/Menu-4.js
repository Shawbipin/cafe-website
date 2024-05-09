import React from "react";
import "./Menu-4.css";

import image1 from "../../../asset/menu-4-bg.jpeg";

import image2 from "../../../asset/mob-29.png";
import image3 from "../../../asset/mob-30.png";
import image4 from "../../../asset/mob-31.png";
import image5 from "../../../asset/mob-32.png";
import image6 from "../../../asset/mob-33.png";
import image7 from "../../../asset/mob-34.png";
import image8 from "../../../asset/mob-35.png";
import image9 from "../../../asset/mob-36.png";
import image10 from "../../../asset/mob-37.png";




import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";

import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";


const Menu4 = () => {
  return (
    <div className="menu4-bg">
      <Newnavbar customClassName="meun4-navbar-bg" />

      <div className="menu4-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu4-heading">
        <div className="menu4-heading-1">
          <p>Café Sunset Sides Selection</p>
        </div>
      </div>

      <div className="moblie-menu4-heading-1">
        <p>Sides</p>
      </div>

      <div className="menu4-item-bag">

        <div className="menu4-item-bag-1">

          <div className="menu4-item-1">

            <p id="menu4-item-bag-heading">
              Garlic Parmesan Fries
              <br />
              <span>179/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image2} alt="" />
            </div>

            <button id="menu4-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}

            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>

            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu4-line"></p>

          <div className="menu4-item-2">
            <p id="menu4-item-bag-heading">
              Grilled Seasonal Vegetables
              <br />
              <span>99/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image3} alt="" />
            </div>

            <button id="menu4-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>


          <div className="menu4-item-3">
            <p id="menu4-item-bag-heading">
              Cumin-Spiced Roasted Potatoes
              <br />
              <span>189/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image4} alt="" />
            </div>

            <button id="menu4-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}


            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>

          <div className="menu4-item-4">
            <p id="menu4-item-bag-heading">
              Sesame Ginger Glazed Green Beans
              <br />
              <span>119/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image5} alt="" />
            </div>


            <button id="menu4-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>

          <div className="menu4-item-5">
            <p id="menu4-item-bag-heading">
              Honey Sriracha Chicken Wings
              <br />
              <span>109/-</span>
            </p>
            <div className="menu4-item-img">
              <img src={image6} alt="" />
            </div>
          
            <button id="menu4-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>

          <div className="menu4-item-6">
            <p id="menu4-item-bag-heading">
              Crispy Calamari Rings
              <br />
              <span>119/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image7} alt="" />
            </div>
           
           
            <button id="menu4-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>

          <div className="menu4-item-6">
            <p id="menu4-item-bag-heading">
              {" "}
              Fish Tikka Tacos
              <br />
              <span>139/-</span>
            </p>

            <div className="menu4-item-img">
              <img src={image8} alt="" />
            </div>
         
         
            <button id="menu4-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu4-line"></p>

        </div>

        <div className="menu4-item-bag-2">

          <div className="menu4-heading-3">
            <p>Indulgent Add-Ons</p>
          </div>

          <div className="menu4-item-1">

            <p id="menu4-item-bag-heading">
              Truffle Parmesan Fries
              <br />
              <span>119/-</span>
            </p>


            <div className="menu4-item-img">
              <img src={image9} alt="" />
            </div>

            <button id="menu4-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}

            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu4-line"></p>

          <div className="menu4-item-1">
            <p id="menu4-item-bag-heading">
              Loaded Potato Skins
              <br />
              <span>119/-</span>
            </p>

            <div classNameName="menu4-item-img">
              <img src={image10} alt="" />
            </div>

            <button id="menu4-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
           
            <p id="menu4-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu4-line"></p>

        </div>

      </div>

      <div className="icon">
        <span>
          <TbCircleArrowDown />
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default Menu4;


