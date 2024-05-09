import React from "react";
import "./Menu-6.css";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";
import image1 from "../../../asset/menu-6-bg.jpeg";

// import { FaCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbCircleArrowDown } from "react-icons/tb";

import image2 from "../../../asset/ice-1.png";
import image3 from "../../../asset/ice-2.jpeg";
import image4 from "../../../asset/ice-3.jpeg";
import image5 from "../../../asset/ice-4.png";
import image6 from "../../../asset/ice-5.jpeg";
import image7 from "../../../asset/ice-6.jpeg";
import image8 from "../../../asset/ice-7.jpeg";
import image9 from "../../../asset/ice-8.jpeg";
import image10 from "../../../asset/ice-9.jpeg";
import image11 from "../../../asset/ice-10.jpeg";

const Menu6 = () => {
  return (
    
    <div className="menu-6-bg">
      <Newnavbar customClassName="meun6-navbar-bg" />

      <div className="menu6-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu6-heading">
        <div className="menu6-heading-1">
          <p>Desserts</p>
        </div>
        <div className="menu6-heading-2">
          <p>Desserts & Sundaes</p>
        </div>
      </div>

      <div className="menu6-item-bag">
        <div className="menu6-item-bag-1">
          <div className="menu6-item-1">
            <p id="menu6-item-bag-heading">
              Classic new york cheesecake
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image2} alt="" />
            </div>

            <p id="menu6-increment">
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

          <p id="menu6-line"></p>

          <div className="menu6-item-2">
            <p id="menu6-item-bag-heading">
              Molten chocolate laya cake
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image3} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-3">
            <p id="menu6-item-bag-heading">
              Tiramisu
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image4} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-4">
            <p id="menu6-item-bag-heading">
              Lemon Maeringue tart
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image5} alt="" />
            </div>

            <p id="menu6-increment">
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

          <p id="menu6-line"></p>

        </div>

        <div className="menu6-item-bag-2">
          <div className="menu6-item-1">
            <p id="menu6-item-bag-heading">
              {" "}
              Vanilla Bean
              <br />
              <span>149/-</span>
            </p>
            <div className="menu6-item-img">
              <img src={image6} alt="" />
            </div>
            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-2">
            <p id="menu6-item-bag-heading">
              {" "}
              Chocolate Fudge br/ownie
              <br />
              <span>149/-</span>
            </p>
            <div className="menu6-item-img">
              <img src={image7} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-3">
            <p id="menu6-item-bag-heading">
              {" "}
              Mango Sorbet
              <br />
              <span>139/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image8} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-4">
            <p id="menu6-item-bag-heading">
              {" "}
              Strawberry Swirl
              <br />
              <span>139/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image9} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-5">
            <p id="menu6-item-bag-heading">
              {" "}
              Banana Split
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image10} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

          <div className="menu6-item-6">
            <p id="menu6-item-bag-heading">
              {" "}
              Caramel Crunch Sundae
              <br />
              <span>149/-</span>
            </p>

            <div className="menu6-item-img">
              <img src={image11} alt="" />
            </div>

            <p id="menu6-increment">
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
          <p id="menu6-line"></p>

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

export default Menu6;
