import React from "react";
import "./Menu-3.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";

import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";

import image1 from "../../../asset/menu-3bg.jpeg";

import image2 from "../../../asset/mob-3.jpeg";
import image3 from "../../../asset/mob-4.png";
import image4 from "../../../asset/mob-5.jpeg";
import image5 from "../../../asset/mob-6.jpeg";
import image6 from "../../../asset/mob-7.jpeg";
import image7 from "../../../asset/mob-8.jpeg";
import image8 from "../../../asset/mob-9.jpeg";
import image9 from "../../../asset/mob-10.jpeg";
import image10 from "../../../asset/mob-11.jpeg";

const Menu3 = () => {
  return (
    <div className="menu3-bg">
      <Newnavbar customClassName="meun3-navbar-bg" />

      <div className="menu3-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu3-heading">
        <div className="menu3-heading-1">
          <p>STARTERS</p>
        </div>

        <div className="menu3-heading-2">
          <p>Mouthwatering Combos</p>
        </div>
      </div>

      <div className="moblie-menu3-heading-1">
        <p>STARTERS</p>
      </div>

      <div className="menu3-item-bag">

        <div className="menu3-item-bag-1">

          <div className="menu3-item-1">
            <p id="menu3-item-bag-heading">Crispy Vegetable Spring Rolls</p>
            <p id="menu3-price">210/-</p>

            <div className="menu3-item-img">
              <img src={image2} alt="" />
            </div>

            <button id="menu3veg">
              <span>
                <FaCircle />
              </span>
            </button>

            <p id="menu3-increment">
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

          <p id="menu3-line"></p>

          <div className="menu3-item-2">
            <p id="menu3-item-bag-heading">Paneer Tikka Skewers</p>
            <p id="menu3-price">210/-</p>

            <div className="menu3-item-img">
              <img src={image3} alt="" />
            </div>

            <button id="menu3veg">
              <span>
                <FaCircle />
              </span>
            </button>
            <p id="menu3-increment">
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
          <p id="menu3-line"></p>

          <div className="menu3-item-3">
            <p id="menu3-item-bag-heading">
              Stuffed Mushrooms with Spinach and Feta
            </p>

            <p id="menu3-price">210/-</p>

            <div className="menu3-item-img">
              <img src={image4} alt="" />
            </div>

            <button id="menu3veg">
              <span>
                <FaCircle />
              </span>
            </button>
            <p id="menu3-increment">
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
          <p id="menu3-line"></p>

          <div className="menu3-item-4">
            <p id="menu3-item-bag-heading">Corn and Cheese Balls</p>
            <p id="menu3-price">199/-</p>
            <div className="menu3-item-img">
              <img src={image5} alt="" />
            </div>
            <button id="menu3veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
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
          <p id="menu3-line"></p>

          <div className="menu3-item-5">
            <p id="menu3-item-bag-heading">Chicken Satay with Peanut Sauce </p>
            <p id="menu3-price">210/-</p>
            <div className="menu3-item-img">
              <img src={image6} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu3-line"></p>

          <div className="menu3-item-6">
            <p id="menu3-item-bag-heading">Prawn Tempura</p>
            <p id="menu3-price">210/-</p>
            <div className="menu3-item-img">
              <img src={image7} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu3-line"></p>

          <div className="menu3-item-7">
            <p id="menu3-item-bag-heading">Spicy Chicken Wings</p>
            <p id="menu3-price">210/-</p>
            <div className="menu3-item-img">
              <img src={image8} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>
          <p id="menu3-line"></p>

          <div className="menu3-item-8">
            <p id="menu3-item-bag-heading">Fish Tikka Tacos </p>
            <p id="menu3-price">210/-</p>
            <div className="menu3-item-img">
              <img src={image9} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu3-line"></p>

        </div>

        <div className="moblie-menu3-heading-2">
          <p>Mouthwatering Combos</p>
        </div>

        <div className="menu3-item-bag-2">

          <div className="menu3-item-1">
            <p id="menu3-item-bag-heading">Vegetarian Platter</p>
            <p id="menu3-price">450/-</p>
            <div className="menu3-item-img">
              <img src={image10} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu3-line"></p>

          <div className="menu3-item-2">
            <p id="menu3-item-bag-heading">Sunset Signature Sampler</p>
            <p id="menu3-price">190/-</p>
            <div className="menu3-item-img">
              <img src={image9} alt="" />
            </div>
            <button id="menu3non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}
            <p id="menu3-increment">
              <span>
                <FiPlus />
              </span>{" "}
              1{" "}
              <span>
                <FiMinus />
              </span>{" "}
            </p>
            <button id="add-btn">ADD +</button>
          </div>

          <p id="menu3-line"></p>

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

export default Menu3;
