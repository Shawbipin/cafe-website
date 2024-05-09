import React from "react";
import "./Menu-7.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";
import image1 from "../../../asset/menu-7-bg.jpeg";

import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";

import image2 from "../../../asset/main-1.png";
import image3 from "../../../asset/main-2.jpeg";
import image4 from "../../../asset/main-3.png";
import image5 from "../../../asset/main-4.png";
import image6 from "../../../asset/main-5.png";
import image7 from "../../../asset/main-6.png";
// import image8 from "../../../asset/main-7.png";
import image9 from "../../../asset/main-8.png";
import image10 from "../../../asset/main-9.png";

const Menu7 = () => {
  return (
    <div className="menu-7-bg">
      <Newnavbar customClassName="meun7-navbar-bg" />

      <div className="menu7-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu7-heading">
        <div className="menu7-heading-1">
          <p>MAIN COURSE</p>
        </div>

        <div className="menu7-heading-2">
          <p>Pasta and Risotto</p>
        </div>
      </div>

      <div className="menu7-item-bag">

        <div className="menu7-item-bag-1">

          <div className="menu7-item-1">
            <p id="menu7-item-bag-heading">
              Vegetable Pad Thai
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image2} alt="" />
            </div>

            <p id="menu7-increment">
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

          <p id="menu7-line"> </p>

           <div className="menu7-item-2">
            <p id="menu7-item-bag-heading">
              Paneer Makhani
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image3} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>
          <div className="menu7-item-3">
            <p id="menu7-item-bag-heading">
              Vegetable Biryani
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image4} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>



          <div className="menu7-item-4">
            <p id="menu7-item-bag-heading">
              Eggplant Parmesan
              <br />
              <span>149/-</span>
            </p>
            <button id="menu7-non-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image5} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>



          <div className="menu7-item-5">
            <p id="menu7-item-bag-heading">
              Chicken Tikka Masala
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-non-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image6} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>

          <div className="menu7-item-6">
            <p id="menu7-item-bag-heading">
              Grilled Salmon with Lemon Herb Butter
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-non-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>
            <div className="menu7-item-img">
              <img src={image7} alt="" />
            </div>
            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>
 {/*

          <div class="menu7-item-7">
            <p id="menu7-item-bag-heading">
              Fish Tikka Tacos
              <br />
              <span>149/-</span>
            </p>

            <button id="menu7-non-veg">
              <span>
                <FaCircle />
              </span>{" "}
            </button>

            <div className="menu7-item-img">
              <img src={image8} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"> </p>  */}

        </div>

        <div className="menu7-item-bag-2">
         
          <div className="menu7-item-1">
            <p id="menu7-item-bag-heading">
              Penne Arrabbiata
              <br />
              <span>149/-</span>
            </p>

            <div className="menu7-item-img extra7">
              <img src={image9} alt="" />
            </div>

            <p id="menu7-increment">
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

          <p id="menu7-line">
          </p>

          <div className="menu7-item-2">
            <p id="menu7-item-bag-heading">
              {" "}
              Mushroom Risotto
              <br />
              <span>149/-</span>
            </p>

            <div className="menu7-item-img extra7">
              <img src={image10} alt="" />
            </div>

            <p id="menu7-increment">
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
          <p id="menu7-line"></p>
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

export default Menu7;
