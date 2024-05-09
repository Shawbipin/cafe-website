import React from "react";
import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";

import "./Menu-1.css";
import image1 from "../../../asset/bg-mennu-1.jpg";

import image2 from "../../../asset/mob-14.png";
import image3 from "../../../asset/mob-15.png";
import image4 from "../../../asset/mob-16.png";
import image5 from "../../../asset/mob-17.png";
import image6 from "../../../asset/mob-18.png";
import image7 from "../../../asset/mob-19.png";

import image8 from "../../../asset/mob-20.png";
import image9 from "../../../asset/mob-21.png";
import image10 from "../../../asset/mob-22.png";
import image11 from "../../../asset/mob-23.png";
import image12 from "../../../asset/mob-24.png";
import image13 from "../../../asset/mob-25.png";

import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";

import Menucarousel from "../Carousel/Menucarousel";

const Menu1 = () => {

  return (
    <>
      <div className="menu-1-bg">


        <div className="menu1navbar-bg">
          <Newnavbar />
        </div>


        <div className="menu-1-home-bg">
          <img src={image1} alt="" />
        </div>

        <Menucarousel />

        <div className="menu1-heading">
          <div class="heading-1">
            <p id="p-tag">BURGERS</p>

            <button id="menu1-veg-heading">
              <span>
                <FaCircle />
              </span>
            </button>

            <span id="forw-slash">&#47;</span>

            <button id="menu1-nonveg-heading">
              <span>
                <FaCircle />{" "}
              </span>
            </button>
          </div>

          <div class="heading-2">
            <p>SANDWICHES</p>

            <button id="menu1-veg-heading">
              <span>
                <FaCircle />
              </span>
            </button>

            <span id="forw-slash">&#47;</span>
            <button id="menu1-nonveg-heading">
              <span>
                <FaCircle />{" "}
              </span>
            </button>
          </div>
        </div>



        <div className="item-bag">
          <div className="item-bag-1">

            <div class="item1">
              <p id="menu1-item-bag-heading">Tandoori Chicken Tikka Burger</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image2} alt="" />
              </div>

              <p id="menu1-increment">
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

            <p id="menu1-line"></p>

            <div class="item2">
              <p id="menu1-item-bag-heading">Aloo Tikki Burger</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image3} alt="" />
              </div>

              <p id="menu1-increment">
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
            <p id="menu1-line"></p>

            <div class="item3">
              <p id="menu1-item-bag-heading">Egg Bhurji Breakfast Burger</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-veg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img-extra">
                <img src={image4} alt="" />
              </div>

              <p id="menu1-increment-extra">
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
            <p id="menu1-line"></p>

            <div class="item4">
              <p id="menu1-item-bag-heading">Keema Pav Burger</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image5} alt="" />
              </div>
              <p id="menu1-increment">
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

            <p id="menu1-line"></p>

            <div class="item5">
              <p id="menu1-item-bag-heading">Palak Paneer Burger</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image6} alt="" />
              </div>
              <p id="menu1-increment">
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

            <p id="menu1-line"></p>

            <div class="item6">
              <p id="menu1-item-bag-heading">Veg Seekh Kebab Sub</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-veg">
                <span>
                  <FaCircle />
                </span>
              </button>
              <div className="menu1-item-img-extra">
                <img src={image7} alt="" />
              </div>

              <p id="menu1-increment">
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

            <p id="menu1-line"></p>

          </div>


          <div className="item-bag-2">

            <div className="item1">
              <p id="menu1-item-bag-heading">Bombay Masala Grilled Cheese</p>
              <p id="menu1-price">210/-</p>

              <button id="menu1-veg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img-extra">
                <img src={image8} alt="" />
              </div>

              <p id="menu1-increment-extra">
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

            <p id="menu1-line"></p>

            <div className="item2">
              <p id="menu1-item-bag-heading">Chicken Seekh Kebab SANDWICH</p>
              <p id="menu1-price">150/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image9} alt="" />
              </div>

              <p id="menu1-increment">
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

            <p id="menu1-line"></p>

            <div className="item3">
              <p id="menu1-item-bag-heading">Mumbai Vada Pav</p>

              <p id="menu1-price">350/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image10} alt="" />
              </div>

              <p id="menu1-increment">
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
            <p id="menu1-line"></p>

            <div className="item4">
              <p id="menu1-item-bag-heading">Butter Chicken Naanwich</p>

              <p id="menu1-price">290/-</p>
              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image11} alt="" />
              </div>
              <p id="menu1-increment">
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
            <p id="menu1-line"></p>

            <div className="item5">
              <p id="menu1-item-bag-heading">Masala Grilled Fish Sandwich</p>
              <p id="menu1-price">290/-</p>

              <button id="menu1-nonveg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img">
                <img src={image12} alt="" />
              </div>
              <p id="menu1-increment">
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
            <p id="menu1-line"></p>

            <div className="item6">
              <p id="menu1-item-bag-heading">Veg Seekh Kebab Sub</p>
              <p id="menu1-price">290/-</p>

              <button id="menu1-veg">
                <span>
                  <FaCircle />
                </span>
              </button>

              <div className="menu1-item-img-extra">
                <img src={image13} alt="" />
              </div>

              <p id="menu1-increment-extra">
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

            <p id="menu1-line"></p>


          </div>
        </div>

        <div className="menu1-icon">
          <span>
            <TbCircleArrowDown />
          </span>
        </div>

          <Footer />

      </div>
    </>
  );
};

export default Menu1;
