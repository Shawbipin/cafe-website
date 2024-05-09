import React from "react";
import "./Menu-5.css";

import image1 from "../../../asset/menu-5-bg.jpeg";

import image2 from "../../../asset/mob-38.jpeg";
import image3 from "../../../asset/mob-39.jpeg";
import image4 from "../../../asset/mob-40.png";
import image5 from "../../../asset/mob-41.png";
import image6 from "../../../asset/mob-42.png";
import image7 from "../../../asset/mob-43.png";
import image8 from "../../../asset/mob-44.jpeg";

import image9 from "../../../asset/mob-45.png";
import image10 from "../../../asset/mob-46.jpeg";
import image11 from "../../../asset/mob-47.jpeg";



import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";

import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";



const Menu5 = () => {
  return (
    <div className="menu-5-bg">
      
      <Newnavbar customClassName="meun5-navbar-bg"/>

      <div class="menu5-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />


      <div className="moblie-heading-1">
        <p>SALADS</p>
      </div>

      <div class="menu5-item-bag">

        <div class="menu5-item-bag-1">

          <div class="menu5-item-1">

            <p id="menu5-item-bag-heading">
              Classic Caesar Salad
              <br />
              <span>179/-</span>
            </p>

            <button id="menu5-veg">
              <span>
                <FaCircle />
              </span>
            </button>

            <div className="menu5-item-img">
              <img src={image2} alt="" />
            </div>

            <p id="menu5-increment">
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

            <p id="menu5-line"></p>


           <div class="menu5-item-2">
            <p id="menu5-item-bag-heading">
              Mediterranean Chickpea Salad
              <br />
              <span>99/-</span>
            </p>


            <button id="menu5-veg">
              <span>
                <FaCircle />
              </span>
            </button>


            <div className="menu5-item-img">
              <img src={image3} alt="" />
            </div>

            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-3">
            <p id="menu5-item-bag-heading">
              Asian Sesame Noodle Salad
              <br />
              <span>189/-</span>
            </p>
            <button id="menu5-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}


            <div className="menu5-item-img">
              <img src={image4} alt="" />
            </div>


            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-4">
            <p id="menu5-item-bag-heading">
              Summer Berry Spinach Salad
              <br />
              <span>119/-</span>
            </p>
            <button id="menu5-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}


            <div className="menu5-item-img">
              <img src={image5} alt="" />
            </div>


            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-5">
            <p id="menu5-item-bag-heading">
              Grilled Chicken Avocado Salad
              <br />
              <span>109/-</span>
            </p>
            <button id="menu5-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}


            <div className="menu5-item-img">
              <img src={image6} alt="" />
            </div>


            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-6">
            <p id="menu5-item-bag-heading">
              Shrimp and Mango Salad (Mango Substitute Available)
              <br />
              <span>119/-</span>
            </p>
            <button id="menu5-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}

            <div className="menu5-item-img">
              <img src={image7} alt="" />
            </div>

            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-6">
            <p id="menu5-item-bag-heading">
              Tuna Nicoise Salad
              <br />
              <span>139/-</span>
            </p>
            <button id="menu5-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}

            <div className="menu5-item-img">
              <img src={image8} alt="" />
            </div>


            <p id="menu5-increment">
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

          <p id="menu5-line"></p>

          <div class="menu5-item-6">
            <p id="menu5-item-bag-heading">
              Thai Beef Salad
              <br />
              <span>139/-</span>
            </p>
            <button id="menu5-non-veg">
              <span>
                <FaCircle />
              </span>
            </button>{" "}


            <div className="menu5-item-img">
              <img src={image9} alt="" />
            </div>


            <p id="menu5-increment">
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

          <p id="menu5-line"></p>


        </div>

        <div class="menu5-item-bag-2">

          <div class="menu5-heading-3">
            <p>Enhancements</p>
          </div>

          <div class="menu5-item-1 extra">
            <p id="menu5-item-bag-heading">
              Protein Add-Ons <br />
              Description: Customize your salad with additional grilled chicken
              shrimp, salmon, or tofu for an extra protein boost.
              <br />
              <span>119/-</span>
            </p>

            <div className="menu5-item-img">
              <img src={image10} alt="" />
            </div>

            <p id="menu5-increment">
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
          <p id="menu5-line"></p>

          <div class="menu5-item-1 extra">
            <p id="menu5-item-bag-heading">
              {" "}
              Gluten-Free Options Available <br />
              Description: Ask your server for gluten-free alternatives for
              select salads.
              <br />
              <span>119/-</span>
            </p>

            <div className="menu5-item-img">
              <img src={image11} alt="" />
            </div>

            <p id="menu5-increment">
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
          <p id="menu5-line"></p>


        </div>
        
      </div>

      <div class="icon">
        <span>
          <TbCircleArrowDown />
        </span>
      </div>

      <Footer />
    </div>
  );
};

export default Menu5;
