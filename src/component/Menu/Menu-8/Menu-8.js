import React from "react";
import "./Menu-8.css";

import image1 from "../../../asset/combo-4.png";

import Newnavbar from "../../navbar/Newnavbar";
import Footer from "../../Footer/footer";
import Menucarousel from "../Carousel/Menucarousel";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
// import { TbCircleArrowDown } from "react-icons/tb";

const Menu8 = () => {
  return (
    <div className="menu-8-bg">
      <Newnavbar customClassName="meun8-navbar-bg" />

      <div className="menu8-home-bg">
        <img src={image1} alt="" />
      </div>

      <Menucarousel />

      <div className="menu8-heading">
        <p>value combo</p>
      </div>

      <div className="menu8-item-bag">
        <div className="menu8-item-bag-1">
          <div className="menu8-item-1">
            <div className="menu8-item-part-1">
              <p id="menu8-item-bag-heading">Combo 1: Sunset Sampler</p>

              <p id="menu8-increment">
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

            <div className="menu8-item-part-2">
              <ul className="ul-1">
                <li>
                  Choice of Starter:
                  <ul className="inner-list extra-space">
                    <li> Crispy Vegetable Spring Rolls</li>
                    <li>Chicken Satay Skewers </li>
                  </ul>
                </li>
                <li>
                  Main Course:
                  <ul className="inner-list extra-space">
                    <li>Vegetable Pad Thai</li>
                    <li>Chicken Tikka Masala</li>
                  </ul>
                </li>
                <li>
                  Side Dish:
                  <ul className="inner-list">
                    <li>Garlic Parmesan Fries</li>
                  </ul>
                </li>
                <li>
                  Beverage:
                  <ul className="inner-list">
                    <li>Soft Drink or Iced Tea</li>
                  </ul>
                </li>
              </ul>
              <br />
              <p id="rate">570/-</p>
            </div>
          </div>

          <p id="menu8-line"></p>

          <div className="menu8-item-2">
            <div className="menu8-item-part-1">
              <p id="menu8-item-bag-heading">Combo 2: Taste of Asia</p>
              <p id="menu8-increment">
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

            <div className="menu8-item-part-2">
              <ul className="ul-2">
                <li>Choice of Starter:</li>
                <li>Prawn Tempura</li>
                <li> Veg Spring Rolls</li>
                <li>Main Course:</li>
                <li>Beef Rendang with Steamed Jasmine Rice</li>
                <li>Thai Basil Chicken with Egg Fried Rice</li>
                <li>Dessert:</li>
                <li>Mango Sticky Rice</li>
                <li>Beverage:</li>
                <li>Thai Iced Tea or Lemongrass Infusion</li>
              </ul>
              <br />
              <p id="rate">799/-</p>
            </div>
          </div>

          <p id="menu8-line"></p>
        </div>

        <div className="menu8-item-bag-2">
          <div className="menu8-item-1">
            <div className="menu8-item-part-1">
              <p id="menu8-item-bag-heading">Combo 3: Vegetarian Delight</p>
              <p id="menu8-increment">
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

            <div className="menu8-item-part-2">
              <ul className="ul-1">
                <li>
                  Starter:
                  <ul className="inner-list">
                    <li>Caprese Salad</li>
                  </ul>
                </li>
                <li>
                  Main Course:
                  <ul className="inner-list">
                    <li>Paneer Tikka Masala with Garlic Naan</li>
                  </ul>
                </li>
                <li>
                  Side Dish:
                  <ul className="inner-list">
                    <li>Cumin-Spiced Roasted Potatoes</li>
                  </ul>
                </li>
                <li>
                  Dessert:
                  <ul className="inner-list">
                    <li>Lemon Meringue Tart</li>
                  </ul>
                </li>
                <li>
                  {" "}
                  Beverage:
                  <ul className="inner-list">
                    <li>Fresh Lime Soda</li>
                  </ul>
                </li>
              </ul>

              <br />
              <p id="rate">570/-</p>
            </div>
          </div>
          <p id="menu8-line"></p>

          <div className="menu8-item-2">
            <div className="menu8-item-part-1">
              <p id="menu8-item-bag-heading">Combo 4: Family Feast</p>
              <p id="menu8-increment">
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

            <div className="menu8-item-part-2">
              <ul className="ul-1">
                <li>
                  Starter:
                  <ul className="inner-list">
                    <li>Caprese Salad</li>
                  </ul>
                </li>
                <li>
                  Main Course:
                  <ul className="inner-list">
                    <li>Paneer Tikka Masala with Garlic Naan</li>
                  </ul>
                </li>
                <li>
                  Side Dish:
                  <ul className="inner-list">
                    <li>Cumin-Spiced Roasted Potatoes</li>
                  </ul>
                </li>
                <li>
                  Dessert:
                  <ul className="inner-list">
                    <li>Lemon Meringue Tart</li>
                  </ul>
                </li>
                <li>
                  {" "}
                  Beverage:
                  <ul className="inner-list">
                    <li>Fresh Lime Soda</li>
                  </ul>
                </li>
              </ul>

              <br />
              <p id="rate">799/-</p>
            </div>
          </div>

          <p id="menu8-line"></p>
        </div>

        
      </div>

      {/*
      <div class="icon">
        <span>
          <TbCircleArrowDown />
        </span>
      </div> */}

      <Footer />
    </div>
  );
};

export default Menu8;
